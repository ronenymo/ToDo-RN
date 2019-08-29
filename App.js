import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './componants/Header';
import InputBar from './componants/InputBar';
import TodoItem from './componants/TodoItem';

export default class app extends React.Component {
  constructor () {
    super();
    
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Feed the starter', done: false},
        {id: 1, title: 'Bake a loaf of bread', done: false}
      ]
    }
  }


  addNewTodo () {
  
   /*
   console.log("test1");
  */

   let todos = this.state.todos;

   todos.unshift({
     id: todos.length + 1,
     title: this.state.todoInput,
     done: false
   });

   this.setState({
     todos,
     todoInput: ''
   });

    /*
    console.log("test2");
    */
  }

    toggleDone (item) {
      let todos = this.state.todos;

      todos = todos.map((todo) => {
        if (todo.id == item.id) {
          todo.done = !todo.done;
        }

        return todo
      }
      )

        this.setState({todos});
    }

    removeTodo (item) {
      let todos = this.state.todos;
      todos = todos.filter((todo) => todo.id !== item.id);
      this.setState({todos});
    }

  render() {
  return (
    <View style={styles.container}>
      
      <Header title="TO DO" />

      <InputBar 
      textChange={todoInput => this.setState({todoInput})}
      addNewTodo ={() => this.addNewTodo()}
      />

      <FlatList
      data={this.state.todos}
      extraData={this.state}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) =>{
         return(
           <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)}
           removeTodo={() => this.removeTodo(item)}
           />
         )
        }
      }
      />
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9c12',
  },

});
