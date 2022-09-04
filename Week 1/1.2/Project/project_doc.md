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


## Nav Bar
I generally had used the bootstrap navbar
