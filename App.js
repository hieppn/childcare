import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Search from './src/screens/user/Search';

// Home screen declaration
const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.button}>
        <Button
          title="Push Search"
          color="#33a5c6"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Search',
                options: {
                  topBar: {
                    title: {
                      text: 'Search Filters',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    visible: false,
    height: 0,
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Search', () => Search);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
export default HomeScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  button: {
    marginBottom: 50,
  },
});
