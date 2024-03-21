import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    preco: string; 
    lista: string;
    images: any;
}

const cardapio: MenuItem[] = [
    {id: "1", nome: "Big Woods", preco: "R$20,00", lista: "Pão gergelim + Duas carnes 75g + Fatias de Picles + Molho de Picles Americano + Alface + Cebola", images: require('./assets/images/bigwoods.jpg')},
    {id: "2", nome: "Black Woods", preco: "R$25,00", lista: "Pão Brioche + Hambuger 150g + Fatias de Cheddar + Cebola Caramelizada + Fatias de Bacon + Tomate + Rúcula + Maionese", images: require('./assets/images/BlackWoords.jpg')},
    {id: "3", nome: "Chicken Woods", preco: "R$23,00", lista: "Pão com Gergelim + Hamburguer de Carne de Frango (150g) + Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", images: require('./assets/images/ChickenWoods.jpg')},
    {id: "4", nome: "Crispy Woods", preco: "R$18,00", lista: "Pão com Gergelim + Hamburguer de carne bovina (150g) + Queijo Crispy + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/CrispyWoods.jpg')},
    {id: "5", nome: "Crispy Woods Jr.", preco: "R$19,00", lista: "Pão com Gergelim + Hamburguer de carne bovina (75g) + Queijo Crispy + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/CrispyWoodsJr.jpg')},
    {id: "6", nome: "Fried Chicken", preco: "R$28,00", lista: "Pão com Gergelim + filé de frango frito+ maionese + alface", images: require('./assets/images/FriedChicken.jpg')},
    {id: "7", nome: "Red Woods", preco: "R$30,00", lista: "Pão Brioche + Duas carnes 150g + Fatias de Cheddar + Cebola + Fatias de Picles + Maionese + Ketchup + Mostarda", images: require('./assets/images/RedWoods.jpg')},
    {id: "8", nome: "Woods Bacon Jr.", preco: "R$29,00", lista: "Pão com Gergelim + Hamburguer de carne Bovina(75g) + Fatias de Bacon + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/WoodsBaconJr.jpg')},
    {id: "9", nome: "Woods Cheddar Onion", preco: "R$20,00", lista: "Pão Brioche + Hamburguer de Carne Bovina (150g) + Cebola Caramelizada + Fatias de Cheddar + Maionese", images: require('./assets/images/CheddarOnion.jpg')},
    {id: "10", nome: "Woods Cheeseburguer Jr.", preco: "R$26,00", lista: "Pão com Gergelim + Hamburguer de carne bovina (75g) + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/WoodsCheeseburger.jpg')},
    {id: "11", nome: "Woods Cheff", preco: "R$21,00", lista: "Pão com Gergelim + Hamburguer de carne bovina (150g) + Fatias de Bacon + Queijo Mussarela + Orégano + Picles + Molho de Picles + Alface + Tomate", images: require('./assets/images/WoodsChef.jpg')},
    {id: "12", nome: "Woods Chicken Bacon", preco: "R$20,00", lista: "Pão com Gergelim + Filé de Frango + Fatias de Bacon + Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", images: require('./assets/images/WoodsChickenBacon.jpg')},
    {id: "13", nome: "Woods Salada", preco: "R$35,00", lista: "Pão com Gergelim + Hamburguer de carne bovina (150g) + Queijo Mussarela + Orégano + Alface + Tomate + cebola + Molho especial", images: require('./assets/images/WoodsSalada.jpg')},
    {id: "14", nome: "Woods Vegetariano", preco: "R$24,00", lista: "Pão Gergelim + Hamburguer Vegetariano + Mussarela + Oregano + Tomate + Alface + Pimenta Biquinho + Maionese Defumada", images: require('./assets/images/WoodsVegetariano.jpg')},
    {id: "15", nome: "Woods Salada Jr.", preco: "R$20,00", lista: "Pão com Gergelim + Hamburguer 75g + Queijo Mussarela + Orégano + Alface + Tomate + cebola + Molho especial", images: require('./assets/images/WoodsSaladaJr.jpg')},
    
];

const renderCardapio = ({item} :{item:MenuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.lista}</Text>
        <Image source={item.images}/>
    </TouchableOpacity>
);



function Woods(): React.JSX.Element{

return (
    <View style={styles.container}>
        <StatusBar backgroundColor="gray" barStyle='light-content' />
        <View style={styles.header}>
            <Text style={styles.headerText}>Woods-Cardápio</Text>
        </View>
     <FlatList
      showsVerticalScrollIndicator={false}
      data={cardapio}
      renderItem={renderCardapio}
      keyExtractor={(item) => item.id}
     
     />
     <View style={styles.footer}>
         <TouchableOpacity>
            <Image
            source={require('./assets/images/home.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('./assets/images/pedido.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('./assets/images/menu.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('./assets/images/perfil.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
     </View>
    </View>
)
}
const styles = StyleSheet.create({
        container: {
           flex:1,
          
        },
        item: {
           backgroundColor: 'pink',
           padding: 20,
           marginVertical: 8,
           marginHorizontal: 16
        },
        header: {
           backgroundColor: 'gray',
           alignItems: 'center',
           paddingVertical: 20
        },
        headerText:{
           fontSize:20,
           fontWeight: 'bold',
           color: 'white'
        },
        footer:{
          borderTopWidth:0.2,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 10
        },
        footerIcon: {
          width: 30,
          height: 30
        }
        

});
export default Woods;

