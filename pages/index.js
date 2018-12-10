// import Link from "next/link";
// import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";
import Prices from "../components/Prices";

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to bitzPrice</h1>
      <p>Check current Bitcoin Rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;
