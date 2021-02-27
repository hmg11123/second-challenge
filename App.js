import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

const book = [
  {
    id: `book01`,
    title: `언어의 온도`,
    author: `이기주`,
  },
  {
    id: `book02`,
    title: `리엑트를 다루는 기술`,
    author: `김민준`,
  },
  {
    id: `book03`,
    title: `Node.js 교과서`,
    author: `최원영`,
  },
  {
    id: `book04`,
    title: `자바의 정석`,
    author: `남궁성`,
  },
  {
    id: `book05`,
    title: `연애의 고수가 되는 법`,
    author: `오민형`,
  },
];

const List = ({title, author}) => {
  return (
    <View style={styles.flatBox}>
      <Text style={styles.flatTitle}>{title}</Text>
      <Text style={styles.flatAuthor}>{author}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => {
    return <List author={item.author} title={item.title} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Shop</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text2}>Book List</Text>
      </View>
      <ScrollView style={styles.main}>
        <FlatList
          data={book}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}></FlatList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: `100%`,
    flex: 0.2,
    backgroundColor: `#0b0b0b`,
    justifyContent: 'flex-end',
    padding: 10,
  },
  text: {
    color: `#fff`,
    fontSize: 30,
  },
  text2: {
    fontSize: 30,
    textDecorationLine: `underline`,
  },
  title: {
    flex: 0.5,
    justifyContent: `center`,
    alignItems: `center`,
  },
  main: {
    flex: 7,
  },
  flatBox: {
    padding: 10,
    margin: 10,
    backgroundColor: `#0b0b0b`,
    flexDirection: `row`,
    alignItems: `flex-end`,
    justifyContent: `space-between`,
  },
  flatTitle: {
    color: `#fff`,
    fontSize: 25,
  },
  flatAuthor: {
    color: `#fff`,
  },
});

export default App;
