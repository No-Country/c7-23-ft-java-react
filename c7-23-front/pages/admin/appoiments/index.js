import { useMemo } from "react";
import Image from "next/image";

import Table from "../../../components/Admin/Table";
import Layout from "../../../components/Admin/Layout";
import SearchInput from "../../../components/SeachInput";

import getUserData from "../../../api/getUserData";
import useGetUserData from "../../../queries";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import AddIcon from "../../../public/assets/icons/addIcon.svg";

const columnHelper = createColumnHelper();

export async function getServerSideProps() {
  const users = await getUserData();
  return { props: { users } };
}

export default function Appointments(initialData) {
  const { data } = useGetUserData(initialData);

  const columns = useMemo(
    () => [
      columnHelper.accessor("first_name", {
        id: "first name",
        header: () => "First name",
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("last_name", {
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
      columnHelper.accessor("id", {
        header: () => <span>Id</span>,
        footer: (info) => info.column.id,
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Layout>
      <div className="flex justify-between">
        <p className="font-medium text-2xl">Appoiments</p>
        <div>
          <button className="btn btn-primary rounded-xl flex items-center justify-center">
            <div className="h-7 w-7 relative mr-2">
              <Image alt="add an appoiment" layout="fill" src={AddIcon} />
            </div>
            New Appoiment
          </button>
        </div>
      </div>
      <div className="tabs">
        <a className="tab tab-bordered">Appoiments</a>
        <a className="tab tab-bordered">Pending Appoiments</a>
      </div>
      <SearchInput />
      <div>
        <Table table={table} />
      </div>
    </Layout>
  );
}
