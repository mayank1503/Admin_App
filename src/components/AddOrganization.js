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

export default function AddOrganization(props) {
  const [Name, setName] = React.useState("");
  const [sizeOfOrganizationalUnit, setSize] = React.useState("");
  const [Description, setDescription] = React.useState("");

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
            Add Organizational unit
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
                Size of Organizational Unit:
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  value={sizeOfOrganizationalUnit}
                  onChange={(event) => setSize(event.target.value)}
                />
                Description:
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  value={Description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                props.onSave(Name, sizeOfOrganizationalUnit, Description)
              }
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
