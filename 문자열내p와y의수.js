function solution(s){
    let answer = true;
    
    let pCount = 0;
    let yCount = 0;

    s = s.toLowerCase();
    const sArr = s.split('');
    
    sArr.forEach(alphabet => {
        if (alphabet === 'p'){
            pCount += 1;
        }
        else if (alphabet === 'y'){
            yCount += 1;
        }
    });

    if (pCount !== yCount){
        answer = false;
    }

    return answer;
}