import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import RNC from 'react-native-css'

export default class Header extends React.Component {
  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>微信（156）</Text>
        <Image resizeMode='contain' style={[styles.headerImageSize, styles.headerImageSearch]}
               source={require('../../assets/imgs/ic_search_white.png')}/>
        <Image resizeMode='contain' style={[styles.headerImageSize, styles.headerImageAdd]}
               source={require('../../assets/imgs/ic_add_white.png')}/>
      </View>
    )
  }
}

const {width, height} = Dimensions.get('window')

// language=CSS
const styles = RNC(`
header {
    height: 50px;
    width: ${width};
    background-color: #373b3e;
    position: absolute;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
}

headerTitle {
    color: #fff;
    font-size: 20px;
}

headerImageSize {
    width: 30px;
    height: 50px;
}

headerImageAdd {
    position: absolute;
    right: 16px;
}

headerImageSearch {
    position: absolute;
    right: 64px;
}`)

