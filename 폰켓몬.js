function solution(nums) {
    var answer = 0;
    let testNums = nums;
    let variety = 1;
    let canTake = nums.length / 2;

    testNums = nums.sort()

    for (let i = 1; i < testNums.length; i++){
        if(testNums[i] != testNums[i-1]){
            variety += 1;
        }
    }

    if (variety >= canTake){
        answer = canTake;
    } else if (variety < canTake){
        answer = variety;
    }

    return answer;
}

