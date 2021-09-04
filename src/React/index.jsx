import React from 'react'
import Item from "./Item";
export default function Index() {
    const [name] = React.useState('React');
    const [inputValue, setInputValue] = React.useState("");
    const [list, setList] = React.useState(['item1', 'item2']);
    const inputRef = React.useRef(null);
    const onClick = () => {
        const value = inputRef?.current?.value;

        setList(prevState => [...prevState, value]);
    }

    return (
        <main>
            <h1 style={{color: "#00D8FF"}}>Hello {name}</h1>
            <p>Visit the {name}</p>
            <input ref={inputRef} type="text" placeholder="입력" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={onClick}>입력</button>
            <div>입력 값 : {inputValue}</div>
            {
                list?.length && list.map((item) => <Item text={item}/> )
            }
        </main>
    )

}