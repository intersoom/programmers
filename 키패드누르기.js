function solution(numbers, hand) {
    let answer = '';
    let numIndex = 0;
    let lNow = "1 4";
    let rNow = "3 4";
    let lNowX = -1;
    let lNowY = -1;
    let rNowX = -1;
    let rNowY = -1;
    let lDis = 0;
    let rDis = 0;
    let x = 0;
    let y = 0;
    const numArr = ["2 4", "1 1", "2 1", "3 1", "1 2", "2 2", "3 2", "1 3", "2 3", "3 3"];
    
    //좌표로 변환
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = numArr[numbers[i]];
    }

    console.log(numbers);

    
    for (let i = 0; i < numbers.length; i++){
        //기본 값
        if(numbers[i] == "1 1" || numbers[i] == "1 2" || numbers[i] == "1 3"){
            answer += "L";
            lNow = numbers[i];
        } else if(numbers[i] == "3 1" || numbers[i] == "3 2" || numbers[i] == "3 3"){
            answer += "R";
            rNow = numbers[i];
        }

        //좌표간 거리 계산
        if(numbers[i] == "2 1" || numbers[i] == "2 2" || numbers[i] == "2 3" || numbers[i] == "2 4"){
            x = numbers[i].split(" ")[0];
            y = numbers[i].split(" ")[1];

            lNowX = lNow.split(" ")[0];
            lNowY = lNow.split(" ")[1];

            rNowX = rNow.split(" ")[0];
            rNowY = rNow.split(" ")[1];

            lDis = Math.abs(x - lNowX) + Math.abs(y - lNowY);
            rDis = Math.abs(x - rNowX) + Math.abs(y - rNowY);

            if (lDis < rDis){
                answer += "L";
                lNow = numbers[i];
            } else if (lDis > rDis){
                answer += "R";
                rNow = numbers[i];
            } else if (lDis == rDis){
                if (hand == "right"){
                    answer += "R";
                    rNow = numbers[i];
                } else if (hand == "left"){
                    answer += "L";
                    lNow = numbers[i];
                }
            }
        }

    }

    return answer;
}

