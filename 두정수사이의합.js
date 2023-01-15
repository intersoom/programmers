function solution(a, b) {
  let answer = 0;

  let a_ = Math.max(a, b);
  let b_ = Math.min(a, b);

  if (a_ === b_) {
    return a;
  }

  while (a_ + 1 != b_) {
    answer += b_;
    b_++;
  }

  return answer;
}
