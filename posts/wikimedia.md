---
title: 'Wikimedia Corporate Partners Project'
date: 'July 9, 2024'
excerpt: 'Keywords: Data Processing, Python, SPARQL, Jupyter Notebook, REST APIs, MusicBrainz'
cover_image: '/images/wikimedia/wikimedia.png'
---

# Wikimedia Corporate Partners Project

In Spring 2024, I have worked in a Corporate Partners project with Wikimedia Deutschland in Purdue University's Data Mine learning community.  As part of the collaboration project, I helped identify mismatches for the Wikidata Mismatch Finder, a tool conceived and built by Wikimedia Deutschland (WMDE) that allows users to report errors and disparities in Wikidata. 

In this project, I assisted in looking for mismatches between Wikidata and other external sources, using Python to compare the data values and examine whether or not they match. Mismatches result in an error message that requires a closer look by a human.

![alt text](/images/wikimedia/tdm_wikimedia.png)

## Purdue University: The Data Mine

Before I continue, it is a bit important to clarify the organizations that are involved in this project. Purdue University’s Data Mine is a learning community where students perform data-driven research to create solutions to real-world problems. In the Corporate Partners Program, students collaborate with corporate partners under the supervision of a mentor.

For the spring semester of my freshman year, I worked with Wikimedia Deutschland.  I was in a group of five students from different majors alongside a TA (teaching-assistant) mentor and two corporate mentors.

## Wikimedia Deutschland

Wikimedia Deutschland is the German chapter of Wikimedia, a non-profit organization that funds and supports applications like Wikimedia, Wikidata, and more.  For my project, the main focus was the content on Wikidata.

Wikidata is an online knowledge base that can be read and edited by both humans and machines. It’s a central storage area for other Wikimedia sister projects, including Wikipedia, Wikivoyage, and more, and contains 108 million data items to date. Wikidata is the most edited wiki in history with over two billion edits. It also provides data for many applications outside Wikimedia, very likely including a smartphone’s digital assistant. 

## The Project

Not all information on Wikidata is accurate. Since many applications like Wikipedia, search engines and artificial intelligence all use Wikidata’s data, inaccuracies can represent a significant issue: incorrect data from Wikidata can be picked up by these downstream projects, leading to widespread misinformation. 

To address this issue, Wikimedia Deutschland created the Wikidata Mismatch Finder, which allows downstream projects and the broader Wikimedia community to report disparities between Wikidata’s data and other trusted data sources. If a Wikidata entry lists a book’s publication date as 1996, but another data source lists the publication date as 1998, the entry would be considered a mismatch and would require human review to fix or at least note the disparity. 

Mismatches in the Mismatch Finder UI appear as follows:

![alt text](/images/wikimedia/mismatch_finder.png)

The interface helpfully displays the mismatched property in question, Wikidata’s own value, the external source’s value, and the external source link for checking the mismatch. Users can then review uploaded mismatches and decide which value is correct. A banner will appear prompting the user to fix information that conflicts with external sources. For more information, visit <a href = "https://www.wikidata.org/wiki/Wikidata:Mismatch_Finder">the Wikimedia Mismatch Finder documentation</a>. 

![alt text](/images/wikimedia/mismatch_ui.png)

As seen above, an example of the banner displayed on Wikidata items with mismatches. Users can click the provided link to see further details of the mismatch.

![alt text](/images/wikimedia/flowchart.png)

In identifying mismatches, a general process is followed shown above. First, various data sources are examined to see which are best suited for examination. For any data source, two questions are asked. First, can the source’s data legally be used? (If the source prohibits web scraping, for example, it cannot be used.) Second, is the data accessible to users, such as through APIs, data dumps, or web scraping? If the answer to both questions is yes, the next step can occur.

Once a data source is chosen, different properties are examined.   Quantitative properties are often used (e.g., P569: birth date, P570: death date) because their format makes them easier to compared to qualitative properties (e.g, P27: country of citizenship, P19: birthplace) which can take varying forms. Additionally, it is ensured that the data within the source itself is specific: the Wikidata property must contain a value, and data with long descriptions or undefined texts are avoided.

More information can be found  <a href = "https://github.com/Wikidata/Purdue-Data-Mine-2024"> here</a>.

## My Contributions

For my data source, I used the open-source MusicBrainz library.  I used Rest APIs and Python to get the specific dataset I needed and to make the comparisons.  Below is a more comprehensive list on what I did with German artists and day of death as my example.

1. Step 1: Get the Data & Dependencies

   I used QLever (link is <a href = "https://qlever.cs.uni-freiburg.de/wikidata">here</a>) to generate a CSV file containing all of the specific data that contained specific chosen attributes.  I utilized SPARQL to find specific elements.

   Once all of the data was collected in a single CSV file, I used Jupyter Notebook to set up my mismatches.  I imported all of the necessary libraries to get my mismatches.
   
   ![alt text](/images/wikimedia/step1.png)

2. Step 2: Build the Necessary Functions

   As I continued to follow the process, I built Python code that would extract the values from Wikidata and use the MusicBrainz API to extract the MusicBrainz values.  However, I found it very useful to build several helper functions that collected the data for me since it reduced the amount of code I wrote (as seen in the next step).

   ![alt text](/images/wikimedia/step2.png)

3. Step 3: Compare the Data

   Once the data values were collected, I pooled the data into two sections: elements that had a full date and elements that just had the year.  I ignored the data that did not have data for the attribute I used while also ignoring the values that were matching with Wikidata's.  If the values were matching, I would add the mismatches in a list.  Note that I intentionally added some time between each comparison to ensure I did not go beyond the rate limit.

   ![alt text](/images/wikimedia/step3.png)

4. Step 4: Write the Mismatch CSV File

   Once all of the mismatches were found, they would all be written down in a separate CSV file.  

   ![alt text](/images/wikimedia/step4.png)

5. Step 5: Check the Format

   This step is necessary since reporting mismatches on the Mismatch Finder needs to follow a specific format.  The check_mf_formatting function is used to check that the file is formatted correctly to be uploaded on the Mismatch Finder.

   ![alt text](/images/wikimedia/step5.png)

## Results

From three datasets, each containing over 10,000 items, I focused on the attributes P569 (date of birth), P570 (date of death), and P571 (inception date). I identified over 900 mismatches and, upon completion, uploaded my findings to the project's GitHub repository.

While my method helped me find my mismatches, it is inefficient and time-consuming for very large datasets. Even for datasets with fewer than 10,000 items, the entire process can take hours to finish. Despite these challenges, the project provided invaluable real-world experience.

Through this work, I learned how programming is applied to practical applications and the importance of collaboration to ensure a project's success. This experience has been instrumental in my development, teaching me how to tackle complex problems and work effectively with others.

To see the full details of my mismatches, go to this <a href = "https://github.com/henryjlee729/Wikidata-Mismatches"> link</a>.