# Why a custom video player?
This video player is pretty, supports playback speed toggles, fullscreen and custom coloring. Best of all, no youtube cookies or recommendations after video's are played.

# How to use this video player?
Add a div with the class cnxt-video-player. 
- thumbnail url
- video url
- title 
- color, you can use Chakra UI colors: gray, red, orange, yellow, green, teal, blue, cyan, purple

Add this script to your page: https://custonext.github.io/VideoPlayer/widget/index.js

## Example
Below is an example of this pretty video player, using a video in HubSpots File Manager.
![screenshot](https://raw.githubusercontent.com/Custonext/VideoPlayer/master/public/screenshot.png)


``` html

    <div class="cnxt-video-player" data-title="Ideal Customer Benchmark" data-thumbnail="https://lp.custonext.nl/hubfs/Benchmark.jpeg" data-video="https://lp.custonext.nl/hubfs/Videos/Ideal%20Customer%20Benchmark.mp4">
    </div>
    <script src="https://custonext.github.io/VideoPlayer/widget/index.js" type="text/javascript"></script>


```
