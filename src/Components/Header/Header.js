import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './style'

const Header = ({ userName, urlImage }) => {
  return (
    <View style={estilo.cabecalho}>
        <Image 
        source={{ uri: urlImage }} 
        style={estilo.fotoUsuario}
        />
        <Text>{userName}</Text>
    </View>
    
  );
}

export default Header;