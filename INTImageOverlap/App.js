/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ImageOverlapView from './app/component/ImageOverlapView'

export default class App extends Component {
  render() {
    // List of ImageUrl/Images Array
    let photos = [require('./app/images/profile1.jpg'),
                  require('./app/images/profile2.jpg'),
                  require('./app/images/profile3.jpg'),
                 ];
 
    let photos2 = [require('./app/images/profile1.jpg'),
                  "https://googlechrome.github.io/samples/picture-element/images/butterfly.jpg",
                  "https://physics.aps.org/assets/8e06ab76-1239-4b4c-9f4f-a468e4529051/e18_1_medium.jpg",
                  require('./app/images/profile3.jpg'),
                  require('./app/images/profile3.jpg'),
    ];

    return (
      <View style={{flex:1,padding: 10, paddingTop: 30 , backgroundColor:'white', flexDirection :'column'}}>

        <View style={{flex :0.2, flexDirection :'column'}}>
          <Text style={{marginBottom: 15, color:'gray'}}>Image visible count is 3 and image list has 3 items</Text>
          <ImageOverlapView 
                photos = {photos}
                height={40} 
                borderColor={'#00ACC1'} 
                borderWidth={1}
                defaultVisibleCount={3}                
                countBackgroundColor={'#00ACC1'}
                countStyle = {{color: 'white', fontSize: 18}}
                >
          </ImageOverlapView>
        </View>

        <View style={{flex :1, flexDirection :'column'}}>
          <Text style={{marginBottom: 5, color:'gray'}}>Image visible count is 4 and image list has 5 items</Text>

           <ImageOverlapView 
               photos = {photos2}
               height={40} 
               borderColor={'#00ACC1'} 
               borderWidth={1}
               defaultVisibleCount={4}
               displayPercentage={60}
              //  countBackgroundColor={'#00ACC1'}
               countStyle = {{color: 'white', fontSize: 18}}
              >
          </ImageOverlapView>
        </View>
      </View>
    );
  }
}