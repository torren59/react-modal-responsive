export function agregarClase(clases: String, nuevaClase: String[] | String){
    return clases.concat(' ' + nuevaClase);
}

export function quitarClase(clases: String, clasesRetiradas: String[]){
    
    let clasesFinales: String = clases;
    
    clasesRetiradas.forEach(clase => {
        let ubicacionClase = clasesFinales.indexOf(clase.toString());
        let parteInicial = clasesFinales.substring(0, ubicacionClase);
        let ParteFinal = clasesFinales.substring(ubicacionClase + (clase.toString().length), (clasesFinales.length));
        clasesFinales = parteInicial + ParteFinal;
    });

    return clasesFinales;
}


