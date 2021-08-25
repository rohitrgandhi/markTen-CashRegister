const billAmount=document.querySelector("#billAmount");

const cashPaid=document.querySelector("#cashPaid");

const denominations=[2000,500,100,20,10,5,1]
const notesgiven=document.querySelectorAll("#notesgiven");

notesgiven.EventListener("click",function onClick(){
if(cashPaid.value>=billAmount.value){
    const returnAmount=cashPaid.value-billAmount.value;
    function returnAmt();
}
else{
    errorHandler();
}
})

function returnAmt(){
    for(var i=0; i <denominations.value; i++ )
    {
        returnAmount=returnAmount/denominations[i];
        
    }
}

function errorHandler(){
return console.log("Invalid input");
}
