import * as React from 'react';
import ContenedorVentana from '../components/ventanas/ContenedorVentana';
import InputSimple from '../components/inputs/InputSimple';
import { BotonSimple } from '../components/botones/BotonSimple';
import { Form } from 'react-router-dom';
import "./LogIn.css";
import "../styles/EstilosFlex.css";
import "../components/ventanas/ContenedorVentana.css";

export default function LogIn() {

    return (
        <ContenedorVentana forma='vertical' medida={50}>
            <Form method='post' action='/' className='contenedorFlex centrarContenido' style={{width: '100%', height: '100%'}}>
                <InputSimple titulo='Correo electrónico' nombre='email' tipo='text' />
                <InputSimple titulo='Clave' nombre='password' tipo='password' />
                <BotonSimple tipo='submit' titulo='Enviar' />
            </Form>
        </ContenedorVentana>
    );
}
