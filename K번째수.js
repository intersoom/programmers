function solution(array, commands) {
    let answer = [];
    let cutted = []
    let from = 0;
    let to = 0;
    let nd = 0;

    for (let i = 0; i < commands.length; i++){
        cutted = [];
        
        from = commands [i][0];
        to = commands [i][1];
        nd = commands [i][2];

        if (to > 1){
            //인덱스 값으로 변환
            from = from - 1;
            
            //자르기
            cutted = array.slice(from, to);
            cutted = cutted.sort((a, b) => a-b);
            
            //넣기
            answer.push(cutted[nd-1]);
        }
        else if (to == 1){
            answer.push(array[0]);
        }
        else if (to == array.length){
            cutted = array.slice(from);
            cutted = cutted.sort((a, b) => a-b);
            
            //넣기
            answer.push(cutted[nd-1]);
        }
    }

    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);