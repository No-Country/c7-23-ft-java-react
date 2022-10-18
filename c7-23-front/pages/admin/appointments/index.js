import { useMemo } from "react";
import Image from "next/image";

import Table from "../../../components/Admin/Table";
import Layout from "../../../components/Admin/Layout";
import SearchInput from "../../../components/SeachInput";

import withAuthPage from "../../../hocs/withAuthPage";

import getUserData from "../../../api/getUserData";
import useGetUserData from "../../../queries";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import AddIcon from "../../../public/assets/icons/addIcon.svg";

const columnHelper = createColumnHelper();

function AppointmentsPage({ users }) {
  const { data } = useGetUserData(users);

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

  // table.getAllColumns()[0].setFilterValue()

  return (
    <Layout>
      <div className="flex justify-center md:justify-between">
        <p className="font-medium text-center text-2xl">Appoiments</p>
        <div className="fixed z-10 bottom-2 right-2 md:static">
          <label
            htmlFor="my-modal-2"
            className="btn btn-primary rounded-xl flex items-center justify-center"
          >
            <div className="h-7 w-7 relative mr-2">
              <Image alt="add an appoiment" layout="fill" src={AddIcon} />
            </div>
            Appoiment
          </label>
        </div>
      </div>
      <div className="tabs justify-center md:justify-start">
        <button className="tab tab-bordered focus:text-neutral">
          Appoiments
        </button>
        <button className="tab tab-bordered focus:text-neutral">
          Pending Appoiments
        </button>
      </div>
      <SearchInput />
      <div>
        <Table table={table} />
      </div>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal z-20 ">
        <div className="modal-box relative h-4/5 overflow-y-hidden">
          <label
            htmlFor="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add an appointment</h3>
          <div className="mt-2">
            <label>
              Name
              <input type="text" placeholder="name" className="form-input" />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="example@gmail.com"
                className="form-input"
              />
            </label>
            <label>
              N° Ticket
              <input
                type="number"
                placeholder="ticket"
                className="form-input"
              />
            </label>
            <label>
              Date
              <input type="date" className="form-input" />
            </label>
            <label>
              Doctor
              <input
                type="text"
                placeholder="Dr. torre"
                className="form-input"
              />
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuthPage(AppointmentsPage)

export async function getServerSideProps() {
  const users = await getUserData();
  return { props: { users } };
}
