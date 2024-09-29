import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get('/api/employees');
    setEmployees(response.data);
  };

  const addEmployee = async (employee) => {
    await axios.post('/api/employees', employee);
    fetchEmployees();
  };

  const updateEmployee = async (id, updatedEmployee) => {
    await axios.put(`/api/employees/${id}`, updatedEmployee);
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`/api/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div className="app">
      <h1>Employee Management System</h1>
      <div className="main-content">
        <EmployeeList
          employees={employees}
          onEdit={setCurrentEmployee}
          onDelete={deleteEmployee}
        />
        <EmployeeForm
          currentEmployee={currentEmployee}
          onSubmit={currentEmployee ? updateEmployee : addEmployee}
        />
      </div>
    </div>
  );
};

export default App;

// App.css
