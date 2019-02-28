function arrToObj(arr) {
    return arr.reduce((obj, runner) => {
        if (!obj[runner]) obj[runner] = 0;
        obj[runner] += 1;
        return obj;
    }, {});
}

function solution(participant, completion) {
    const _completion = arrToObj(completion);

    return participant.filter(runner => {
        if (!_completion[runner]) return runner;
        _completion[runner] -= 1;
        return false;
    }).join('');
}
