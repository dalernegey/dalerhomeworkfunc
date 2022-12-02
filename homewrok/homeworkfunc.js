function max_name(a,b,c) {
    let name = Math.max(a.length(), b.length(), c.length())
    console.log(name);
}

max_name('Alex','George','Michael')

// function max_name(string) {
//     let str = string.split(" ");
//     let longest = 0;
//     let word = null;
//     for (let i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// console.log(max_name('Alex','George','Michael'));

