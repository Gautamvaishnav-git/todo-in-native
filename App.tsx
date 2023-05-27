import { StyleSheet, Alert, ScrollView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import React from "react";
import IListItem from "./interfaces/IList";
import List from "./components/List";
import AddItem from "./components/AddItem";
import uuid from 'react-native-uuid';

const { useState } = React;

const listOfItems: IListItem[] = [
  {
    id: uuid.v4(),
    time: new Date().toLocaleString(),
    isCompleted: true,
    text: "milk",
  },
  {
    id: uuid.v4(),
    time: new Date().toLocaleString(),
    isCompleted: false,
    text: "fruits",
  },
  {
    id: uuid.v4(),
    time: new Date().toLocaleString(),
    isCompleted: false,
    text: "grocery",
  },
  {
    id: uuid.v4(),
    time: new Date().toLocaleString(),
    isCompleted: true,
    text: "stationary",
  },
];

const App = () => {
  const [list, setList] = useState<IListItem[]>(listOfItems);

  const deleteItem = (id: string | number[]) => {
    setList((prev) => {
      return prev.filter((i) => i.id !== id);
    });
  };

  const addItem = (text: string) => {
    if (text.length == 0) {
      Alert.alert("please type item name!!");
    } else {
      setList((prev) => {
        return [
          {
            id: uuid.v4(),
            text,
            time: new Date().toLocaleString(),
            isCompleted: false,
          },
          ...prev,
        ];
      });
    }
  };

  const checkItem = (id: string | number[]) => {
    const checkedList = list.map(item => {
      if (item.id === id) {
        item.isCompleted = true
      }
      return item
    });
    setList(checkedList);
  }

  return (
    <ScrollView>
      <StatusBar animated style="light" />
      <Header title="Shopping list App" bg="#6200EE" />
      <AddItem addItem={addItem} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <List
            {...item}
            deleteItem={deleteItem}
            checkItem={checkItem}
          />
        )}
      />
    </ScrollView>
  );
};

export default App;
