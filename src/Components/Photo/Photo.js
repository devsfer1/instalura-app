import React, {Fragment} from 'react';
import { 
    Image, Text
} from 'react-native';

import estilo from './style'

const Photo = () => {
   return (
     <Fragment>
       <Image 
        source={require("../../../res/img/alura.jpg")} 
        style={estilo.imagem}
      />
      <Text>Descrição da Foto</Text>
     </Fragment>
      
   );
}; 
 
export default Photo;
 