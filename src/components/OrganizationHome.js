import { Fab } from "@material-ui/core";
import React from "react";
import OrganizationList from "./OrganizationList";
import { Add } from "@material-ui/icons";
export default function OrganizationHome(props) {
  return (
    <>
      <Fab color="secondary" aria-label="add" onClick={props.onOpen}>
        <Add />
      </Fab>
      <strong>Add Organizational unit</strong>
      {props.organization.length === 0
        ? "No Details found !"
        : props.organization.map((organization, index) => (
            <OrganizationList
              key={organization.label}
              Name={organization.Name}
              sizeOfOrganizationalUnit={organization.sizeOfOrganizationalUnit}
              Description={organization.Description}
              onDelete={() => props.onDelete(index)}
            />
          ))}
    </>
  );
}
