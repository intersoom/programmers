function solution(new_id) {
    let answer = '';
    let secondRule = '1234567890abcdefghijklnmopqrstuvwxyz-_.';
    let newIdLen = [];
    let newIdNum = [];
    
    secondRule = Array.from(secondRule);

    //1단계
    new_id = new_id.toLowerCase();
    new_id = Array.from(new_id);

    //2단계
    for (let i = 0; i < new_id.length; i++){
        newIdLen.push(i);
    }

    for (let i = 0; i < new_id.length; i++){
        for(let j = 0; j < secondRule.length; j++){
            if(new_id[i] == secondRule[j]){
                newIdNum.push(new_id[i]);
                break;
            }
        }
    }

    new_id = newIdNum;

    //3단계
    console.log(new_id)

    for (let i = 0; i < new_id.length; i++){
        if(new_id[i] == '.'){
            if(new_id[i] == new_id[i+1]){
                new_id.splice(i, 1);
                i--;
                //new_id.length = new_id.length - 1;
            }
        }
        console.log(new_id)
    }

    console.log(new_id);
    //4단계

    if (new_id[0] == '.'){
        new_id.splice(0, 1);
    }

    if (new_id[new_id.length - 1] == '.'){
        new_id.splice(new_id.length - 1, 1);
    }
    
    //5단계
    if(new_id.length == 0){
        new_id.push('a');
    }
    
    //6단계
    if(new_id.length >= 16){
        new_id.splice(15, new_id.length - 15);
    }
    

    if(new_id[new_id.length - 1] == '.'){
        new_id.splice(new_id.length - 1, 1);
    }

    //7단계
    while (new_id.length < 3){
        new_id.push(new_id[new_id.length - 1]);
    }
    
    answer = new_id.join('');

    console.log(answer);
    return answer;

    

}

solution(".....hjgh");
