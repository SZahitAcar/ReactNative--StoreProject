import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Card from './src/components/CardComponent';
import DATA from './assets/DATA';

const App = () => {
  const [dataList, setDataList] = useState(DATA);

  const renderItem = ({item}) => <Card props={item} />;

  const onChangeText = text => {
    const filteredData = DATA.filter(dataList => {
      const searchedText = text.toLowerCase();
      const lowerProductName = dataList.title.toLowerCase();
      return lowerProductName.includes(searchedText);
    });

    setDataList(filteredData);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffe082'}}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        style={styles.searchBar}
        onChangeText={onChangeText}
        placeholder="Ara..."
      />
      <FlatList
        style={styles.list}
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns="2"
      />
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#bcaaa4',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#caae53',
  },
  title: {fontSize: 24, fontWeight: 'bold', margin: 10, color: '#5f4339'},
  list: {},
});

export default App;
