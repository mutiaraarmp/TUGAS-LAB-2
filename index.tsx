import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const totalColumns = 3;
const screenSize = Dimensions.get('window').width;
const cellSize = screenSize / totalColumns;

const generateGambar = () => {
  return Array.from({ length: 9 }, (_, i) => ({
    key: `img-${i}`,
    utama: `https://picsum.photos/id/${i + 10}/300/300`,
    ganti: `https://picsum.photos/id/${i + 110}/300/300`,
  }));
};

const Gambar3x3 = () => {
  const [gambarList, setGambarList] = useState(
    generateGambar().map(item => ({
      ...item,
      aktif: item.utama,
      scale: 1,
    }))
  );

  const ubahGambar = (index: number) => {
    setGambarList(prev =>
      prev.map((item, idx) => {
        if (idx !== index) return item;

        const nextImg = item.aktif === item.utama ? item.ganti : item.utama;
        const nextScale = Math.min(item.scale * 1.2, 2);

        return { ...item, aktif: nextImg, scale: nextScale };
      })
    );
  };

  return (
    <FlatList
      data={gambarList}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => ubahGambar(index)}
          activeOpacity={0.8}
          style={styles.cellWrapper}
        >
          <Image
            source={{ uri: item.aktif }}
            style={[
              styles.img,
              {
                transform: [{ scale: item.scale }],
              },
            ]}
          />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.key}
      numColumns={totalColumns}
      scrollEnabled={false}
    />
  );
};

export default function App() {
  return (
    <View style={styles.root}>
      <Gambar3x3 />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  cellWrapper: {
    width: cellSize,
    height: cellSize,
    padding: 3,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});
