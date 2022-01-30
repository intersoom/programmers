process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let string = '';

    for (let i = 0; i < b; i++){
        string = ''
        for (let j = 0; j < a; j++){
            string += "*"
        }
        console.log(string);
    }
});



