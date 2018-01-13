import React from 'react'
import RNC from 'react-native-css'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import theme from 'src/config/theme'

export default class ListIconItem extends React.Component {

  static defaultIcon = require('src/assets/imgs/nim_image_download_failed.jpg')

  render () {
    const {
      onPress,
      icon = null,
      isDivider = true,
      iconSize,
      text
    } = this.props
    return <TouchableHighlight
      style={{backgroundColor: '#fff'}}
      underlayColor='#DDDDDD'
      onPress={(e) => onPress ? onPress() : null}>
      <View style={[styles.iconItem, isDivider ? styles.divider : null]}>
        <Image style={[styles.icon, iconSize]}
               source={icon || this.defaultIcon}/>
        <Text style={styles.text}>{text || '新的朋友'}</Text>
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
        margin-left: 16px;
    }

    .divider {
        border-bottom-width: 0.5px;
        border-bottom-color: ${theme.bgColor};
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
