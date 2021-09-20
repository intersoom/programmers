function solution(s) {
    let answer = 0;
    //let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let userNum = [];

    userNum = Array.from(s);

    for (let i = 0; i < userNum.length; i++){
        // if (typeof userNum[i] == "string"){
            switch(userNum[i]){
                case "z":
                    if (userNum[i+3] = "o"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, 0);
                    }
                    continue
                case "o":
                    if (userNum[i+2] == "e"){
                        userNum.splice(i, 3);
                        userNum.splice(i, 0, 1)
                        
                    }
                    continue
                case "t":
                    if (userNum[i+2] == "o"){
                        userNum.splice(i, 3);
                        userNum.splice(i, 0, 2)
                        
                    } else if (userNum[i+4] == "e"){
                        userNum.splice(i, 5);
                        userNum.splice(i, 0, 3)
                        
                    }
                    continue
                case "f":
                    if (userNum[i+3] == "r"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, "4")
                        
                    } else if (userNum[i+3] == "e"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, 5)
                        
                    }
                    continue
                case "s":
                    if (userNum[i+2] == "x"){
                        userNum.splice(i, 3);
                        userNum.splice(i, 0, 6)
                        
                    } else if (userNum[i+4] == "n"){
                        userNum.splice(i, 5);
                        userNum.splice(i, 0, 7)
                        
                    }
                    continue
                case "e":
                    if (userNum[i+4] == "t"){
                        userNum.splice(i, 5);
                        userNum.splice(i, 0, 8)
                        
                    }
                    continue
                case "n":
                    if (userNum[i+3] == "e"){
                        userNum.splice(i, 4);
                        userNum.splice(i, 0, 9)
                        
                    }
                    continue
            }
        // } else {
        //     continue;
        // }
    }
    
    answer = Number(userNum.join(''));

    return answer;
}

