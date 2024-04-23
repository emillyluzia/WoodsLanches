import React from 'react';
import CadastroProduto from './src/screens/CadastroProduto'
import Woods from './src/Woods';
import CadastroCliente from './src/screens/CadastroCliente'
import ListagemProduto from './src/screens/ListagemProduto';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function App(): React.ReactElement {
  
  
  return (
  <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='Woods' component={Woods} options={{headerShown: false}}/>
          <Stack.Screen name='CadastroCliente' component={CadastroCliente} options={{headerShown: false}}/>
          <Stack.Screen name='CadastroProduto' component={CadastroProduto} options={{headerShown: false}}/>
          <Stack.Screen name='ListagemProduto' component={ListagemProduto} options={{headerShown: false}}/>
       </Stack.Navigator>
  </NavigationContainer>
    
  );
}

export default App;