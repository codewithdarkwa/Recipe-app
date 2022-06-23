import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Searchbar,Card,Paragraph} from 'react-native-paper';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [meals, setMeals] = useState([]);
  console.log(meals);
 const  [searchQuery, setSearchQuery] = useState('');
 const url ="https://www.themealdb.com/api/json/v1/1/categories.php";

 const getMeals = async () =>{
  const response = await fetch(url);
  const data = await response.json();
   setMeals(data.categories);
   
 }
  useEffect(()=>{
    getMeals();
  },[])

  const onChangeSearch = query =>setSearchQuery(query);
  return (
    <View>
      <Appbar>
        <Appbar.Content title="Recipe App"/>
      </Appbar>
      <Searchbar 
      placeholder='search'
      value={searchQuery}
      onChangeText={onChangeSearch}
      />
      <ScrollView>
        {
          meals.map(meal=>(
            <Card key={meal.idCategory}>
              <Card.Cover source={meal.strCategoryThumb}/>
              <Card.Title title={meal.strCategory}/>
              <Card.Content>
                <Paragraph>{meal.strCategoryDescription}</Paragraph>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}


