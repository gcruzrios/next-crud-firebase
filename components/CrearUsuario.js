import { Button, TextField } from "@mui/material"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useRef } from "react";
import { bd } from "../firebase";
import { ContextoUsuario } from "../pages/ContextoUsuario";


const CrearUsuario = () => {
    
    {/*const [usuario, setUsuario] = useState({nombre: '', email: '', telefono: ''});*/}

    //Contexto Provider
    const {usuario, setUsuario} = useContext(ContextoUsuario);

    const areaEntrada = useRef();

    /*onSubmit ->cuando se presina el voton de crear un nuevo usuario*/
    const onSubmit = async () => {

        if(usuario?.hasOwnProperty('fecha')){
            //Actualizar
            const documento = doc(bd, "usuarios", usuario.id)
            const usuarioActualizado = {...usuario, fecha: serverTimestamp()}
            updateDoc(documento, usuarioActualizado)
            setUsuario({nombre: '', email: '', telefono: ''});
            alert(`El usuario con el ID: ${documento.id} se ha actualizado correctamente`);
        }else{
            //Crear un nuevo usuario
            const coleccion = collection(bd, "usuarios");
            const documento = await addDoc(coleccion, {...usuario, fecha:serverTimestamp()});
            setUsuario({nombre: '', email: '', telefono: ''});
            alert(`Se ha creado el usuario correctamente con el ID: ${documento.id}`);
        }
    }

    useEffect(() => {
      const validarClickAfuera = e => {
          if(!areaEntrada.current.contains(e.target)){
            console.log('Area de entrada afuera');
            setUsuario({nombre: '', email: '', telefono: ''});
          }else{
            console.log('Area de entrada adentro');
          }
      }
      document.addEventListener('mousedown', validarClickAfuera);
      return () => {
        document.removeEventListener('mousedown', validarClickAfuera);
      }
    }, [])
    


  return (
    <div ref={areaEntrada}>
        <TextField fullWidth label="nombre" margin="normal" value={usuario.nombre} onChange={e => setUsuario({...usuario, nombre: e.target.value})}></TextField>

        <TextField fullWidth label="email" margin="normal" value={usuario.email} onChange={e => setUsuario({...usuario, email: e.target.value})}></TextField>

        <TextField fullWidth label="telefono" margin="normal" value={usuario.telefono} onChange={e => setUsuario({...usuario, telefono: e.target.value})}></TextField>

        <Button onClick={onSubmit} fullWidth variant="contained" color="secondary" mx={{ mt: 3}}>{usuario.hasOwnProperty('fecha') ? 'Actualizar Usuario' : 'Crear Usuario'}</Button>
    </div>
  )
}

export default CrearUsuario