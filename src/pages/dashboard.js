import React from "react";
import { Router } from "@reach/router";

import Layout from "../layouts";
import PrivateRoute from "../components/privateRoute";
import Home from "../components/pages/home";

const Dashboard = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/dashboard" component={Home} />
    </Router>
  </Layout>
);

export default Dashboard;
