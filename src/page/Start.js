import React from 'react'
import { Image, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class Start extends React.Component {

  componentDidMount () {
    setTimeout(() => {
      this.props.history.replace('/home')
    }, 3000)
  }

  render () {
    return <Image style={{width, height}} resizeMode='stretch' source={require('src/assets/imgs/splash.jpg')}/>
  }
}