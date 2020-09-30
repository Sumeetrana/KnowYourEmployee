import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = (props) => {
  const employees = [
    {
      id: "1",
      name: "mukesh",
      position: "web dev",
      salary: "5 LPA",
      phone: "1234567891",
      picture:
        "https://images.unsplash.com/photo-1600983639338-39259c1effe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      email: "abc@abc.com",
    },
    {
      id: "2",
      name: "suresh",
      position: "Mobile dev",
      salary: "8 LPA",
      phone: "1234567890",
      picture:
        "https://images.unsplash.com/photo-1600983639338-39259c1effe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      email: "abc@abc.com",
    },
    {
      id: "3",
      name: "ramesh",
      position: "devops",
      salary: "7 LPA",
      phone: "1234567892",
      picture:
        "https://images.unsplash.com/photo-1600983639338-39259c1effe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      email: "abc@abc.com",
    },
    {
      id: "4",
      name: "hitesh",
      position: "ml expert",
      salary: "6 LPA",
      phone: "1234567893",
      picture:
        "https://images.unsplash.com/photo-1600983639338-39259c1effe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      email: "abc@abc.com",
    },
  ];
  const resultList = (item) => (
    <Card
      style={{ margin: 5 }}
      onPress={() => props.navigation.navigate("Profile", { item })}
    >
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
    <View style={{ flex: 1 }}>
      <FlatList
        data={employees}
        renderItem={({ item }) => {
          return resultList(item);
        }}
        keyExtractor={(item) => item.id}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => props.navigation.navigate("CreateEmployee")}
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
