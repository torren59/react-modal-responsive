import * as React from 'react';
import ContenedorVentana from '../components/ventanas/ContenedorVentana';
import InputSimple from '../components/inputs/InputSimple';
import { BotonSimple } from '../components/botones/BotonSimple';
import "./LogIn.css";
import "../styles/EstilosFlex.css";

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
  return (
    <div className='contenedorFlex centrarContenido Layout'>
        {children}
    </div>
  );
}