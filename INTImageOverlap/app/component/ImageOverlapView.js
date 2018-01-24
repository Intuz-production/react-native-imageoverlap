// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';
import React, {Component} from "react";
import {View, Text, FlatList, Image, TouchableOpacity, Alert} from "react-native";
import styles from './styles'
import PropTypes from 'prop-types';

const propTypes = {
    photos: PropTypes.array.isRequired,
    height: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    defaultVisibleCount: PropTypes.number,
    displayPercentage : PropTypes.number,
    countBackgroundColor : PropTypes.string,
   };
 
const defaultProps = {
    photos:[],
    height:50,
    borderColor:'black',
    borderWidth:1,
    defaultVisibleCount:1,
    displayPercentage:50,
    countBackgroundColor : 'red',
    };

export default class ImageOverlapView extends Component {

   constructor(props) {
        super(props);    
    }

    render()
    {
        var photoView =[];
        var rightPadding = 0;
        var photoCount = 0;
        var distance = 0;
        var plusImageView = null;
        
        /** 
         * set display Imageview percentage and set validation
         */ 
        if(this.props.displayPercentage > 100){
           distance = this.props.height/2 
        }else{
           distance = (100-this.props.displayPercentage) * this.props.height/100
        }
        
        /**
         * Set Remaining Imageview CountView 
         */
        if(this.props.photos.length != 0){
             if(this.props.photos.length > this.props.defaultVisibleCount){

                 var imagePadding = this.props.defaultVisibleCount*distance;
                 var remaingImage = "+"+(this.props.photos.length-this.props.defaultVisibleCount);
                 photoCount = this.props.defaultVisibleCount;
                 plusImageView = <View style={{
                                        right:imagePadding,
                                        width:this.props.height,
                                        height:this.props.height,
                                        borderRadius:this.props.height/2,
                                        backgroundColor: this.props.countBackgroundColor,
                                        alignItems : 'center',
                                        justifyContent : 'center',}}>
                                    <Text style={[styles.textCountStyle,this.props.countStyle]}>
                                        {remaingImage}
                                    </Text>
                                </View>
             } else if(this.props.photos.length == this.props.defaultVisibleCount){
                plusImageView = null;
                photoCount = this.props.defaultVisibleCount;
             } else{
                 plusImageView = null;
                 photoCount = this.props.photos.length;
             }

            /**
             * Set loop for list of Imageview display
             */
            for(let i = 0; i < photoCount; i++){
                    if(i == 0){
                        rightPadding = 0;
                    }else{
                        rightPadding = i*distance;
                    }
                    photoView.push(
                        <View key = {i} style={{right:rightPadding}}>
                            <Image source = {typeof(this.props.photos[i]) === 'string'
                                        ? { uri: this.props.photos[i]}
                                        : this.props.photos[i]}
                                    
                                    style={{
                                    width:this.props.height,
                                    height:this.props.height,
                                    borderRadius:this.props.height/2,
                                    borderWidth:this.props.borderWidth,
                                    borderColor:this.props.borderColor,}}/>
                            
                        </View>)
                }
          }else{
               plusImageView = <Text>Photo is required</Text>
         }

		    return (
                   <View style={{flex:1, flexDirection:'row'}}>
                           {photoView}
                           {plusImageView}
                   </View>

                 );
	   }

}

ImageOverlapView.propTypes = propTypes;
ImageOverlapView.defaultProps = defaultProps;
module.exports = ImageOverlapView;
