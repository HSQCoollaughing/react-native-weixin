import React from 'react'
import RNC from 'react-native-css'
import { View, Dimensions } from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import BottomTabBar from 'src/components/BottomTabBar/BottomTabBar'
import Header from 'src/components/Header/Header'

import ChatList from './ChatList/ChatList'
import Category from './Category/Category'
import Service from './Service/Service'
import Me from './Me/Me'

export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Header></Header>
        <ScrollableTabView
          renderTabBar={() => <BottomTabBar/>}
          tabBarPosition='overlayBottom'>
          <View tabLabel='微信' style={styles.container}>
            <ChatList/>
          </View>
          <View tabLabel='通讯录' style={styles.container}>
            <Category/>
          </View>
          <View tabLabel='发现' style={styles.container}>
            <Service/>
          </View>
          <View tabLabel='我' style={styles.container}>
            <Me/>
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

// language=CSS
const styles = RNC(`
    wrapper {
        height: ${Dimensions.get('window').height};
    }
    container{
     height: ${Dimensions.get('window').height - 50};
     margin-top: 50px;
     padding-bottom: 72px; 
    }
`)
