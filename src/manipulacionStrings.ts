export function agregarClase(clases: string, nuevasClases: string[]): string {
    let clasesRetornadas: string = clases;

    nuevasClases.forEach((clase: string) => {
        clasesRetornadas += !clasesRetornadas.includes(clase) ? ' ' + clase : '';
    });
    
    return clasesRetornadas;
}

export function quitarClase(clases: string, clasesRetiradas: string[]): string {
    let clasesFinales: string = clases;

    clasesRetiradas.forEach((clase) => {
        if (clasesFinales.includes(clase.toString())) {
            let ubicacionClase: number = clasesFinales.indexOf(clase.toString());
            let parteInicial: string = clasesFinales.substring(0, ubicacionClase);
            let parteFinal: string = clasesFinales.substring(ubicacionClase + (clase.toString().length), clasesFinales.length);
            clasesFinales = parteInicial + parteFinal;
        }
    });

    return clasesFinales;
}