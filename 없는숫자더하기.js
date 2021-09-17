function solution(numbers) {
    let answer = -1;
    const allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbersLen = numbers.length;
    let sameNum = [];
    let sum = 0;
    
    for (let i = 0; i < numbersLen; i ++){
        for (let j = 0; j < 10; j ++){
            if (numbers[i] == allNum[j]){
                sameNum.push(numbers[i]);
            }
        }
    }
    
    for (let i = 0; i < sameNum.length; i++){
        sum += sameNum[i];
    }
    
    answer = 45 - sum;
    
    return answer;
}