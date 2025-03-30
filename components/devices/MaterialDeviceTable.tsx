"use client";

import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import {
  useGetDevicesQuery,
  useCreateDeviceMutation,
  useUpdateDeviceMutation,
  useDeleteDeviceMutation,
} from "@/state/api"; // Import RTK Query Hooks
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Device } from "@/lib/interface"; // Import the Device interface
import { MRT_Localization_NL } from "material-react-table/locales/nl";
import { toast } from "react-toastify";
// TODO: update modal for creating and editing devices
const MaterialDeviceTable = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const columns = useMemo<MRT_ColumnDef<Device>[]>(
    () => [
      {
        accessorKey: "phone_number",
        header: "Telefoonnummer",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.phone_number,
          helperText: validationErrors?.phone_number,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              phone_number: undefined,
            }),
        },
      },
    ],
    [validationErrors]
  );

  const { data: devices = [], isLoading } = useGetDevicesQuery();
  const [createDevice] = useCreateDeviceMutation();
  const [updateDevice] = useUpdateDeviceMutation();
  const [deleteDevice] = useDeleteDeviceMutation();

  const handleCreateDevice: MRT_TableOptions<Device>["onCreatingRowSave"] =
    async ({ values, table }) => {
      const newValidationErrors = validateDevice(values);
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      await createDevice(values).then(() =>
        toast.success("Apparaat aangemaakt!")
      );
      setValidationErrors({});
      table.setCreatingRow(null);
    };

  const handleSaveDevice: MRT_TableOptions<Device>["onEditingRowSave"] =
    async ({ values, table }) => {
      const newValidationErrors = validateDevice(values);
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      await updateDevice(values).then(() =>
        toast.success("Apparaat bijgewerkt!")
      );
      setValidationErrors({});
      table.setEditingRow(null);
    };

  const handleDeleteDevice = (row: MRT_Row<Device>) => {
    if (
      window.confirm(
        `Weet je zeker dat je het apparaat met ID: ${row.original.id} wilt verwijderen?`
      )
    ) {
      deleteDevice(row.original.id).then(() =>
        toast.success("Apparaat verwijderd!")
      );
    }
  };

  const table = useMaterialReactTable({
    columns,
    localization: MRT_Localization_NL,
    data: devices,
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    getRowId: (row) => row.id,
    onCreatingRowSave: handleCreateDevice,
    onEditingRowSave: handleSaveDevice,
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => handleDeleteDevice(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant="contained" onClick={() => table.setCreatingRow(true)}>
        Voeg apparaat toe
      </Button>
    ),
    state: {
      isLoading,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default MaterialDeviceTable;

/**
 * Validation function for device inputs.
 */
function validateDevice(device: Device) {
  return {
    phone_number: !device.phone_number ? "Phone number is required" : "",
    // alarm_code: !device.alarm_code ? "Alarm code is required" : "",
    // battery_percentage:
    //   device.battery_percentage === undefined ||
    //   device.battery_percentage < 0 ||
    //   device.battery_percentage > 100
    //     ? "Battery percentage must be between 0 and 100"
    //     : "",
  };
}
