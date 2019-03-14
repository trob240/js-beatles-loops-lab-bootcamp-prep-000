// add solution here
var musicians = [];
var instruments = [];
var newArray = [];


function theBeatlesPlay(musicians, instruments){
  var m = musicians.length - 1;
  for (var i = 0; i <= m; i++)
  
  {
  
  newArray.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return newArray;
}


function johnLennonFacts(facts) {
  var newArray1 = [];
  var i = 0;
  var fl = facts.length -1;
  while (facts.length > 0 && facts.length <= fl){
     newArray1.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray1;
}