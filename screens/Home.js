import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = () => {
  const employees = [
    { id: 1, name: "mukesh", position: "web dev" },
    { id: 2, name: "suresh", position: "Mobile dev" },
    { id: 3, name: "ramesh", position: "devops" },
    { id: 4, name: "hitesh", position: "ml expert" },
    { id: 5, name: "hitesh", position: "ml expert" },
    { id: 6, name: "hitesh", position: "ml expert" },
    { id: 7, name: "hitesh", position: "ml expert" },
    { id: 8, name: "hitesh", position: "ml expert" },
    { id: 9, name: "hitesh", position: "ml expert" },
  ];
  const resultList = (item) => (
    <Card style={{ margin: 5 }}>
      <View style={styles.myCard}>
        <Image
          style={{ width: 75, height: 75, borderRadius: 150 / 2 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1601283763344-05601a283a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
      </View>
    </Card>
  );
  return (
    <View>
      <FlatList
        data={employees}
        renderItem={({ item }) => {
          return resultList(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myCard: {
    flexDirection: "row",
    margin: 5,
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#099aaa",
  },
});

export default Home;
