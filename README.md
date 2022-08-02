<!------------------------------------------->

<h1 style="color:#252525">Dailymotion Video Player</h1>

<!------------------------------------------->

<br><br>

<h3>Video Player with &lt;JavaScript&gt;</h3>

<pre class="code1">
&lt;div id="player"&gt;&lt;/div&gt;

&lt;script src="https://api.dmcdn.net/all.js"&gt;&lt;/script&gt;

&lt;script&gt;
var player = DM.player(document.getElementById("player"), {
video: "VideoID",
width: "500",
height: "315",
params: {
autoplay: false,
mute: false,
allowfullscreen: true,
loop: 1,
"queue-autoplay-next": false,
"ui-highlight": "c90c0f",
"sharing-enable": false,
"ui-logo": false,
"ui-start-screen-info": false,
"queue-enable": true
}
});
&lt;/script&gt;
</pre>

<br>

**[See More](https://htmlpreview.github.io/?https://raw.githubusercontent.com/ZazerConer/dailymotion-video-player/main/index.html)**

<hr>

https://github.com/ZazerConer/dailymotion-video-player/blob/main/src/script.js
<!----------------------------------------->
