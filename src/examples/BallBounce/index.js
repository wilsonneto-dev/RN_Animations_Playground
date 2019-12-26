import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

// Animated.View
// Animated.Text
// Animated.View
// Animated.ScrollView

export default () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));

  useEffect(() => {
    /*
    const animation = Animated.spring(ballY, {
      toValue: 500,
      bounciness: 30,
    });
    */
    const animation = Animated.decay(ballY, {
      velocity: 1,
    });

    animation.start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: ballY}]} />
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
