import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import "./Home.css";

export default function Home() {
  const [users,setUser]= useContext(UserContext);

  return (
    <div>
      <Link to={"/Create/"}>
      <Button variant="primary">Create Person</Button>
  </Link>
                
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>

                <Link to={"/Read/" + user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/Edit/" + user.id}>
                  <Button className="action__btn" variant="info">
                    Edit
                  </Button>
                </Link>
                <Link to={"/Delete/" + user.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
