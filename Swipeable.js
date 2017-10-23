import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Interactable from 'react-native-interactable';

export default class Swipeable extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  static TileMargin = 10;
  static BoundaryPadding = 30;
  static BoundaryBounce = 0;
  static TileToCardWidthRatio = 1.5;
  static CardWidthHeightRatio = 1.25;
  static CardMargin = 10;

  state = {
    cardWidth: 0,
    swipeableWidth: 0,
    snapPoints: [],
    swipeableBoundary: 0,
  };

  onLayout = e => {
    const tileWidth = e.nativeEvent.layout.width;
    const { cards } = this.props;

    // calculate the width of a card
    const cardWidth = tileWidth / Swipeable.TileToCardWidthRatio;
    this.setState({ cardWidth });

    // calculate total swipeable width
    const swipeableWidth = cardWidth * cards.length;
    this.setState({ swipeableWidth });

    // calculate incrementation amount for snap points
    const incrementAmountForOuterCards =
      cardWidth - (tileWidth - cardWidth) / 2 + Swipeable.TileMargin;
    const incrementAmountForInnerCards = cardWidth;

    // calculate snap points
    let currentSnapPointX = 0;
    let snapPoints = cards.map((card, index) => {
      const snapPointForCard = { x: currentSnapPointX };
      if (index === 0 || index === cards.length - 2) {
        currentSnapPointX -= incrementAmountForOuterCards
      } else {
        currentSnapPointX -= incrementAmountForInnerCards
      }
      return snapPointForCard
    });
    this.setState({ snapPoints });

    // calculate the swiping boundary
    const swipeableBoundary = snapPoints[cards.length - 1].x - Swipeable.BoundaryPadding;
    this.setState({ swipeableBoundary })
  };

  render() {
    const { cards } = this.props;
    let cardsToRender;

    if (this.state.cardWidth > 0) {
      cardsToRender = cards.map(card =>
        <View key={card} style={{
          width: this.state.cardWidth - 2 * Swipeable.CardMargin,
          height: this.state.cardWidth / Swipeable.CardWidthHeightRatio,
          margin: Swipeable.CardMargin,
          backgroundColor: 'blue'
        }} />
      )
    }

    return (
      <View onLayout={this.onLayout}>
        <Interactable.View
          snapPoints={this.state.snapPoints}
          boundaries={{
            left: this.state.swipeableBoundary,
            right: Swipeable.BoundaryPadding,
            bounce: Swipeable.BoundaryBounce,
          }}
          horizontalOnly={true}
          animatedNativeDriver={true}
          style={{
            flexDirection: 'row',
            width: this.state.swipeableWidth,
            margin: Swipeable.TileMargin,
          }}
        >
          {cardsToRender}
        </Interactable.View>
      </View>
    )
  }
}
