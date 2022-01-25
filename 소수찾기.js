function solution(n) {
    let answer = 0;
    const arr = [...Array(n).keys()].map(key => key + 1); 

    for (let i = 0; i < n - 1; i++){
        if (arr[i] === 0){
            continue;
        }
        for (let j = 1; j < i; j++){
            if (arr[i] % arr[j] === 0){
                answer += 1;
                arr[i] = 0;
                break;
            }
        }
    }

    return answer;
}
