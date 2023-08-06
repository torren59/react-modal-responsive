import * as React from 'react';
import ContenedorVentana from '../components/ventanas/ContenedorVentana';
import "./Vitrina.css";
import "../components/ventanas/ContenedorVentana.css";


export function Vitrina () {

  React.useEffect(() => {
    fetch("../data/productos.json")
    .then((response) => {
      
    });
  }, []);
  return (
    <ContenedorVentana id='vitrinaPadre' forma='horizontal' medida={70}>
        <div className='Vitrina' >
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />

        </div>
    </ContenedorVentana>
  );
}
