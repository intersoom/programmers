function solution(lottos, win_nums) {
    //0의 갯수 카운트
    //0을 제외한 숫자들 몇개 일치 -> 최저
    //0인 숫자들이 모두 당첨인 경우 -> 최대

    let ranking = [6, 5, 4, 3, 2, 1, 0]
    let lottosZeroCount = 0;
    let winCount = 0;

    let temp = 0;
    let min = 0;
    let max = 0;

    

    for (let i = 0; i < 6; i++){
        if (lottos[i] == 0){
            lottosZeroCount += 1;
            continue;
        }
    }

    for (let i = 0; i < 6; i++){
        for (let j = 0; j < 6; j++){
            if (lottos[i] == win_nums[j]){
                winCount += 1;
            }
        }
    }

    for (let i = 0; i < 7; i++){
        if (i == winCount){
            min = ranking.indexOf(i, 0) + 1;
            break;
        }
    }

    if(min > 6){
        min = 6;
    }
    
    temp = winCount + lottosZeroCount;

    for (let i = 0; i < 7; i++){
        if (i == temp){
            max = ranking.indexOf(i, 0) + 1;
            break;
        }
    }

    if(max > 6){
        max = 6;
    }



    var answer = [max, min];
    return answer;
}