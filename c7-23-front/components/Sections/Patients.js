import { useMemo } from "react";

import DeletePatientModal from "../../modals/DeletePatientModal";
import EditPatientModal from "../../modals/patients/EditPatientModal";
import Table from "../Admin/Table";
import ButtonAdd from "../ButtonAdd";
import SearchInput from "../SeachInput";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

import { useGetPatients } from "queries";
import NewPatientModal from "modals/patients/NewPatientModal";

export default function Patients({
  selectedUser,
  showModalNewUser: showModalNewPatient,
  setShowModalNewUser,
  showModalEdit,
  setShowModalEdit,
  showModalDelete,
  setShowModalDelete,
  handleSubmit,
  onSearch,
  control,
  handledDropDownSelect,
  searchUserFilter,
  setGlobalFilter,
  globalFilter,
}) {
  const { data, refetch } = useGetPatients();

  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("idPatient", {
        id: "idPatient",
        header: () => "id",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("name", {
        id: "first name",
        header: () => "First name",
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("lastName", {
        id: "last name",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("email", {
        header: () => "Email",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("documentType", {
        header: () => "documentType",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("document", {
        header: () => "document",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("phone", {
        header: () => "phone",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("social_work", {
        header: () => "social work",
        footer: (info) => info.column.id,
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: data ?? [],
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
      <DeletePatientModal
        selectedUser={selectedUser}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        onSubmit={refetch}
      />
      <NewPatientModal
        showModal={showModalNewPatient}
        setShowModal={setShowModalNewUser}
      />
      <EditPatientModal
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
        selectedUser={selectedUser}
      />

      <div className="md:flex justify-between items-center w-full">
        <SearchInput
          onSubmit={handleSubmit}
          onChange={onSearch}
          name="search_patients"
          control={control}
          placeholder="Search patients"
        />
        <div className="flex fixed z-20 bottom-2 right-2 md:static">
          <ButtonAdd
            nameButton="New patient"
            handleButton={() => setShowModalNewUser(true)}
          />
        </div>
      </div>
      <div>
        <p className="title-section">Patients</p>
      </div>

      <div>
        <Table table={table} onDropdownSelect={handledDropDownSelect} />
      </div>
    </div>
  );
}
