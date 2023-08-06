import  * as React from 'react';
import "./ContenedorVentana.css";
import "../../styles/EstilosFlex.css"



  interface ContenedorVentanaProps {
    id?: string,
    fatherIsContextProvider?: boolean,
    children?: string | JSX.Element | string[] | React.ReactNode,
    forma: 'cuadrada' | 'horizontal' | 'vertical' | 'auto',
    medida?: number,
    borde?: boolean,
    funcionCerrado?: Function,
 }


let medidasContenedorVentana = React.createContext({alto:0, ancho: 0});

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
export default function ContenedorVentana ({id ,fatherIsContextProvider ,children = "...", forma, medida, borde, funcionCerrado}: ContenedorVentanaProps) {
  let contexto = React.useContext(medidasContenedorVentana);
  let altoPantalla: number = contexto.alto !== 0 && fatherIsContextProvider ? contexto.alto : window.screen.height;
  let anchoPantalla: number = contexto.ancho !==0 && fatherIsContextProvider ? contexto.ancho :  window.screen.width;
  let child: React.ReactNode;
  const [elemento, setElemento] = React.useState({alto: 0, ancho: 0});


  /**Se define por defecto dimesiones de la ventana como auto, de modo que si la forma solicitada es auto
   * los valores ya habrían sido asignados y estaría listo para rederizar*/
  let altoVentana: number | 'auto' = 'auto';
  let anchoVentana: number | 'auto' = 'auto';

  //Se definen las dimensiones de la ventana según las opciones especificadas (medida y forma)
  if(forma !== 'auto' && medida !== undefined){
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

  /**Rescatando las dimensiones del contenedor para ser inyectadas en los contenedores hijos u otros
   * elementos que necesiten de esta información por medio  */
  React.useEffect(() => {
    let element = id !== undefined ? document.getElementById(id) : null;
    let altoInterno: number = 0;
    let anchoInterno: number = 0;
    if(element !== null){
      altoInterno = Number.parseInt(element.style.height);
      anchoInterno = Number.parseInt(element.style.width);
    }

    let dimensiones = {
      "alto": altoInterno,
      "ancho": anchoInterno
    }

    setElemento(dimensiones);
  },[]);

  /** Se asigna el valor de la propiedad child, dependiendo de la obtención de la info del propio contenedor mediante
   * el useEffect con el fin de poder renderizar los componentes hijos teniendo el contexto disponible con las
   * dimensiones del componente padre */
  if(elemento.alto !== 0 && elemento.ancho !== 0 && id !== undefined){
    child = (
      <medidasContenedorVentana.Provider value = {elemento} >
        {children}
      </medidasContenedorVentana.Provider>
    );
  }
  else if(id === undefined){
    child = children;

  }
  else {
    child = <p>Cargando contenido</p>
  }


  /**funcionCerrado es una función que llama al useStatePadre, por lo cual el elemento que contiene un
  ContenedorVentana debe definir cómo funcionará la lógica del useSate para el cerrado del contenedor*/
  function cerrar(){
    typeof(funcionCerrado) != 'undefined' && funcionCerrado();
  }

  return (
    <div id= {id !== undefined ? id : ""} className='ContenedorVentana' style={{width: anchoVentana, height: altoVentana, border: borde ? '1px solid black' : ""}}   >
      {funcionCerrado !== undefined && <div className='botonCerrado contenedorFlex centrarContenido' onClick={cerrar} > <b>X</b> </div>} 
        <div className='ContenidoVentana' >
          {child}
        </div>
    </div>
  );
}
