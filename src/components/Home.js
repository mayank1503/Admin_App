import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import MainRole from "./MainRole";
import MainEmployee from "./MainEmployee";
import authService from "../service/authService";
import MainOrganization from "./MainOrganization";
import AppBar from "./AppBar";

export default function Home(props) {
  if (!props.display) {
    return null;
  }

  if (!authService.isLoggedIn()) {
    props.history.push("/login");
  }

  const handleLogout = () => {
    authService.handleLogout(props);
  };

  return (
    <>
      <AppBar handleLogout={handleLogout} />
      <Box display="flex">
        <Box width={"20%"}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem component={Link} to="/home/employees">
              <ListItemText primary="Employees"></ListItemText>
            </ListItem>
            <ListItem component={Link} to="/home/role">
              <ListItemText primary="Roles"></ListItemText>
            </ListItem>
            <ListItem component={Link} to="/home/organization">
              <ListItemText primary="Organizational unit"></ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box width={"80%"}>
          <Switch>
            <Route path="/home/employees" component={MainEmployee} />
            <Route path="/home/role" component={MainRole} />
            <Route path="/home/organization" component={MainOrganization} />
          </Switch>
        </Box>
      </Box>
    </>
  );
}
