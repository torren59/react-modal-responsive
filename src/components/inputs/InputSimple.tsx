import * as React from 'react';
import "../../styles/EstilosFlex.css";
import "./InputSimple.css";

export interface InputSimpleProps {
    titulo: string;
    nombre: string;
    tipo: string
}

export default function InputSimple ({titulo, nombre, tipo}: InputSimpleProps) {
  return (
    <div className='contenedorFlex centrarContenido inputSimple'>
        <label htmlFor={nombre}> {titulo} </label>
        <input type={tipo} name={nombre} />
    </div>
  );
}
