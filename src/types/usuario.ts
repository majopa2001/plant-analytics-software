
export interface Usuario {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  empresa: string;
  rol: string;
  fechaRegistro: string;
  ultimoAcceso: string;
  plan: string;
  avatar: string;
}

export interface Finca {
  id: number;
  nombre: string;
  ubicacion: string;
  tamaño: string;
  cultivos: string[];
  sensores: number;
  estado: string;
}

export interface Actividad {
  fecha: string;
  accion: string;
  detalles: string;
}
