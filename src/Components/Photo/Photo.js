import React, { Fragment, useState } from 'react';
import { 
    Image, Text, TouchableOpacity, View
} from 'react-native';

import { likePhoto, likeImg } from '../../api/likes';

import estilo from './style'

const Photo = ({ urlPhoto, description, likeAmount }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likeAmount)

  const clickedLike = () => {
    const [newStateliked, qnt] = likePhoto(liked, likes)
    setLikes(qnt)
    setLiked(newStateliked)
  }
   return (
     <Fragment>
       <Image 
        source={{uri: urlPhoto}} 
        style={estilo.imagem}
      />
      <Text>{ description }</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={clickedLike}>
          <Image 
          source={likeImg(liked)} 
          style={estilo.like}
          />
        </TouchableOpacity>
        <Text>Curtidas { likes }</Text>
      </View>
     </Fragment>
   );
}; 
 
export default Photo;
 