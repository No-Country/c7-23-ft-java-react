import { useState } from "react";

import { useForm } from "react-hook-form";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import withAuthPage from "../../../hocs/withAuthPage";
import Layout from "../../../components/Admin/Layout";

import Doctors from "../../../components/Sections/Doctors";
import Patients from "../../../components/Sections/Patients";

import getDoctors from "../../../api/getDoctors";
import getPatients from "../../../api/getPatients";
import getTurns from "../../../api/getTurns";

import { rankItem } from "@tanstack/match-sorter-utils";

import { DROPDOWN_ACTIONS } from "../../../shared/constants/dropDownActions";

import { APPOINTMENTS_SECTIONS_NAME } from "../../../shared/constants";
import { APPOINTMENTS_SECTION } from "../../../shared/constants";
import TurnsAvailable from "../../../components/Sections/TurnsAvailable";
import TurnsBooked from "../../../components/Sections/TurnsBooked";

function AppointmentsPage() {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalNewUser, setShowModalNewUser] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [section, setSection] = useState(APPOINTMENTS_SECTION.Patients);

  const [globalFilter, setGlobalFilter] = useState("");

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
    console.log(row.original);
    if (action.value === DROPDOWN_ACTIONS.DELETE) {
      setIdUser(id);
      setShowModalDelete(true);
      setShowModalEdit(false);
    }

    if (action.value === DROPDOWN_ACTIONS.EDIT) {
      setShowModalDelete(false);
      setIdUser(id);
      setShowModalEdit(true);
    }
  };

  const mainProps = {
    setShowModalDelete,
    showModalDelete,
    showModalEdit,
    setShowModalEdit,
    showModalNewUser,
    setShowModalNewUser,
    onSubmit: handleSubmit,
    handledDropDownSelect,
    control,
    onSearch,
    idUser,
    searchUserFilter,
    globalFilter,
    setGlobalFilter,
  };

  const SECTIONS = {
    [APPOINTMENTS_SECTION.Patients]: Patients,
    [APPOINTMENTS_SECTION.Doctors]: Doctors,
    [APPOINTMENTS_SECTION.Turns_available]: TurnsAvailable,
    [APPOINTMENTS_SECTION.Turns_booked]: TurnsBooked,
  };

  const SectionPage = SECTIONS[section];

  return (
    <Layout
      pageTitle="Appointments"
      sections={APPOINTMENTS_SECTIONS_NAME}
      onChangeSection={setSection}
    >
      {SectionPage ? <SectionPage {...mainProps} /> : null}
    </Layout>
  );
}

export default withAuthPage(AppointmentsPage);

export async function getStaticProps() {
  try {
    const queryClient = new QueryClient();

    const PREFETCH_QUERIES = [
      ["patients", getPatients],
      ["doctors", getDoctors],
      ["turns", getTurns],
    ];

    await Promise.all(
      PREFETCH_QUERIES.map(([key, fetcher]) =>
        queryClient.prefetchQuery([key], fetcher)
      )
    );

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
