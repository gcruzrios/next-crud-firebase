import { IconButton, ListItem, ListItemText } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import moment from "moment"
import { useContext } from "react"
import { ContextoUsuario } from "../pages/ContextoUsuario"
import { deleteDoc, doc } from "firebase/firestore"
import { bd } from "../firebase"


const Usuario = ({id, nombre, email, telefono, fecha}) => {

   //Contexto Provider
   const {setUsuario} = useContext(ContextoUsuario);

   /*Funcionalidad para borrar usuario*/
   const borrarUsuario = async (id, e) => {
       e.stopPropagation();
       const documento = doc(bd, "usuarios", id);
       await deleteDoc(documento);
       alert(`El usuario con el ID: ${documento.id} se ha borrado correctamente`);
   }

  return (
    <ListItem 
        sx={{mt: 3, boxShadow: 5}}
        style={{backgroundColor: '#2196f3', color: '#fff'}}
        secondaryAction={
            <>
            <IconButton><EditIcon onClick={() => setUsuario({id, nombre, email, telefono, fecha})}/></IconButton>
            <IconButton><DeleteIcon onClick={e => borrarUsuario(id, e)}/></IconButton>
            </>
        }
        
    >
        <ListItemText
            primary={nombre}
            secondary={email}
            >
        </ListItemText>
        
        <ListItemText
            primary={telefono}
            secondary={moment(fecha).format("MMMM dd, yyyy")}
        >
        </ListItemText>
    </ListItem>
  )
}

export default Usuario