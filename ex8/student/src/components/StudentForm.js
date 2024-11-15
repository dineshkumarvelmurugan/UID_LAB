import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css"; // Import CSS

const StudentForm = ({ selectedStudent, fetchStudents, clearSelectedStudent }) => {
  const [student, setStudent] = useState({ name: "", age: "", course: "", grade: "" });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedStudent) {
      await axios.put(`http://localhost:5000/api/students/${selectedStudent._id}`, student);
      clearSelectedStudent();
    } else {
      await axios.post("http://localhost:5000/api/students", student);
    }
    fetchStudents();
    setStudent({ name: "", age: "", course: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedStudent ? "Edit Student" : "Add Student"}</h2>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="text"
        name="course"
        value={student.course}
        onChange={handleChange}
        placeholder="Course"
        required
      />
      <input
        type="text"
        name="grade"
        value={student.grade}
        onChange={handleChange}
        placeholder="Grade"
        required
      />
      <button type="submit">{selectedStudent ? "Update" : "Add"} Student</button>
    </form>
  );
};

export default StudentForm;
