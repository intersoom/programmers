function solution(arr) {
    let answer = 0;
    
    arr.forEach(element => {
        answer += element;
    });

    answer = answer / arr.length;

    return answer;
}