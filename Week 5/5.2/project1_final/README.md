# Project Documentation - Text Portrait Web Application (ART.txt)

Working link: https://swostikpati.github.io/Connections-Lab-Fall-22/Week%205/5.2/project1_final/

## Project Description
### Overview
The aim of my project was to make a text visualizer using p5.js that could draw grayscale images using text and give users the option of experimenting around with different images. The video below showcases the working of the entire website:

https://user-images.githubusercontent.com/67205637/193339401-54cbe37c-0d31-420a-affa-b1c86bd5a334.mp4

### Motivation and Target Audience

Back in freshmen year, when I was going through the internet surfing cool things that people created with code, I came across this video where the person rendered an entire image using an ASCII string (<insert string>). I was spellbounded by the creativity of making an entire image with just a string of characters and it was then that i realized the power of coding. But I wished more people, who may not no programming, were able to experiement around with it.

This was the key motivation behind my idea. I wanted to create an application which gave users the power of trying out such a thing and experiment around with not just theirs, but with a  massive load of images present on the web. As I kept thinking more about the project, I thought of adding more functionalities, like creating images with a variety of text strings that somehow describe the image.

I believe my primary target audience are teenagers who like to try out new trends on the internet which also might lead to “text-portraits” being viral on social media with people sharing different images that they created using text.

### Concept 

Every image is made up of a number of pixels. The program traverses through every pixel present in the image and reads the RGB values of the pixel. It then calculates the single grayscale value of the pixel by averaging the RGB values. In this way every pixel is mapped with a specidic grayscale value between 0 and 255. 
The text is present in a string. We take each character from the string one at a time to print in the center of the pixel box. The color of the character printed is set as the grayscale value of the corresponding pixel. 
When all the pixel boxes are printed with characters of the corresponding grayscale value, we find that the program has successfully generated the image with just the text we provided.
Traversing through very high quality images takes a lot of computational power, so for the purpose of the website, I converted all the pictures initially to be 80 x 80 pixes.

### API

The project uses the api from the [Unsplash Website](https://unsplash.com/). It provides access to thousands of high-resolution royalty-free stock images. My application requires access to a lot of images to cater for diverse searches. To access the API I first created a [developer account](https://unsplash.com/developers) on Unsplash and created an application. I was then assigned an Access key and a Secret Key. After going through some documentation, I was able to understand the API endpoints where I could make requests to. Using Postman, I learned the various things present in the JSON object.

![image](https://user-images.githubusercontent.com/67205637/190904445-59e73f52-0683-472e-99e1-9302c0d4aace.png)
 
All the images are stored in the results array inside the JSON object. Each index of the array consists of links to the image in different sizes and several lines of description about the image. The API call consists of a query string consisting of the search term and an id which is the unique access key provided by unsplash on the developer account.

### Wireframing and Prototyping

This was the initial wireframe(<insert wireframe>). Through the process of website creation, a lot of minor changes and some major UI overhauls accumulated to create something much different from the initial plan to cater to better user experience.
 
The first prototype I created implemented sending requests to the unsplash API and showing the images to the user to choose from. It was a basic flow of screens where the user was given an option to search an image and then click on one of the 6 displayed images. The final step was to create the “text-portrait” of the chosen image. The flow was literally a copy of the initial wireframe (including the colors). I focussed more on making the flow user-friendly so as to make it very easy to navigate with large and apparant buttons and search bar. I did realize that I needed to revamp the UI a lot to make the website look professional and presentable. Also through the feedback I received through play-testing, I realized there could be some more information added in the flow to make it even more easy for the user to navigate.

### Creative and Technical Design

The website starts with a Navbar having a logo (designed by me) which says ART.txt so as to convey the creation of photo with text. The home page of the website was designed to show boldness especially to showcase. The website was made completely in dark mode. Each of the options in the Navbar have an hover effect and navigate to different parts of the website. The center of the website also has two arrows which scroll to the second section of the website on clicking. The second section of the website contains the major part of the application. I had thought of creating this as a  Magic Canvas, having all the options and user-flows in the website to allow the user to  experiement through different functions all in one place. This section initially has a poster which explains the user what they can expect from the website. On clicking the poster the cnavas resizes

 
## Key Challenges and Solutions

• Sending requests to the API based on search terms by the user was a difficult task. I knew how to access the API endpoint, but somehow I had to perform both the operation of retrieving the search term submitted by the user using the input form and then sending a GET request using the search term in a query string. At the same instant there were multiple other processes that were happening simultaneously, like error handling and changing screens. It was really difficult to pull all of them togethe in one go. But with a little bit of planning, a lot of use of the debugger tool, placing view transition code at the correct places in order to give the images time to load and also allowing for error handling, and calling the fetch request inside the “form-submit”event listener allowed me to perform everything simultaneously.

• Working with so many user flows (views) each having user interactivity was a big challenge as during designing, the plan was to have three separate user flows inside one box itself (which I called the “io box”). The views needed to be styled separately while still making sure to keep the styles uniform. There were also several dynamic elements involved that needed to be loaded in realtime while the views transitioned. Buttons had to be created in each window to transition from one view to the next and back so that the user doesn’t reach a dead end at any point in the website.

• Integrating p5.js was perhaps one of the hardest parts of building the website.  I had very less experience with working with p5 in the past, but with some help online, I was able to create the “text-portrait” on the p5 editor. I had my code ready in the p5 editor, but to integrate it in my app.js file was very difficult as understanding how the setup() and load() functions operated there was a tough job. The p5 documentation is not as expansive and hence troubleshooting was generally difficult. One major problem that I faced was loading dynamic images. I had to preload images before they could be used or displayed in the canvas, but the preload() function of p5 runs only once while my application needed several images to be loaded in realtime. With a lot of experimenting I was finally able to achieve that.

• Creating multiple instances of the canvas to show completely different information (both based on dynamic information) and in completely different screens was very difficult as well. I didn’t know about the instantiation method, so I went on employ a simple yet classic solution that I had learned during my initial months of coding. I used boolean flags. I divided the two parts of the code required to create two different canvases and put them in different code blocks (created using if-statements). Whenever a specific part needed to be displayed in the canvas, the corresponding flag became true. This way I was able to use the same canvas to present multiple things in two different user screens.

• Error and edge case handling was an important part of making the application more robust. One major place where it came in handy was when the user searched for something completely random which didn’t fetch any search results from Unsplash. In such a scenario, I had to prevent the screens from shifting when the user submitted the input form and also show the user an error alert on the browser.

• Working with real-time video rendered from the user’s webcam even though got implemented quite fast, but still was very significant. Even though p5 allowed me to easily get the webcam input, showing a dynamically rendered “text image” on the canvas required quite a bit of coding. There were certain cases when the webcam didn’t send the required input (especially while the webcam was being used by another application like zoom)

• Implementing the file import system is one challenge that still remains unsolved. After looking through a bunch of documentation online about implementing the file-upload from local computer system, I tried to integrate it in the website. But due to some reason, the server doesn’t allow adding files from the user’s computer (most likely due to chrome’s security measures)

## Potential Next Steps

• Implementing the file upload part of the application so that users are able to upload photos from their local systems.

• Allowing the users to upload add their “text-portrait” to the example artwork in the page dynamically which could be done by appending a snapshot of the p5 canvas and adding it to the website.

• Giving users the option of inputting their own text that they want to see on the “text-portraits” dynamically (even in the webcam feed)

• Giving the users the ability to play around with the pixel range of the photos so as to see better/worse resolution images and smaller/bigger text size.

• Adding the option for directly sharing the “text-portraits” to social media feed of applicatons like Instagram, Facebook, and Snapchat.

• Making the website more reponsive to cater for mobile users. Going forward also adding the additional feature of accessing not just the selfie camera but also the back camera of the phones
 
## References 

• [p5.js Documentation](https://p5js.org/reference/)

• [The Coding train](https://www.youtube.com/watch?v=55iwMYv8tGI)

• [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

• [W3 Schools](https://www.w3schools.com/)

• [Dark Mode Websites](https://blog.tbhcreative.com/2021/01/dark-mode-design-14-examples-of-black.html)

