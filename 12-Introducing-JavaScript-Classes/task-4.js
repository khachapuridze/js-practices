const MyString = class{
    constructor(){
        this.reverse = function(str){
            return str.split("").reverse().join("");
        }
        this.ucFirst= function(first){
            const res = first.charAt(0).toUpperCase() + first.slice(1);
            return res;
        }
        this.ucWords = function(words){
            words = words.split(" ");
            return words.map((word)=>{ 
                return word.charAt(0).toUpperCase() + word.slice(1)
            }).join(" ");

        }
    }
}



let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'
