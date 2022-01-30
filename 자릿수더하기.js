function solution(n)
{
    let answer = 0;

    const stringN = n.toString();
    
    console.log(stringN);

    for (let i = 0; i < stringN.length; i++){
        answer += parseInt(stringN[i]);
    }
    
    return answer;
}