import React from 'react';
import { View, StyleSheet } from 'react-native';

import Swipeable from './Swipeable';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swipeable cards={['One', 'Two', 'Three', 'Four']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
