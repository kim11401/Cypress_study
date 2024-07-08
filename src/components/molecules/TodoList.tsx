import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onEdit={() => onEdit(index)}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </TodoListContainer>
  )
}

export default TodoList

const TodoListContainer = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 10px;
`
