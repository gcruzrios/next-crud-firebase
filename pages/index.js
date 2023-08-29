import { useState } from 'react';
import CrearUsuario from '../components/CrearUsuario'
import ListaUsuarios from '../components/ListaUsuarios'
import { ContextoUsuario} from './ContextoUsuario'


export default function Home() {

  const [usuario, setUsuario] = useState({nombre: '', email: '', telefono: ''});

  return (
    <ContextoUsuario.Provider value={{usuario, setUsuario}}>
      <CrearUsuario />
      <ListaUsuarios />
    </ContextoUsuario.Provider>
  )
}

