// 1.	Print N numbers in reverse order
let n=parseInt(prompt("enter your no:"));
console.log("Print N numbers in reverse order")
for(let i=n;i>=1;i--){
    console.log(i)
}


// 2.Print N odd numbers
let a=parseInt(prompt("Enter a number"));
console.log("Print N odd numbers")
for (let i=1;i<=a;i++){
    if ((i%2)!=0){
        console.log(i)
    }
}


// 3.Calculate sum of a number
let b=parseInt(prompt("enter a number"));
console.log("Calculate sum of a number")
let sum=0;
for (let i=1;i<=b;i++){
    sum=sum +i;
}
console.log(sum)


// 4.Print Table of given number
let c=parseInt(prompt('Enter a number: '));
console.log("Print Table of given number")
for (let i=1;i<=10;i++){
    mul=c*i;
    console.log(`${c}*${i}=${mul}`)
}


// 5.Check number is prime or not
let d=parseInt(prompt("enter a number: "));
console.log("Check number is prime or not")
for(i=2 ;i<d;i++){
    if((d%i)==0){
        console.log("not a prime number")
        break;
    }
    else{
        console.log("prime number")
        break;
    }
}