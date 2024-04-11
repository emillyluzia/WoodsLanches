import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, Image, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>(''); 
    const [ingredientes, setIngredientes] = useState<string>('');   
    const [imagem, setImagem] = useState<any>('');

     const CadastroProduto = async()=>{
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem', {
                   uri: imagem,
                   type:'image/jpeg',
                   name: new Date() + '.jpg'
        });

            const response = await axios.post('http://10.137.11.202:8000/api/produtos', formData, {
                    headers: {
                       'Content-Type': 'multipart/form-data' 
                    }
                
            });
        } catch(error) {
            console.group(error);
        }
     }

     const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuário')
            } else if(response.error){
                console.log('erro ao abrir a camera')
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }

        });
     }

     const selecionarImagem = () => {
        const options = { 
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidht: 2000

        }

        launchImageLibrary(options, (response)=>{
        if(response.didCancel){
            console.log('cancelado pelo usuário');
        } else if(response.error) {
            console.log('erro ao abrir a galeria')
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImagem(imageUri)
        }
    });
     }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#c63637" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>𝚆𝙾𝙾𝙳𝚂🍔</Text>
                <Text style={styles.headerText2}>𝙲𝙰𝙳𝙰𝚂𝚃𝚁𝙾 𝙳𝙴 𝙿𝚁𝙾𝙳𝚄𝚃𝙾𝚂</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do produto" value={nome} onChangeText={setNome}/>
                <TextInput style={styles.input} placeholder="Preço" value={preco} onChangeText={setPreco}/>
                <TextInput style={styles.input} placeholder="Ingredientes" value={ingredientes} onChangeText={setIngredientes} multiline/>

                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{uri: imagem }} style={styles.imageSelecionada}/> : null}
                </View>

                <TouchableOpacity style={styles.imageButton}onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={CadastroProduto}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.footer}>
         <TouchableOpacity>
            <Image
            source={require('../assests/images/home.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('../assests/images/pedido.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('../assests/images/menu.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
            source={require('../assests/images/perfil.png')}
            style={styles.footerIcon}
            />
         </TouchableOpacity>
     </View>
    
    </View>

        
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    header: {
        backgroundColor: '#c63637',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    headerText2: {
        fontSize:16,
          fontWeight: 'bold',
          color: 'white'
       },
    form: {
         padding: 10,
         backgroundColor: '#f0f0f0',
         marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    footer:{
        borderTopWidth:0.2,
        backgroundColor: '#c63637',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical:323
      },
    imageButton: {
        backgroundColor: '#c63637',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    footerIcon: {
        width: 30,
        height: 30
      },
    imageButtonText: {
        color:'white',
        fontWeight: 'bold'
    },
    imageSelecionada:{
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        alignItems: 'center'
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#c63637',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})


export default CadastroProduto;