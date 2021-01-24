import React from "react";
import AddRole from "./AddRole";
import RoleHome from "./RoleHome";

export default function MainRole() {
  const [open, setOpen] = React.useState(false);

  const defaultRole = [
    {
      Name: "Mayank",
      Description: "Developer"
    },
    {
      Name: "Rahul",
      Description: "Developer"
    },
    {
      Name: "Rohit",
      Description: "Tester"
    }
  ];

  const [role, setRole] = React.useState(defaultRole);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (Name, Description) => {
    const roleCopy = [...role];
    roleCopy.push({ Name, Description });
    setRole(roleCopy);
    handleClose();
  };

  const handleDelete = (index) => {
    const roleCopy = [...role];
    roleCopy.splice(index, 1);
    setRole(roleCopy);
  };

  return (
    <div className="MainRole">
      <RoleHome onOpen={handleClickOpen} role={role} onDelete={handleDelete} />
      <AddRole
        open={open}
        onOpen={handleClickOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
    </div>
  );
}
