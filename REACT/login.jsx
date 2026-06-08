import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const emailValid =
    formData.email.includes("@") &&
    formData.email.includes(".");

  const passwordValid =
    formData.password.length >= 8 &&
    /\d/.test(formData.password);

  const isFormInvalid =
    !emailValid || !passwordValid;

  function handleSubmit(e) {

    e.preventDefault();

    if (isFormInvalid) return;

    alert("Login Successful!");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          {
            formData.email &&
            !emailValid &&
            (
              <p style={{ color: "red" }}>
                Invalid email format
              </p>
            )
          }

        </div>

        <div>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          {
            formData.password &&
            !passwordValid &&
            (
              <p style={{ color: "red" }}>
                Password must be 8+ characters and contain a number
              </p>
            )
          }

        </div>

        <button
          type="submit"
          disabled={isFormInvalid}
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default App;
