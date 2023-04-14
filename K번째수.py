def solution(array, commands):
    answer = []
    
    for command in commands:
        i = command[0]
        j = command[1]
        k = command[2]
    
        ind = 0
        kList = []

        for l in array:
            if i-1 <= ind <= j-1:
                kList.append(l)
            ind += 1
        kList = sorted(kList)
        answer.append(kList[k-1])
    
    return answer