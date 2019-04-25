import React from 'react';

function Todo(props) {
    return (
        <div>
        task: {props.do.task}
        {/* id: {props.do.id}
        complete: {props.do.completed} */}
    </div>
    )

}

export default Todo;
