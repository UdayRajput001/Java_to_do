let input = prompt("What would you like to do?")
const todos = ['Clean the Room','Collect the letters']
while(input !== 'quit' && input !== 'q'){
    if (input == 'list'){
        console.log('********************')
for(i=0;i<todos.length;i++){
    console.log(`${i}: ${todos[i]}`);
}
        console.log('********************')
    } else if(input =='new'){
        const newtodo =prompt('Ok what is new to do?')
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`)
    } else if(input =='delete'){
        const index = parseInt( prompt('Ok enter the index to delete !'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1)
            console.log(`Ok deleted ${deleted[0]}`)

        } else {
            console.log('Unknown index')
        }
    }
    input = prompt("What would you like to do?")
}
console.log("Ok Quiting the App.")