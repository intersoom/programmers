function solution(record) {
    let answer = [];
    let tempArr = [];
    let messages = {};

    let command = "";
    let id = "";
    let user = "";
  
    for(let i = 0; i < record.length; i++){
        tempArr = record[i].split(" ")
        command = tempArr[0];
        id = tempArr[1];
        user = tempArr[2];

        if (command == "Enter"){
            messages[id] = user;
        } else if (command == "Leave"){
        } else if (command == "Change"){
            if (messages[id]){
                messages[id] = user;
            }
        }
    }

    for(let i = 0; i < record.length; i++){
        tempArr = record[i].split(" ")
        command = tempArr[0];
        id = tempArr[1];
        user = tempArr[2];

        if (command == "Enter"){            
            answer.push(messages[id] + "님이 들어왔습니다.");
        } else if (command == "Leave"){
            answer.push(messages[id] + "님이 나갔습니다.");
        } else if (command == "Change"){
            continue;
        }
    }
    
    return answer;
}