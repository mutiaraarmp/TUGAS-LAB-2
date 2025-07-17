import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type ImageItemProps = {
  uri: string;
};

const ImageItem: React.FC<ImageItemProps> = ({ uri }) => {
  const [scale, setScale] = useState(1);

  const handlePress = () => {
    setScale((prev) => (prev < 2 ? prev + 0.2 : 1));
  };

  return (
    <Pressable onPress={handlePress}>
      <Image
        source={{ uri }}
        style={[
          styles.image,
          {
            transform: [{ scale }],
          },
        ]}
      />
    </Pressable>
  );
};

const imageUrls = [
  "https://picsum.photos/id/1011/300/300",
  "https://picsum.photos/id/1015/300/300",
  "https://picsum.photos/id/1016/300/300",
  "https://picsum.photos/id/1020/300/300",
  "https://picsum.photos/id/1024/300/300",
  "https://picsum.photos/id/1025/300/300",
  "https://picsum.photos/id/1027/300/300",
  "https://picsum.photos/id/1033/300/300",
  "https://picsum.photos/id/1035/300/300",
];

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageUrls}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item }) => <ImageItem uri={item} />}
      />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 3 - 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F9F9F9",
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 5,
    borderRadius: 10,
  },
});
