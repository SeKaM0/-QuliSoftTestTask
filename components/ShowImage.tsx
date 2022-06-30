import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import { RootStackParams } from '../App';
import { deviceHeight, deviceWight } from './Gallery';

type Props = NativeStackScreenProps<RootStackParams, 'ShowImage'>
export const ShowImage:React.FC<Props> = ({route}) => {
  return (
    <View>
      <ImageBackground 
        source={{uri:route.params.url}} 
        style={{
          width: deviceWight,
          height: deviceHeight,
          
      }}/>
    </View>
  )
};
