import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';





export default class TodoItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity style={styles.todoItem}
                              onPress ={() => this.props.toggleDone()}
            >
                <Text style={(todoItem.done) ? { color: '#CCC'} : {color: '#171717'}}>
                    {todoItem.title}
                </Text>

                <Button
                title="Remove"
                color={(todoItem.done) ? '#171717' : '#171717'}
                onPress={() => this.props.removeTodo()}
                />
            </TouchableOpacity>

        )
    }
} 

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#FFF',
        borderBottomWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15

    }
})