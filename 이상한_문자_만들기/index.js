function solution(s) {
    return s.split(' ').map(word => {
        return Array.prototype.map.call(word, (ch, i) => {
            if (i % 2) return ch.toLowerCase();
            return ch.toUpperCase();
        }).join('');
    }).join(' ');
}
