/**
 * @file Main
 * 
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import * as ramitha from './services/lowercase.js';



( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));
    var word = "WORD";
    console.log(amonte.lowercase(word));

 })()



