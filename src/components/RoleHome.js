import { Fab } from "@material-ui/core";
import React from "react";
import RoleList from "./RoleList";
import { Add } from "@material-ui/icons";

export default function RoleHome(props) {
  return (
    <>
      <center>
        <Fab color="secondary" aria-label="add" onClick={props.onOpen}>
          <Add />
        </Fab>
        <strong>Add Role</strong>
      </center>

      {props.role.length === 0
        ? "No Role found !"
        : props.role.map((role, index) => (
            <RoleList
              key={role.label}
              Name={role.Name}
              Description={role.Description}
              onDelete={() => props.onDelete(index)}
            />
          ))}
    </>
  );
}
