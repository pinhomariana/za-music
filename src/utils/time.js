export function secondsTominutes(seconds) {
  return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ':' : ':0') + seconds;
}
