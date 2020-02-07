import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import styles from './AddTodo.module.css';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => { e.preventDefault()
          if (!input.value.trim()) {
            return null;
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} className={styles.input}/>
        <button type="submit" className={styles.btn}>Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)