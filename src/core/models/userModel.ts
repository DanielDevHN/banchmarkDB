import { IUser } from "../interfaces/IUsers";

class User implements IUser {
    nombre: string;
    apellido: string;
    email: string;
    ciudad: string;
    telefono: string;
    direccion: string;
    edad: number;
    estado_civil: string;
    genero: string;
    fecha_alta: Date;

    constructor(user: IUser) {
        this.nombre = user.nombre;
        this.apellido = user.apellido;
        this.email = user.email;
        this.ciudad = user.ciudad;
        this.telefono = user.telefono;
        this.direccion = user.direccion;
        this.edad = user.edad;
        this.estado_civil = user.estado_civil;
        this.genero = user.genero;
        this.fecha_alta = user.fecha_alta;
    }
}

export default User;