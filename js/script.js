// This function checks if either the word or the text is empty or consists only of whitespace.
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0))
}

// // This function counts the number of words in a given text.
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textTrimmed = text.split(" ");
  textTrimmed.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

// This function counts the number of occurrences of a specific word in a given text.
function numberOfOcccurrencesInText(word, text){
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const textTrimmed = text.split(" ");
  const lowerCaseword = word.toLowerCase();
  let wordCount = 0;
  textTrimmed.forEach(function(element){
    if (lowerCaseword.includes(element.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}


// This function counts the occurrences of each word in a text and returns the results in an HTML-formatted string.
function mostCommonWord(str){
  let stringArray = str.split(" ");
  let result = "<h1>";
  
  stringArray.forEach(function(element){
    let count = numberOfOcccurrencesInText(element, str);
    result += `${element} ${count}<br>`;
  });
  return result + "</h1>"
  
};

// This function searches for a specific word in a text and wraps it in <b> HTML tags if found.
// function boldPassage(word, text) {
//   if (noInputtedWord(word, text)){
//     return " ";
//   }
//   let htmlString = "<p>";
//   let textArray = text.split(" ");
//   textArray.forEach(function(element, index) {
//     if (word === element) {
//       htmlString = htmlString.concat("<b>" + element + "</b>");
//     } else{
//       htmlString = htmlString.concat(element);
//     }
//     if (index !== (textArray.length - 1)) {
//       htmlString = htmlString.concat(" ");
//     }  
//   });
//   return htmlString + "</p>";  
// }

const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];

function filterOffensiveWords(text) {
  const splitText = text.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    const cleanWord = splitText[i].toLowerCase();
    if (offensiveWords.includes(cleanWord)) {
      splitText[i] = "*".repeat(cleanWord.length); // Replace the word with asterisks
    }
  }
  return splitText.join(" ");
}