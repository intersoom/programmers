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

    4, 5, 4, 5, 2

    answers.forEach(a => {
        if (aIndex >= 5){
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

        if (bIndex >= 8){
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
        
        
        if (cIndex >= 10){
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

    const obj = {1: aScore, 2: bScore, 3:cScore};

    function sortObject(obj) {
        var arr = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                arr.push({
                    'key': prop,
                    'value': obj[prop]
                });
            }
        }
        arr.sort(function(a, b) { return a.value - b.value; });
        
        return arr; 
    }

    const sorted = sortObject(obj).reverse();
    
    if (sorted[0].value == sorted[1].value){
        answer.push(Number(sorted[0].key));
        answer.push(Number(sorted[1].key));

        if (sorted[1].value == sorted[2].value){
            answer.push(Number(sorted[2].key));
        }
    }
    else{
        answer.push(Number(sorted[0].key));
    }

    answer.sort();

    return answer;
}

console.log(solution([4, 5, 4, 5, 2]))