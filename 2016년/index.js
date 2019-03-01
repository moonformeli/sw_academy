const MONTHS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DATES = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

function solution(month, day) {
    let total = day;
    for (let i = 0; i < month - 1; i += 1) {
        total += MONTHS[i];
    }
    return DATES[total % 7];
}
