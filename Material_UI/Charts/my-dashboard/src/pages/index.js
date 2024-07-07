import Layout from "@/components/Layout";
import Chart from "@/components/Chart";
import ChartsOverviewDemo from "@/components/chartsoverviewdemo";
import TinyBarChart from "@/components/tinybarchart";
import HorizontalBar from "@/components/HorizontalBar";

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to the Dashboard</h1>
      <ChartsOverviewDemo/>
      <Chart />
      <TinyBarChart />
      <HorizontalBar />
    </Layout>
  );
};

export default Home;
