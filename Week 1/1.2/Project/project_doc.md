# Project Documentation - Pedometer using M5 Stack Core 2 Arduino
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

I didn't want to repeat writing Arduino M5 Core which was already conveyed using the website title and the logo.



