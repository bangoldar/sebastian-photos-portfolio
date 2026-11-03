export const defaults = [
 {id:'standard',name:'Standard',price:'$50',description:'Single player',details:'1 player\n35–45 professionally edited photos\n1 game coverage\n1–3 day digital delivery',position:0},
 {id:'premium',name:'Premium',price:'$65',description:'Single player',details:'1 player\n55+ professionally edited photos\nFull game coverage\nPriority editing and digital delivery within 1–2 days',position:1},
 {id:'basic-group',name:'Basic Group',price:'$80',description:'Group',details:'Up to 4 players\n10–15 edited photos per player\n1 game coverage\nIndividual moments for each player\n3–5 day digital delivery',position:2},
 {id:'team',name:'Team',price:'$130',description:'Group',details:'Up to 8 players\n10–15 edited photos per player\nFull game coverage\nIndividual and group photos\nCelebrations and key moments\n3–7 day digital delivery',position:3},
 {id:'full-team',name:'Full Team',price:'$200',description:'Soccer teams',details:'Designed for soccer teams. For other sports, please inquire.\nFull team coverage\n10+ edited photos per player\nFull game/session coverage\nIndividual action photos\nTeam and group photos\nCandid moments and celebrations\nPriority editing and delivery',position:4},
 {id:'add-ons',name:'Add-ons',price:'',description:'Make it your own',details:'Rush delivery — $15\n15 extra edited photos — $15\nExtended coverage (30 minutes) — $25\nAdditional player — $30 (group packages only)',position:5},
];
export const categories = ['Soccer','Basketball','Creative','Hockey'] as const;
const counts: Record<string,number> = {Soccer:32,Basketball:16,Creative:16,Hockey:12};
const folders: Record<string,string> = {Soccer:'portofolio',Basketball:'basketball',Creative:'creative',Hockey:'hockey'};
export const defaultPhotos = categories.flatMap((category) => Array.from({length:counts[category]},(_,i)=>({id:`${folders[category]}-${i}`, objectKey:`/photos/${folders[category]}-${i}.webp`, title:'', alt:`${category} photography by Sebastian Calle Perez`,category,position:i})));
export type Photo = typeof defaultPhotos[number];
export type Package = typeof defaults[number];
