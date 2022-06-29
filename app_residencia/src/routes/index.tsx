import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categoria from '../pages/Categoria';
import {Icon} from 'react-native-elements';

const TabNavigation = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#000', borderBottomWidth: 0},
      }}>
      <TabNavigation.Screen
        name="HomeTabScreen"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Icon name="home" color="#fff700" type="font-awesome" size={24} />
            );
          },
        }}
      />
      <TabNavigation.Screen
        name="CategoriaTabScreen"
        component={Categoria}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              // <FontAwesomeIcon icon="fa-solid fa-user-bounty-hunter" />
              <Icon name="bars" color="#fff700" type="font-awesome" size={24} />
            );
          },
        }}
      />
    </TabNavigation.Navigator>
  );
};

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator
      screenOptions={{
        // headerShown: false,
        headerTintColor: '#fff700',
        headerStyle: {
          backgroundColor: '#000000',
        },
        drawerStyle: {
          backgroundColor: '#000000',
          width: 240,
          // opacity: 0.5,
        },
        drawerActiveBackgroundColor: '#fff700',
        drawerActiveTintColor: '#000000',
        drawerInactiveBackgroundColor: '#000000',
        drawerInactiveTintColor: '#fff700',
      }}>
      <DrawerNavigation.Screen
        name="StackNavigationScreen"
        options={{title: 'Home Principal'}}
        component={BottomTabNavigator}
      />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        options={{title: 'Categorias'}}
        component={Categoria}
      />
    </DrawerNavigation.Navigator>
  );
};

const StackNavigation = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{headerShown: false}}>
        <StackNavigation.Screen name="LoginScreen" component={Login} />
        <StackNavigation.Screen
          name="HomeScreen"
          component={NavigationDrawer}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
