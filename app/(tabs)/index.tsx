import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [pantalla, setPantalla] = useState('home'); // Estado para cambiar entre pantallas

  return (
    <View style={pantalla === 'home' ? styles.container : styles.settingsContainer}>
      {pantalla === 'home' ? (
        <>
          <Text style={styles.text}>Hola Mundo</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPantalla('settings')}
          >
            <Text style={styles.buttonText}>Ir a Configuración</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.settingsText}>Pantalla de Configuración</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPantalla('home')}
          >
            <Text style={styles.buttonText}>Volver a Home</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilo para la pantalla principal (Hola Mundo)
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Fondo azul claro
  },
  text: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Estilo para la pantalla de configuración
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1', // Fondo rosa claro
  },
  settingsText: {
    fontSize: 26,
    color: '#444',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Estilo para los botones
  button: {
    backgroundColor: '#4CAF50', // Color verde
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
