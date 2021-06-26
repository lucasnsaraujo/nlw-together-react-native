import React from 'react'
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'


import { styles } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props) {

  const guilds = [
    {
      id: '1',
      name: 'Um',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Dois',
      icon: 'image.png',
      owner: true
    },
    {
      id: '3',
      name: 'tres',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'quatro',
      icon: 'image.png',
      owner: true
    },
    {
      id: '5',
      name: 'cinco',
      icon: 'image.png',
      owner: true
    },
    {
      id: '6',
      name: 'seis',
      icon: 'image.png',
      owner: false
    },
    {
      id: '7',
      name: 'sete',
      icon: 'image.png',
      owner: true
    },
    {
      id: '8',
      name: 'oito',
      icon: 'image.png',
      owner: false
    },
    {
      id: '9',
      name: 'nove',
      icon: 'image.png',
      owner: true
    },
    {
      id: '10',
      name: 'dez',
      icon: 'image.png',
      owner: true
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
      data={guilds}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <Guild
        data={item}
        onPress={() => handleGuildSelect(item)}
        />
      )}
      ItemSeparatorComponent={()=>(<ListDivider/>)}
      style={styles.guilds}
      contentContainerStyle={{paddingBottom: 40, paddingTop: 103}}
      ListHeaderComponent={()=><ListDivider/>}
      />
    </View>
  )
}