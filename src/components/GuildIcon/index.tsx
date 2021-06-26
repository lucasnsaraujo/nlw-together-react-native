import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

export function GuildIcon() {

  const uri = 'https://iconarchive.com/download/i59244/franksouza183/fs/Apps-counter-strike.ico'

  return (
    <Image
    source={{uri}}
    style={styles.image}
    resizeMode='cover'
    />
  )
}