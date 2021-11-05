function solution(s) {
    let answer = 0;

    let result = '';
    let resultList = [];
    let patternCount = 1;

    for (let patternLength = 1; patternLength < s.length; patternLength++){
        for (let patternStart = 0; patternStart < s.length-patternLength; patternStart++){
            console.log(s.substr(patternStart, patternLength), 'and', s.substr(patternStart+patternLength, patternLength))
            if (s.substr(patternStart, patternLength) == s.substr(patternStart+patternLength, patternLength)){
                patternCount += 1;
                if (patternLength * patternCount === s.length){
                    result += (String(patternCount) + s.substr(patternStart, patternLength));
                    patternCount = 1;
                    break;
                } else{
                    continue;
                }        
            } else {
                if (patternStart > 0){
                    result += (String(patternCount) + s.substr(patternStart, patternLength));
                    patternCount = 1;
                }
                else {
                    result += (String(patternCount) + s.substr(patternStart, patternLength));
                    patternCount = 1;
                }
            }
        }
        resultList.push(result);
        result = '';
    }

    answer = resultList;

    return answer;
}

console.log(solution('abcabcaa'))
