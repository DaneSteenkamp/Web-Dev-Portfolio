import Link from "next/Link";

import Layout from "../components/Mylayout";
import Skills_info from "../components/Skills_info";

export default () => (
  // This is the about page wich pulls all its info from the About_info Component
  <Layout>
    <Skills_info />
  </Layout>
);
