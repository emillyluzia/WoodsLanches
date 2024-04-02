import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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

interface MenuBebidas {
   id: string;
   nome: string;
   preco: string; 
   images: any;

}

const bebida: MenuBebidas[] = [ 
    
   {id: "1", nome: "𝙰́𝚐𝚞𝚊 𝚜𝚎𝚖 𝚐𝚊́𝚜", preco: "R$2,00", images: require('./assests/images/aguasemgas.png')},
   {id: "2", nome: "𝙰́𝚐𝚞𝚊 𝚜𝚎𝚖 𝚐𝚊́𝚜", preco: "R$4,50", images: require('./assests/images/coca.png')},
   {id: "3", nome: "𝚂𝚞𝚌𝚘𝚜 𝙽𝚊𝚝𝚞𝚛𝚊𝚒𝚜", preco: "R$9,00", images: require('./assests/images/suco1.png')},
   {id: "4", nome: "𝙶𝚞𝚊𝚛𝚊𝚗𝚊́ 𝙻𝚊𝚝𝚊", preco: "R$3,50", images: require('./assests/images/gua.png')},
   {id: "5", nome: "𝙲𝚘𝚌𝚊-𝙲𝚘𝚕𝚊 𝟸𝙻", preco: "R$11,00", images: require('./assests/images/cocalitro.png')},
   

];

interface MenuAcompanhamentos {
   id: string;
   nome: string;
   preco: string; 
   images: any;

}

const acompanhamentos: MenuAcompanhamentos[] = [ 
    
   {id: "1", nome: "𝙵𝚛𝚒𝚝𝚊𝚜 𝟷𝟶𝟶𝚐", preco: "R$8,00", images: require('./assests/images/100g1.png')},
   {id: "2", nome: "𝙵𝚛𝚒𝚝𝚊𝚜 𝚌𝚘𝚖 𝙱𝚊𝚌𝚘𝚗 𝚎 𝚀𝚞𝚎𝚒𝚓𝚘", preco: "R$15,00", images: require('./assests/images/baconequeijo.png')},
   {id: "3", nome: "𝙵𝚛𝚒𝚝𝚊𝚜 𝚌𝚘𝚖 𝙲𝚑𝚎𝚍𝚍𝚊𝚛 𝚎 𝙱𝚊𝚌𝚘𝚗", preco: "R$18,00", images: require('./assests/images/cheddarbacon.png')},
   {id: "4", nome: "𝙱𝚊𝚝𝚊𝚝𝚊 𝙶𝚛𝚊𝚗𝚍𝚎 𝟻𝟶𝟶𝚐", preco: "R$19,50", images: require('./assests/images/grande.png')},
   {id: "5", nome: "Fritas e Calabresa", preco: "R$17,00", images: require('./assests/images/calabresa.png')},
   

];

const renderCardapio = ({item} :{item:MenuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textoNome}>{item.nome}</Text>
        <Text style={styles.textoPreco}>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.images} style={styles.images}/>
        <TouchableOpacity>
         <Image source={require('./assests/images/adicionar.png')} style={styles.images4}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assests/images/subtracao.png')} style={styles.images5}></Image>
        </TouchableOpacity>
    </TouchableOpacity>
    
);

const renderAcompanhamentos = ({item} :{item:MenuAcompanhamentos})=>(
   <TouchableOpacity style={styles.item}>
       <Text style={styles.textoNome}>{item.nome}</Text>
       <Text style={styles.textoPreco}>{item.preco}</Text>
       <Image source={item.images} style={styles.images3}/>
       <TouchableOpacity>
         <Image source={require('./assests/images/adicionar.png')} style={styles.images4}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assests/images/subtracao.png')} style={styles.images5}></Image>
        </TouchableOpacity>
   </TouchableOpacity>
);

const renderBebida = ({item} :{item:MenuBebidas})=>(
   <TouchableOpacity style={styles.item}>
       <Text style={styles.textoNome}>{item.nome}</Text>
       <Text style={styles.textoPreco}>{item.preco}</Text>
       <Image source={item.images} style={styles.images2}/>
       <TouchableOpacity>
         <Image source={require('./assests/images/adicionar.png')} style={styles.images4}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assests/images/subtracao.png')} style={styles.images5}></Image>
        </TouchableOpacity>
   </TouchableOpacity>
);

function Woods2(): React.JSX.Element{

return (
    <View style={styles.container}>
      <ImageBackground source={require('./assests/images/fundo.jpg')} resizeMode="cover" style={styles.imagebackground}>
        <StatusBar backgroundColor="gray" barStyle='light-content' />
        <View style={styles.header}>
            <Text style={styles.headerText}>𝚆𝙾𝙾𝙳𝚂🍔𝙼𝙴𝙽𝚄</Text>
            <Text style={styles.headerText2}>𝙾 𝚖𝚎𝚕𝚑𝚘𝚛 𝙷𝚊𝚖𝚋𝚞𝚛𝚐𝚞𝚎𝚛</Text>
            
        </View>
        
        <ScrollView>
         <View style={styles.alinhamento}>
         <TextInput
         style={styles.input}
         placeholder="Pesquisar"
         placeholderTextColor={"black"}/>
         </View>
         
        <Text style={styles.item3}>𝙲𝙰𝚁𝙳𝙰𝙿𝙸𝙾</Text>
        <FlatList
      showsVerticalScrollIndicator={false}
      data={cardapio}
      renderItem={renderCardapio}
      keyExtractor={(item) => item.id}
     
     />
    
     </ScrollView>
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
           fontSize:25,
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
        },
        images2: {
         width: 100,
         height: 170
        },
        images3: {
         width: 290,
         height: 200
        },
        images4: {
          width:30,
          height: 30,
          marginTop: 8
        },
        images5:{
         height: 30,
         width: 30,
         marginLeft: 35,
         marginTop: -30

        },
        item2: {
         backgroundColor: '#c63637',
         padding: 10,
         marginVertical: 8,
         marginHorizontal: 16,
         borderRadius:20,
         borderColor: '#ff6961',
        borderWidth: 4,
        fontSize:30,
        paddingHorizontal: 100
      },
      item3: {
         backgroundColor: '#c63637',
         padding: 10,
         marginVertical: 8,
         marginHorizontal: 16,
         borderRadius:20,
         borderColor: '#ff6961',
        borderWidth: 4,
        fontSize:30,
        paddingHorizontal: 100
      },
      item4: {
         backgroundColor: '#c63637',
         padding: 10,
         marginVertical: 8,
         marginHorizontal: 16,
         borderRadius:20,
         borderColor: '#ff6961',
        borderWidth: 4,
        fontSize:30,
        paddingHorizontal: 36
      },
      input:{
         backgroundColor: '#c63637',
         height:36,
         width:300,
         marginBottom:20,
         borderRadius:25,
         borderWidth:1,
         borderColor: 'black'
      },
      alinhamento:{
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: "90%",
         paddingHorizontal: 50,
         marginTop: 13,
         
      }
        
        

});
export default Woods2;

