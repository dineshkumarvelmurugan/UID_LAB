import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./styles.css"; // Import CSS

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  const clearSelectedStudent = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      <h1>Student Information</h1>
      <StudentForm
        selectedStudent={selectedStudent}
        fetchStudents={fetchStudents}
        clearSelectedStudent={clearSelectedStudent}
      />
      <StudentList students={students} fetchStudents={fetchStudents} selectStudent={selectStudent} />
    </div>
  );
};

export default App;
