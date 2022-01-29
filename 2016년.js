function solution(a, b) {
    let answer = '';
    let days = 0;
    const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

    for (let i = 1; i <= a - 1; i++){
        days += months[i];
    }

    days += b;

    answer = weeks[(days - 1) % 7];

    return answer;
}