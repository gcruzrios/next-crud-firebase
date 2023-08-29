import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { bd } from "../firebase";
import Usuario from "./Usuario";
const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const coleccion = collection(bd, "usuarios");

    const consulta = query(coleccion, orderBy("fecha", "desc"));

    const unsubscribe = onSnapshot(consulta, (consultaSnapshot) => {
      setUsuarios(
        consultaSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          fecha: doc.data().fecha?.toDate().getTime(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      {usuarios.map((usuario) => (
        <Usuario
          key={usuario.id}
          id={usuario.id}
          nombre={usuario.nombre}
          email={usuario.email}
          telefono={usuario.telefono}
          fecha={usuario.fecha}
        />
      ))}
    </div>
  );
};

export default ListaUsuarios;
