export const MAIN_URL = 'https://flagpedia.net';
export const CONTINENTS = [
    {key: 'africa', name: 'Africa'},
    {key: 'north-america', name: 'Norte America/ America Central'},
    {key: 'asia', name: 'Asia'},
    {key: 'oceania', name: 'Oceania'},
    {key: 'europe', name: 'Europa'},
    {key: 'south-america', name: 'America del Sur'}
]

export function getScrappingUrl(continent: String){
    return `${MAIN_URL}/continent/${continent}`
}