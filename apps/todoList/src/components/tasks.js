function Tasks(props) {
    return <div>
        {props.tasks.length === 0 ? <h1>No task Found</h1> : props.tasks.map((task, index) => {
            return <p key={index} id="goals" onClick={() => { props.delete(index) }}>{task}</p>
        })}
    </div>
}

export default Tasks;