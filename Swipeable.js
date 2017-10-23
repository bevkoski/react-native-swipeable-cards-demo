import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Interactable from 'react-native-interactable';

import Card from './Card'

export default class Swipeable extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
  };

  static Margin = 10;
  static BoundaryPadding = 30;
  static BoundaryBounce = 0;
  static ContainerToCardWidthRatio = 1.35;

  state = {
    cardWidth: 0,
    swipeableWidth: 0,
    snapPoints: [],
    swipeableBoundary: 0,
  };

  onLayout = e => {
    const containerWidth = e.nativeEvent.layout.width;
    const { cards } = this.props;

    // calculate the width of a card
    const cardWidth = containerWidth / Swipeable.ContainerToCardWidthRatio;
    this.setState({ cardWidth });

    // calculate total swipeable width
    const swipeableWidth = cardWidth * cards.length;
    this.setState({ swipeableWidth });

    // calculate incrementation amount for snap points
    const incrementAmountForOuterCards =
      cardWidth - (containerWidth - cardWidth) / 2 + Swipeable.Margin;
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
      cardsToRender = cards.map((card, index) =>
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          subtitle={card.subtitle}
          buttonText={card.buttonText}
          width={this.state.cardWidth} />
      )
    }

    return (
      <View onLayout={this.onLayout} style={styles.container}>
        <Interactable.View
          snapPoints={this.state.snapPoints}
          boundaries={{
            left: this.state.swipeableBoundary,
            right: Swipeable.BoundaryPadding,
            bounce: Swipeable.BoundaryBounce,
          }}
          horizontalOnly={true}
          animatedNativeDriver={true}
          style={[
            styles.interactableContainer,
            { width: this.state.swipeableWidth }
          ]}
        >
          {cardsToRender}
        </Interactable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  interactableContainer: {
    flexDirection: 'row',
    margin: Swipeable.Margin,
  },
});
