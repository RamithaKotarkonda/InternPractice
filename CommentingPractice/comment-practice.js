/**
 * @file Main
 * 
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import { myName } from './services/practice.js';
import * as martin from './services/spaces.js';
import * as ramitha from './services/lowercase.js';




( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));
     console.log(myName());
    //used my own function because it doesnt seem like anybody else added something
    var space = "space is large";
     console.log(amonte.randomlyCapitalize(space));
    var word = "WORD";
    console.log(amonte.lowercase(word));
 })()



