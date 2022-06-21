import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 const [meals, setMeals] = useState([]);
 const url ="https://www.themealdb.com/api/json/v1/1/categories.php";

 const getMeals = async () =>{
  const response = await fetch(url);
  const data = await response.json();
   setMeals(data);
   console.log(data);
 }
  useEffect(()=>{
    getMeals();
  },[])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
