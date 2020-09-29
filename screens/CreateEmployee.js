import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={styles.inputStyle}
        theme={theme}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.inputStyle}
        theme={theme}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="number-pad"
        mode="outlined"
        style={styles.inputStyle}
        theme={theme}
      />
      <TextInput
        label="Salary"
        value={salary}
        onChangeText={(text) => setSalary(text)}
        keyboardType="number-pad"
        mode="outlined"
        style={styles.inputStyle}
        theme={theme}
      />
      <Button
        icon="upload"
        style={styles.inputStyle}
        mode="contained"
        onPress={() => setModal(true)}
        theme={theme}
      >
        Upload Image
      </Button>
      <Button
        icon="content-save"
        style={styles.inputStyle}
        mode="contained"
        onPress={() => setModal(true)}
        theme={theme}
      >
        Save
      </Button>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              mode="contained"
              theme={theme}
              onPress={() => setModal(false)}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => setModal(false)}
            >
              Gallery
            </Button>
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            Close
          </Button>
        </View>
      </Modal>
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
  inputStyle: {
    margin: 5,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default CreateEmployee;
