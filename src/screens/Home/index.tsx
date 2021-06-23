import React from 'react'
import { View } from 'react-native'
import { Profile } from '../../components/Profile';
import { styles } from './styles';


export default function Home() {
  return (

    <View style={styles.header}>
        <Profile/>
    </View>

  );
}