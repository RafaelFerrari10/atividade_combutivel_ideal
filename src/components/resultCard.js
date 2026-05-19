import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente de card de resultado
const ResultCard = ({ etanol, gasolina }) => {
// Calcula o percentual do etanol em relação à gasolina
    const percentual = (etanol / gasolina) * 100;
    
// Define a recomendação
    const recomendacao = percentual <= 70 ? 'ETANOL' : 'GASOLINA';
    const cor = percentual <= 70 ? '#27ae60' : '#e74c3c';
    const mensagem = percentual <= 70 
        ? 'O etanol está mais vantajoso!' 
        : 'A gasolina está mais vantajosa!';

    return (
        <View style={[styles.card, { borderColor: cor }]}>
            <Text style={styles.title}>Análise de Combustível</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Etanol:</Text>
                <Text style={styles.value}>R$ {etanol.toFixed(2)}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Gasolina:</Text>
                <Text style={styles.value}>R$ {gasolina.toFixed(2)}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Percentual:</Text>
                <Text style={styles.value}>{percentual.toFixed(2)}%</Text>
            </View>

            <View style={[styles.recommendation, { backgroundColor: cor }]}>
                <Text style={styles.recommendationTitle}>Recomendação:</Text>
                <Text style={styles.recommendationText}>{recomendacao}</Text>
                <Text style={styles.recommendationMessage}>{mensagem}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#fecf01',
        borderRadius: 10,
        padding: 15,
        marginVertical: 20,
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    value: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0066cc',
    },
    recommendation: {
        marginTop: 15,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    recommendationTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#fff',
    },
    recommendationText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 5,
    },
    recommendationMessage: {
        fontSize: 12,
        color: '#fff',
        fontStyle: 'italic',
    },
});

export default ResultCard;
