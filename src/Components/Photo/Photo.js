import React, {Fragment} from 'react';
import { 
    Image, Text
} from 'react-native';

import estilo from './style'

const Photo = ({ urlPhoto, description }) => {
   return (
     <Fragment>
       <Image 
        source={{uri: urlPhoto}} 
        style={estilo.imagem}
      />
      <Text>{ description }</Text>
      <Image 
      source={catchLikeImg(0)} 
      style={estilo.like}
      />
     </Fragment>
      
   );
}; 

const catchLikeImg = (amountOfLikes) => {
  if(amountOfLikes > 0) {
    return require('../../../res/img/s2-checked.png');
  } else {
    return require('../../../res/img/s2.png');
  }
}
 
export default Photo;
 