export const formatTime = (secs: number) => {
    let mins = Math.floor(secs / 60);
    secs -= (mins * 60);
    let secString = `${secs < 10 ?  '0' + secs : secs}`;
    let minString = `${mins < 10 ? '0' + mins : mins}`;

    return `${minString}:${secString}`
}