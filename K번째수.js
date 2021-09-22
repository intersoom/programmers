function solution(array, commands) {
    let answer = [];
    let cutted = []
    let from = 0;
    let to = 0;
    let nd = 0;

    for (let i = 0; i < commands.length; i++){
        from = commands [i][0];
        to = commands [i][1];
        nd = commands [i][2];

        //인덱스 값으로 변환
        from = from - 1;
        to = to - from;
        
        //자르기
        cutted = array.splice(from, to);
        console.log(cutted);
        
        //넣기
        answer.push(cutted[nd]);
    }



    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);