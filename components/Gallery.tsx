import { NavigationContainerProps, NavigationProp, StackNavigationState, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {fetchImages} from '../api/api';
import { RootStackParams } from '../App';
import { useTypesSelector } from '../store';
import { Photo } from '../type/type';




export const deviceHeight = Dimensions.get('window').height;
export const deviceWight = Dimensions.get('window').width;

export const Gallery = () => {
  const dispatch = useDispatch();
  const {images} = useTypesSelector(state => state.images);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    dispatch(fetchImages());
  }, [])
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {images &&
          images.map(elem => (
            <TouchableOpacity key={elem.id} 
              onPress={() => {
                navigation.navigate('ShowImage', {
                  url:elem.links.download
                })
              }}
            >
              <View
                style={{
                  margin: 20,
                }}>
                <Image
                  source={{uri: elem.links.download}}
                  style={{
                    width: deviceWight / 3,
                    height: deviceHeight / 3,
                  }}
                />
                <Text>{elem.user.first_name}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};
