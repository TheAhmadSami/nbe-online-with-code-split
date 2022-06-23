import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { register } from 'react-native-bundle-splitter';

export default register({
  loader: () => import('./Cards'),
  placeholder: () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#00ADF8" />
    </View>
  ),
});
