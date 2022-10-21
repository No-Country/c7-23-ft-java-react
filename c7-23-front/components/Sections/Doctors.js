import { useMemo } from "react";

import DeleteDoctorModal from "../../modals/DeleteDoctorModal";
import EditDoctorModal from "modals/doctors/EditDoctorsModal";
import Table from "../Admin/Table";
import ButtonAdd from "../ButtonAdd";
import SearchInput from "../SeachInput";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

import { useGetDoctors } from "../../queries";
import NewDoctorModal from "modals/doctors/NewDoctorModal";

export default function Doctors({
  selectedUser,
  showModalNewUser,
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
  const { data, refetch: refetchDoctors } = useGetDoctors();

  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
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

  console.log("dssd");
  return (
    <div>
      <DeleteDoctorModal
        selectedUser={selectedUser}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        onSubmit={refetchDoctors}
      />
      {/* <EditDoctorModal
        showModal={showModalEdit}
        refetch={refetchDoctors}
        setShowModal={setShowModalEdit}
        selectedUser={selectedUser}
      /> */}
      {/* <NewDoctorModal
        showModal={showModalNewUser}
        refetch={refetchDoctors}
        setShowModal={setShowModalNewUser}
      /> */}
      <div className="md:flex justify-between items-center w-full">
        <SearchInput
          onSubmit={handleSubmit}
          onChange={onSearch}
          name="search_doctors"
          control={control}
          placeholder="Search doctors"
        />
        {/* <div className="flex fixed z-20 bottom-2 right-2 md:static">
          <ButtonAdd
            nameButton="New doctor"
            handleButton={() => setShowModalNewUser(true)}
          />
        </div> */}
      </div>
      <div>
        <p className="title-section">Doctors</p>
      </div>

      <div>
        <Table
          table={table}
          dropDownActions={["Delete"]}
          onDropdownSelect={handledDropDownSelect}
        />
      </div>
    </div>
  );
}
