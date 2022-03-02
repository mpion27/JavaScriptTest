
function isMultiplesOf(number){
    if(isNaN(number)){
        console.log("'"+number+"' is not a number" );
        return;
    }
    var multiples= [2,3,5,7];
    for(var i=0; i<multiples.length; i++){

        if(number % multiples[i] == 0){
            console.log("Number "+number+" is multiple of number "+multiples[i]);
        }
    }
}

function fizzBuzz(){
    var maxNumber = 100;
    var minNumber = 1;
    
    for (var i = minNumber; i <= maxNumber; i++)
    {
               
        //Divisible by 3 and 5
        if (i % 5 == 0 && i % 3 == 0)
        {
            console.log("FizzBuzz");
        }
        //Divisable by 5 and not 3
        else if (i % 5 == 0 && i % 3 != 0)
        {
            console.log("Buzz");
        }
        //Divisable by 3
        else if (i % 3 == 0)
        {
            console.log("Fizz");
        }
        else
        {
            console.log(i);
        }
    }
}

function countBs(param){
    if(param == "") return 0;
    var count = 0;
    var evaluate = "B";

    for(i=0;i<param.length; i++){
        if(param[i] === evaluate){
            count++;
        }
    }
    return count;
}

function countChar(text, letter){
    var count = 0;
    for(var i=0;i<text.length; i++){
        if(text[i] == letter){
            count++;
        }
    }
    return count;
}

function factorial(number){
    if(isNaN(number)){
        return ("'"+number+"' is not a number" );
    }
    if(number <0) return ("'"+number+"' is not a positive number" );;
    if(number <=0){ return 1;}

    return number * factorial(number -1);
}

function humanizeNumber(number){
    if(isNaN(number)){
        return ("'"+number+"' is not a number" );
    }
    var firstSuffix = "st";
    var secondSuffix = "nd";
    var thirdSuffix = "rd";
    var otherSuffix = "th";

    var lastNumber = number%10  ;
    
    if(number == 11 || number == 12 || number == 13) return number + otherSuffix ;

    switch (lastNumber){
        case 1:
            return number + firstSuffix ;
        case 2:
            return number + secondSuffix ;
        case 3:
            return number + thirdSuffix ; 
        default:
            return number + otherSuffix ;
    }
}  

function range1(start, end){
    var array =[];
    if (start<end){
        for(var i=start; i<=end; i++){
            array.push(i);
        }
    } else {
        for(var i=start; i>=end; i--){
            array.push(i);
        } 
    }
    return array;
}

function rangeSum(array){
    var sum = 0;
    for(i=0;i<array.length;i++){
        if(isNaN(array[i])){
            return ("'"+array[i]+"' is not a number, array["+i+"]" );
        }
        sum += Number(array[i]);
    }
    return sum;
}

function range2(start, end, step = 1 ){
    if(isNaN(step)){
        return ("'"+step+"' is not a number" );
    }
    var array =[];
    step = Math.abs(step);

    if (start<end){
        for(var i=start; i<=end; i+=step){
            array.push(i);
        }
    } else {
        for(var i=start; i>=end; i-=step){
            array.push(i);
        } 
    }
    return array;
}

function truncateWords(text, numberOfWords){
    if(isNaN(numberOfWords)){
        return ("'"+numberOfWords+"' is not a number" );
    }
    if(!isNaN(text)){
        return ("Incorrect argument: '"+numberOfWords+"' is not a text" );
    }
    var separator = " ";
    var countedSubString = 0;

    for(var i=0;i<text.length;i++){
        if(text[i] == separator) countedSubString++;

        if(countedSubString == numberOfWords){
            return text.substring(0, i);
        }
    }
}

function alphabetizeString(text){
    if(typeof text != "string"){
        return ("Incorrect argument: "+text+" is not a string" );
    }

    var sortedText= "";
    //delete space
    text = text.replace(" ", "");
    //sort
    var sortedArray = Array.from(text).sort();

    for(i=0;i<sortedArray.length;i++){
        sortedText += sortedArray[i];
    }

    return sortedText;
}

function findMostPopularItem(param){
    if(param.length==1) return param[0];

    var greatestFrequency = 1;
    var currentFrequency = 1;
    var mostFrequent = 0;

    var sortedArray = param.sort();

    for(i=1; i<sortedArray.length;i++){
        if(sortedArray[i] == sortedArray[i-1]){
            currentFrequency++;
        }else{
            currentFrequency =1;
        }

        if(currentFrequency > greatestFrequency){
            greatestFrequency = currentFrequency;
            mostFrequent = sortedArray[i];
        }

    }

    if( (currentFrequency == greatestFrequency && mostFrequent!=sortedArray[sortedArray.length-1])){ 
        return "There is no element as the most frequent";
    }else{
        return mostFrequent;
    }
}

function reverseArray(array){
    var newArray =[];
    for(i=array.length-1;i>=0;i--){
        newArray.push(array[i]);
    }
    return newArray;
}

//TEST CASES

//isMultiplesOf(20);
//fizzBuzz();
//console.log(countBs("BBC"));
//console.log(countChar("kakkerlak", "k"));
//console.log(factorial(5));
//console.log(humanizeNumber(1));  
//console.log(range1(2, 8));        // [2, 3, 4, 5, 6, 7, 8]
//console.log(range1(8, 2));        // [8, 7, 6, 5, 4, 3, 2]
//console.log(rangeSum([2, 8]));
//console.log(range2(2, 8, 2));  
//console.log(truncateWords("Lorem ipsum dolor sit amet.", 3));
//console.log(alphabetizeString("Lorem ipsum")); 
//console.log(findMostPopularItem([1, 1, 1, 2, 2]));   
//console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A'];