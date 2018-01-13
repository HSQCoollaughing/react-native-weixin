import React from 'react'
import { View, Text } from 'react-native'
import RNC from 'react-native-css'
import IconItem from 'src/components/IconItem/IconItem'

export default class Service extends React.Component {
  render () {
    return <View>
      <View style={styles.block}/>
      <IconItem icon={require('src/assets/imgs/ic_friend_circle.png')} text="朋友圈"/>

    </View>
  }
}

// language=CSS
const styles = RNC(`
    .block {
        background-color: #CCCCCC;
        height: 24px;
    }
`)
