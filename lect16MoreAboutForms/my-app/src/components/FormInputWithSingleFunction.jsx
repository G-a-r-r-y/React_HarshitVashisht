import React from "react";
import { useState } from "react";

function FormInputWithSingleFunction() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    gmail: "",
    address: "",
  });

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <br />
        <br />

        <label htmlFor="gmail">Gmail:</label>
        <input
          type="email"
          id="gmail"
          name="gmail"
          onChange={handleChange}
          value={formData.gmail}
        />
        <br />
        <br />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
          value={formData.address}
        />
        <br />
        <br />

        <input type="submit" value="SignUp" />
      </form>
    </>
  );
}

export default FormInputWithSingleFunction;
