import { getScrappingUrl } from "../constants";
import $ from "cheerio";
import fs from "fs";
import requestPromise from "request-promise";
function extractImage(image: string){
    const arrayImg = image.split('/');
    return arrayImg[arrayImg.length -1];
}
export function extractData(continent: string) {
  const url = getScrappingUrl(continent);
  const flagItems: Array<object> = [];
  requestPromise(url)
    .then((html: string) => {
      const selectFlags = $(".flag-grid li", html);
     selectFlags.map((_, element)=>{
         const area = $('a', element).attr('data-area');
         const population = $('a', element).attr('data-population');
         const href = $('a', element).attr('href');
         const name = $('span', element).text();
         const img = $('img', element).attr('src');
         
         flagItems.push(
             {
                 area, population, url: href, name,
                 img: extractImage(img || "")
             });
     })
     fs.writeFileSync(`./${continent}.json`, JSON.stringify(flagItems));
     console.log(flagItems);
    
    })
    .catch((error: Error) => {
      console.log(error);
    });
   
}
