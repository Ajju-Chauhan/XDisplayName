import { useState } from "react";
function DisplayFullName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert("Please fill in both the first name and the last name.");
    }
  };

  return (
    <>
      <h1>Full Name Dispalay</h1>
      <form onSubmit={handleSubmit}>
        <p>
          First Name : <input type="text"  onChange={(e) => setFirstName(e.target.value)} required />
        </p>
        <p>
          Last Name : <input type="text" onChange={(e) => setLastName(e.target.value)} required />
        </p>
        <button>Submit</button>
      </form>
      {fullName && (
        <div id="fullNameDisplay">
          Full Name: {fullName}
        </div>
      )}
    </>
  );
}

export default DisplayFullName;
