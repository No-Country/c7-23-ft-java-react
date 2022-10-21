import { useMemo } from "react";

import { LIST_OF_DROPDOWN_ACTIONS_TURNS } from "../../shared/constants/dropDownActions";

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
import AssignTurnModal from "modals/turn/AssignTurnModal";

export default function TurnsAvailable({
  selectedUser,
  showModalNewUser,
  setShowModalNewUser,
  showModalEdit,
  setShowModalEdit,
  handleSubmit,
  onSearch,
  control,
  handledDropDownSelect,
  searchUserFilter,
  setGlobalFilter,
  globalFilter,
}) {
  const { data, refetch } = useGetTurns();

  const turns = useMemo(
    () => data?.filter((turn) => turn.idPatient === null),
    [data]
  );

  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("idTurn", {
        header: () => "idTurn",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("idPatient", {
        id: "idPatient",
        header: () => "idPatient",
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("idDoctor", {
        id: "idDoctor",
        cell: (info) => info.getValue(),
        header: () => <span>idDoctor</span>,
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
      <AssignTurnModal
        showModal={showModalEdit}
        refetch={refetch}
        selectedUser={selectedUser}
        setShowModal={setShowModalEdit}
      />
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
        <p className="title-section">Turns Available</p>
      </div>

      <div>
        <Table
          table={table}
          onDropdownSelect={handledDropDownSelect}
          dropDownActions={LIST_OF_DROPDOWN_ACTIONS_TURNS}
        />
      </div>
    </div>
  );
}
