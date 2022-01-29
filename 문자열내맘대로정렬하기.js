function solution(strings, n) {
    let answer = [];

    answer = strings.sort(function(a, b){
        if (a[n] < b[n]) {
            return -1;
        }
        else if (a[n] > b[n]) {
            return 1;
        }
        else if (a[n] === b[n]){
            if (a.slice(n + 1) === b.slice(n + 1)){
                return 0;
            }
            else{
                const ex = [a.slice(n + 1), b.slice(n + 1)];
                const exS = [a.slice(n + 1), b.slice(n + 1)].sort();

                if (ex[0] !== exS[0]){
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
    });

    return answer;
}