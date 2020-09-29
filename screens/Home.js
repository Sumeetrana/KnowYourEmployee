import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

const Home = () => {
  return (
    <Card>
      <View style={styles.myCard}>
        <Image
          style={{ width: 75, height: 75, borderRadius: 150 / 2 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1601283763344-05601a283a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          }}
        />
        <Text>Hello from home</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  myCard: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
  },
});

export default Home;
