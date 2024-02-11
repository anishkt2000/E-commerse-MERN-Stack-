import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/Layout/UserMenu";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h5>User Name : {auth?.user?.name}</h5>
              <h5>User Email : {auth?.user?.email}</h5>
              <h5>User Address : {auth?.user?.address}</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
