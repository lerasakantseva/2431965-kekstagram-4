const toHours = (num) => num/60;

const timeJobDay = (startDay, endDay, starttime, endJob) =>{
  let startDayToNum = Number(startDay.split(':')[0]);
  let endDayToNum = Number(endDay.split(':')[0]);
  let starttimeToNum = Number(starttime.split(':')[0]);
  if (Number(startDay.split(':')[1]) > 0.0){
    startDayToNum += Number(startDay.split(':')[1]) / 60;
  }
  if (Number(endDay.split(':')[1]) > 0.0){
    endDayToNum += Number(endDay.split(':')[1]) / 60;
  }
  if (Number(starttime.split(':')[1]) > 0.0){
    starttimeToNum += Number(starttime.split(':')[1]) / 60;
  }
  if (((starttimeToNum + toHours(endJob)) <= endDayToNum) && ((starttimeToNum >= startDayToNum && starttimeToNum <= endDayToNum))) {
function stringLength(string, length) {
  return string.length <= length;
}
stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

function palindrome(string){
  string = string.toLowerCase().replaceAll(' ','');
  for (let line = 0; line <= length/2 ; line++){
    if (!(string[line] === string[string.length - line - 1])) {
      return false;
    }
    return true;
  }
}
palindrome('топот');
palindrome('ДовОд');
palindrome('Кекс');
palindrome('Лёва на полке клопа нашёл');

timeJobDay('08:30', '17:30', '14:00', 90); // true
timeJobDay('8:0', '10:0', '8:0', 120);     // true
timeJobDay('08:00', '14:30', '14:00', 90); // false
timeJobDay('14:00', '17:30', '08:0', 90);  // false
timeJobDay('8:00', '17:30', '08:00', 900); // false
