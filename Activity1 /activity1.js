const fs = require('fs');
// read the content of input.tx
fs.readFile('input.txt','utf-8',(err,data)=> {
    if(err){
        console.log("Error");
        return;
    }
    else{
        const body=[];
        body.push(data);
        console.log(body);
    }
    const a = data.split('').reverse().join('');
   // const a = data.split('\n').reverse().join('\n');

    // Write the reversed content to output.txt
    fs.writeFile('output.txt', a , (err) => {
        if(err){
            console.log("error");
            return;
        }
        console.log('Reversed content has been written to output.txt');
    })
})






  

 
