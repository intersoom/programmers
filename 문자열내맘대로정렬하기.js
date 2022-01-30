function solution(strings, n) {
    let answer = [];

    answer = answer.sort();
    answer = strings.sort(function(a, b){
        if (a[n] < b[n]) {
            return -1;
        }
        else if (a[n] > b[n]) {
            return 1;
        }
        else if (a[n] === b[n]){
            return 0;
        }
    });

    return answer;
}