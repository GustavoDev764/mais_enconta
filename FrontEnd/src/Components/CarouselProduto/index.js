import React, {PureComponent, Fragment} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Produto from '../CarouselProduto/produto';



//import Json
import {Listprodutos} from '../../utils/produtoList';


export default class CarouselProduto extends PureComponent{

    constructor(props){
        super(props);
    }

    renderProdutos(item, index, openViewProdutoTrocaData){

        
        return item.produtos.map((produto, index)=>{
            
            return <Produto
                    key     = {index}
                    produto = {produto}
                    openViewProdutoTrocaData = {openViewProdutoTrocaData}
                />

        });
        

    }


    render() {

      const {openViewProdutoTrocaData} = this.props;

      return (
        <Fragment>

            <ScrollView
                horizontal
                
                showsHorizontalScrollIndicator={true}
                style={styles.scrollView}
                
            >

                {
                    Listprodutos.map((item, index)=>{
                        return this.renderProdutos(item, index, openViewProdutoTrocaData);
                    })
                }
            
            </ScrollView>

        </Fragment>
      )
    };
}

const styles = StyleSheet.create({

    scrollView:{
        marginLeft:2,
        marginRight:2,
    }
})