// app/(tabs)/index.js
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Halaman Home */}
      <View style={styles.card}>
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Image
          source={require("../../assets/images/unismuh.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Universitas Muhammadiyah Makassar (Unismuh) adalah salah satu
          perguruan tinggi swasta terbesar di Sulawesi Selatan, berlokasi di
          Jl. Sultan Alauddin No. 259, Makassar. Kampus ini dikenal dengan
          lingkungan akademik yang islami dan berkualitas.
        </Text>
      </View>

      {/* Halaman About */}
      <View style={styles.card}>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.text}>
          Aplikasi ini dibuat untuk memenuhi tugas mata kuliah Pengembangan
          Aplikasi Mobile. Fungsi setiap halaman:
          {"\n"}• Home: Menampilkan info singkat tentang Unismuh Makassar
          {"\n"}• About: Menjelaskan tujuan dan fungsi aplikasi
          {"\n"}• Profil: Menampilkan data diri pembuat aplikasi
        </Text>
      </View>

      {/* Halaman Profil */}
      <View style={styles.card}>
        <Text style={styles.title}>Profil Pembuat</Text>
        <Image
          source={require("../../assets/images/foto-profil.jpeg")}
          style={styles.profile}
        />
        <Text style={styles.text}>Nama: M. Fikri Haikal Ayatullah</Text>
        <Text style={styles.text}>NIM: 105841105522</Text>
        <Text style={styles.text}>Kelas: 6B</Text>
        <Text style={styles.text}>Prodi: Informatika</Text>
        <Text style={styles.text}>Fakultas: Teknik</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#023047",
  },
  text: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 12,
    borderRadius: 10,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
