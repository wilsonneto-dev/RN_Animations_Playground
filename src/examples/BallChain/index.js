import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

// Animated.View
// Animated.Text
// Animated.View
// Animated.ScrollView

export default () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation1 = Animated.timing(ballY, {
      toValue: 200,
      duration: 1000,
    });

    const animation2 = Animated.timing(ballX, {
      toValue: 200,
      duration: 1000,
    });

    // Animated.parallel
    // Animated.stagger(100, [...])
    // Animated.delay(delayInt)

    // loop: ANimated.loop
    const sequence = Animated.sequence([animation1, animation2]);

    Animated.loop(sequence, {iterations: 2}).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: ballY, left: ballX}]} />
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
