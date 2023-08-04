import * as React from 'react';
import "./ContenedorVentana.css";
import "../../styles/EstilosFlex.css"



  interface ContenedorVentanaProps {
     children?: string | JSX.Element | string[] | React.ReactNode,
     forma: 'cuadrada' | 'horizontal' | 'vertical' | 'auto',
     medida?: number,
     borde?: boolean,
     funcionCerrado?: Function,
 }

/**
 * El contenedorVentana es un componente diseñado para definir la forma, tamaño y márgenes para la creación
 * de elementos tipo ventana o modal. Puede tomar una proporción 2/3 (Vertical), 3/2 (Horizontal) o 1:1 (cuadrada).
 * 
 * El tamaño será definido según la forma solicitada por el programador y la orientación de la 
 * pantalla (landscape o portrait) que muestra el contenido.
 * 
 * Los atributos recibidos son:
 * 
 * children -> Elementos jsx que corresponden al contenido del modal, para introducir este elemento basta 
 * con la apertura y cierre de las etiquetas del componenten y la ubicación del contenido en medio de las mismas
 * EJ:

 * <'ContenedorVentana'>
 * Contenido en JSX o String
 * <'ContenedorVentana /'>
 * 
 * medida -> La mendida en porcentaje (Valores entre 0 y 100) respecto a la pantalla que contendrá la 
 * ventana y la orientación de la pantalla, con el fin de garantizar que la ventana no supere el tamaño de 
 * monitor utilizado y cuente con la forma solicitada. Si el atributo forma tiene el valor de auto, la medida
 * no será tenida en cuenta
 * 
 * forma -> Este atriburto recibe los valores de 'cuadrada', 'horizontal' o 'vertical'. Una vez el desarrollador 
 * indica el tipo de ventana solicitada, el componente examina la orientación de la pantalla y determina junto
 * al valor en porcentaje del atributo 'medida' las dimensiones que debe tomar para cumplir con la solicitud del 
 * programador sin exceder las dimensiones de las pantallas
 * 
 * funcionCerrado -> Este atributo recibe una función (La cual puede contener un hook para el cambio de un estado 
 * en el componente padre); la ejecución de función indicará al padre la solicitud de desmontar el componente 
 * ContenedorPadre, en resumen, se encargará de cerrar la ventana, es opcional pues pueden haber ventanas 
 * que el usuario no deba cerrar
 * 
 */
export default function ContenedorVentana ({children = "...", forma, medida, borde, funcionCerrado}: ContenedorVentanaProps) {

  const altoPantalla: number = window.screen.height;
  const anchoPantalla: number = window.screen.width;
  let altoVentana: number | 'auto' = 'auto';
  let anchoVentana: number | 'auto' = 'auto';

  //Se definen las dimensiones de la ventana según las opciones especificadas (medida y forma)
  if(forma != 'auto' && typeof(medida) != 'undefined'){
    switch (forma) {
      case 'cuadrada':
        let ladoMenor: number = altoPantalla > anchoPantalla ? anchoPantalla : altoPantalla;
        altoVentana = (ladoMenor * medida) / 100; 
        anchoVentana = altoVentana;
      break;
      case 'horizontal':
        anchoVentana = (anchoPantalla*medida)/100;
        altoVentana = altoPantalla < (2*anchoVentana)/3 ? altoPantalla : (2*anchoVentana)/3;
      break;
      case 'vertical':
        altoVentana = (altoPantalla*medida)/100;
        anchoVentana = anchoPantalla < (2*altoVentana)/3 ? anchoPantalla : (2*altoVentana)/3;
      break;
    }
  }
  

  function cerrar(){
    typeof(funcionCerrado) != 'undefined' && funcionCerrado();
  }

  return (
    <div className='ContenedorVentana' style={{width: anchoVentana, height: altoVentana, border: borde ? '1px solid black' : ""}}   >
      {typeof(funcionCerrado) != 'undefined' && <div className='botonCerrado contenedorFlex centrarContenido' onClick={cerrar} > <b>X</b> </div>} 
        <div className='ContenidoVentana' >
        {children}
        </div>
    </div>
  );
}
