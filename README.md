# Text Analizer
### Contributor
> * Name: Adejumo Adedayo
> * Email: adejomoemma@gmail.com
> * GitHub: LuckDayz
> * Phone number: 08103564683

### Brief Description
> A Text Analyzer often generate statistics about the text, such as word count, sentence count, average word length, display the most common word and extract an offensive word. These statistics provide a basic overview of the text's structure.

### Technology Used
> * HTML
> * CSS
> * Bootstrap
> * Javascript
> * Jquery-3.6.4
> * Git Bash

## Project Description
> This is Text analyzer site that count the number of sentences within a given text. In addition to sentence counting, the project can also calculate the total number of words in the provided text then omit the offensive word.  

### Setup/Installation Requirment
> * Clone the project from the repository in [GitHub](https://www.github.com/LukzDayz/resort)
> * Navigate to the project root and open the index file on your browser

### Known Bugs 
> * There is a minor issue in the mostCommon function that i'm aware of. I actively working on resolving this and plan to provide an update to address the bug afterward. Your understanding and patience are greatly appreciated as i strive to improve the functionality of the Text Analyzer project.

### License 
>  MIT


### Test-Driven Development 
> "It should return 3 if a passage just has 3 words." Code: const text = "Hello hello world"; wordCounter(text); Expected Output: 3

> "It should return 0 for a string that is only spaces." Code: wordCounter(""); Expected Output: 0

>"It should not count number as word." Code wordCounter("hello hello 77 88"); Expected Output: 2

>"It should return 1 occurence of a word when the word and text are the same." Code: const text = "hello hello there"; const word = "hello"; numberOfOccurenceInText(word, text); Expected Output: 1

> "If an empty string is passed in as a word, it should return 0" Code: const text = ""; wordCounter(word, text); Expected Output: 0

> "If a user input an offensive word, it should omit by asteric them" Code: const offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]; filterOffensiveWords(text); Expected Output: ***** ****** ******* ******