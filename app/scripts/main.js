
// 1 ///////////

_.shuffle(['California Love', 'Hit em UP', 'Changes', 'Dear Mama', 'Life goes On', 'Ambitionz az a Ridah']);

// 2 //////////

var fours = _.range(0, 100, 4);
 
console.log(fours);

// 3 /////////

var fours = _.range(0, 100, 4), sevens = _.range(0, 100, 7), threes = _.range(0, 100, 3);
 
var common = _.intersection(fours, sevens, threes );
 
console.log(common);

// 4 ////////

var Bass = { 
	jazzBass    : 'All Music',  
	pBass       : 'All Music',  
	mustangBass : 'Rock Music', 
	ripperBass  : 'Rock Muscic'
};

var keys = _.keys(Bass), values = _.values(Bass);
 
console.log(keys + values);

// 5 ///////

var Basses = [
	{name : 'Ripper', genre : 'Rock'}, 
	{name : 'P Bass', genre : 'All Music'}, 
	{name : 'Jazz Bass', genre : 'All Music'}, 
	{name : 'Rickenbacker', genre : 'Alt Rock'}
];

var genre = _.pluck(Basses, 'genre'); 

console.log(genre);

// 6 ///////

var names = _(Basses).pluck('name').map(function (value){return value + ' ' + 'Is Awesome!'});
 
console.log(names);

// 7 /////////

var Basses = _.uniq(['Ripper','P Bass', 'Jazz Bass', 'Ripper', 'Rickenbacker', 'Jazz Bass', 'Ripper']);
 
console.log(Basses);


// 8 //////////


var Basses = _.sample(['Ripper','P Bass', 'Jazz Bass', 'Rickenbacker'], 3);
 
console.log(Basses);


// 9 ////////


var Basses = _.first(['Ripper','P Bass', 'Jazz Bass', 'Rickenbacker']);
 
console.log(Basses);


// 10 ////////


var Basses = _.initial(['Ripper','P Bass', 'Jazz Bass', 'Rickenbacker']);
 
console.log(Basses);


// 11 /////////

var Basses = [
	{name : 'Ripper',       genre : 'Rock',      era : 1970 }, 
	{name : 'P Bass',       genre : 'All Music', era : 1950 }, 
	{name : 'Jazz Bass',    genre : 'All Music', era : 1957 }, 
	{name : 'Rickenbacker', genre : 'Alt Rock',  era : 1960 }
]; 

_.sortedIndex(Basses, {name : 'Firebird', genre : 'Rock', era : 1980}, 'era');


// 12 /////////


var Basses = _.last(['Ripper','P Bass', 'Jazz Bass', 'Rickenbacker']);
 
console.log(Basses);


// 13 /////////

var Basses = _.rest(['Ripper','P Bass', 'Jazz Bass', 'Rickenbacker']);
 
console.log(Basses);


// 14 //////////

var Basses = [
	{name : 'Ripper',       genre : 'Rock',      era : 1970 }, 
	{name : 'P Bass',       genre : 'All Music', era : 1950 }, 
	{name : 'Jazz Bass',    genre : 'All Music', era : 1957 }, 
	{name : 'Rickenbacker', genre : 'Alt Rock',  era : 1960 }
]; 

 _.pluck(Basses, 'name'); 

console.log(name);

// 15 //////////////


var Basses = [
	{name : 'Ripper',       genre : 'Rock',      era : 1970 }, 
	{name : 'P Bass',       genre : 'All Music', era : 1950 }, 
	{name : 'Jazz Bass',    genre : 'All Music', era : 1957 }, 
	{name : 'Rickenbacker', genre : 'Alt Rock',  era : 1960 }
]; 

 _.invert(Basses, 'name'); 

console.log(name);






