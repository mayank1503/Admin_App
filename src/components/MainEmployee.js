import React from "react";
import AddEmployee from "./AddEmployee";
import EmployeeHome from "./EmployeeHome";

export default function MainEmployee() {
  const [open, setOpen] = React.useState(false);

  const defaultEmployee = [
    {
      Name: "Mayank",
      Email: "example@gmail.com",
      Role: "Developer",
      Organization: "Wipro limited"
    },
    {
      Name: "Rahul",
      Email: "example2@gmail.com",
      Role: "Developer",
      Organization: "Wipro"
    },
    {
      Name: "Rohit",
      Email: "example3@gmail.com",
      Role: "Tester",
      Organization: "Wipro"
    }
  ];

  const [employee, setEmployee] = React.useState(defaultEmployee);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (Name, Email, Role, Organization) => {
    const employeeCopy = [...employee];
    employeeCopy.push({ Name, Email, Role, Organization });
    setEmployee(employeeCopy);
    handleClose();
  };

  const handleDelete = (index) => {
    const employeeCopy = [...employee];
    employeeCopy.splice(index, 1);
    setEmployee(employeeCopy);
  };

  return (
    <div className="App">
      <EmployeeHome
        onOpen={handleClickOpen}
        employee={employee}
        onDelete={handleDelete}
      />
      <AddEmployee
        open={open}
        onOpen={handleClickOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
    </div>
  );
}
