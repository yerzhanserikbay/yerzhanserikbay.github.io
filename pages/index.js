import React from "react";

import Layout from "../components/Layout";
import Markdown from "../components/Markdown";

import HOME_MARKDOWN from "../static/home";

const HomePage = () => (
  <Layout title="Yerzhan Serikbay — iOS Developer">
    <Markdown markdown={HOME_MARKDOWN} />
  </Layout>
);

export default HomePage;
