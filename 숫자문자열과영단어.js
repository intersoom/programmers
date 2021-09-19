function solution(s) {
    let answer = 0;
    //let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let userNum = [];

    userNum = Array.from(s);

    for (let i = 0; i < userNum.length; i++){
        if (typeof userNum[i] == "string"){
            switch(userNum){
                case "z":
                    if (userNum[i+3] = "o"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, "0")
                        userNum.length = userNum.length - 3;
                    }
                    break;
                case "o":
                    if (userNum[i+2] == "e"){
                        userNum.splice(i, 3);
                        userNum.splice(i, 0, "1")
                        userNum.length = userNum.length - 2;
                    }
                    break;
                case "t":
                    if (userNum[i+2] == "o"){
                        userNum.splice(i, 3);
                        userNum.splice(i, 0, "2")
                        userNum.length = userNum.length - 2;
                    } else if (userNum[i+4] == "e"){
                        userNum.splice(i, 5);
                        userNum.splice(i, 0, "3")
                        userNum.length = userNum.length - 4;
                    }
                    break;
                case "f":
                    if (userNum[i+3] == "r"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, "4")
                        userNum.length = userNum.length - 3;
                    } else if (userNum[i+3] == "e"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, "5")
                        userNum.length = userNum.length - 3;
                    }
                    break;
            }
        } else {
            continue;
        }
    


    return answer;
}