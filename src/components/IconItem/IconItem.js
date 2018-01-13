import React from 'react'
import RNC from 'react-native-css'
import { View, Image, Text, TouchableHighlight } from 'react-native'

export default class ListIconItem extends React.Component {
  render () {
    return <TouchableHighlight
      style={{backgroundColor: '#fff'}}
      underlayColor='#DDDDDD'
      onPress={(e) => this.props.onPress ? this.props.onPress() : null}>
      <View style={styles.iconItem}>
        <Image style={[styles.icon, this.props.iconSize]}
               source={this.props.icon || require('src/assets/imgs/nim_image_download_failed.jpg')}/>
        <Text style={styles.text}>{this.props.text || '新的朋友'}</Text>
      </View>
    </TouchableHighlight>
  }
}

// language=CSS
const styles = RNC(`
    .iconItem {
        height: 56px;
        flex-direction: row;
        align-items: center;
        padding: 4px;
        padding-right: 16px;
        border-bottom-width: 0.5px;
        border-bottom-color: #DDDDDD;
        margin-left: 16px;
    }

    .icon {
        width: 36px;
        height: 36px;
    }

    .text {
        font-size: 16px;
        margin-left: 10px;
        color: #000;
    }
`)
