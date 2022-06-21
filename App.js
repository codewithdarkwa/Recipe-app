import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

export default function App() {
 const [meals, setMeals] = useState([]);
 const  [searchQuery, setSearchQuery] = useState('');
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

  const onChangeSearch = query =>setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipe App"/>
      </Appbar>
      <Searchbar 
      placeholder='search'
      value={searchQuery}
      onChangeText={onChangeSearch}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
