##
<img width="814" alt="image" src="https://user-images.githubusercontent.com/115442046/210320641-28611537-6816-4fa1-a6f1-854d806f270d.png">

## Overview
- This app shows the final result of the FIFA world cup of each country from the inaugural to the 21th in the linear graph.  
- You can see up to 4 countries at the same time.

## URL
- https://fifa-world-cup-9bf30.web.app/  
Only macOS and iOS are supported.

## Why I created this
Japan team won victories over Germany team and Spain team at the group stage in 2022 Qutar world cup.  
Of course I knew how strong these powerhouses, I wanted to see the power difference between countries in more objective and clearer way. I googled to find the apps of this kind but none were found, so I made this app.  
This app shows the changes of the final result of FIFA world cup of each country in the graph format and, by overlapping them, you can see the power difference between countries clearer.  

## Technologies
- Next.js(TypeScript)
- Firebase(Hosting only)
- react-chartjs-2
- Chakra UI

I'm using custom json data for pokemon data, with API provider function of Next.js.

## The amount of time for creation

①Support for 2 countries only

|Working content|Working time|Total amount of working|
|:---|:---|:---|
|Data creation |10h ||
|Coding|15h||
|Styling|5.5h||
|Deployment|2h||
||Total|32.5h|
|Coding＋Refactoring|26h||
||Total|26h|
|Grand total||58.5h|

- I started making this app right after December 2th(Japan vs Spain) and launched it, making two countries comparable by the time 5th December(Japan vs Croatia).  
After that, I updated it with four countries comparable, and did refactoring since codes were messy.

## Future improvements
- Flags are to be replaced with images since it's currently using platform dependent characters and are not displayed properly with Windows machines.  
- Check chartjs specification - the score of the last match is displayed in the tooltip, but it now shows that of the country clicked last.  
- Scales on y axis is displayed less when the app is opened with smart phone.  
- Fix y axis memory width - currently they have the same width, but considering that there are difference of achievements(for incetance, between round of 16 and quarter filal which Japan team haven't got over), it should be modified.
