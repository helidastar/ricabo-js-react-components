import { useState } from "react";

export default function StudentInfo() {
  const [student, setStudent] = useState({ name: "", course: "", year: "" });

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Student Information</h2>
      <label>Student Name:</label>
      <input
        name="name"
        placeholder="Enter name"
        value={student.name}
        onChange={handleChange}
      />
      <label>Course:</label>
      <input
        name="course"
        placeholder="Enter course"
        value={student.course}
        onChange={handleChange}
      />
      <label>Year:</label>
      <input
        name="year"
        placeholder="Enter year"
        value={student.year}
        onChange={handleChange}
      />
      <div style={{ marginTop: 16 }}>
        <strong>Student Info:</strong> {student.name} - {student.course} -{" "}
        {student.year}
      </div>
      <button className="primary">Submit</button>
      <button className="gray">Cancel</button>
    </div>
  );
}
