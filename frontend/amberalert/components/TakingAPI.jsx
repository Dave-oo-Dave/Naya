import React, {useEffect, useState} from "react";
import { Text, View, ScrollView } from "react-native";

function T_API(){

    const [data, setData]= useState([]);
    {/*we use async and await to handle our API*/}
    const getAPI=async()=>{
        const url = "http://localhost:8000/api/demographics";
        let result= await fetch(url);
        result= await result.json();
        setData(result);
    }
    useEffect(()=>{
        getAPI()
    },[]);

    return (
      <ScrollView>
        <Text>List with Api call</Text>
        <br></br>
        {data.length
          ? data.map((item) => (
              <View
                style={{
                  padding: 10,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{backgroundColor:"#ddd"}}>
                  <b>ID:</b> {item.id}
                </Text>
                <Text>
                  <b>FirstName:</b> {item.first_name}
                </Text>
                <Text>
                  <b>Title:</b> {item.last_name}
                </Text>
                <Text>
                  <b>Body:</b> {item.sex}
                </Text>
                <br></br>
              </View>
            ))
          : null}
      </ScrollView>
    );
}

export default T_API;