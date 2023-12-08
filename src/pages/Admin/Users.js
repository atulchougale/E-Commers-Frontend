import React, { useEffect, useState } from "react";
import AdminMenu from "./../../components/layout/AdminMenu";
import Layout from "./../../components/layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";


const Users = () => {

  const [users, setUsers] = useState([]);
  const [auth, ] = useAuth();

  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://e-commerce-backend-d4y8.onrender.com/api/auth/all-users");
      setUsers(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getUsers();
  }, [auth?.token]);

  console.log(users)
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Users</h1>
            
                <div className="border shadow p-3 ">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col"> Address</th>
                        <th scope="col">Email</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {users?.map((u, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{u?.name}</td>
                      <td>{u?.phone}</td>
                      <td>{u?.address}</td>
                      <td>{u?.email}</td>
                    </tr>
                  ))}
                    </tbody>
                  </table>
                  
                </div>
              
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
