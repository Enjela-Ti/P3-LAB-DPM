import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Header from '../components/Header';
import { COLORS, FONTS } from '../utils/constants';

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('HomeScreen mounted');
    Alert.alert('Welcome!', 'Anda baru saja membuka Addiction Tracker!');

    return () => {
      console.log('HomeScreen unmounted');
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      Alert.alert('Hitunggan Diperbaharui', `Anda menekan tombol ${count} kali.`);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Header title="Addiction Tracker" />
      <Text style={styles.text}>Anda telah membuka aplikasi ini {count} kali!</Text>
      <Button
        title=" Meningkatkan Hitungan "
        onPress={() => setCount(count + 1)}
        color={COLORS.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: COLORS.text,
    marginVertical: 20,
    fontFamily: FONTS.regular,
  },
});

export default HomeScreen;
