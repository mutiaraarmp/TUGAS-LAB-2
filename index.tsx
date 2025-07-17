import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// Komponen individual untuk setiap gambar dalam grid
const ImageItem = ({ mainSrc, altSrc }: { mainSrc: string; altSrc: string }) => {
  const [isAlt, setIsAlt] = useState(false);
  const [scale, setScale] = useState(1);

  const toggleImage = () => {
    setIsAlt(prev => !prev);
    setScale(prev => Math.min(prev * 1.2, 2));
  };

  const handleError = () => {
    Alert.alert('Gambar gagal dimuat');
  };

  return (
    <Pressable onPress={toggleImage} style={[styles.box, { zIndex: scale > 1 ? 1 : 0 }]}>
      <Image
        source={{ uri: isAlt ? altSrc : mainSrc }}
        style={[styles.img, { transform: [{ scale }] }]}
        resizeMode="cover"
        onError={handleError}
      />
    </Pressable>
  );
};

// Dataset 9 gambar utama dan alternatif
const sources = [
  { main: 'https://picsum.photos/id/111/200', alt: 'https://picsum.photos/id/112/200' },
  { main: 'https://picsum.photos/id/113/200', alt: 'https://picsum.photos/id/114/200' },
  { main: 'https://picsum.photos/id/115/200', alt: 'https://picsum.photos/id/116/200' },
  { main: 'https://picsum.photos/id/117/200', alt: 'https://picsum.photos/id/118/200' },
  { main: 'https://picsum.photos/id/119/200', alt: 'https://picsum.photos/id/120/200' },
  { main: 'https://picsum.photos/id/121/200', alt: 'https://picsum.photos/id/122/200' },
  { main: 'https://picsum.photos/id/123/200', alt: 'https://picsum.photos/id/124/200' },
  { main: 'https://picsum.photos/id/125/200', alt: 'https://picsum.photos/id/126/200' },
  { main: 'https://picsum.photos/id/127/200', alt: 'https://picsum.photos/id/128/200' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={sources}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <ImageItem mainSrc={item.main} altSrc={item.alt} />}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const columns = 3;
const spacing = 10;
const screenW = Dimensions.get('window').width;
const cellW = (screenW - spacing * (columns + 1)) / columns;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: spacing / 2,
  },
  box: {
    width: cellW,
    height: cellW,
    margin: spacing / 2,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
