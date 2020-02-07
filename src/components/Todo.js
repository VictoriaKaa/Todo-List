import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';


const Todo = ({ onClick, completed, important, text, deleteItem, importantItem }) => {

  return (
    <li
      className={styles.item}
    >
      <div
        style={ {textDecoration: completed ? 'line-through' : 'none'} }
        onClick={onClick} className={styles.text}>
        {text}</div>
    <div className={styles.blockTodo}>
      <div className={important ? styles.activeStar : styles.star} onClick={importantItem} >
      </div>
      <div className={styles.close} onClick={deleteItem}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
    </li >
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo