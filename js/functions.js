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
