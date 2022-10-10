# Project Documentation - Dating Application

This is the implementation video of the application:

To download and run the project in your own local system, please follow the steps [here]().
## Motivation
A few years ago I read this random comment somewhere in facebook which said "We should create a dating application which asks the users several questions but in the end matches people based on a simple random-matching algorithm in O(n). It was based on giving random people a chance with each other. The idea was so funny and creative that it had stuck with me since and in this assignment I thought of trying it out. 

## Wireframe
This is the [initial wireframe]() of the project. Some changes came up since where I chose to remove the navbar and the footer as they felt unecessary to me. 

## API
The API I created is stored in the file [users.json](). It contains the details of all the pre-existing profiles present in the dating app.

## Creative Design
The wanted the website to be very subtle which justifies my choice of colors and font. I also wanted the website to relfect people and therefore I created the background image using graphics from the website [humaaans.com](https://www.humaaans.com/), which contains free-to-use images of humans avatars. 

The page where the user is matched gives very relevant info about the person they are matched with - a photo followed by their name, age, and other details.

## Technical Design
The technical design in the client-side is fairly simple in order to make the process easier for the user to signup. There is a small form that the user fills out with their name, age, gender, interests, and insta profile and voila - the user gets matched!

There is a lot going on in the server-side of things where, based only data relevant to the user is sent to the client-side (in order to lessen the data traffic sent over the network). Since the user is supposed to be matched with just one person from the gender opposite to them, 



