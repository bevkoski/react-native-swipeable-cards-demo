import React from 'react';
import { View, StyleSheet } from 'react-native';

import Swipeable from './Swipeable';

export default class App extends React.Component {
  static Cards = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      title: 'Objective C Developer',
      subtitle: 'New York City',
      buttonText: 'Apply Now'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500',
      title: 'React Native Developer',
      subtitle: 'San Francisco',
      buttonText: 'Learn More'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=500',
      title: 'Node.js Developer',
      subtitle: 'New York City',
      buttonText: 'Apply Now'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500',
      title: 'Python Developer',
      subtitle: 'Los Angeles',
      buttonText: 'Learn More'
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Swipeable cards={App.Cards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
