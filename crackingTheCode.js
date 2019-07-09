'use strict';
function crackingTheCode(code) {
    
    const words = code.split(' ');
    let decode = '';
        words.forEach(function(words) {
            
            if (word[0] == 'a') {
                decode += word[1];
            }
            
            else if (word[0] == 'b') {
                decode += word[2];
            }
            
            else if (word[0] == 'c') {
                decode += word[3];
            }
            
            else if (word[0] == 'd') {
                decode += word[4];
            }
            
            else if (word[0] == 'e') {
                decode += word[5];
            }

            else if (word[0] == 'f') {
                decode += word[6];
            }

            else if (word[0] == 'g') {
                decode += word[7];
            }

            else if (word[0] == 'h') {
                decode += word[8];
            }

            else {
                decode += ' ';
            }
        }
        return decode;
}

   console.log(crackingTheCode('craft, block, argon, meter, bells, brown, croon, droop'));
