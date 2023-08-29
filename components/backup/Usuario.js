import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { EditIcon } from '@mui/icons-material/Edit';
import { DeleteIcon } from '@mui/icons-material/Delete';

// {<DeleteIcon />}

const Usuario = ({ id, nombre, email, telefono, fecha }) => {
  return (
    <ListItem
      sx={{ m: 3, boxShadow: 5 }}
      style={{ backgroundColor: "#2196f3", color: "white" }}
      secondaryAction={
        <>
          <IconButton> E </IconButton>
          <IconButton> B </IconButton>
        </>
      }
    >
      <ListItemText primary={nombre} secondary={email} />
      <ListItemText primary={telefono} secondary={fecha} />
    </ListItem>
  );
};
export default Usuario;
//export default Usuario;
