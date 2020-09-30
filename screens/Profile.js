import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = (props) => {
  const {
    id,
    name,
    email,
    salary,
    position,
    phone,
    picture,
  } = props.route.params.item;
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
            uri: `${picture}`,
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>{name}</Title>
        <Text style={{ fontSize: 15 }}>{position}</Text>
      </View>
      <View style={{ margin: 15 }}>
        <Card style={styles.myCard}>
          <View style={styles.infoView}>
            <MaterialIcons name="email" size={30} color="#099aaa" />
            <Text style={styles.view__text}>{email}</Text>
          </View>
        </Card>
        <Card style={styles.myCard}>
          <View style={styles.infoView}>
            <MaterialIcons name="phone" size={30} color="#099aaa" />
            <Text style={styles.view__text}>{phone}</Text>
          </View>
        </Card>
        <Card style={styles.myCard}>
          <View style={styles.infoView}>
            <MaterialIcons name="attach-money" size={30} color="#099aaa" />
            <Text style={styles.view__text}>{salary}</Text>
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
