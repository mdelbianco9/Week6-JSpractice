

// 1. Using a for loop, log the numbers 0 through 100 to the console.

for (i=0; i<=100; i=i+1) {
	console.log(i);
};

// 2 Using a for loop, log the numbers 1 through 100 to the console (note: NOT INCLUDING ZERO).

for (i=1; i<=100; i++) {
	console.log(i);
};

// 3 Using a for loop, log only even numbers between 0 and 100 to the console.

for (i=0; i<=100; i=i+2) {
	console.log(i);
};


// 4 Using a for loop, log only odd numbers between 0 and 100 to the console.

for (i=1; i<=100; i=i+2) {
	console.log(i);
};

// 5 Using a for loop, log only numbers which are evenly divisible by 5 to the console.

for (i=0; i<=100; i=i+5) {
	console.log(i);
};

// 6 Using a for loop, log all the characters of the following: var myString = “hello world!”

var myString = "hello world!";
for (i=0; i<=myString.length; i++) {
	console.log(myString[i]);
};

// 7 Using a for loop, log every other character of the following: var myString = “hello world!”

for (i=0; i<=myString.length; i=i+2) {
	console.log(myString[i]);
};


// 8 Using a for loop, log only the vowels in the following: var myString = “hello world!”

for (i=0; i<=myString.length; i++) {
	if (myString[i] === "a" || myString[i] === "e" || myString[i] === "i" || myString[i] === "o" || myString[i] === "u") {
		console.log(myString[i]);
	};
};

// 9 Using a for loop, log only the consonants in the following: var myString = “hello world!”

for (i=0; i<=myString.length; i++) {
	if (myString[i] !== "a" && myString[i] !== "e" && myString[i] !== "i" && myString[i] !== "o" && myString[i] !== "u") {
		console.log(myString[i]);
	};
};

// 10 Write a function which takes one number as a parameter, and returns (not logs!) double that number.

function double(x) {
	return x*2;
};

console.log(double(2));


// 11 Write a function which takes two numbers as parameters, and returns the sum of these two numbers.

function add(a1, a2) {
	return a1 + a2;
};

console.log(add(6, 5));

// 12 Write a function which takes two numbers as parameters, and checks if one number is evenly divisible by the other. If so, the function returns true. If not, the function returns false.

function divideEven(num1, num2) {
	if (num1%num2 == 0 || num2%num1 == 0) {
		return true;
	}else{
		return false;
	}
	
};

console.log(divideEven(2, 104));

// 13 Write a function which takes one string as a parameter, and returns the length of that string.

function stringLength(s) {
	return s.length;
};

console.log(stringLength("helloworld"));

// 14 Write a function which takes one string as a parameter, and returns the first and last letters of this string.

function splitString(s) {
	var first = s.charAt(0);
	var last = s.charAt(s.length-1);
	return first + " " + last;
};

console.log(splitString("hello"))


// 15 Write a function which takes one string as a parameter, then uses a for loop to return the number of vowels contained in the string.

function vowels(str) {
	var vCount = [];
	for (i=0; i<=str.length; i++) {
		if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
			vCount.push(str[i]);
		}
	}
	return vCount.length;
};

console.log(vowels("helloworld"));


//  16 Write a function which takes two numbers as parameters, then uses a for loop to log every number BETWEEN those two numbers to the console.

function between(a, b) {
	if (a<b) {
		for (i=a; i<=b; i++) {
			console.log(i);
		}
	}else if (b<a) {
		for (i=b; i<=a; i++) {
			console.log(i);
		}
	}
};

console.log(between(100, 50));










