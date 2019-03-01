function sliceByCommand(array, command) {
    const _array = [...array];
    const [s, e, l] = command;
    return _array.slice(s - 1, e).sort((a, b) => a - b)[l - 1];
}

function solution(array, commands) {
    return commands.map(command => sliceByCommand(array, command));
}
