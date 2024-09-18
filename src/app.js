/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
let pronounExamples = ['the', 'our'];
let adjExamples     = ['great', 'big'];
let nounExamples    = ['jogger', 'racoon', 'puedes'];
let extExamples     = ['org', 'com', 'er', 'es']

let generateRandomDomains = () => {
  pronounExamples.forEach((prenoun) => {
    adjExamples.forEach((adj) => {
      nounExamples.forEach((noun) => {
        extExamples.forEach((ext) => {
          if (noun.endsWith(ext)) {
            console.log(`${prenoun}${adj}${noun.slice(0, -ext.length)}.${ext}`);
          } else{ 
            console.log(`${prenoun}${adj}${noun}.${ext}`);
          }
        });
      });
    });
  });
}

generateRandomDomains()
