function solution(numbers) {
    let answer = '';
    let max = -1;
    let one = [];
    let more = [];

    // 한개짜리 & 두개 이상짜리 구분
    numbers.forEach(num => {
        if (num < 10){
            one.push(num);
        }
        else {
            more.push(num);
        }
    })

    // 첫자리 return 하는 함수
    function getFirst(num){
        let first = [];

        while(num > 0){
            first.push(num % 10);
            num = Math.floor(num / 10);
        }

        return first[first.length - 1]
    }

    // 첫자리 수 구하기
    numbers.forEach(num => {
        if (num < 9){
            if (max < num){
                max = num;
            }
        }
        else {
            if (max < getFirst(num)){
                max = num;
            }
        }
    })
    numbers.remove(max);

    // 두번째 자리부터 구하는 코드
    let compare = [];

    more.forEach(num => {
        
    })
    return answer;
}

console.log(solution([6, 10, 2]))
solution([3, 30, 34, 5, 9]);


