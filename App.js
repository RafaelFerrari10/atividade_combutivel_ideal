import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';
import Botao from './src/components/botaoVerificar';
import ResultCard from './src/components/resultCard';
import postoPng from './assets/icon-posto.png';


export default function App() {
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [showResult, setShowResult] = useState(false);
  const posto = postoPng;

  const verificar = () => {
    if (etanol && gasolina) {
      setShowResult(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificar Posto</Text>
      <Image source={posto} style={{ width: 200, height: 200, marginTop: 20 }} />
      
      <TextInput
        style={styles.input}
        placeholder="Valor do Etanol"
        placeholderTextColor="#999"
        value={etanol}
        onChangeText={setEtanol}
        keyboardType="decimal-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Valor da Gasolina"
        placeholderTextColor="#999"
        value={gasolina}
        onChangeText={setGasolina}
        keyboardType="decimal-pad"
      />
      
      <Botao title="Verificar" onPress={verificar} />
      
      {showResult && (
        <ResultCard etanol={parseFloat(etanol)} gasolina={parseFloat(gasolina)} />
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fecf01',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#0066cc',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
});
