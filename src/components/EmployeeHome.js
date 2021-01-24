import { Fab } from "@material-ui/core";
import React from "react";
import EmployeeList from "./EmployeeList";
import { Add } from "@material-ui/icons";

export default function EmployeeHome(props) {
  return (
    <>
      <Fab color="secondary" aria-label="add" onClick={props.onOpen}>
        <Add />
      </Fab>
      <strong>Add Employee</strong>
      {props.employee.length === 0
        ? "No Employee found !"
        : props.employee.map((employee, index) => (
            <EmployeeList
              key={employee.label}
              Name={employee.Name}
              Email={employee.Email}
              Role={employee.Role}
              Organization={employee.Organization}
              onDelete={() => props.onDelete(index)}
            />
          ))}
    </>
  );
}
