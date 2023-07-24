import localforage from "localforage";
import ps3 from "../assets/pierre-roussel-ps3-phone3.jpg";
import wii from "../assets/pierre-roussel-wii-phone3.jpg";
import snes from "../assets/pierre-roussel-snes-phone3-us.jpg";

export async function resetPuzzle(puzzleTitle) {

    let puzzles = await localforage.getItem("puzzles");
    let puzzle=puzzles.find((puzzle)=>{
     if (puzzle.title===puzzleTitle) {
      return puzzle;
     }
      });
  
  let newchars=puzzle.chars.map(char=>{
      
        return {...char,found:false}
        
        
    })
    puzzle={...puzzle,chars:newchars}
    console.log(puzzle);
    puzzles=puzzles.map((puzzle)=>{
      if (puzzle.title===puzzleTitle) {
        return {...puzzle,chars:newchars}
       }
       return puzzle
    })
    console.log(puzzles);
  set(puzzles)
}

export async function resetPuzzles() {
  await set([ {
    title: "PS3",
    source: ps3,
    chars: [
      // { name: "Metal Gear Mk.II", shortName: "mgmk2", pic: "mgear2",found:false,x1: 887,y1: 1145,x2:940,y2: 1205 },

      { name: "Metal Gear Mk.II", shortName: "mgmk2", pic: "mgear2",found:false,x1: 81.88,y1: 43.93,x2:87.04,y2: 47.5 },
      { name: "Joel", shortName: "joel",pic: "joel",found:false,x1: 76.2,y1:55,x2:83,y2: 59.5 },
      { name: "Fat Princess", shortName:"fatpr",pic: "fatpr",found:false,x1: 19.7,y1:31.58,x2:26.03,y2: 34.89 },
    ],
  },  
  {
    title: "Wii",
    source: wii,
    chars: [
      { name: "Diddy Kong", shortName:"diddy",pic: "diddy",found:false,x1:44.35,y1:53.15,x2: 49.4,y2:57.12 },
      { name: "Rayman", shortName:"rayman", pic: "rayman",found:false, x1:57.8,y1:31.58,x2:67.13,y2:35.81},
      { name: "Midna", shortName: "midna", pic: "midna",found:false,x1:37.04,y1:26.5,x2: 41.95,y2: 29.84 },
    ],
  },
  {
    title: "SNES",
    source: snes,
    chars: [
      { name: "Link", shortName: "link",pic: "link",found:false,x1:73.5,y1:39.9,x2:80.4,y2:43.96 },
      { name: "Crono", shortName:"crono",pic: "crono",found:false,x1:48.7,y1:56.63,x2:53.8,y2:61.03 },
      { name: "Donatello", shortName: "donatello", pic: "donatello",found:false,x1:25.57,y1:65.32,x2:36.5,y2:69.03 },
    ],
  }])
}

export async function getPuzzles() {
  let puzzles = await localforage.getItem("puzzles");

  if (!puzzles) await resetPuzzles();
  return puzzles;
}

// export async function createContact() {
//   await fakeNetwork();
//   let id = Math.random().toString(36).substring(2, 9);
//   let contact = { id, createdAt: Date.now() };
//   let contacts = await getPuzzles();
//   contacts.unshift(contact);
//   await set(contacts);
//   return contact;
// }

export async function getPuzzle(title) {
  let puzzles = await localforage.getItem("puzzles");
  let puzzle = puzzles.find((puzzle) => puzzle.title === title);
  return puzzle ?? null;
}

export async function updateChar(puzzleTitle, charName) {
  let puzzles = await localforage.getItem("puzzles");
  let puzzle=puzzles.find((puzzle)=>{
   if (puzzle.title===puzzleTitle) {
    return puzzle;
   }
    });

let newchars=puzzle.chars.map(char=>{
      if (char.name===charName) {
      return {...char,found:true}
      }
      return  char
      
  })
  puzzle={...puzzle,chars:newchars}
  console.log(puzzle);
  puzzles=puzzles.map((puzzle)=>{
    if (puzzle.title===puzzleTitle) {
      return {...puzzle,chars:newchars}
     }
     return puzzle
  })
  console.log(puzzles);
set(puzzles)
//   let puzzle = puzzles.find((puzzle) => puzzle.title === puzzleTitle);
//   let newchar= puzzle["chars"].find((char)=>char.name===charName)
//   newchar.found=true
//  let h= [...puzzle.chars,newchar]
  //puzzle.chars={...puzzle.chars,char}
  //puzzles={...puzzles,...puzzle}
  // if (!contact) throw new Error("No contact found for", id);
 //puzzles= {...puzzle.chars,char} char= {...char, found:true};

   //await set(contacts);

 // return char;
}

export function set(puzzles) {
  return localforage.setItem("puzzles", puzzles);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    console.log("result is !key")
    fakeCache = {};
  }

  if (fakeCache[key]) {
    console.log("result is fakeCache[key]")
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
