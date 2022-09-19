import "./Read.css";
import React, { useContext } from "react";
import { useParams,Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Button } from "react-bootstrap";

export default function Read() {
  const [users, setUser] = useContext(UserContext);
    const { id } = useParams();
   
    const user = users.filter((data) =>data.id == id);
  
    
     return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>Name: {user[0].name}</h1>
      <h1>Position: {user[0].position}</h1>
      <h1>Salary: {user[0].salary} /= </h1>
      <Link to="/">
        <Button variant="info">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
