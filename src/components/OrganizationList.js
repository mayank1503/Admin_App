import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
export default function OrganizationList(props) {
  return (
    <Paper elevation={3} m={5}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">{props.Name}</Typography>
        <Typography variant="h6">{props.sizeOfOrganizationalUnit}</Typography>
        <Typography variant="h6">{props.Description}</Typography>
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
