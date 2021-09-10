
import React, { Component, Fragment } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


class ActionButtons extends Component {
    render() {
        const { reset, plus , menos} = this.props;
        
        return (
            <Fragment>
                <TouchableOpacity style={styles.btnReset} onPress={menos}>
                    <Text style={styles.btnText}>-10</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnReset} onPress={reset}>
                    <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnReset} onPress={plus}>
                    <Text style={styles.btnText}>+10</Text>
                </TouchableOpacity>
            </Fragment>

        );
    }
}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 30,
        color: '#7f8c8d',
        fontWeight: 'bold',
    },
    btnReset: {
        height: 60,
        width: 100,
        color: '#7f8c8d',
        backgroundColor: "#ecf0f1",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        marginHorizontal: 5,

    },
});


export default ActionButtons;