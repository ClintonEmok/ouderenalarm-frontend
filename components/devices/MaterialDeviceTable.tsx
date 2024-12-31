"use client";

import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  type MRT_ColumnDef,
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
  useGetDevicesQuery,
  useCreateDeviceMutation,
  useUpdateDeviceMutation,
  useDeleteDeviceMutation,
} from "@/state/api"; // Import RTK Query Hooks
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Device } from "@/lib/interface"; // Import the Device interface
import { MRT_Localization_NL } from "material-react-table/locales/nl";

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
      {
        accessorKey: "alarm_code",
        header: "Alarm Code",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.alarm_code,
          helperText: validationErrors?.alarm_code,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, alarm_code: undefined }),
        },
      },
      {
        accessorKey: "battery_percentage",
        header: "Batterijpercentage",
        muiEditTextFieldProps: {
          required: true,
          type: "number",
          error: !!validationErrors?.battery_percentage,
          helperText: validationErrors?.battery_percentage,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              battery_percentage: undefined,
            }),
        },
      },
      {
        accessorKey: "maps_link",
        header: "Maps Link",
        enableEditing: true,
        size: 200,
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
      await createDevice(values);
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
      await updateDevice(values);
      setValidationErrors({});
      table.setEditingRow(null);
    };

  const handleDeleteDevice = (row: MRT_Row<Device>) => {
    if (
      window.confirm(
        `Are you sure you want to delete device with ID: ${row.original.id}?`
      )
    ) {
      deleteDevice(row.original.id);
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
    alarm_code: !device.alarm_code ? "Alarm code is required" : "",
    battery_percentage:
      device.battery_percentage === undefined ||
      device.battery_percentage < 0 ||
      device.battery_percentage > 100
        ? "Battery percentage must be between 0 and 100"
        : "",
  };
}
