let code = prompt(`Dial Polaris Bank Code`)
if(code !== '*833#'){
    alert(`Please enter the correct pin`)
} else {
    let name = prompt (`Please, enter your first name`)
    let toDo = prompt (`Hello ${name}! \n Welcome to Polaris Quick Service. Please select your most preferred service. \n
    1. ATM Service
    2. USSD Service`)
    
    // For USSD Services
    if(toDo == 2) {
        let ussdToDo = prompt(` Selected your preferred service \n
        1. Account Balance Inquiry
        2. Funds Transfer
        3. Airtime Recharge
        4. Bill Payments
        5. Change Pin`)
        let accountBalance = 200000;
        let pin = 1234;
        if(ussdToDo == 1){
            prompt(`Please enter your pin`)
            alert(`Your account Balance is \u20A6${accountBalance}`)
        } else if(ussdToDo == 2){
            let amountToSend = +prompt(`Enter the amount to Transfer:`)
            let receiver = prompt(`Enter the Reciever Account`)
            let transferPin = prompt(`Please Enter your pin`)
            if(transferPin == pin){
                alert(`Transfer to ${receiver} was Successful! Your new account balance is \u20A6${accountBalance - amountToSend}`)
            }else {
                alert(`Enter the correct pin`)
            }       
        } else if(ussdToDo == 3) {
            amountToSend = +prompt(`Enter `)
        }
    } 
}