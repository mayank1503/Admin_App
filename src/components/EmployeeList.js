import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
export default function EmployeeList(props) {
  return (
    <Paper elevation={3} m={6}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">{props.Name}</Typography>
        <Typography variant="h6">{props.Email}</Typography>
        <Typography variant="h6">{props.Role}</Typography>
        <Typography variant="h6">{props.Organization}</Typography>

        <Box>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={props.onDelete}
          >
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}
