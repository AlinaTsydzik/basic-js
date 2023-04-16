const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

 alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  constructor(direct = true) {
    this.direct = direct;
  }


  encrypt(str, key) {
    if (!str || !key) throw new Error ('Incorrect arguments!')
    str = str.toUpperCase();
    key = key.toUpperCase();

    let numAlph = [];
    for( let i = 0; i<this.alphabet.length; i++){
      numAlph[this.alphabet[i]] = i;
    }

    let code = '';
    let j = 0;
    for(let i=0; i<str.length; i++) {
      if(numAlph[str[i]] || numAlph[str[i]] === 0 ){
        code+=this.alphabet[(numAlph[str[i]] + numAlph[key[j % key.length]]) % this.alphabet.length];
        j++;
      }
      else code+=str[i];
    }
    return this.direct ? code : code.split("").reverse().join("");
  }




  decrypt(str, key) {
    if (!str || !key) throw new Error ('Incorrect arguments!')
    str = str.toUpperCase();
    key = key.toUpperCase();

    let numAlph = {};
    for( let i = 0; i<this.alphabet.length; i++){
      numAlph[this.alphabet[i]] = i;
    }

    let code = '';
    let j = 0;
    for(let i=0; i<str.length; i++) {
      if(numAlph[str[i]] || numAlph[str[i]]===0 ){
      code+=this.alphabet[(numAlph[str[i]] - numAlph[key[j % key.length]] + this.alphabet.length)%this.alphabet.length];
      j++;
    }
    else code+=str[i];
  }
  return this.direct ? code : code.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
