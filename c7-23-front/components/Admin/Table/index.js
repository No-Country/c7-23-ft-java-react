import { flexRender } from "@tanstack/react-table";
import DropDown from "../../DropDown";
import { LIST_OF_DROPDOWN_ACTIONS } from "../../../shared/constants/dropDownActions";

export default function Table({
  table,
  dropDownActions = LIST_OF_DROPDOWN_ACTIONS,
  onDropdownSelect,
  showDropDown = true,
}) {
  return (
    <div className="overflow-x-auto w-auto">
      <table className="table w-full rounded-lg  border-spacing-y-4 border-separate">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="first:static" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="bg-transparent th-static text-center"
                >
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
                  className="border-none first:rounded-l-lg last:rounded-r-lg text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {showDropDown && (
                <td className="rounded-r-lg">
                  <DropDown
                    dropDownItems={dropDownActions.map((action, index) => ({
                      id: index,
                      name: action,
                      value: action.toLowerCase(),
                      rowID: table,
                    }))}
                    onSelect={(action) => onDropdownSelect(action, row)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th className="th-static text-center" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
              {showDropDown && <th className="rounded-r-lg"></th>}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
