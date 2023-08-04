import * as React from 'react';
import "../../styles/EstilosFlex.css";
import "./BotonSimple.css";


interface BotonSimpleProps {
    tipo: 'submit' | 'button',
    titulo: string,
    accion?: Function
}

export function BotonSimple ({tipo, titulo, accion}: BotonSimpleProps) {

    let clases: string = 'contenedorFlex centrarContenido botonSimple botonConfirmacion';

    function actuar(){
      typeof(accion) != 'undefined' && accion();
    }

  return (
    <div>
      <button className={clases} type={tipo} onClick={actuar} >{titulo}</button>
    </div>
  );
}
