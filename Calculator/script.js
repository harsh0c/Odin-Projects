const dis=document.getElementsByClassName("display"); // display box.

clearFun();
const clear=document.getElementById("CE");
clear.addEventListener("click",clearFun);

function clearFun(){    
    dis[0].innerHTML="";
}

// operate:
function operate(op1,optor,op2){
    if(optor=='+'){
        let ans= +op1 + +op2;
        dis[0].innerHTML=ans;
        return ans;
    }
    else if(optor=='-'){
        let ans= +op1 - +op2;
        dis[0].innerHTML=ans;
        return ans;
    }
    else if(optor=='*'){
        let ans= +op1 * +op2;
        dis[0].innerHTML=ans;
        return ans;
    }
    else if(optor=='/'){
        let ans= +op1 / +op2;
        dis[0].innerHTML=ans;
        return ans;
    }

}

// display:
let op1,optor,op2;
let flag=0;
function pop(num){
    const dis=document.getElementsByClassName("display");
    if(num=='/'||num=='*'||num=='-'||num=='+'||num=='='){
        if(flag==0){
            op1=dis[0].innerHTML
            optor=num;
            flag=1;
        }
        else{
            let str=dis[0].innerHTML.toString();
            
            let start=str.indexOf(optor);
            //let end=str.indexOf(num);
            op2=str.slice(start+1);
            // console.log(op1)
            // console.log(optor)
            // console.log(op2)
            
            op1=operate(op1,optor,op2);
            optor=num;
        }
    }
    if(num=='='){
        flag=0;
        dis[0].innerHTML=ans;
    }
    
    dis[0].innerHTML+=num;
}