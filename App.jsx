import {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '80%']
  });

  const moonColor = moonAnimation.interpolate({
    inputRange: [0,  0.5, 1],
    outputRange: ['#BDBDBD', 'black', '#BDBDBD']
  });

  const moonTop = moonAnimation.interpolate({
    inputRange: [0, 0.2, 0.3, 0.4, 0.45, 0.48, 0.5, 0.52, 0.55, 0.6, 0.7, 0.8, 1],
    outputRange: ['44%', '43%', '42.5%', '42%', '41.8%', '41.7%', '41.6%', '41.7%', '41.8%', '42%', '42.5%', '43%', '44%']
  });

  const backgroundColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#009DC7', '#007696', '#002732', '#007696', '#009DC7'] // De azul más claro a azul oscuro
  });
  
    
  
  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Eclipse 2024 🌒</Text>
      </View>
      <View style={styles.sun} /><View/>
      <Animated.View style={[styles.moon, {top: moonTop, left: moonLeft, backgroundColor: moonColor}]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 67,
    height: 67,
    borderRadius: 35,
    zIndex: 1,
  },
  sun: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#BD7F3B',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginTop: 50,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#002732',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
