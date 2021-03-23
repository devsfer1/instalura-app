import React, { Fragment, useState } from 'react';
import { 
    Image, Text, TouchableOpacity, View
} from 'react-native';

import estilo from './style'

const Photo = ({ urlPhoto, description, likeAmount }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likeAmount)

  const likePhoto = () => {
    if(liked) {

      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked)
  }
   return (
     <Fragment>
       <Image 
        source={{uri: urlPhoto}} 
        style={estilo.imagem}
      />
      <Text>{ description }</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={likePhoto}>
          <Image 
          source={LikeImg(liked)} 
          style={estilo.like}
          />
        </TouchableOpacity>
        <Text>Curtidas { likes }</Text>
      </View>
     </Fragment>
   );
}; 

const LikeImg = (liked) => {
  if(liked) {
    return require('../../../res/img/s2-checked.png');
  } else {
    return require('../../../res/img/s2.png');
  }
}
 
export default Photo;
 