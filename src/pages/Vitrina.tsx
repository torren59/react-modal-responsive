import * as React from 'react';
import ContenedorVentana from '../components/ventanas/ContenedorVentana';
import "./Vitrina.css";
import "../components/ventanas/ContenedorVentana.css";


export function Vitrina () {
  return (
    <ContenedorVentana forma='horizontal' medida={70}>
        <div className='Vitrina' >
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />
            <ContenedorVentana forma={'auto'} borde= {true} />

        </div>
    </ContenedorVentana>
  );
}
