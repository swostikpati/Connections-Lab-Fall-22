# Project Documentation - Pedometer using M5 Stack Core 2 Arduino

https://user-images.githubusercontent.com/67205637/188312201-672287ef-e770-483f-b7fb-d4b40695125f.mp4

#### This is the website for the final project of the Computer Programming for Engineers Course. It was based on the principle of bio-feedback. I made a pedometer capable of step detection, distance estimation, and calorie calculation. This is my journey of building the website for the project.

## Initial Wireframing
I had a design in mind and directly went into figma to build a wireframe. This was the [initial prototype](https://github.com/swostikpati/Connections-Lab-Fall-22/blob/main/Week%201/1.2/Project/Project%20Wireframe%20Initial.pdf) I made. The wireframe divided the entire website into four parts: the Homescreen, the Project Development section, the Project Testing section, and the Project Research section 

The home page has a navigation bar on the top with a video playing in the background. The heading and the sub heading is centered on the screen. 

Scrolling down we find the project development website. This section is vertically divided into two sections, one side containing the pictures and the other side containing necessary description for the pictures. The pictures and description alternate as we go down.

The next section is that of the project testing. I planned to put some images from my device on one side and compare it with some other images from Google Fit in the other side. This would be followed by some description. 

The final section was difficult to plan. Project research had way too many things to put - graphs, research papers, and quite a bit of theoritical explanation. I then felt that the website was more meant for depicting the final product than to represent the process of making it. But of course there was no meaning of keeping the scientifically inclined or any person seeking to understand what went behind making the product, devoid of the knowledge. So I finally decided on something that I felt gave a good solution. I decided on linking the repository and the project document. But I just couldn't put links. To make them more cohorent with the overall website, I decided on linking by placing icons of the dark theme.

I was quite happy with the overall idea of the wireframe. So I went straight to code it.

## Logo Designing
The first component in the screen was a Navbar with the logo and some navigation elements on the other end of the bar. But before beginning to make anything I needed a logo, so I opened Canva and started creating some designs. This was the [first logo](https://github.com/swostikpati/Connections-Lab-Fall-22/blob/main/Week%201/1.2/Project/project_website/assets/logo.png) I made. It looked cool as a picture but when I added it to the Navbar, it came out to be very blurry. The text in the logo was unrecognizable. 

So I designed a [second logo](https://github.com/swostikpati/Connections-Lab-Fall-22/blob/main/Week%201/1.2/Project/project_website/assets/logo1.png). This looked much sharper on screen and the text came out to be brighter. But when I uploaded the background video, I realized the theme I was actually going for. I had planned for a dark blue-black theme throughout, and this logo quite didn't fit into place. 

There came the [third logo](https://github.com/swostikpati/Connections-Lab-Fall-22/blob/main/Week%201/1.2/Project/project_website/assets/logo3.png). This time I focussed on making the logo much more aligned to Arduino. The logo of Arduino is put behind (with reduced opacity) behind the main logo which says __M5 Arduino__ in bright white. This logo I felt really fit with both the theme and the purpose of the website.


## Navigation Bar
I generally had used the bootstrap navbars before. This time I had to code it myself from scratch. I read some articles online to understand the process and finally felt I could code it. This was also a good opprotunity to use flex-box. After reading some flex-box documentation, experimenting with many things, I finally was able to make a decent enough navbar.  The background of the navbar was a solid fill initially. Going forward, when I added the video in the background, I felt making the Navbar transparent would make much more sense and it did work. I even added the home page link to the logo, even though this feature felt useless in the end as the navbar didn't scroll till the end of the page. I didn't like the pre-existing fonts available and therefore added a imported a font from google fonts to use it in the Nav bar elements and even further in various parts of the website.

None of the buttons had any functionality initially. I wanted to add effects on them. I knew this was possible, but had to look up documentation to understand how to do it. Finally, I was able to add the hover effect on the list items. I also added a transition to them to make the hover effect for smooth. I did encounter a problem with the effects later when I tried to use the buttons to navigate to specific sections in the website. I had to add an anchor tag and this caused some problems in selecting elements in CSS. After a while of experimenting and understanding, I was able to finally troubleshoot the problem. This is the final look of the navbar

![image](https://user-images.githubusercontent.com/67205637/188309162-d677e89d-cec6-4616-b1cf-bdb151ebde73.png)
 
## Homescreen Background Video and Heading 
Even though I have a bit of past experience in Web development, the one tag I had never used was the video tag. It was a really difficult thing to incorporate in the website, especially as a background. After meddling it with for about an hour, reading many posts on stackoverflow and other websites, I finally somehow was able to upload my video into the website as a background. I also made the video to continuously loop in the background. It was also a bit difficult to put the video a layer below other elements so that the elements in the transparant nav bar were visible while at the same time keeping the video inline. Finally, everything fell into place. 

After the video was put perfectly in its place, I added the heading and the sub-heading. It took me some time to ideate what to write. I tried several combination of text, fonts, and size. Finally I decided on going with this.

![image](https://user-images.githubusercontent.com/67205637/188309671-3e78b2df-e2d9-4cc7-8b0d-d9f76408344d.png)

I didn't want to repeat writing Arduino M5 Core which was already conveyed using the website title and the logo so decided to focus more on what I had made than the device I used to make it.

## Project Development

By this section, I had become somewhat proficient in manipulating HTML and CSS. But it still took a lot of time and debugging to be able to place the images and text in the right place. I did use the flexbox tool again to make things easier, but regardless, the picture sizes were too huge to be placed in the screen. I scaled them down. This is where I deviated a bit from my initial wireframe. Instead of alternating between picture in the left and picture in the right, I decided on keeping all the pictures on the left and all the description on the right. A thin dotted border also ran along the center of the screen. I felt this made more sense with respect to the user experience and overall flow of the website. I employed the changes in the website and the wireframe as well. 

I had some difficulty with getting the images as well. I took screenshots from my project report and they weren't of the highest quality. I even tried making the images on canva, but felt they would look too ideal to be real and won't represent the project as it is. 

A lot of the structural coding here was done by manipulating the width and height. I felt this could be done more easily using flexbox, but I was unable to figure out how to achieve it. This is one of the things I will be looking forward to understanding more in depth. 

This is the final design of the project development page.

https://user-images.githubusercontent.com/67205637/188311868-7f0378fd-c54b-4c3c-9363-e45925770409.mp4

## Project Testing, Project Research, and Footer

Making these pages were fairly simple. I did some basic changes to the wireframe like adding additional description paragraphs in the top. I even thought of playing around with a dark blue-black gradient while making sure not to go too overboard with it. It seemed to gel well with the overall theme. This is how the project testing page looked like in the end.

![image](https://user-images.githubusercontent.com/67205637/188311315-7d0b08a4-e1d9-44ad-9ed2-080180f32695.png)

As decided I added the links to the github repository and the project report using icons in the project research page. There was a small problem that I faced in the middle - to get dark themed icons. My background was dark and hence I needed white icons. I did find one for github but couldn't for the file icon. This is when I used canva again. I flipped the color and removed the background of an available icon and made it compatible to my website. After these modifications, I added it to my website. I added a small footer with so as to copyright my website. This is one of those features that I have seen previously in some websites and it just feels cool. This is the final view of the project research section and the footer.

![image](https://user-images.githubusercontent.com/67205637/188311400-aa406a3e-5846-4192-98e8-83a5c00026ca.png)

## Final Steps and Wireframe

I added links to each section on the Navbar. I also made the scroll behavior smooth to make it feel more subtle and professional. 

By the end some UI changes had accumulated in the [final wireframe](https://github.com/swostikpati/Connections-Lab-Fall-22/blob/main/Week%201/1.2/Project/Project%20Wireframe%20Final.pdf).

## Suggested Improvements

I think one of the most important things I want to employ in the website is to make it responsive. I obvserved that the elements of the website become extremely screwed when I change the dimensions of the website window. Going forward, I would love to add this functionality in my website. 


