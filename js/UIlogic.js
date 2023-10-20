// UI Logic
$(document).ready(function(){
    $("#word-counter").submit(function(event){
      event.preventDefault();
  
      const textPassage = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(textPassage);
      const occurrenceOfWord = numberOfOcccurrencesInText(word, textPassage);
      const commonWord = mostCommonWord(textPassage);
      $("#total-count").text(wordCount);
      $("#selected-count").text(`${word}: ${occurrenceOfWord}`);
      $(".word").text(word);
      $("#threeMostCommon").text(commonWord);
      $("#offensiveWord").text(filterOffensiveWords(textPassage));
  
    });
  });

