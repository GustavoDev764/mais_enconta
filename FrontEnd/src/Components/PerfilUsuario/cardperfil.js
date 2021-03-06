import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';


import Theme from '../../Style';

export default class CardPerfil extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){

        const {
            data,
            openViewEditDadosUser,
            openModal,
            trocaImage,
            image,

        } = this.props;


        return(
            <Fragment>

                <View style={styles.containerCard}>

                    <View style={styles.headCard}>

                        <View style={styles.containerNameHead}>
                            <Text style={[styles.titleCard, Theme.PrimaryColor]}> {data.name} </Text>
                        </View>

                        <TouchableOpacity onPress={()=>{openViewEditDadosUser(data)}} style={styles.containerIconHead}>
                            <FontAwesome name="edit" style={[Theme.iconSizeX1, Theme.PrimaryColor]} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bodyCard}>

                        <View style={styles.containerPerfil}>

                            <View style={{width: 150, height:150,}}>
                                <Image 
                                    source={{uri: !trocaImage ? data.image : image}} 
                                    style={styles.imageProfile}
                                    resizeMode="cover"
                                />

                                <TouchableOpacity onPress={openModal} style={styles.contianerEditeFoto}>
                                    <FontAwesome name="camera" style={[Theme.PrimaryColor, Theme.iconSizeX2]}  />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Email:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}> {data.email} </Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Cpf:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}> {data.cpf} </Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Telefone:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}> {data.telefone} </Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Data de Nasci.:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}> {data.nascimento} </Text>
                        </View>
                        
                    </View>

                </View>

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    containerCard:{
        marginBottom:15,
        padding:10,
        borderRadius:8,
        backgroundColor:"#FFF",
        flexDirection:"column",
        
    },

    containerPerfil:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:10,
        //borderWidth:1,
    },

    contianerEditeFoto:{
        position:"absolute",
        alignItems:"center",
        justifyContent:"center",
        bottom:0,
        left:0,
        width:33,
        height:33,
        //borderWidth:1,
    },

    imageProfile:{
        width: "100%",
        height:"100%",
        borderRadius: 8,
        
        resizeMode:"contain",
        borderColor: "#FFF",
       
    },

    headCard:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:.4,
        marginBottom:10,

    },

    titleCard:{
        fontSize:16,
        fontWeight:"bold",
        
    },

    containerNameHead:{
       // borderWidth:1,
        padding:2,
    },

    containerIconHead:{
       // borderWidth:1,
        padding:2,
    },

    bodyCard:{
        flexDirection:"column",

    },

    textRow:{
        flexDirection:"row",
        alignItems:"flex-start",
        alignContent:"center",
    },

    textTitle:{
        fontSize:15,
        fontWeight:"bold",
        marginRight:5,
    },

    textBody:{
        fontSize:15,

    }

});