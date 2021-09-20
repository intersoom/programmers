function solution(nums) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            for (let k = j+1; k < nums.length; k++){
                sum = nums[i] + nums[j] + nums[k];
                if (isPrimeNum(sum) == true){
                    answer += 1;
                }
                sum = 0;
            }
        }
    }
    
    return answer;
}

function isPrimeNum(number){
    if (number == 2) return true; 
    if (number == 1) return false; 
    if (number % 2 == 0) return false; 

    for (let i = 3; i < number; i += 2) { 
        if (number % i == 0){
            return false;
        }
    }

    return true;
}