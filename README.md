# 03 JavaScript: Password Generator

Link to deployed application: https://AFeese.github.io/Password-Generator/

Welcome to my Password Generator. 
This program is designed to assist with generating completely random characters to make up a radomized password, each time the "Generate Password" button is clicked, and/or when the page is refreshed. A randomized password helps with obtaining better security and minimizes chances of password hacking, but is of course never guaranteed. 

The program works as follows: 

...
When the Generate Password button is clicked, the user is prompted with four options for password criteria: lowercase letters, uppercase letters, special characters, and numbers. If no criteria is selected, the user is prompted to try again.

The last prompt asks the user to pick a password length between 8 and 128 characters. If the user picks a number outside of those parameters, an alert is shown that reads, "incorrect selection. Please try again".


Each password criteria selection that the user picks gets saved into a variable, and is then run through a function that chooses random characters from the user's selections. A loop is run, adding each randomized character to a "collection" variable until it fulfills the user's selected password length number. Once the user's input number for length has been reach with the randomized characters, the full "string" of random characters is then shown on the screen. 

When the page is refreshed, or the "Generate Password" button is clicked again, the process starts over. 

- Ashley Feese






## Original Instruction -----

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
