import Link from "next/link";

import Layout from "../components/Mylayout";
import About_info from "../components/About_info";

export default () => (
  // This is the about page wich pulls all its info from the About_info Component
  <Layout>
    <About_info></About_info>
  </Layout>
);
