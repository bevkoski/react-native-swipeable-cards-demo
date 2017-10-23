import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };

  static Margin = 10;

  render() {
    const { title, subtitle, buttonText, imageUrl, width } = this.props;
    return (
      <View style={[styles.container, { width: width - 2 * Card.Margin }]}>
        <Image
          source={{uri: imageUrl}}
          style={{width: width - 2 * Card.Margin, height: width - 2 * Card.Margin}}
        />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: Card.Margin,
    backgroundColor: 'white',
  },
  content: {
    minHeight: 75,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'lightgray',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
  },
});
