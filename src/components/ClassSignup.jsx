import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import MakeupMembers from "./MakeupMembers.jsx";

export default function ClassSignUp({
  addMember,
  setAddMember,
  setGetAllMakeupMembers,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [undertoneType, setUndertoneType] = useState("");
  const [classType, setClassType] = useState("");

  const handleAddSignUp = (e) => {
    e.preventDefault();

    fetch("https://project-makeup-jch.web.app/makeup-members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ firstName, lastName, undertoneType, classType }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setGetAllMakeupMembers(data);
        setFirstName("");
        setLastName("");
        setUndertoneType("");
        setClassType("");
      })
      .catch(alert);
  };

  return (
    <>
     
      <main>
        <h1>Class Sign-Ups</h1>
        <h2>Enter info below</h2>
      </main>
      <form onSubmit={handleAddSignUp}>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <br />

        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>

        <br />
        <label htmlFor="undertoneType">
          Undertone Type
          <input
            type="text"
            value={undertoneType}
            onChange={(e) => {
              setUndertoneType(e.target.value);
            }}
          />
        </label>

        <br />
        <label htmlFor="classType">
          {" "}
          Class Type
          <input
            type="text"
            value={classType}
            onChange={(e) => {
              setClassType(e.target.value);
            }}
          />
        </label>
        <br />
        <input type="submit" />

        <MakeupMembers />
      </form>
    </>
  );
}
