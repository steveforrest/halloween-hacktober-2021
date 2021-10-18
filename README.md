# Gory Stories

## Table of contents

- [Introduction](#introduction)
- [UX](#ux)
  * [Overview](#overview)
  * [Goals](#goals)
  * [Wireframes](#wireframes)
  * [Design](#design)
    + [Design Process](#design-process)
- [User Stories](#user-stories)
  * [Target Audience](#target-audience)
- [Features](#features)
  * [Features Visiable across All Pages](#features-visiable-across-all-pages)
  * [Features visable on <> page](#features-visable-on----page)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Tools](#tools)
- [Testing](#testing)
  * [Validation of Code Testing](#validation-of-code-testing)
    + [HTML](#html)
    + [CSS](#css)
    + [Javascript](#javascript)
- [Deployment](#deployment)
  * [Used Commands during Deployment](#used-commands-during-deployment)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Running this Project Locally](#running-this-project-locally)
- [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)

## Introduction

This site was created as part of a hackathon programme organised by Code Institute.

Night fell quickly this Halloween. The grey mist crept across the street, silently grasping the senses of sight as the moon glared menacingly above.
The journey ahead is simple go door to door, grab your loot without making trouble.

Gory stories is an interactive halloween story that takes the users on a night of trick or treating with a difference. Solve the puzzles to get the candy, and try to make it home alive!

## UX

### Overview

Gory stories is an interactive tale that takes users through a night of halloween trick or treating. With puzzles and games to complete before progressing to the next pages and getting the candy, who knows it you'll ever make it home!  

### Goals

Our goals were to create a halloween inspired story that involved users with games and puzzles in order for them to progress through the tale.
We focused on giving the user a fun and exciting experience, with challenges along the way to keep them enticed.

### Wireframes

We have produced a mock up of the websites pages.
Wireframes created can be found [HERE](./WIREFRAMES.md)

### Design

#### Design Process

1. _Strategy Plane_

**User Stories**

This site is created based on the following user’s expectations in mind.
* As a user I would like to:
	 * Have a clear information on what the site is about and what it provides
	 * Have an easy navigation that is consistent throughout the website
	 * Consistent layout without any confusing elements
   * Have clear feedback for my action taken within the site

2. _Scope Plane_

**Features**

* The site should be responsive and user-friendly on all browsers and devices.
* Intuitive and user-friendly site
* Intuitive and user-friendly layout.
* The purpose of the site should be clear immediately.
* Responsive on all device sizes.
* Interactive elements.

3. _Structure Plane_

> **User Story:**

* As a first time visitor to the site I would like to immediately understand it's purpose.

**Acceptance Criteria:**

* The home page has a text-block that discribes the purpose of the site and who it is for.

**Implementation:**

* The home page will display a text-block that clearly shows the site purpose.

**Result:** 

User Story accomplished.

> **User Story:**

* As a user I want easy navigation elements that are consistent throughout the website.

**Acceptance Criteria:**

* All the pages have a navbar and continue buttons to guide users round the site

**Implementation:**

* All the pages display a nav bar and continue buttons.

**Result:** 

* User Story accomplished.

> **User Story:**

* As a user I want a consistent layout without any confusing elements.

**Acceptance Criteria:**

* All the pages have a matching colour scheme and layout, and all the pages have a repetative order.

**Implementation:**

* All the pages have a matching colour scheme and layout, and all the pages have a repetative order which starts with a story, moves to a game, then a house and back to a story.

**Result:** 

* User Story accomplished.

> **User Story:**

* As a user I want clear feedback for my action taken within the site.

**Acceptance Criteria:**

* Instructions and modals.

**Implementation:**

* The puzzle pages have instructions and modals that notify the users if thier actions have resulted in a win or lose and what action to take next.

**Result:** 

* User Story accomplished.

4. _Skeleton Plane_

**Navigation:**

Users are transported though the story via modal links and continue buttons. There is a nav bar with 'home' button visiable on every page, which will take the user back to index.html.

**Existing Features:**

* Index page
* Story pages 
* Game pages 
* House pages 

5. _Surface Plane_

**Colours:**

* The colour scheme was kept dark with reds, oranges and greens to portary a creepy halloween vibe.

**Fonts:**

* Google Fonts was used to import the fonts Creepster, Sans pro and Pt serif into the base.css file. These fonts were used throughout the site.

## User Stories

### Target Audience

The target audience will be children and adults of all ages who enjoy interactive stories and playing games. The theme of the site is halloween so users can expect some spooks and scares but nothing really terrifying. There are some scary sounds playing on some of the pages too.

## Features

### Features Visiable across All Pages

* Navbar - With button to take user back to home page.

* Continue Buttons - Buttons that take the user from page to page within the site.

### Features visable on home page

* Pumpkin Head - This button moves the user onto the first story page. It has animation and sound effects.

* Play/ Pause Button - This stops the video background playing.

* Text - This is an introduction to the site and sets the tone of the games and story. It hints at what the users can expect from the site.

* Background - The video background builds the users excitement and can be paused using the pause button.

### Features visable on story pages

* Text - These story pages walk the user through the tale, linking the puzzle and house pages to give context to the ideas.

* Continue Button - The continue button allows the user to move to the next page once they have finished reading.

### Features visable on puzzle pages

* Instructions - This tells the user how to play the game, and what they need to do to win. Alerts are used to notify the user on whether they've won or lost with buttons to direct thier next move.

* Puzzle - The puzzles need to be completed before moving onto the next page. A modal and/or text-box notifies the user if they need to retry or if they've won and can continue.

* Modals - These pop up on some of the games with retry buttons or continue buttons depending on whether the users passed the game.

* Continue Button - This moves the user onto the next page.

* Retry Button - This refreshes the game so the user can try again.

### Features visable on house pages

* Text - This tells the user how much candy they've recieved from the house they're trick or treating at.

* Continue Button - This takes the user to the next page.

### Future Features

* _Voice Over_ - A voice to read the text.

* _Responsiveness_ - Make the site responsive across all screen sizes.

* _Score Keeping_ - Add the ability to keep a score of the amount of candy you get based on how well you do in the games.

* _Animation_ - Animation to highlight when users lose a game.

### Bugs and Fixes Implemented after Testing 

* _Browser Issues_ - Firefox causes the modals in the games to mis-behave; Unfortunatly we didn't have time to implement a fix.

* _Responsiveness_ - The site doesn't work well on smaller screen sizes; Unfortunatly we didn't have time to implement a fix.

* _Sound Effects_ - Some of the sound effects across the site don't play like they should; Unfortunatly we didn't have time to implement a fix.

* _onclick_ - Add an onclick to the vampire so it disappears when it's clicked within the game; Unfortunatly we didn't have time to implement a fix.

## Technologies Used

### Languages

1. **HTML5, or Hyper Text Markup Language:** Used to construct the page within this app -   
https://developer.mozilla.org/en-US/docs/Web/HTML

2. **CSS3, or Cascading Style Sheets:** Used to style the various elements on the app's pages via coloring, fonts, spacing, etc. - 
https://www.w3.org/Style/CSS/Overview.en.html

3. **Javascript:** A programming language - https://www.javascript.com/

### Libraries

1. **Font Awesome:** for icons. - https://fontawesome.com/ 

### Tools

1. **Gitpod:** An online IDE also used for creating & saving code that runs in a browser, it does not have to be installed on your PC - 
https://www.gitpod.io/

2. **Git:** A version control system for tracking changes in source code during software development - https://git-scm.com/

3. **Github:** A company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft - https://github

4. **Chrome DevTools:** A set of web developer tools built directly into the Google Chrome browser. I used these tools constantly thoughout the development cycle -
   https://developers.google.com/web/tools/chrome-devtools

5. **W3C Markup Validation Service:** Used to run all html and css code through a validation process looking for errors - https://validator.w3.org/
   https://jigsaw.w3.org/css-validator/validator

6. **JSHint:** Javascript Validator used to run all JS code through looking for errors - https://jshint.com/

## Testing

### Validation of Code Testing

#### HTML

All Pages tested using [W3C](https://validator.w3.org/nu/) HTML Validator.

#### CSS

All Pages tested using [W3C](https://jigsaw.w3.org/css-validator/) CSS Validator.

#### Javascript

All JS tested using [JSHint](https://jshint.com/) Javascript Validator.

## Deployment

This website was developed in Gitpod and hosted on GitHub pages.

### Used Commands during Deployment

1. git add . - To add files to staging area.

2. git commit -m "message here" - To commit the files.

3. git push - To push the committed files to the origin master branch on github.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original 
repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)

2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.

3. You should now have a copy of the original repository in your GitHub account.

### Running this Project Locally

To run this code on your local machine, you would go to the respository at
https://github.com/steveforrest/halloween-hacktober-2021 and on the home page on the right hand side just above all the files, you will see a green button that says,
"Clone or download", this button will give you options to clone with HTTPS, open in desktop or download as a zip file.
To continue with cloning, you would;

- Open Git Bash
- Change the current working directory to the location where you want the cloned directory to be made.
- Type git clone, and then paste this URL; https://github.com/steveforrest/halloween-hacktober-2021.git Press Enter. Your local clone will be created.

For more information about the above process; https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

## Credits

### Content

- [Wireframes](https://www.figma.com/)

### Media

- [Table of contents](https://ecotrust-canada.github.io/markdown-toc/)

- [Code-Institute](https://codeinstitute.net/)

### Acknowledgements

- Code Institute's [Slack](https://app.slack.com/client/T0L30B202/C0L316Z96) Channels and the many incredible alunni, mentors, tutors and users who contribute to them; the many pinned announcements, 
pdf files, etc. were of great help, as was the advice and motivation given by the many members.

- All the incredible members of team 5 - Dead or Alive who contributed time, effort and lines and lines of code to get this project into the world!

- The Code Insitute team.
