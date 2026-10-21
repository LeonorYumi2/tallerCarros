//Importamos los hooks de tancstack query
// -UseQuery: para consultas get
//useMutation: para operaciones POST(PUT/DELETE)
//useQueryClient: para interactuar con la cache(invalidar, refrecar)
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { carrosService } from '../api/carros.service'

//Definir una constante key que servira como identificador unico 
//para las queries relacionadas con carros
const KEY =['carros']

export function useCarros(){
    return useQuery({
        queryKey: ['carros'],
        queryFn: ()=>{
            console.log("GET ejecutado con tancstack")
            return carrosService.getAll()
    },
    staleTime: 1000*60*5
})  
}

export function useAgregarCarro(){
    const qc = useQueryClient()
    return useMutation({
        mutationFn: (marca:string) => carrosService.add(marca),
        onSuccess:() => qc.invalidateQueries({queryKey: KEY}),
    })
}