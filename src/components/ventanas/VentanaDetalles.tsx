import * as React from 'react';
import ContenedorVentana from './ContenedorVentana';
import "./VentanaDetalles.css";

export interface VentanaDetallesProps {
    funcionCerrar: Function
    serial: string,
    nombre: string,
    valor: number,
    procesador: string,
    ram: string,
    almacenamiento: string,
}

export default function VentanaDetalles({ funcionCerrar, serial, nombre, valor, procesador, ram, almacenamiento }: VentanaDetallesProps) {
    return (
        <ContenedorVentana fatherIsContextProvider={false} forma='vertical' medida={70} borde={true} funcionCerrado={funcionCerrar}>
            <div className='VentanaDetalles'>
                <div className='Detalle'>
                <b>Serial </b>  {'. ' + serial}
                </div>
                <div className='Detalle'>
                <b>Nombre </b>  {'. ' + nombre}
                </div>
                <div className='Detalle'>
                <b>Procesador </b>  {'. ' + procesador}
                </div>
                <div className='Detalle'>
                <b>Ram </b>  {'. ' + ram}
                </div>
                <div className='Detalle'>
                <b>Almacenamiento </b>  {'. ' + almacenamiento}
                </div>
                <div className='Detalle'>
                <b>Valor </b>  {'. ' + valor}
                </div>
            </div>
        </ContenedorVentana>
    );
}
