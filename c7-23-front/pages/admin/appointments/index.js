import { useMemo } from "react";
import Image from "next/image";

import Table from "../../../components/Admin/Table";
import Layout from "../../../components/Admin/Layout";
import SearchInput from "../../../components/SeachInput";

import withAuthPage from "../../../hocs/withAuthPage";

import getUserData from "../../../api/getUserData";
import { useGetUserData } from "../../../queries";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

function AppointmentsPage({ users }) {
  const { data } = useGetUserData(users);

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Layout pageTitle="Appointments" buttonName="Appointments">
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

export default withAuthPage(AppointmentsPage);

export async function getServerSideProps() {
  const users = await getUserData();
  return { props: { users } };
}
