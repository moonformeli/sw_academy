function solution(s, n) {
    function _replace(limit) {
        return function(ch) {
            const code = ch.charCodeAt() + n;
            let newCh = code;
            if (code > limit) newCh = code - 26;
            return String.fromCharCode(newCh);
        }
    }

    return s.replace(/[a-z]/g, _replace(122)).replace(/[A-Z]/g, _replace(90));
}
