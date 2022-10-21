import { useState, useMemo } from "react";

import { useForm } from "react-hook-form";

import withAuthPage from "../../../hocs/withAuthPage";
import Layout from "../../../components/Admin/Layout";

import getUserData from "../../../api/getUserData";

import { rankItem } from "@tanstack/match-sorter-utils";

import { DROPDOWN_ACTIONS } from "../../../shared/constants/dropDownActions";

import { USER_DATA_SECTIONS } from "../../../shared/constants";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import DeleteUserModal from "../../../modals/DeleteUserModal";
import EditUserModal from "../../../modals/EditUserModal";
import NewUserModal from "../../../modals/NewUserModal";
import Table from "../../../components/Admin/Table";
import ButtonAdd from "../../../components/ButtonAdd";
import SearchInput from "../../../components/SeachInput";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

import { useGetUserData } from "../../../queries";

function UserData() {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalNewUser, setShowModalNewUser] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);

  const { data, refetch } = useGetUserData();
  const searchUserFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
  };

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

    setSelectedUser(row.original);

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

  return (
    <Layout pageTitle="User data" sections={USER_DATA_SECTIONS}>
      <div>
        <DeleteUserModal
          idUser={idUser}
          showModal={showModalDelete}
          setShowModal={setShowModalDelete}
          onSubmit={refetch}
        />
        {showModalEdit && (
          <EditUserModal
            showModal={showModalEdit}
            setShowModal={setShowModalEdit}
            selectedUser={selectedUser}
          />
        )}
        <NewUserModal
          showModal={showModalNewUser}
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
      </div>
    </Layout>
  );
}

export default withAuthPage(UserData);

export async function getStaticProps() {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(["users"], getUserData);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
    return {};
  }
}
