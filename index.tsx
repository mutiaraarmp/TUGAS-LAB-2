// IconShowcase.js
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const IconShowcase = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon dari Berbagai Keluarga</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconBox}>
          <FontAwesome name="music" size={30} color="#f39c12" />
          <Text style={styles.label}>FontAwesome</Text>
        </View>
        <View style={styles.iconBox}>
          <MaterialIcons name="pets" size={30} color="#e67e22" />
          <Text style={styles.label}>MaterialIcons</Text>
        </View>
        <View style={styles.iconBox}>
          <Ionicons name="planet" size={30} color="#9b59b6" />
          <Text style={styles.label}>Ionicons</Text>
        </View>
        <View style={styles.iconBox}>
          <AntDesign name="API" size={30} color="#1abc9c" />
          <Text style={styles.label}>AntDesign</Text>
        </View>
        <View style={styles.iconBox}>
          <Entypo name="aircraft" size={30} color="#3498db" />
          <Text style={styles.label}>Entypo</Text>
        </View>
        <View style={styles.iconBox}>
          <Feather name="camera" size={30} color="#2ecc71" />
          <Text style={styles.label}>Feather</Text>
        </View>
        <View style={styles.iconBox}>
          <EvilIcons name="user" size={30} color="#34495e" />
          <Text style={styles.label}>EvilIcons</Text>
        </View>
        <View style={styles.iconBox}>
          <Octicons name="bug" size={30} color="#c0392b" />
          <Text style={styles.label}>Octicons</Text>
        </View>
        <View style={styles.iconBox}>
          <Foundation name="crown" size={30} color="#e74c3c" />
          <Text style={styles.label}>Foundation</Text>
        </View>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons name="robot" size={30} color="#8e44ad" />
          <Text style={styles.label}>MaterialCommunity</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  iconBox: {
    alignItems: 'center',
    margin: 10,
    width: 80,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default IconShowcase;
