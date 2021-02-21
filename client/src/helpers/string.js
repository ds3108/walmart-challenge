import { InputGroup } from "react-bootstrap";

/**
 * Helper that allows to check if some string its a palindrome
 * @param {string} s  String to eval
 * @param {number} i  index itselft ( to do the the job in a recursive way).
 */
const isPalindrome = (s, i) => (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i)

/**
 * Formateador de numeros a numeros mas separador de miles.
 * @param   {string} str  String numérico EJ: '100000'
 * @return  {string}      String formateado EJ: '100.000'
 */
const formatNumberToPrice = (str,isPalyndrom) =>  {
    if(isPalyndrom){
        str = Number(str) * 0.5;
    }
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export { isPalindrome, formatNumberToPrice };
