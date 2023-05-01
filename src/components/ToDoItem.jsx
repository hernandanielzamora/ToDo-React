/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import styles from '../styles/TodoItem.module.css';
import { useAuthContext } from '../context/AuthContext';

const ToDoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const { user } = useAuthContext();
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          <span style={itemProp.completed ? completedStyle : null}>
            {itemProp.title}
          </span>
          {user && (
            <button type="button" onClick={handleEditing}>
              <AiFillEdit
                style={{ color: '#5e5e5e', fontSize: '16px' }}
              />
            </button>
          )}
          <button type="button" onClick={() => delTodo(itemProp.id)}>
            <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
          </button>
        </div>
        <input
          type="text"
          value={itemProp.title}
          className={styles.textInput}
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </>
  );
};

export default ToDoItem;
