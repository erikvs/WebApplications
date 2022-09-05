// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {
  // Strip text of punctiation.
  const stripText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  // Convert stripText into Array.
  const textArray = stripText.split(" ");
  // Define comparison point for search.
  let longWord = textArray[0];
  // Go through list and return longest word.
  textArray.forEach((element) => {
  if (element.length > longWord.length){
    longWord = element;
  }
  });
  return longWord;
};

console.log(longestWord());