import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });
  function onChange(event) {
    const { value, name } = event.target;
    setFullName((previousState) => {
      if (name === "fName") return { fName: value, lName: previousState.lName };
      if (name === "lName") return { fName: previousState.fName, lName: value };
    });
  }
  function onSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={onSubmitHandler}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={onChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={onChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
