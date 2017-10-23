import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static Margin = 10;

  render() {
    const { width } = this.props;
    return (
      <View style={{
        alignSelf: 'stretch',
        width: width - 2 * Card.Margin,
        margin: Card.Margin,
        backgroundColor: 'white',
      }}>
        <Image
          source={{uri: 'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500'}}
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
            <Text style={{fontWeight: 'bold'}}>React Native Developer</Text>
            <Text style={{color: 'gray'}}>San Francisco</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              paddingVertical: 5,
              paddingHorizontal: 15
            }} onPress={() => {}}>
              <Text>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
