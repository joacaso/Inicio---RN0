import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Pantalla de Hola Mundo
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  );
}

// Pantalla adicional con estilo diferente
function SettingsScreen() {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsText}>Esta es la pantalla de configuración</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  settingsText: {
    fontSize: 20,
    color: '#555',
  },
});
