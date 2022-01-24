function solution(left, right) {
    let answer = 0;
    let divisors = [];

    for (let i = left; i <= right; i++){
        divisors = [];

        for (let j = 1; j <= i; j++){
            if (i % j === 0){
                divisors.push(j);
            }
        }

        if (divisors.length % 2 === 0){
            answer += i;
        }
        else {
            answer -= i;
        }
        
    }

    return answer;
}