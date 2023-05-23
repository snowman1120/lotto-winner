export const convertRegularNumber10 = (number) => {
    if(number < 10) return '0' + number;
    return number;
}

export const convertSeconds2DHMS = (time) => {
    let remainSeconds = time;
    let days = Math.floor(remainSeconds / 86400);
    remainSeconds = remainSeconds - days * 86400;
    let hours = Math.floor(remainSeconds / 3600);
    remainSeconds = remainSeconds - hours * 3600;
    let minutes = Math.floor(remainSeconds / 60);
    let seconds = remainSeconds - minutes * 60;

    return {
        days, hours, minutes, seconds
    }
}

export const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }