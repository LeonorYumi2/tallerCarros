//importar el cliente axios y el tipo de carro
import {client} from './client'
import {Carro} from '../types/carro'

//Definir un servicio llamado carroService
//el Servicio centraliza las operaciones de la entidad carro
//retorna una promesa con un arreglo de objeto 
//poner metodos asincronicos para interactuar con la API

export const carrosService ={
    //Metodo GET
    getAll: async(): Promise<Carro[]> =>{
        const {data} = await client.get<Carro[]>('patio')
        return data
    },

    //MEtodo POST: agregar un nuevo carro, retornar la promesa con el objeto creado
add: async (marca: string): Promise<Carro> => {
        const { data } = await client.post<Carro>('patio', { marca })
        return data
    }
}