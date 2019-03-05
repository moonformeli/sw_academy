function solution(arr1, arr2) {
    return arr1.map((_arr1, i) => {
        return _arr1.map((n, j) => n + arr2[i][j]);
    });
}
