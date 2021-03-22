import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './style'

const Header = ({ userName }) => {
  return (
    <View style={estilo.cabecalho}>
        <Image 
        source={require("../../../res/img/alura.jpg")} 
        style={estilo.fotoUsuario}
        />
        <Text>{userName}</Text>
    </View>
    
  );
}

export default Header;