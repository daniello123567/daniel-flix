import { create } from "zustand";

const movieReturner = async (query?:string) => {
  const result = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query?query:'anime'}`);
  const res = await result.json();
  return res.description[0];
}
const movieSearcher = async (query?:string) => {
  if(!query)return[];
  const result = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`);
  const res = await result.json();
  return res.description;
}


const manyMovies = async(AOT:string[])=>{
const promises = AOT.map(async(title)=>{
   const res = await movieReturner(title)
    return res;
   });
const result = await Promise.all(promises);
return result;

}
const sectionOneMovies = [
  "Ne Zha 2",
  "A Minecraft Movie",
  "Lilo & Stitch",
  "Detective Chinatown 1900",
  "Mission: Impossible – The Final Reckoning",
  "Captain America: Brave New World",
  "Thunderbolts*",
  "Sinners",
  "Final Destination Bloodlines",
  "Snow White"
];

const animeshe = [
  "Solo Leveling (Season 2)",
  "Dan Da Dan (Season 2)",
  "Kaiju No. 8 (Season 2)",
  "Fire Force Season 3",
  "Sakamoto Days",
  "Gachiakuta",
  "The Apothecary Diaries (Season 2)",
  "Guilty Gear Strive: Dual Rulers",
  "Princession Orchestra",
  "Chainsaw Man – The Movie: Reze Arc"
]
const kdrama = [
  "Squid Game Season 3",
  "Ask the Stars (When the Stars Gossip)",
  "Weak Hero Class 2",
  "When Life Gives You Tangerines",
  "Newtopia",
  "Karma",
  "Resident Playbook",
  "Good Boy",
  "The WONDERfools",
  "The Haunted Palace"
]
type hidden = {
  status:boolean,
  setStatus:()=>void
}
type luce = {image:string,title:string,actors:string,year:string,imdb:string,rating:string}
type current = {
  currentmovie:luce,
  setCurentMovie:(curr:luce)=>void;
}
const hidden = create<hidden>((set)=>({
  status:false,
  setStatus:()=>set((state)=>({status:!state.status}))
}));

const currentInfo = create<current>((set)=>({
   currentmovie:{image:"",title:"",actors:"",year:"",imdb:"",rating:""},
   setCurentMovie:(curr:luce)=>set(()=>({currentmovie:{...curr}}))
}));

export {hidden,movieSearcher, movieReturner,manyMovies,sectionOneMovies,animeshe,kdrama,currentInfo }

