/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useState } from 'react';
import { 
         Text, 
         Image, 
         ScrollView,
         Dimensions,
         StyleSheet,
         FlatList
} from 'react-native';

import { Header } from './src/Components/Header/index';
import { Photo } from './src/Components/Photo/index';
import { Comments } from './src/Components/Comments/index';
import readPhotos from './src/api/feed'; 


const App = () => {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    readPhotos(setPhotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item })=> 
          <Fragment>
            <Header 
              userName={item.userName} 
              urlImage={item.userURL}
            />
            <Photo 
              urlPhoto={item.url}
              description={item.description}
              likeAmount={item.likes}
            />
            <Comments comments={item.comentarios}/>
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
