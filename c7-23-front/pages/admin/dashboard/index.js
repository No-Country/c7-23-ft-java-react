import Layout from "../../../components/Admin/Layout";
import withAuthPage from "../../../hocs/withAuthPage";

function DashboardPage() {
  return <Layout></Layout>;
}

export default withAuthPage(DashboardPage)
