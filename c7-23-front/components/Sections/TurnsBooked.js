import { useCallback, useMemo } from "react";

import { LIST_OF_DROPDOWN_ACTIONS_TURNS } from "../../shared/constants/dropDownActions";

import DeleteUserModal from "../../modals/DeleteUserModal";
import EditUserModal from "../../modals/EditUserModal";
import NewUserModal from "../../modals/NewUserModal";
import Table from "../Admin/Table";
import SearchInput from "../SeachInput";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

import { useGetTurns } from "../../queries";

export default function TurnsBooked({
  handleSubmit,
  onSearch,
  control,
  handledDropDownSelect,
  searchUserFilter,
  setGlobalFilter,
  globalFilter,
}) {
  const { data } = useGetTurns();

  const turnsBookedFilter = useCallback(() => {
    return data?.filter((turn) => {
      return turn.idPatient != null;
    });
  }, [data]);

  const turns = useMemo(() => turnsBookedFilter(), [turnsBookedFilter]);

  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("idTurn", {
        header: () => "idTurn",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("idPatient", {
        id: "idPatient",
        header: () => "Patient",
        cell: (info) => {
          return info.getValue();
        },
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("idDoctor", {
        id: "idDoctor",
        cell: (info) => info.getValue(),
        header: () => <span>Doctor</span>,
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("day", {
        header: () => "day",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("hora", {
        header: () => "hour",
        footer: (info) => info.column.id,
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: turns ?? [],
    columns,
    filterFns: {
      searchUser: searchUserFilter,
    },
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: searchUserFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div className="md:flex justify-between items-center w-full">
        <SearchInput
          onSubmit={handleSubmit}
          onChange={onSearch}
          name="search_turns"
          control={control}
          placeholder="Search turns"
        />
      </div>
      <div>
        <p className="title-section">Turns booked</p>
      </div>

      <div>
        <Table
          table={table}
          onDropdownSelect={handledDropDownSelect}
          dropDownActions={LIST_OF_DROPDOWN_ACTIONS_TURNS}
          showDropDown={false}
        />
      </div>
    </div>
  );
}
