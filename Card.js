import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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
      <View style={{
        alignSelf: 'stretch',
        width: width - 2 * Card.Margin,
        margin: Card.Margin,
        backgroundColor: 'white',
      }}>
        <Image
          source={{uri: imageUrl}}
          style={{width: width - 2 * Card.Margin, height: width - 2 * Card.Margin}}
        />
        <View style={{
          flexDirection: 'row',
          padding: 10,
          borderWidth: 1,
          borderTopWidth: 0,
          borderColor: 'lightgray',
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
            <Text style={{color: 'gray'}}>{subtitle}</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              paddingVertical: 5,
              paddingHorizontal: 15
            }} onPress={() => {}}>
              <Text>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
