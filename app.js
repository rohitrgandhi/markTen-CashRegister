const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const arrayDenominations = [2000, 500, 100, 20, 10, 5, 1];
const notesgiven = document.querySelectorAll(".notesgiven");
const difference=document.querySelector("#difference");

checkButton.addEventListener
    ("click", function onClick()
        {
            message.style.display="none";
            if(billAmount.value > 0) 
            {
                if (cashGiven.value >= billAmount.value)
                {
                    const returnAmount = cashGiven.value - billAmount.value;
                    difference.innerText=returnAmount;
                    calculateChange(returnAmount);
                } 
                else 
                {
                    const insufficientbalance=billAmount.value- cashGiven.value; 
                    errorHandler("Insufficient Cash Paid");  
                }
            }
            else
            {
                    errorHandler("Enter a number which is greater than 0");
            }
        }
    );

            function calculateChange(returnAmount)
            {
                for (let i = 0; i < arrayDenominations.length; i++) 
                {
                    const quotient = Math.trunc(returnAmount / arrayDenominations[i]);
                    returnAmount= returnAmount % arrayDenominations[i];
                    notesgiven[i].innerText=quotient;
                }

            }
            
            function errorHandler(msg)
            {
                message.style.display="block";
                message.innerText=msg;
            }