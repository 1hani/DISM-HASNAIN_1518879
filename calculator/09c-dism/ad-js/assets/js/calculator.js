let oprands = (number)=>{
    document.querySelector("#inp").value +=number
}
let operator = (op)=>{
    document.querySelector("#inp").value +=op
}
let calculation = ()=>{
let result = eval(document.querySelector("#inp").value);
document.querySelector("#inp").value = result;
}
let clearAll = ()=>{
    document.querySelector("#inp").value = "";
}
// let clear1 = ()=>{

//     let input = (document.querySelector("#inp").value) 
//     document.querySelector("#inp").value = input - 1;
    
// }

let del = ()=>{
    
    let result = inp.value.substring(0,inp.value.length-1);
    document.querySelector("#inp").value = result;
    
}


// let clear2 = ()=>{
//     let result = document.querySelector("#inp").value;
//         result = result.substring(0,result.lenght-1);
        
// }