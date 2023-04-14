def solution(numbers):
    answer = ''
    arr = []
    
    for i in numbers: arr.append(str(i))
    
    arr.sort(key=lambda x: x * 3, reverse=True)
            
    answer = str(int(''.join(arr)))
    return answer