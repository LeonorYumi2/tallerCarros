//Importamos los hooks de tancstack query
// -UseQuery: para consultas get
//useMutation: para operaciones POST(PUT/DELETE)
//useQueryClient: para interactuar con la cache(invalidar, refrecar)
import { useQuery, useMutation, useQueryClient, useMutationState } from '@tanstack/react-query'
import { carrosService } from '../api/carros.service'
import type { Carro, CarroInput } from '../types/carro'

//Definir una constante key que servira como identificador unico 
//para las queries relacionadas con carros
const KEY = ['carros'] as const
const DELETE_KEY = [...KEY, 'eliminar'] as const

export function useCarrosEliminandoIds() {
    const variables = useMutationState({
        filters: { mutationKey: DELETE_KEY, status: 'pending' },
        select: (mutation) => mutation.state.variables,
    })

    return variables.filter((id): id is string => typeof id === 'string')
}

export function useCarros(){
    return useQuery({
        queryKey: KEY,
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
        mutationFn: (carro: CarroInput) => carrosService.add(carro),
        onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
    })
}

export function useEditarCarro(){
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({ id, carro }: { id: string; carro: CarroInput }) =>
            carrosService.update(id, carro),
        onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
    })
}

export function useEliminarCarro(){
    const qc = useQueryClient()
    return useMutation({
        mutationKey: DELETE_KEY,
        mutationFn: (id: string) => carrosService.remove(id),
        onMutate: async (id) => {
            await qc.cancelQueries({ queryKey: KEY })
            const previousCarros = qc.getQueryData<Carro[]>(KEY)
            qc.setQueryData<Carro[]>(KEY, (carros) =>
                carros?.filter((carro) => carro.id !== id),
            )
            return { previousCarros }
        },
        onError: (_error, _id, context) => {
            if (context?.previousCarros !== undefined) {
                qc.setQueryData(KEY, context.previousCarros)
            }
        },
        onSettled: () => qc.invalidateQueries({ queryKey: KEY }),
    })
}