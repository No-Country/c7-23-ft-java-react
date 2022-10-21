import { useMemo } from "react";

import DeleteUserModal from "../../modals/DeleteUserModal";
import EditUserModal from "../../modals/EditUserModal";
import NewUserModal from "../../modals/NewUserModal";
import Table from "../Admin/Table";
import ButtonAdd from "../ButtonAdd";
import SearchInput from "../SeachInput";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

import { useGetUserData } from "../../queries";

export default function AllUsers({
  idUser,
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

  return (
   
  );
}
