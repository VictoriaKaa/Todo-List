import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import styles from './App.module.css';
import '../fonts/style.css';

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Todo List</div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;