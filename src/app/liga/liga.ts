export class Liga {
  nombre: string;
  ciudad: string;
  direccion: string;
  telefono: number;
  enlaceRedesSociales: string;

  constructor(
    nombre: string,
    ciudad: string,
    direccion: string,
    telefono: number,
    enlaceRedesSociales: string
    ) {
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.direccion = direccion;
      this.telefono = telefono;
      this.enlaceRedesSociales = enlaceRedesSociales;
  }
}
