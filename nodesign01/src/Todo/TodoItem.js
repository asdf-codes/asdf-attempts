import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import '../index.css';
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 2rem',
        border: '4px solid #000',
        marginBottom: '1rem'   
    },
    input: {
        marginRight: '2rem',
    }
}

function TodoItem ({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context);
    const classes =[];

    if (todo.completed) {
        classes.push('done')
    }

    return (
    <li style={styles.li}>
        <span  className={classes.join(' ')}>
            <input 
                type="checkbox"
                checked={todo.completed} 
                style={styles.input}
                onChange={() => onChange(todo.id)}
            />
            <strong style={{paddingRight:'1rem'}}>{index + 1}</strong>
            {todo.title}
        </span>
        <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem