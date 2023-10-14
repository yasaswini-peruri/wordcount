import React, { useState } from "react";
const WordCounter = () => {
    const [text, setText] = useState("")
    const onChangeHandler = (event) => {
        let newtext = event.target.value
        setText(newtext)
    };
    const words=()=>{
        if(text===""){
            return 0;
        }
        else{
            let arr=text.trim().split(" ");
            let clearArr=arr.filter((elm)=>{return elm!==""})
            return clearArr.length
        }
    }
    return (
        <div class="container bg-light " style={{ borderRadius: '15px' ,width:'1000px'}}>
            <h1>Enter Your Paragraph</h1>
            <div className="input-group mb-4">
                <textarea className="form-control" aria-label="With textarea" rows={8} value={text} onInput={onChangeHandler} ></textarea>
            </div>
            <div className="container ">
                <h2 class="text-secondary">Word Count:{words()}</h2>
            </div>
        </div>
    );
};
export default WordCounter;