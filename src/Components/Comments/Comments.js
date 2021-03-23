import React, { Fragment, useEffect, useState } from 'react';
import { 
         Text, 
         Image, 
         ScrollView,
         Dimensions,
         StyleSheet,
         FlatList
} from 'react-native';

const Comments = ( {comments} ) => {
  return (
    <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>  
          <Text>{item.text}</Text>}
    />
  );
};

export default Comments;