import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import RNC from 'react-native-css'
import { NativeRouter, Route, Link } from 'react-router-native'
import { Provider } from 'react-redux'

import store from './store'

import Home from './page/Home'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='#373b3e'/>
            <Route exact path='/' component={Home}/>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}

// language=CSS
const styles = RNC(`
    .container {
        flex: 1;
        background-color: #fff;
    }
`)
