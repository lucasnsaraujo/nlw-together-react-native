import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'; 
import { Text, ImageBackground, View, FlatList } from 'react-native'
import { styles } from './styles'

import BannerImg from '../../assets/banner.png'

import { Background } from './../../components/Background/index';
import { Header } from './../../components/Header/index';
import { ListHeader } from '../../components/ListHeader';
import { theme } from '../../global/styles/theme';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails(){

  const members = [
    {
      id: '1',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucasnsaraujo.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    },
  ]

  return (  

    <Background>
      <Header
      title='Detalhes'
      action={
        <BorderlessButton>
            <Fontisto
            name='share'
            size={24}
            color={theme.colors.primary}
            />
        </BorderlessButton>
      }
      />
      <ImageBackground 
      source={BannerImg}
      style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Agiotas Vitória
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos ganhar!
          </Text>
        </View>

      </ImageBackground>
      <ListHeader 
      title='Jogadores'
      subtitle='Total: 3'
      />
      <FlatList
      data={members}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
          <Member data={item}/>
      )}
      ItemSeparatorComponent={()=> <ListDivider/>}
      style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon
        title='Entrar na partida'
        />
      </View>

    </Background>

  )
}
