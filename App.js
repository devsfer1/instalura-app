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


const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const readPhotos = async() => {
      const photosHTTP = await fetch('http://192.168.1.10:3030/feed');
      const photosJSON = await photosHTTP.json();
      setPhotos(photosJSON);
    }

    readPhotos();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item })=> 
          <Fragment>
          <Header userName={item.userName} />
          <Photo />
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
