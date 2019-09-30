const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const LETTER_LENGTH = 10;

function decode(expr) {
  let splittedExpr = splitExpr(expr);
  let result = [];
  for (let elem of splittedExpr) {
    let letter = decodeLetter(elem);
    result.push(letter);
  }
  return result.join('');
}

function splitExpr(expr) {
  let splittedExpr = [];
  
  let currentLetter = [];
  for (let i = 0; i < expr.length; i++) {
    currentLetter.push(expr[i])

    if (currentLetter.length === LETTER_LENGTH) {
      splittedExpr.push(currentLetter.join(''));
      currentLetter = [];
    }
  }
  
  return splittedExpr;
}

function decodeLetter(encodedLetter) {
  let pairs = {
    '10' : '.',
    '11' : '-'
  };

  if (encodedLetter[0] === '*') {
    return ' ';
  }

  let letter = [];
  let current = [];
  for (let i = 0; i < LETTER_LENGTH; i ++) {
    current.push(encodedLetter[i]);
    if (current.length === 2) {
      let char = pairs[current.join('')];
      if (char) {
        letter.push(char);
      }
      
      current = [];
    }
  }

  letter = letter.join('');
  return MORSE_TABLE[letter];
}

module.exports = {
    decode
}