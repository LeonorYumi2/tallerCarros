export interface Carro {
    id: string;
    marca: string;
    anio: number;
    modelo: string;
    color: string;
    kilometraje: number;
    precio: number;
}

export type CarroInput = Omit<Carro, 'id'>;