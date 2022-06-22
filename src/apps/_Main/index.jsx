import React from 'react';
import { View } from 'react-native';
import { Balance, More, SendMoney } from './components'

import styles from './styles/Main.style'

export const Main = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <TopBar />
      <StatusBar barStyle='dark-content' backgroundColor='#F1F3FB' />


      <View>
        <Balance />
        <More navigation={navigation} />
        <SendMoney />
      </View>

      <Navigator></Navigator>
    </View>
  )
}