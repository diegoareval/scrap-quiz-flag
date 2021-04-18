import { getScrappingUrl } from "../constants";
import $ from "cheerio";

import requestPromise from "request-promise";
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
         const name = $('span', element).text()
         flagItems.push(
             {
                 area, population, url: href, name
             });
     })
     console.log(flagItems);
    
    })
    .catch((error: Error) => {
      console.log(error);
    });
   
}
