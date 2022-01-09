function solution(answers) {
    let answer = [];

    let aScore = 0;
    let bScore = 0;
    let cScore = 0;
    
    let aIndex = 0;
    let bIndex = 0;
    let cIndex = 0;

    const ARule = [1, 2, 3, 4, 5];
    const BRule = [2, 1, 2, 3, 2, 4, 2, 5];
    const CRule = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    answers.forEach(a => {
        console.log(a)
        if (aIndex > 5){
            aIndex = 0;

            if (a == ARule[aIndex]){
                aScore += 1;
            }
        }
        else{
            if (a == ARule[aIndex]){
                aScore += 1;
            }
        }

        if (bIndex > 7){
            bIndex = 0;

            if (a == BRule[bIndex]){
                bScore += 1;
            }
        }
        else{
            if (a == BRule[bIndex]){
                bScore += 1;
            }
        }
        
        
        if (cIndex > 9){
            cIndex = 0;

            if (a == CRule[cIndex]){
                cScore += 1;
            }
        }
        else{
            if (a == CRule[cIndex]){
                cScore += 1;
            }
        }

        aIndex += 1;
        bIndex += 1;
        cIndex += 1;
    });

    const sArray = [aScore, bScore, cScore];

    answer = Math.max(...sArray);

    answer = sArray.indexOf(answer);

    return answer;
}