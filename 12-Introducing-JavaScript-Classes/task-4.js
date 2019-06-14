const MyString = class{
    constructor(){
        this.reverse = function(str){
             let res = '';
            for (let i = str.length - 1; i >= 0; i--) {
                res += str[i];
            }
            return res;
    }
        this.ucFirst= function(first){
            const res = first.charAt(0).toUpperCase() + first.substring(1);
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
