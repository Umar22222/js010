// // 1 - masala
// function spinWords(string){
    //     return string
    //      .split(' ')                    
    //      .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    //      .join(' ');                 
    // }
    // // 2 - masala
    // function arrayDiff(a, b) {
        //     return a.filter(item => !b.includes(item)); 
        // }
        // // 3 - masala
        // function findOdd(A) {
    //     return A.find((item) => A.filter(num => num === item).length % 2 !== 0);
    // }
    // // 4 - masala
    // function createPhoneNumber(numbers){
        //     return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
    // }
    // // 5 - masala
    // function likes(names) {
    //     const count = names.length;
     
    //    switch (count) {
    //      case 0:
    //        return "no one likes this";
    //      case 1:
    //        return `${names[0]} likes this`;
    //      case 2:
    //        return `${names[0]} and ${names[1]} like this`;
    //      case 3:
    //        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    //      default:
    //        return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    //    }
    // }
    // // 6 - masala
    // function solution(number){
    //     if (number < 0) return 0; 
     
    //    let sum = 0;
       
    //    for (let i = 0; i < number; i++) {
    //      if (i % 3 === 0 || i % 5 === 0) {
    //        sum += i; 
    //      }
    //    }
     
    //    return sum;
    // }
    // // 7 - masala
    // function dnaStrand(dna){
    //     const complements = {
    //      'A': 'T',
    //      'T': 'A',
    //      'C': 'G',
    //      'G': 'C'
    //    };
     
    //    return dna
    //      .split('')              
    //      .map(char => complements[char])  
    //      .join('');               
    // }
    // // 8 - masala
    // function solution(str, ending){
        //     return str.endsWith(ending);
        // }
        // // 9 - masala
        // function accum(s) {
        //     return s
        //     .split('')                         
        //     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)) 
        //     .join('-');           
        // }
        // // 10 - masala
// function findShort(s){
    //     return s
    //      .split(' ')          
    //      .map(word => word.length)      
//      .reduce((min, length) => Math.min(min, length));  
// }