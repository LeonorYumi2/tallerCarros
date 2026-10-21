import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useAgregarCarro, useCarros } from '../hooks/useCarros';

export default function App() {

  // Estado para manejar la marca ingresada
  const [marca, setMarca] = useState('');

  //get de tanstack query para manejar la carga, el cache y los estados
  const {data:carros = [], isLoading, error} = useCarros()

  //post: la mutacion invalida de la query carros y la lista se refresca
  const{mutate: agregarCarro} = useAgregarCarro()

  //POST: funcion para agregar un nuevo carro

  const agregar = async () => {
    agregarCarro(marca, {onSuccess:()=> setMarca('')})
  };

  //isLoading y error 
  //isLoading es true solo durante la primera carga, cuando aun no hay datos
  //Mientras tanto mostramos un texto en lugar de la pantalla con la lista vacia 
  if(isLoading) return <Text> Cargando ... </Text>
  //Si el get fallo (sin red, servidor, caido, etc) 'el metodo traer' trae la excepcion
  //Mostramos un mensaje y no seguimos al return principal 
  if(error) return <Text>Error: {error.message}</Text>

return(
    <View style = {{flex:1, paddingTop:60, backgroundColor: '#fff'}}>
    <TextInput
        value={marca}
        onChangeText = {setMarca}
        style = {{borderWidth:3}}
    />
    <Button title= "Agregar" onPress={agregar} />
    <FlatList
        data={carros}
        keyExtractor = {item => item.id}
        renderItem={({item}) =>
            <Text>{item.id} - {item.marca}</Text>
        }
    />
    </View>
)
}