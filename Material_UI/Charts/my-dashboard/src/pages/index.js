import Layout from "@/components/Layout";
import Chart from "@/components/Chart";
import ChartsOverviewDemo from "@/components/chartsoverviewdemo";

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to the Dashboard</h1>
      <ChartsOverviewDemo/>
      <Chart />
    </Layout>
  );
};

export default Home;
