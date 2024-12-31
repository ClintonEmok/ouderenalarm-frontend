"use client";

import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_EditActionButtons,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  useGetCaregiversQuery,
  useInviteCaregiverMutation,
  useDeleteCaregiverMutation,
} from "@/state/api"; // Import RTK Query Hooks
import DeleteIcon from "@mui/icons-material/Delete";
import { Caregiver } from "@/lib/interface"; // Import the Caregiver interface
import { MRT_Localization_NL } from "material-react-table/locales/nl";

const CaregiverTable = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const columns = useMemo<MRT_ColumnDef<Caregiver>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Naam",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.name,
          helperText: validationErrors?.name,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, name: undefined }),
        },
      },
      {
        accessorKey: "email",
        header: "Email",
        muiEditTextFieldProps: {
          required: true,
          type: "email",
          error: !!validationErrors?.email,
          helperText: validationErrors?.email,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, email: undefined }),
        },
      },
    ],
    [validationErrors]
  );

  const { data: caregivers = [], isLoading } = useGetCaregiversQuery();
  const [inviteCaregiver] = useInviteCaregiverMutation();
  const [deleteCaregiver] = useDeleteCaregiverMutation();

  // Handle inviting a caregiver
  const handleInviteCaregiver: MRT_TableOptions<Caregiver>["onCreatingRowSave"] =
    async ({ values, table }) => {
      const newValidationErrors = validateCaregiver(values);
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      await inviteCaregiver({ email: values.email });
      setValidationErrors({});
      table.setCreatingRow(null);
    };

  // Handle deleting a caregiver
  const handleDeleteCaregiver = (row: MRT_Row<Caregiver>) => {
    if (
      window.confirm(
        `Are you sure you want to delete caregiver: ${row.original.name}?`
      )
    ) {
      deleteCaregiver(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    localization: MRT_Localization_NL,
    data: caregivers,
    createDisplayMode: "modal",
    enableEditing: true,
    getRowId: (row) => row.id,
    onCreatingRowSave: handleInviteCaregiver,
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => handleDeleteCaregiver(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant="contained" onClick={() => table.setCreatingRow(true)}>
        Nodig verzorger uit
      </Button>
    ),
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle className="text-sm">Nodig nieuwe verzorger</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    state: {
      isLoading,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default CaregiverTable;

/**
 * Validation function for caregiver inputs.
 */
function validateCaregiver(caregiver: Caregiver) {
  return {
    name: !caregiver.name ? "Name is required" : "",
    email: !caregiver.email
      ? "Email is required"
      : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(caregiver.email)
        ? "Invalid email address"
        : "",
  };
}
