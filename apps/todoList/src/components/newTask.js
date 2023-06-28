import { useState } from "react";

function NewTask(props) {
    const [inputText, setInputText] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    function onChangeHandler(event) {
        setInputText(event.target.value);
    }
    function onAdd() {
        if(inputText.trim().length===0){
            setIsInvalid(true);
        }else{
            props.addItem(inputText);
            setInputText('');
            setIsInvalid(false);
        }
    }
    return <div>
        <input
            className={isInvalid? "invalid":""}
            type="text"
            placeholder="enter a task name"
            onChange={onChangeHandler} value={inputText} />
        <button onClick={onAdd}>Add Task</button>
    </div>
}

export default NewTask;