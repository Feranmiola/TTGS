import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props<TData extends object> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
}

const DEFAULT_PAGE_SIZE = 10;

const CustomTable = <TData extends object>({ columns, data }: Props<TData>) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const tableColumns = [...columns];
  tableColumns.unshift({
    header: "",
    cell: () => null,
    enableHiding: false,
  });

  return (
    <div className="rounded-lg shadow-md bg-white">
      <div className="p-3 flex items-center justify-between">
        <Input placeholder="Search..." className="grow" />
        <Button variant={"secondary"} className="ml-auto">
          Add New
        </Button>
      </div>
      <Table>
        <TableHeader>{tableColumns.map((columnDef) => <TableHead key={columnDef.id}>{columnDef.header && flexRender(columnDef.header)}</TableHead>))}</TableHeader>
        <TableBody>{data.slice(0, pageSize).map((item, idx) => (
          <TableRow key={idx}>
            {tableColumns.map((columnDef) => (
              <TableCell key={columnDef.id}>{flexRender(columnDef.cell, { item })}</TableCell>
            ))}
          </TableRow>
        ))}</TableBody>
      </Table>
      <TableFooter>
        <tr>
          <td colSpan={tableColumns.length}>
            <div className="flex items-center gap-4 py-4 px-5 border-t dark:border-neutral-700">
              <select onChange={(event) => setPageSize(Number(event.target.value))} value={pageSize}>
                {[10, 25, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                ))}
              </select>
              <span>{`Rows ${1 + ((data?.length || 0) / pageSize) * pageSize}-${Math.min(((data?.length || 0) / pageSize) * pageSize, (data?.length || 0))} out of ${data?.length}`}</span>
            </div>
          </td>
        </tr>
      </TableFooter>
    </div>
  );
};

export default CustomTable;