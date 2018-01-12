import React from 'react'
import RNC from 'react-native-css'
import { View, Image, Text } from 'react-native'

export default class ListIconItem extends React.Component {
  render () {
    return <View style={styles.iconItem}>
      <Image style={styles.icon}/>
      <Text style={styles.text}></Text>
    </View>
  }
}

// language=CSS
const styles = RNC(`
    iconItem {
        height: 64px;
        background-color: #fff;
    }

    icon {
        width: 50px;
        height: 50px;
    }
`)
