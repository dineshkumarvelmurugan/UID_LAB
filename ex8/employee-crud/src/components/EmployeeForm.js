import React, { useState, useEffect } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ currentEmployee, onSubmit }) => {
  const [employee, setEmployee] = useState({
    empId: '',
    empName: '',
    dob: '',
    designation: '',
    email: '',
    contactNo: '',
  });

  useEffect(() => {
    if (currentEmployee) {
      setEmployee(currentEmployee);
    } else {
      setEmployee({
        empId: '',
        empName: '',
        dob: '',
        designation: '',
        email: '',
        contactNo: '',
      });
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(currentEmployee ? employee._id : null, employee);
    setEmployee({
      empId: '',
      empName: '',
      dob: '',
      designation: '',
      email: '',
      contactNo: '',
    });
  };

  return (
    <div className="employee-form">
      <h2>{currentEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="empId"
          value={employee.empId}
          onChange={handleChange}
          placeholder="Employee ID"
          required
        />
        <input
          type="text"
          name="empName"
          value={employee.empName}
          onChange={handleChange}
          placeholder="Employee Name"
          required
        />
        <input
          type="date"
          name="dob"
          value={employee.dob}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="designation"
          value={employee.designation}
          onChange={handleChange}
          placeholder="Designation"
          required
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="contactNo"
          value={employee.contactNo}
          onChange={handleChange}
          placeholder="Contact Number"
          required
        />
        <button type="submit">{currentEmployee ? 'Update' : 'Add'} Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;

