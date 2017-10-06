var inquirer = require("inquirer");
var fs = require("fs");
fs.readFile("card.txt", "utf8", function(error, data){
    if (error){
        return console.log(error);
    }
    console.log(data);
    //split it by comma
    var dataArr = data.split(",");
    //re-display content
    console.log(dataArr);
});

var card1 = new ClozeCard(dataArr[0], dataArr[1]);
function ClozeCard(text, cloze){
    this.cloze = cloze;
    this.fullText = text;
    this.partial = function(cloze, text){
        var string = "cloze + (text)";
        console.log(string.replace("(text)", ""));
        var index = string.indexOf("text");
        console.log(string.substring(0, index));
    }


}
module.exports = ClozeCard;