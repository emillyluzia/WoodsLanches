import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    preco: string; 
    ingredientes: string;
    images: any;
}

const cardapio: MenuItem[] = [ 
    
        {id: "1", nome: "𝙱𝚒𝚐 𝚆𝚘𝚘𝚍𝚜", preco: "R$20,00", ingredientes: "Pão gergelim + Duas carnes 75g + Fatias de Picles + Molho de Picles Americano + Alface + Cebola", images: require('./assets/images/bigWoods.jpg')},
        {id: "2", nome: "𝙱𝚕𝚊𝚌𝚔 𝚆𝚘𝚘𝚍𝚜", preco: "R$25,00", ingredientes: "Pão Brioche + Hambuger 150g + Fatias de Cheddar + Cebola Caramelizada + Fatias de Bacon + Tomate + Rúcula + Maionese", images: require('./assets/images/BlackWoods.jpg')},
        {id: "3", nome: "𝙲𝚑𝚒𝚌𝚔𝚎𝚗 𝚆𝚘𝚘𝚍𝚜", preco: "R$23,00", ingredientes: "Pão com Gergelim + Hamburguer de Carne de Frango (150g) + Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", images: require('./assets/images/ChickenWoods.jpg')},
        {id: "4", nome: "𝙲𝚛𝚒𝚜𝚙𝚢 𝚆𝚘𝚘𝚍𝚜", preco: "R$18,00", ingredientes: "Pão com Gergelim + Hamburguer de carne bovina (150g) + Queijo Crispy + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "5", nome: "𝙲𝚛𝚒𝚜𝚙𝚢 𝚆𝚘𝚘𝚍𝚜 𝙹𝚛.", preco: "R$19,00", ingredientes: "Pão com Gergelim + Hamburguer de carne bovina (75g) + Queijo Crispy + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "6", nome: "𝙵𝚛𝚒𝚎𝚍 𝙲𝚑𝚒𝚌𝚔𝚎𝚗", preco: "R$28,00", ingredientes: "Pão com Gergelim + filé de frango frito+ maionese + alface", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "7", nome: "𝚁𝚎𝚍 𝚆𝚘𝚘𝚍𝚜", preco: "R$30,00", ingredientes: "Pão Brioche + Duas carnes 150g + Fatias de Cheddar + Cebola + Fatias de Picles + Maionese + Ketchup + Mostarda", images: require('./assets/images/RedWoods.jpg')},
        {id: "8", nome: "𝚆𝚘𝚘𝚍𝚜 𝙱𝚊𝚌𝚘𝚗 𝙹𝚛.", preco: "R$29,00", ingredientes: "Pão com Gergelim + Hamburguer de carne Bovina(75g) + Fatias de Bacon + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "9", nome: "𝚆𝚘𝚘𝚍𝚜 𝙲𝚑𝚎𝚍𝚍𝚊𝚛 𝙾𝚗𝚒𝚘𝚗", preco: "R$20,00", ingredientes: "Pão Brioche + Hamburguer de Carne Bovina (150g) + Cebola Caramelizada + Fatias de Cheddar + Maionese", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "10", nome: "𝚆𝚘𝚘𝚍𝚜 𝙲𝚑𝚎𝚎𝚜𝚎𝚋𝚞𝚛𝚐𝚞𝚎𝚛 𝙹𝚛.", preco: "R$26,00", ingredientes: "Pão com Gergelim + Hamburguer de carne bovina (75g) + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "11", nome: "𝚆𝚘𝚘𝚍𝚜 𝙲𝚑𝚎𝚏𝚏", preco: "R$21,00", ingredientes: "Pão com Gergelim + Hamburguer de carne bovina (150g) + Fatias de Bacon + Queijo Mussarela + Orégano + Picles + Molho de Picles + Alface + Tomate", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "12", nome: "𝚆𝚘𝚘𝚍𝚜 𝙲𝚑𝚒𝚌𝚔𝚎𝚗 𝙱𝚊𝚌𝚘𝚗", preco: "R$20,00", ingredientes: "Pão com Gergelim + Filé de Frango + Fatias de Bacon + Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "13", nome: "𝚆𝚘𝚘𝚍𝚜 𝚂𝚊𝚕𝚊𝚍𝚊", preco: "R$35,00", ingredientes: "Pão com Gergelim + Hamburguer de carne bovina (150g) + Queijo Mussarela + Orégano + Alface + Tomate + cebola + Molho especial", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "14", nome: "𝚆𝚘𝚘𝚍𝚜 𝚅𝚎𝚐𝚎𝚝𝚊𝚛𝚒𝚊𝚗𝚘", preco: "R$24,00", ingredientes: "Pão Gergelim + Hamburguer Vegetariano + Mussarela + Oregano + Tomate + Alface + Pimenta Biquinho + Maionese Defumada", images: require('./assets/images/CrispyWoods.jpg')},
        {id: "15", nome: "𝚆𝚘𝚘𝚍𝚜 𝚂𝚊𝚕𝚊𝚍𝚊 𝙹𝚛.", preco: "R$20,00", ingredientes: "Pão com Gergelim + Hamburguer 75g + Queijo Mussarela + Orégano + Alface + Tomate + cebola + Molho especial", images: require('./assets/images/CrispyWoods.jpg')},
       
];

const renderCardapio = ({item} :{item:MenuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textoNome}>{item.nome}</Text>
        <Text style={styles.textoPreco}>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.images} style={styles.images}/>
      
    </TouchableOpacity>
);

function Woods(): React.JSX.Element{

return (
    <View style={styles.container}>
      <ImageBackground source={require('./assests/images/fundo.jpg')} resizeMode="cover" style={styles.imagebackground}>
        <StatusBar backgroundColor="gray" barStyle='light-content' />
        <View style={styles.header}>
            <Text style={styles.headerText}>𝚆𝙾𝙾𝙳𝚂🍔</Text>
            <Text style={styles.headerText2}>𝙾 𝚖𝚎𝚕𝚑𝚘𝚛 𝙷𝚊𝚖𝚋𝚞𝚛𝚐𝚞𝚎𝚛</Text>
        </View>
        <FlatList
      showsVerticalScrollIndicator={false}
      data={cardapio}
      renderItem={renderCardapio}
      keyExtractor={(item) => item.id}
     
     />
     </ImageBackground>
     
     <View style={styles.footer}>
         <TouchableOpacity>
            <Image
            source={require('./assests/images/home.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('./assests/images/pedido.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('./assests/images/menu.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('./assests/images/perfil.png')}
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
           backgroundColor: '#ff6961',
           padding: 20,
           marginVertical: 8,
           marginHorizontal: 16,
           borderRadius:20,
           borderColor: '#c63637',
          borderWidth: 4
        },
        header: {
           backgroundColor: '#c63637',
           alignItems: 'center',
           paddingVertical: 10,
           paddingHorizontal:107
        },
        headerText:{
           fontSize:30,
           fontWeight: 'bold',
           color: 'white'
        },
        headerText2: {
         fontSize:16,
           fontWeight: 'bold',
           color: 'white'
        },
        footer:{
          borderTopWidth:0.2,
          backgroundColor: '#c63637',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 10
        },
        footerIcon: {
          width: 30,
          height: 30
        },
        images: {
         width: 320,
         height: 170
        },
        imagebackground: {
         flex:1,
         justifyContent: 'center',
         resizeMode: 'cover',
         alignItems: 'center'
        },
        textoNome: {
         fontSize:25,
         borderBottomWidth: 2,
         borderBottomLeftRadius: -200,
         borderBottomColor: 'white'

        },
        textoPreco: {
         fontSize:20,
         color: 'white'
        }
        

});
export default Woods;

