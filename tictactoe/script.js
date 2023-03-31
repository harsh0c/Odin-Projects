let turn="X"
let isgameover=false;
const changeturn=()=>{
    return turn==="X"?"0":"X"
}
const checkwin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText&&(boxtext[e[0]].innerText!==""))){
            document.getElementById("info").innerText = boxtext[e[0]].innerText +" won";
            isgameover=true;
        }
    })
}

let boxes=document.getElementsByClassName("box");   // HTML collection
// console.log(boxes)
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener("click",() =>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!isgameover){
                document.getElementById("info").innerText="Turn for " + turn;
            } 
        }
    })
})
