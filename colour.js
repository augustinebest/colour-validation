//QUESTION: Write a function to validate HTML colours. Example #AACCFF

var text = "#AACCFF";
function validateColor(text) {
    var pattern = /#[A-Z0-9]{3,8}/gi;
    var check = text.match(pattern);
    console.log(check);
}
validateColor(text);

//QUESTION 2:
var test2 = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`;
function printName(test2) {
    var pattern = /\"\w+\s[A-Z]?(\w+)?\s?[A-Z]?(\w+)?/g;
    var check = test2.match(pattern);
    hod = [];
    check.forEach(function(element) {
        element=element.replace("\"", '');
        hod.push(element);
    });
    
    console.log(hod);
}
printName(test2);

//QUESTION 3:

var linkText = "Visit http://genesys.com for more information about Genesys";
function convertUrl(linkText) {
    var re = new RegExp('/((https?|ftps?)):(\/\/(www)?[A-Za-z0-9-_]+)(\.[a-zA-Z]{2,6})/', 'gi');
    var check = linkText.replace(re, 'Visit <a href="$1">$5</a> for more information about Genesys');
    console.log(check);
}
convertUrl(linkText);

//OUTPUT: 'Visit <a href="http://genesystechhub.com">genesystechub.com</a> for more information about Genesys'
