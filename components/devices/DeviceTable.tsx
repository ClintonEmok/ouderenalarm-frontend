"use client";
import { Device } from "@/lib/interface";
import { useRouter } from "next/navigation";
import React from "react";
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

interface DeviceTableProps {
  data: Device[];
}

const DeviceTable = ({ data }: DeviceTableProps) => {
  const router = useRouter();

  const columnHeadersArray: Array<keyof Device> = [
    "DeviceID",
    "AlarmCode",
    "latitude",
    "longitude",
    "mapslink",
    "TelefoonnummerDevice",
    "Batterijpercentage",
  ];

  const columnHelper = createColumnHelper<Device>();
  const columns = columnHeadersArray.map((columnName) => {
    return columnHelper.accessor(columnName, {
      id: columnName,
      header: columnName[0].toUpperCase() + columnName.slice(1),
    });
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
          {table.getRowModel().rows.map((row, rowIndex) => (
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
