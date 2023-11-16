function randomMessages(name, monthOfBirth){
    let messages = [`Your name is ${name}.`, `You were born in ${monthOfBirth}.`, "You will have one child."];
    for(let i = 0; i < messages.length; i++){
        if(monthOfBirth === 'January'){
        console.log(messages[i])
        }
        else if(monthOfBirth === 'February'){
        messages[2] = "You will have Two Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'March'){
        messages[2] = "You will have Three Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'April'){
        messages[2] = "You will have Four Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'May'){
        messages[2] = "You will have Five Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'June'){
        messages[2] = "You will have Six Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'July'){
        messages[2] = "You will have Seven Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'August'){
        messages[2] = "You will have Eight Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'September'){
        messages[2] = "You will have Eight Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'October'){
        messages[2] = "You will have Ten Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'November'){
        messages[2] = "You will have Eleven Children.";
        console.log(messages[i]);
        }
        else if(monthOfBirth === 'December'){
        messages[2] = "You will have Twelve Children.";
        console.log(messages[i]);
        }
        else{
        console.log("Error!: the first letter of your month of birth should be capitalized.")
        }
    }
    
}
console.log(randomMessages('Opeyemi', 'October'));

