import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Balance({balance, expense}) { 
    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{balance}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expense}>{expense}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: -24,
        flexDirection: 'row',
        marginStart: 14,
        marginEnd: 14,
        paddingStart: 14,
        paddingEnd: 14,
        paddingBottom: 22,
        paddingTop: 22,
        justifyContent: "space-between",
        borderRadius: 4,
        zIndex: 99
    }, 
    item: { 
        paddingTop: 14
    },
    itemTitle: { 
        fontSize: 20,
        color: '#dadada',
    },
    content: { 
        flexDirection: "row",
        alignItems: "center"
    }, 
    currencySymbol: { 
        color: '#dadada',
        marginRight: 6
    },
    balance: { 
        fontSize: 22, 
        color: '#2ecc71'
    },
    expense: { 
        fontSize: 22,
        color: '#e7ac3c'
    }
})