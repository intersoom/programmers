function solution(numbers) {
    var answer = [];

    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }

    answer = Array.from(new Set(answer));
    answer = answer.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
      });;

    return answer;
}