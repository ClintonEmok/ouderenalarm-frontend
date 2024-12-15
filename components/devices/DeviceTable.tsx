"use client";

import React from "react";

import { Device } from "@/lib/interface";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetDevicesQuery } from "@/state/api";

const DeviceTable = () => {
  const { data: devices = [], isLoading, isError } = useGetDevicesQuery();
  console.log(devices);

  // Columns to be displayed, mapped to the updated snake_case Device interface
  const columnHeadersArray: Array<keyof Device> = [
    "id",
    "user_id",
    "alarm_code",
    "maps_link",
    "phone_number",
    "battery_percentage",
  ];

  const columnHelper = createColumnHelper<Device>();

  const columns = columnHeadersArray.map((columnName) => {
    return columnHelper.accessor(columnName, {
      id: columnName,
      header: formatHeader(columnName),
      cell: (info) => {
        // Handle nested properties like 'location.latitude' & 'location.longitude'
        if (columnName === "location" && info.getValue()) {
          const location = info.getValue() as Device["location"];
          return `Lat: ${location.latitude}, Long: ${location.longitude}`;
        }
        if (
          typeof info.getValue() === "string" ||
          typeof info.getValue() === "number"
        ) {
          return info.getValue();
        }
        return info.getValue() ?? "-";
      },
    });
  });

  const table = useReactTable({
    data: devices,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-700">Loading devices...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-red-600">
          Failed to load devices. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <Table className="border-collapse w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="bg-gray-100 text-gray-800 uppercase text-sm"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="py-4 px-6 text-left font-semibold border-b border-gray-200"
                  >
                    <div>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={`cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-150`}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="py-5 px-4 text-gray-700 border-b border-gray-200 text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeviceTable;

/**
 * Format the column header to be user-friendly.
 * Converts 'user_id' to 'User Id', 'battery_percentage' to 'Battery Percentage'
 */
const formatHeader = (key: string) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
    .replace(/^[a-z]/, (match) => match.toUpperCase()); // Capitalize first letter
};
