import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Componente de botão reutilizável
const Botao = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

// Estilos do botão
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#0066cc',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Botao;