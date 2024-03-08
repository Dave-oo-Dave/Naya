// MissingPersonDetails.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";
import ImagePicker from "react-native-image-picker";

const MissingPerson = () => {
  const [missingPerson, setMissingPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
    sex: "",
    skinColor: "",
    reportDate: "",
    hair: "",
    eye: "",
    distinctFeature: "",
    height: "",
    weight: "",
    clothingDescription: "",
    accessories: "",
    lastContactDate: "",
    lastKnownLocation: "",
    lastSeenClothing: "",
    vehicleManufacture: "",
    vehicleModel: "",
    vehicleColor: "",
    manufactureYear: "",
    vehicleNumber: "",
    vehicleInfo: "",
    localPoliceStation: "100",
    familyMemberContact: "",
  });
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      const gallery = await ImagePicker.requestMediaLibraryPermissionAsync();
      setMissingPerson(gallery.status === "granted");
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (missingPerson === false) {
    return <Text>No access to internal storage</Text>;
  }

  const handleInputChange = (field, value) => {
    setMissingPerson({ ...missingPerson, [field]: value });
  };

  const handleSave = () => {
    // Validate required fields before saving
    if (
      !missingPerson.firstName ||
      !missingPerson.lastName ||
      !missingPerson.hair ||
      !missingPerson.clothingDescription ||
      !missingPerson.familyMemberContact
    ) {
      alert(
        "First Name, Last Name, Hair, Clothing Description and family member contact are required."
      );
      return;
    }

    // Continue with the save logic
    console.log("Submit button pressed");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Pick Image"
        onPress={() => pickImage()}
        styles={styles.imageText}
        {...(image && <Image source={{ uri: image }} style={styles.images} />)}
      />
      <br></br>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => handleInputChange("firstName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => handleInputChange("lastName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange("age", text)}
      />
      <View style={styles.sexContainer}>
        <Text>Sex:</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radioGroup}>
            <Text>Male</Text>
            <input
              type="radio"
              value="Male"
              checked={missingPerson.sex === "Male"}
              onChange={() => handleInputChange("sex", "Male")}
            />
          </View>
          <View style={styles.radioGroup}>
            <Text>Female</Text>
            <input
              type="radio"
              value="Female"
              checked={missingPerson.sex === "Female"}
              onChange={() => handleInputChange("sex", "Female")}
            />
          </View>
          <View style={styles.radioGroup}>
            <Text>Unsure</Text>
            <input
              type="radio"
              value="Unsure"
              checked={missingPerson.sex === "Unsure"}
              onChange={() => handleInputChange("sex", "Unsure")}
            />
          </View>
          <View style={styles.radioGroup}>
            <Text>Other</Text>
            <input
              type="radio"
              value="Other"
              checked={missingPerson.sex === "Other"}
              onChange={() => handleInputChange("sex", "Other")}
            />
          </View>
        </View>
      </View>
      <br></br>
      <TextInput
        style={styles.input}
        placeholder="Skin color"
        onChangeText={(text) => handleInputChange("skinColor", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hair Description/ Color"
        onChangeText={(text) => handleInputChange("hair", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Eye Description/ Color"
        onChangeText={(text) => handleInputChange("eye", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Distinct Features"
        onChangeText={(text) => handleInputChange("distinctFeature", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height"
        onChangeText={(text) => handleInputChange("height", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        onChangeText={(text) => handleInputChange("weight", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Clothing Description"
        onChangeText={(text) => handleInputChange("clothingDescription", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Accessories"
        onChangeText={(text) => handleInputChange("accessories", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Known Location"
        onChangeText={(text) => handleInputChange("lastKnownLocation", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Cloth he/she wore"
        onChangeText={(text) => handleInputChange("lastSeenClothing", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Manufacture"
        onChangeText={(text) => handleInputChange("vehicleManufacture", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Model"
        onChangeText={(text) => handleInputChange("vehicleModel", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Color"
        onChangeText={(text) => handleInputChange("vehicleColor", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Manufacture Year"
        onChangeText={(text) => handleInputChange("manufactureYear", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Number"
        onChangeText={(text) => handleInputChange("vehicleNumber", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Special info"
        onChangeText={(text) => handleInputChange("vehicleInfo", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Family Member Contact"
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange("familyMemberContact", text)}
      />
      <br></br>
      <DatePicker
        style={styles.datePicker}
        date={missingPerson.reportDate}
        mode="date"
        placeholder="Report Date"
        format="YYYY/MM/DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => handleInputChange("reportDate", date)}
      />
      <br></br>
      <DatePicker
        style={styles.datePicker}
        date={missingPerson.lastContactDate}
        mode="date"
        placeholder="Last Contact Date"
        format="YYYY/MM/DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => handleInputChange("reportDate", date)}
      />
      <br></br>
      <Text style={styles.text}>
        Local police: {missingPerson.localPoliceStation}
      </Text>
      <br></br>
      <Button title="Submit" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ddd",
    width: 412,
  },
  images: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  imageText: {
    marginTop: 10,
    color: "orange",
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 10,
  },
  datePicker: {
    width: "100%",
    marginBottom: 10,
  },
  sexContainer: {
    marginBottom: 10,
  },

  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});

export default MissingPerson;
