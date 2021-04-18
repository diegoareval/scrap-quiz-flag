import { CONTINENTS, getScrappingUrl } from './constants';
import inquirer from "inquirer"

// program title
function title(){
    console.log("Extract Data");
    
}
// select continents with inquirer
function selectContinent(){
   return inquirer.prompt([
       {
           type: "list",
           name: "CONTINENT",
           message: "What continent do you want to select?",
           choices: CONTINENTS.map((continent: {name: String}) =>{
               return continent.name;
           })
       }
   ])
}

// start scrap
async function start(){
 title();
 const answers = selectContinent();
 
 const {CONTINENT} = await answers;
 const continent = CONTINENTS.filter((continent)=> continent.name === CONTINENT)[0].key;
 const url = getScrappingUrl(continent)
 console.log(url);
 
}

start();