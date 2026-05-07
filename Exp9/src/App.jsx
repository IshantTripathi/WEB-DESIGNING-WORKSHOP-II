import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      formErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {

      const newUser = { name, email, password };

      setUsers([...users, newUser]);

      setSuccess("Form submitted successfully!");

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px lightgray",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ color: "blue" }}>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "5px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />

        <p style={{ color: "red", margin: "0 0 10px 0" }}>
          {errors.name}
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "5px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />

        <p style={{ color: "red", margin: "0 0 10px 0" }}>
          {errors.email}
        </p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "5px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />

        <p style={{ color: "red", margin: "0 0 10px 0" }}>
          {errors.password}
        </p>

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      <p style={{ color: "green", marginTop: "15px" }}>
        {success}
      </p>

      <div style={{ marginTop: "20px", textAlign: "left" }}>

        <h3>User List</h3>

        {
          users.map((user, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px"
              }}
            >
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Password:</b> {user.password}</p>
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default App;