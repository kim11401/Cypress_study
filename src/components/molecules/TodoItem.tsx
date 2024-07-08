import React from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'
import editIcon from '@/assets/svg/edit.svg'
import remove from '@/assets/svg/remove.svg'
const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <ItemContainer>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={onToggle}>
        {todo.text}
      </span>
      <Button width={10} onClick={onEdit}>
        <Icon src={editIcon + ''} />
      </Button>
      <Button width={10} onClick={onDelete}>
        <Icon src={remove + ''} />
      </Button>
    </ItemContainer>
  )
}

export default TodoItem

const ItemContainer = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  & span {
    width: 80%;
  }
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
`
