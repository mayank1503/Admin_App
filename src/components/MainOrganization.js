import React from "react";
import AddOrganization from "./AddOrganization";
import OrganizationHome from "./OrganizationHome";

export default function MainOrganization() {
  const [open, setOpen] = React.useState(false);

  const defaultOrganization = [
    {
      Name: "Mayank",
      sizeOfOrganizationalUnit: "2500",
      Description: "Developer"
    },
    {
      Name: "Rahul",
      sizeOfOrganizationalUnit: "450",
      Description: "Developer"
    },
    {
      Name: "Rohit",
      sizeOfOrganizationalUnit: "500",
      Description: "Tester"
    }
  ];

  const [organization, setOrganization] = React.useState(defaultOrganization);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (Name, sizeOfOrganizationalUnit, Description) => {
    const organizationcopy = [...organization];
    organizationcopy.push({ Name, sizeOfOrganizationalUnit, Description });
    setOrganization(organizationcopy);
    handleClose();
  };

  const handleDelete = (index) => {
    const organizationCopy = [...organization];
    organizationCopy.splice(index, 1);
    setOrganization(organizationCopy);
  };

  return (
    <div className="App">
      <OrganizationHome
        onOpen={handleClickOpen}
        organization={organization}
        onDelete={handleDelete}
      />
      <AddOrganization
        open={open}
        onOpen={handleClickOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
    </div>
  );
}
