function solution(survey, choices) {
  var answer = "";

  const typeScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const element = survey[i];
    const num = choices[i];

    const left = element.split("")[0];
    const right = element.split("")[1];

    if (num - 4) {
      if (num < 0) {
        typeScore[left] -= num - 4;
      } else {
        typeScore[right] += num - 4;
      }
    }
  }

  if (typeScore.R >= typeScore.T) {
    answer += "R";
  } else {
    answer += "T";
  }

  if (typeScore.C >= typeScore.F) {
    answer += "C";
  } else {
    answer += "F";
  }

  if (typeScore.J >= typeScore.M) {
    answer += "J";
  } else {
    answer += "M";
  }

  if (typeScore.A >= typeScore.N) {
    answer += "A";
  } else {
    answer += "N";
  }

  return answer;
}
