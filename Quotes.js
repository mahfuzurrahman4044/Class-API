const loadQuotes=()=>{
    fetch("https://api.kanye.rest")
    .then(res=>res.json())
    .then(data=>displayQuotes(data))
}

const displayQuotes=quote=>{
    const blockQuotes=document.getElementById("quote");
    blockQuotes.innerHTML=quote.quote;
}

loadQuotes();