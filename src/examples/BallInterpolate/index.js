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
      toValue: 300,
      duration: 1000,
    });

    animation1.start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            top: ballY,
            opacity: ballY.interpolate({
              inputRange: [0, 150, 300],
              outputRange: [1, 1, 0.2],
              extrapolate: 'clamp',
            }),
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
