import React from 'react'
import { View, Image, Text } from 'react-native'
import RNC from 'react-native-css'

export default class ChatHeader extends React.Component {
  render () {
    return (
      <View style={styles.header}>
        <Image style={styles.leftIcon} source={require('src/assets/imgs/ic_arrow_back_white_48dp.png')}/>
        <Text>橘子桑（62）</Text>
        <Image style={styles.rightIcon} source={require('src/assets/imgs/ic_arrow_back_white_48dp.png')}/>
      </View>
    )
  }
}

// language=CSS
const styles = RNC(`
    .header {

    }

    .leftIcon {
        width: 30px;
        height: 50px;
    }

    .rightIcon {

    }
`)
