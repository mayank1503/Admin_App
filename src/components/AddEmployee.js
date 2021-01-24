import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddEmployee(props) {
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Role, setRole] = React.useState("");
  const [organization, setOrganization] = React.useState("");

  return (
    <>
      <div>
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Add an Employee
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box display="flex" flexDirection="column">
                Name:
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                />
                Email:
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  value={Email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                Role:
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  value={Role}
                  onChange={(event) => setRole(event.target.value)}
                />
                Organization:
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.onSave(Name, Email, Role, organization)}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
