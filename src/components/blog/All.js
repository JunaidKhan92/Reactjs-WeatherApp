import React from 'react';
import { useState } from 'react';
import '../index.css';
const All = () => {
    let [datas, changeData] = useState({
        Persons: [
            {
                name: "junaid",
                age: "19",
            },
            {
                name: "Khan",
                age: "18"
            },
            {
                name: "sultan",
                age: "44",
            },
        ]
    })
    const updataData = (index) => {
        let personCopy = datas.Persons
        personCopy.splice(index, 1)
        changeData({ Persons: personCopy })
    };

    return (
        <>
            {datas.Persons.map((Blog, index) => {
                return (
                    <div className='Blog' key={index} onClick={(index)=>{updataData(index)}}>
                        <h3 >My Name is {Blog.name}</h3>
                        <h3 >I am {Blog.age} Years Old </h3>
                    </div>
                )
            })}
        </>
    )
}
export default All;