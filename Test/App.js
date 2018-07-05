/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  WebView,

} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class HomeScreen extends Component {
  render() {
    const { navigation } = this.props.navigation;
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>WWW to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Image style={styles.image} source={require('./img/a.png')} />
        <Image style={styles.image} source={require('./img/b.png')} onPress={() => this.props.navigation.navigate('Login')}/>
        <Image style={styles.image} source={require('./img/c.png')} />
        <Button
          title="push to Login"
          onPress={() => this.props.navigation.push('Login',{from:'XXXXXXX'})}
        />
        <WebView
          source={{uri: 'https://ip.cn/'}}
          automaticallyAdjustContentInsets={true}
          style={styles.webview}
        />
        <WebView
          source={{uri: 'https://baidu.com/'}}
          style={styles.webview}
        />
        
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
      </ScrollView>
    );
  }
};

class LoginScreen extends Component {
  render() {
    const from = this.props.navigation.getParam('from', 'NO-ID');
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Login from ppp {from}</Text>
        <Image style={styles.image} source={require('./img/a.png')} />
      </View>
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={styles.webview}
      />
      <WebView
        source={{uri: 'https://ip.cn/'}}
        automaticallyAdjustContentInsets={true}
        style={styles.webview}
      />
      </ScrollView>
    );
  }
};


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        title: 'Home',
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: 'to Login',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#000"
          />
        ),
        headLeft:(
          <Button
          onPress={() => alert('This is a button!')}
          title="xxx"
          color="#f00"
          />
        ),
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        title: 'Login',
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: 'to Home',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      }),
    },
  },
);

// type Props = {};
export default class App extends Component {
  render() {
    return <RootStack />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    flex: 1,
    borderRadius:5,
    borderColor:'#ccc',
    width: 200,
    height: 100,
    marginTop: 100,
    marginBottom: 100,
  },
  webview: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width : 400,
    height : 400,
    backgroundColor:'white',
  },
  instructions: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
