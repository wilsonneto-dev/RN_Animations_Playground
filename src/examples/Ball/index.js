import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

// Animated.View
// Animated.Text
// Animated.View
// Animated.ScrollView

export default () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
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
