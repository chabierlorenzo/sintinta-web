import { PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const Error404Page: React.FC<PageProps> = () => (
  <Layout>
    <h2>You are here!</h2>
    <h3>But nothing found for you #404</h3>
  </Layout>
);

export default Error404Page;
