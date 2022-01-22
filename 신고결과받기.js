function solution(id_list, report, k) {
    let answer = [];
    let idObj= {}; 

    for (let i = 0; i < id_list.length; i++){
        answer.push(0);
    }

    // split 처리 함수
    const reportSplit = (report) => {
        const arr = report.split(' ');

        const reporter = arr[0];
        const reportee = arr[1];

        return {'reporter': reporter, 'reportee': reportee};
    }

    // id obj 제작
    id_list.forEach(id => {
        const reported = []
        idObj[id] = reported;
    });

    // 신고 처리
    report.forEach(reportCon => {
        const reporter = reportSplit(reportCon).reporter;
        const reportee = reportSplit(reportCon).reportee;

        if (!(idObj[reportee].includes(reporter))){
            idObj[reportee].push(reporter);
        }
    });

    // 계정 정지 및 메일 전송
    for (const key in idObj) {
        if (idObj[key].length >= k){
            // 신고 처리 안내 메일
            idObj[key].forEach(id => {
                answer[id_list.indexOf(String(id))] += 1;
            });
        }
    }
    return answer;
}

console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));