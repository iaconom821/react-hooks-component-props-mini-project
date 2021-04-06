import React from "react"

function Article (
    { 
        title, 
        date="January 1, 1970", 
        preview, 
        minutes 
    }){
        
    let minElem = ''

    if(minutes < 30){
        let numOfCups = Math.floor(minutes/5)
        let cup = "☕️"
        let cups = ""
        for(let i=0; i<numOfCups; i++){
            cups = cup + cups
        }
        minElem = cups 
    }
    if(minutes >= 30){
        let numofBento = Math.floor(minutes/10)
        let bento = "🍱"
        let bentos = "🍱"
        for(let i=0; i<numofBento; i++){
            bentos = bento + bentos
        }
        minElem = bentos 
    }

    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date }</small>
            <p>{ preview }</p>
            <p>{ minutes } min read</p>
            <p>{ minElem }</p>
        </article>
    )
}

export default Article 