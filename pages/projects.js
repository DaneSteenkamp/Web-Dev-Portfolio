import Link from "next/Link";

import Layout from "../components/Mylayout";
import Project_info from "../components/Projects_info";

export default () => (
  // This is the projects page wich pulls all its info from the Projects_info Component
  <Layout>
    <Project_info />
  </Layout>
);
