import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categoria from '../pages/Categoria';
import CategoriaProduto from '../pages/CategoriaProduto/Index';
import { Icon } from 'react-native-elements';
import Cart from '../pages/Cart';
import Produto from '../pages/Produto';
import Cadastro from '../pages/Cadastro';

const TabNavigation = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000', borderBottomWidth: 0 },
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
      <TabNavigation.Screen
        name="CartTabScreen"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              // <FontAwesomeIcon icon="fa-solid fa-user-bounty-hunter" />
              <Icon name="car" color="#fff700" type="font-awesome" size={24} />
            );
          },
        }}
      />
      <TabNavigation.Screen
        name="CategoriaProdutoTabScreen"
        component={CategoriaProduto}
        options={{
          tabBarLabel: '',
          headerShown: false,
          // tabBarIcon: () => {
          //   return (
          //     // <FontAwesomeIcon icon="fa-solid fa-user-bounty-hunter" />
          //     <Icon name="car" color="#fff700" type="font-awesome" size={24} />
          //   );
          // },
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
        options={{ title: 'Home Principal' }}
        component={BottomTabNavigator}
      />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        options={{ title: 'Categorias' }}
        component={Categoria}
      />
      <DrawerNavigation.Screen
        name="CartDrawerScreen"
        options={{ title: 'Carrinho' }}
        component={Cart}
      />
      <DrawerNavigation.Screen
        name="CategoriaProdutoDrawerScreen"
        options={{ title: 'CategoriaProduto' }}
        component={CategoriaProduto}
      />
      <DrawerNavigation.Screen
        name="CadastroScreen"
        options={{ title: 'Cadastro' }}
        component={Cadastro}
      />
    </DrawerNavigation.Navigator>
  );
};

const StackNavigation = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigation.Screen name="LoginScreen" component={Login} />
        <StackNavigation.Screen
          name="HomeScreen"
          component={NavigationDrawer}
        />
        <StackNavigation.Screen
          name="ProdutoScreen"
          component={Produto}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
