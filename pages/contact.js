import Link from "next/link";

import Layout from "../components/Mylayout";
import Contact_info from "../components/Contact_info";

export default () => (
  // This is the contacts page wich pulls all its info from the Contact_info Component
  <Layout>
    <Contact_info />
  </Layout>
);
