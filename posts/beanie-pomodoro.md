---
title: 'Beanie Pomodoro'
date: 'January 8, 2025'
excerpt: 'Keywords: HTML, CSS, JavaScript, Web Extension, Pomodoro, Front-End, Back-End'
cover_image: '/images/beanie-pomodoro/beanie.png'
---

# Beanie Pomodoro 

Ever since Google's controversial changes to manifest V3 in Chrome's extension, I have decided to switch from Chrome to Firefox due to privacy reasons.  I used to depend on the Mariana Pomodoro to help me study but after I switched, I can no longer use that web extension due to differences in how web extensions work between Chrome and Firefox.

To see the code, please visit <a href = "https://github.com/henryjlee729/beanie-pomodoro"> link</a>.

## The Development Process

The project involves utilizing HTML, CSS, and JavaScript.  HTML and CSS were used for aesthetic purposes while JavaSCcript was used for the back-end.  All of the art and icons were personally drawn and made by me.  I like adding some of my artworks to my programming projects since it gives some personalization to the pomodoro timer.  

I first worked on the front-end (since it was easier).  Once all of the icons and structure was done, I then moved to the back-end.  The back-end was a lot more annoying and complicated than I expected.  I am currently still working on this aspect since it is still buggy and not yet complete.

## Pomodoro Features

The pomodoro timer has the basic functionally: working for a specific amount of time and then taking a short break after that.  I added a long rest functionality so that I can rest after working a certain number of sessions.  The default settings are 25 minutes of work, 5 minutes of a short rest, and 15 minutes of a long rest.

When you open the web extension, you press the start button.  It will then look like this when it starts:

![alt text](/images/beanie-pomodoro/work.png)

The menu includes a reset button if I want to restart a session alongside links to the options and stats menus, which will be explained later.

Once the work session ends, you can be greeted with 

![alt text](/images/beanie-pomodoro/short-rest.png)

or 

![alt text](/images/beanie-pomodoro/long-rest.png)

depending on how many work sessions have been completed.  Once you click on the resume button, the corresponding rest session will start.  The page will close and a new popup will appear:

![alt text](/images/beanie-pomodoro/rest.png)

The same buttons are shown with the same options but with different art to indicate that it is a rest session.  Once the rest session is over, a new page will show either 

![alt text](/images/beanie-pomodoro/end-short-rest.png)

or 

![alt text](/images/beanie-pomodoro/end-long-rest.png)

depending on the type of rest that has been completed with different art as well.

## Other Features

I have included some other features:

1. Settings

   I have included a settings page where the user can customize how much time they want to allocate for each work, short rest, and long rest session.  I have also allowed the user to determine if they would like to have a noise played which indicates that a specific session is over as well as how often they would like to have the long rest.  There is also the option to resort back to the default settings if the user wishes.

   ![alt text](/images/beanie-pomodoro/options.png)

2. Statistics

   A statistics page has been added to allow a user to see how much time has been spent on each session as well as how many sessions they had.  A graph is also supposed to be added down below, where it displays how many work sessions have been completed for each day.  However, it is still under beta as some of the features are still not yet complete.

   ![alt text](/images/beanie-pomodoro/stats.png)

3. Credits (Just Kidding)

   While not exactly a feature, this is the credits page which shows who made the art, program, and layout.  While not exactly impactful, it also gives the user the ability to contact me if they wish to see anything changed.

   ![alt text](/images/beanie-pomodoro/credits.png)

## Next Steps

Right now, a version for both the Firefox and Chrome versions have been made.  The link to the Firefox extension is <a href = "https://addons.mozilla.org/en-US/firefox/addon/beanie-pomodoro/"> here </a> and the Chrome extension <a href = "https://chromewebstore.google.com/detail/beanie-pomodoro/gaaikgggdnjcolgjbekolakckfknpcop"> here</a>.

If any other changes have occurred, I will write them down here.