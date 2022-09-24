# Project Documentation - Project 1 Prototype

Working link: https://swostikpati.github.io/Connections-Lab-Fall-22/Week%203/3.2/project1_prototype/
## Wireframe

This is the [initial wireframe](https://github.com/swostikpati/Connections-Lab-Fall-22/blob/main/Week%203/3.2/project1_prototype/project1prototype_wireframe.pdf) of the application. The wireframe hasn't yet been implemented fully (it will be by the end of project 1). Each of the pages in the pdf represent different frames that will occur due to button clicks. The wireframe of several other frames need to be added and there might be some design changes that get accumulated by the end of the project.

## API

The project uses the api from the [Unsplash](https://unsplash.com/) Website. It provides access to thousands of high-resolution royalty-free stock images. My application requires access to a lot of images to cater for diverse searches. To access the API I first created a developer account on Unsplash and created an application. I was then assigned an Access key and a Secret Key. After going through some documentation, I was able to understand the API endpoints where I could make requests to. Using Postman, I learned the various things present in the JSON object.

![image](https://user-images.githubusercontent.com/67205637/190904445-59e73f52-0683-472e-99e1-9302c0d4aace.png)

All the images are stored in the results array inside the JSON object. Each index of the array consists of links to the image in different sizes and several lines of description about the image. The API call consists of a query string consisting of the search term and an id which is the unique access key provided by unsplash on the developer account.

## Loading data into website

The application requires the user to provide a picture either by clicking it using their webcam, importing it from a file in the system, or searching it online. It is in the last case where the Unsplash api is required. 

![image](https://user-images.githubusercontent.com/67205637/190908380-7d0b4990-54c1-4776-aacf-050d58525adb.png)

The user is initially provided with three options. If the user selected the third option - Find Online - they are greeted with a form where they can search for any image. When they do, based on availbility of their search result, the program fetches an entire object of search results from Unsplash. For the purpose of confirming that the api works properly, the image of the first search result is appended into website and it's description is printed out in the console.

![image](https://user-images.githubusercontent.com/67205637/190909066-6e344b50-4a36-4f07-bc01-cf5b520f0c75.png)

