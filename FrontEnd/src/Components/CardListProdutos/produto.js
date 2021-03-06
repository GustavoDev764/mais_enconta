import React from 'react';
import {View, Text,TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Divider, Rating, Image} from 'react-native-elements';

const { width, height } = Dimensions.get('screen');

//import components
import PreLoading from '../PreLoading';
import Theme from '../../Style';

export default class Produto extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){

        const { produto } = this.props;

        const {

            id,
            title,
            valor,
            valorAnterio,
            rating,
            descricaoCurta,
            principaImage,
            images,
            
        } = produto;

        var valorArray = valor.split(',');

        return(
            <>
                <TouchableOpacity onPress={()=>{return this.props.openViewProduto(produto);}} 
                    style={styles.container}>
                                        
                                        
                    <View style={styles.imageContainer}>
                        <View style={styles.imagebody}>
                            <Image  
                                source={{uri: principaImage}}
                                style={styles.image} 
                                PlaceholderContent={<PreLoading />} 
                            />
                        </View>
                        
                    </View>
                                            
                    <View style={styles.containerPriceRating}>

                        <View style={{}}>
                            <Text style={[styles.textValorAnterio, Theme.TertiaryColor]}>
                                R$ {valorAnterio}
                            </Text>
                        </View>
                                                
                        <View style={styles.containerPrice}>
                            <Text style={[styles.textCoin, Theme.PrimaryColor]}>R$</Text>
                            <View style={styles.containerCents}>
                                <Text style={[styles.price, Theme.PrimaryColor]}>1.615</Text>
                                            
                                { ( parseFloat(valorArray[1]) > 0 ) ? 
                                        
                                    <Text numberOfLines={1} style={[styles.priceCents, Theme.PrimaryColor]}>,{valorArray[1]} </Text>
                                                
                                    : null}
                            </View>
                                        
                        </View>

                    
                        <View style={styles.containerRating}>
                            <Rating
                                imageSize={15}
                                readonly
                                ratingCount={5}
                                startingValue={rating}
                                onFinishRating={this.ratingCompleted}
                                style={styles.rating}
                                
                            />
                        </View>

                        <View style={styles.containerTextExpira}>
                            <Text style={styles.textExpira}>Expira em 2 dias</Text>
                        </View>

                        <View style={styles.containerText}>
                                               
                            <Text 
                                numberOfLines={2}
                                style={[styles.descricao, Theme.QuatroColor]}>
                                        
                                {descricaoCurta}
                            </Text>

                        </View> 

                            
                                    
                         

                            

                        

                    </View>
                                    
                </TouchableOpacity>
                <Divider />
            </>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row", 
        padding:10,
        justifyContent:"space-between",
        height: height * .19,
       
    },

    imageContainer:{
        height:"100%",
        width:"35%", 
        padding:1,
    },
    imagebody:{
        flex:1, 
        alignItems:"center",
        
    },

    image:{
        flex:1,
        width:90,
        height:90,
        resizeMode:"contain",
    },

    containerText:{

    },

    rating:{
        paddingVertical: 0,
    },

    containerPriceRating:{
        marginLeft: 3,
        padding:2,
        width:"65%",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        
    },

    containerPrice:{
        flexDirection:"row",
        marginTop:5,  
    },

    textCoin:{
        fontSize:17,
        fontWeight:"bold",
       
    },

    containerCents:{
        flexDirection:"row",
    },

    price:{
        fontSize:17,
        fontWeight:"bold",
        marginLeft:5,
        
    },

    priceCents:{
        fontSize:13,
        fontWeight:"bold",
        marginLeft:1,
       
    },

    containerRating:{
        marginLeft:0,
        marginTop:5,
        marginBottom:5,
    },

    descricao:{
        textAlign:"left",
        fontSize:12,
     
        padding:2,
        marginLeft:0,  
    },

    containerTextExpira:{
        position:"absolute",
        top:0,
        right:0,
    },

    textExpira:{
        fontSize:11,
        color:"red",
    },

    textValorAnterio:{
        fontSize:13,
        textDecorationLine:"line-through",
    },
});