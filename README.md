# Real Time Bus Tracker

## Description of the project: 
We made a simple example project on the real-time bus tracker using the MBTA V3 API (take one of its bus routes as an example, eg. route 1).
From what we worked on before from the MERN coursework, here we improved the project by adding a real-time tracker (fetching real-time data from the API) and computing the real-time bus coordinates in the console.

## How to Run: 
If you wanna try it on your local machine, here are the steps you are about to take:
Download the zip of this project or through GitHub to your desktop.
First, register an account at https://www.mapbox.com/.
Then, click on the 'Token' tab on your account main page and create a Token for free.
Next, copy your token number in the JS: 'fmapboxgl.accessToken = '--INSertYourAccessTokenHere--' '.
Finally, open the 'html' on your local PC.

![image](https://github.com/Jessy-Ding/TheRealTimeBusTracker/assets/89423283/d1178be0-0ee0-4a70-996c-c8a54532f64f)

## Roadmap of future improvements: 
Here are several thoughts we have that may help to improve the functionality of the real-time bus tracker:
Initially, we try to include all bus routes from the MBTA using the 'gtfs-realtime.proto'. Then we find there is an issue with CORS policy when trying to fetch data from the MBTA server. It would have been helpful if we
could have some permission from the MBTA contributor platform to circumvent this restriction. Also, we could improve our script by utilizing a classic map maker on the screen for easy recognition. Last but not least, it would be ideal if we 
could have an input box or a pull-down list for users to select which route(s) they are interested in and only show those real-time routes on the screen. 

## License information: MIT license. 
