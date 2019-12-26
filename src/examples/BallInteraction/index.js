import React, {useEffect, useState, useMemo} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';

// Animated.View
// Animated.Text
// Animated.View
// Animated.ScrollView

export default () => {
  const [ballXY, setBallXY] = useState(new Animated.ValueXY({x: 0, y: 0}));

  const panResponder = useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: ballXY.x,
            dy: ballXY.y,
          },
        ],
        {
          listener: (e, gestureState) => {
            console.log('moved...');
          },
        },
      ),

      onPanResponderGrant: (e, gestureState) => {
        ballXY.setOffset({
          x: ballXY.x._value,
          y: ballXY.y._value,
        });
        ballXY.setValue({x: 0, y: 0});
      },

      onPanResponderRelease: () => {
        ballXY.flattenOffset();
      },
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.ball,
          {
            transform: [{translateX: ballXY.x}, {translateY: ballXY.y}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    backgroundColor: '#FF0000',
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});
