import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#099aaa", "#088aaa"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            marginTop: -60,
          }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1601285526788-6b4a44abc15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>Ramesh</Title>
        <Text style={{ fontSize: 15 }}>Web Developer</Text>
      </View>
      <View style={{ margin: 15 }}>
        <Card style={styles.myCard}>
          <View style={styles.infoView}>
            <MaterialIcons name="email" size={30} color="#099aaa" />
            <Text style={styles.view__text}>abc@gmail.com</Text>
          </View>
        </Card>
        <Card style={styles.myCard}>
          <View style={styles.infoView}>
            <MaterialIcons name="phone" size={30} color="#099aaa" />
            <Text style={styles.view__text}>1234567890</Text>
          </View>
        </Card>
        <Card style={styles.myCard}>
          <View style={styles.infoView}>
            <MaterialIcons name="attach-money" size={30} color="#099aaa" />
            <Text style={styles.view__text}>5 LPA</Text>
          </View>
        </Card>
      </View>
      <View style={styles.button__view}>
        <Button
          theme={theme}
          icon="circle-edit-outline"
          mode="contained"
          onPress={() => setModal(false)}
        >
          Edit Details
        </Button>
        <Button
          icon="delete"
          theme={theme}
          mode="contained"
          onPress={() => setModal(false)}
          style={{ backgroundColor: "#eb5b34" }}
        >
          Fire Employee
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#099aaa",
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 3,
  },
  infoView: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding: 3,
  },
  view__text: {
    fontSize: 16,
    marginLeft: 10,
  },
  button__view: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default Profile;
