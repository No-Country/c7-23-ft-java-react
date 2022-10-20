import { useMemo, useState } from "react";

import { useForm } from "react-hook-form";

import Table from "../../../components/Admin/Table";
import Layout from "../../../components/Admin/Layout";
import SearchInput from "../../../components/SeachInput";
import ButtonAdd from "../../../components/ButtonAdd";

import DeleteUserModal from "../../../modals/DeleteUserModal";
import EditUserModal from "../../../modals/EditUserModal";
import NewUserModal from "../../../modals/NewUserModal";

import withAuthPage from "../../../hocs/withAuthPage";

import getUserData from "../../../api/getUserData";
import { useGetUserData } from "../../../queries";
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";

import { DROPDOWN_ACTIONS } from "../../../shared/constants/dropDownActions";

const columnHelper = createColumnHelper();

function UserData({ users }) {
  const { data, refetch } = useGetUserData(users);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModaNewUser, setShowModalNewUser] = useState(false);
  const [idUser, setIdUser] = useState(null);

  const [globalFilter, setGlobalFilter] = useState("");

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
    []
  );
  const searchUserFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
  };

  const table = useReactTable({
    data,
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

  const onSearch = (evt) => {
    setGlobalFilter(evt.target.value ?? "");
  };

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      searchUser: globalFilter ?? "",
    },
    mode: "onChange",
  });

  const handledDropDownSelect = (action, row) => {
    const { id } = row.original;
    if (action.value === DROPDOWN_ACTIONS.DELETE) {
      setIdUser(id);
      setShowModalDelete(true);
      setShowModalEdit(false);
    }

    if (action.value === DROPDOWN_ACTIONS.EDIT) {
      setShowModalDelete(false);
      setShowModalEdit(true);
    }
  };

  return (
    <Layout pageTitle="User data" buttonName="New user ">
      <DeleteUserModal
        idUser={idUser}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        onSubmit={refetch}
      />
      <EditUserModal
        showModal={showModalEdit}
        refetch={refetch}
        setShowModal={setShowModalEdit}
      />
      <NewUserModal
        showModal={showModaNewUser}
        refetch={refetch}
        setShowModal={setShowModalNewUser}
      />
      <div className="md:flex justify-between items-center w-full">
        <SearchInput
          onSubmit={handleSubmit}
          onChange={onSearch}
          name="search_users"
          control={control}
          placeholder="Search users"
        />
        <div className="flex fixed z-20 bottom-2 right-2 md:static">
          <ButtonAdd
            nameButton="New user"
            handleButton={() => setShowModalNewUser(true)}
          />
        </div>
      </div>

      <div>
        <Table table={table} onDropdownSelect={handledDropDownSelect} />
      </div>
    </Layout>
  );
}

export default withAuthPage(UserData);

export async function getServerSideProps() {
  const users = await getUserData();
  return { props: { users } };
}
