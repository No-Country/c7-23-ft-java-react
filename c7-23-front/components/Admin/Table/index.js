import { flexRender } from "@tanstack/react-table";
import DropDown from "../../DropDown";

export default function Table({ table }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full rounded-lg  border-spacing-y-4 border-separate">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="first:static" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="bg-transparent th-static">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="shadow-md rounded-lg  ">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-none first:rounded-l-lg last:rounded-r-lg"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="rounded-r-lg">
                <DropDown options={["Edit", "Delete"]} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th className="th-static" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
              <th className="rounded-r-lg"></th>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
