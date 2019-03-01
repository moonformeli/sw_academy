function copyArr(arr) {
    return [...arr];
}

function lostUniforms(lost) {
    return function(uniforms) {
        const _uniforms = copyArr(uniforms);
        lost.forEach(student => _uniforms[student] -= 1);
        return _uniforms;
    }
}

function extraUniforms(reserve) {
    return function(uniforms) {
        const _uniforms = copyArr(uniforms);
        reserve.forEach(student => _uniforms[student] += 1);
        return _uniforms;
    }
}

function shareUniforms(uniforms) {
    const _uniforms = copyArr(uniforms);
    _uniforms.forEach((uniform, i) => {
        if (uniform === 0) {
            if (_uniforms[i + 1] > 1) {
                _uniforms[i] += 1;
                _uniforms[i + 1] -= 1;
            } else if (_uniforms[i - 1] > 1) {
                _uniforms[i] += 1;
                _uniforms[i - 1] -= 1;
            }
        }
    });
    return _uniforms;
}

function pipe(args, v) {
    let kv = v;
    args.forEach(fn => {
        kv = fn(kv);
    });
    return kv;
}

function solution(n, lost, reserve) {
    let uniforms = [-1, ...new Array(n).fill(1)];

    const stolen = lostUniforms(lost);
    const extra = extraUniforms(reserve);
    const letsShare = pipe([
        stolen,
        extra,
        shareUniforms
    ], uniforms);

    return letsShare.filter(uniform => uniform > 0).length;
}
