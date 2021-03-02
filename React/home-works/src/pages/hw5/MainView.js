import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import actions from './actions'

export default function View() {
    const [name, setName] = useState('');
    const storeName = useSelector(state => state.name);
    const dispatch = useDispatch();
    const setInputData = e => setName(e.target.value);
    const onButtonClick = e => {
        if (e.target.name === 'save'){
            dispatch(actions.addName(name))
        } else {
            setName('');
            dispatch(actions.clearName());
        }
    }

    return (
        <>
            {storeName ? <div>{storeName}</div> : null}
            <input type='text' placeholder="Type your name..." value={name} onChange={setInputData}/>
            <button name='save' onClick={onButtonClick}>SAVE</button>
            <button name='clear' onClick={onButtonClick}>CLEAR</button>
        </>
    );
}
