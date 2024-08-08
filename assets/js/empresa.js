export class Empresa{
constructor(idEmpresa, rut, nombre) {
    this.idEmpresa = idEmpresa;
    this.rut = rut;
    this.importaciones = []; // Lista de importaciones realizadas por la empresa
    }
}
agregarImportaciones(Importaciones) {
    this.importaciones.push(importacion);  
}

export class Importacion extends Empresa {

constructor (idProducto, nombreProducto, numeroProducto, precioProducto ){
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.numeroProducto = numeroProducto;
    this.precioProducto = precioProducto;
}

calcularPrecioindividual() {
    return this.numeroProducto * this.precioProducto;
}


}
calcularTotalImportaciones() {
    return this.importaciones.reduce((total, importaciones) => total + importaciones.calcularPrecioindividual, 0);
}
