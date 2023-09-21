import * as React from 'react';
import ContenedorVentana from '../components/ventanas/ContenedorVentana';
import "./Vitrina.css";
import "../components/ventanas/ContenedorVentana.css";
import productos from "../data/productos.json";
import VentanaDetalles, { VentanaDetallesProps } from '../components/ventanas/VentanaDetalles';

export function Vitrina () {
  let contenido: React.ReactNode = "";
  let ventanaDetalles: VentanaDetallesProps = {
    serial: '100',
    nombre: '',
    procesador: '',
    ram: '',
    almacenamiento: '',
    valor: 2000,
    funcionCerrar: cerrarEspecificacion
  }
  const [especificacion, asignarEspecificacion] = React.useState(false);
  const [especificaciones, formatearEspecificaciones] = React.useState(ventanaDetalles);



  function abrirEspecificacion(): void{
    asignarEspecificacion(true);
  }

  function cerrarEspecificacion(): void{
    asignarEspecificacion(false);
  }

  function traerEspecificaciones(serial:string): void{
    productos.productos.forEach((producto) => {
      if(serial == producto.serial){
        ventanaDetalles.nombre = producto.nombre;
        ventanaDetalles.serial = producto.serial;
        ventanaDetalles.procesador = producto.procesador;
        ventanaDetalles.ram = producto.ram;
        ventanaDetalles.almacenamiento = producto.Almacenamiento;
        ventanaDetalles.valor = producto.valor;
        formatearEspecificaciones(ventanaDetalles);
      }
    });
    abrirEspecificacion();
  }

  contenido = productos.productos.map((producto:any) =>
        { return (
        <ContenedorVentana fatherIsContextProvider = {true} forma={'cuadrada'} medida={43} borde= {true} >
        <div className='producto' onClick= { () => { traerEspecificaciones(producto.serial) } } >
          <div style={{width: '100%',display: 'flex' ,justifyContent: 'center'}}><b>Producto </b>  {'. ' + producto.nombre} </div>
          <div style={{width: '100%',display: 'flex' ,justifyContent: 'center'}}><b>Serial </b>  {'. ' + producto.serial}</div>
        </div>
        </ContenedorVentana>)

   })

  return (
    <div>
      <ContenedorVentana id='vitrinaPadre' forma='horizontal' medida={70}>
        <div className='Vitrina' >
          {contenido}
        </div>
      </ContenedorVentana>
      {especificacion ?(
        <div className='especificaciones'>
          <VentanaDetalles funcionCerrar={ especificaciones.funcionCerrar } serial = { especificaciones.serial } 
          nombre= {especificaciones.nombre} procesador= {especificaciones.procesador} ram= {especificaciones.ram}
          almacenamiento= {especificaciones.almacenamiento} valor={ especificaciones.valor} />
        </div>
      ) : ''}  
    </div>
  );
}
