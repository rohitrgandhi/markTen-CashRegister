# markTen (Build Basics)
Make a Cash Register

Build your cash register with vanillaJS- This tells how much money is to be returned along with the number of notes of particular denominations to be given back to the customer.

## manage the cash register
- Your program has currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.
- Your user enters a bill amount say Rs. 243.
- Your user then enters a cash given say Rs. 2000.
- Now, help the user by telling how can he/she return the change to the customer with minimum number of notes?

## Ex 1: Get the stuff from HTML land to JavaScript land.
Challenge:
- Select the bill and cash amount input field
- Select the check button and add a click event on it.

Understanding:
- querySelector()
- .addEventListener("click", callback) and click events
- concept of callbacks in javascript

## Ex 2: Validate the Bill amount and Cash amount
Challenge:
- Check if the bill amount is valid and if the cash provided is more than the bill amount
- Show an error message if either of them is invalid

Understanding:
Here - message.style.display
  
## Ex 3: Calculate the change to be returned.
Challenge:
- Calculate the change such that a minimum number of notes are required.
 
Understanding:
- amount to be returned = cash given - bill amount
- we can iterate through all the notes from the highest to the lowest denomination
- we go from highest to lowest because we want to return the change in a minimum number of notes
- notes = [2000, 500, 100, 20, 10, 5, 1]
- no of Notes of current denomination = amount to be returned / notes[i]
- amount left to be returned = current amount % notes[i]
