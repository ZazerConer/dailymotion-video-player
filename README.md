<!------------------------------------------->

<h1 style="color:dodgerblue">Dailymotion Video Player</h1>

**Video player usage....**

- ```<script>```

- ```<iframe>```

- ```Embed video```

- ```Embed player```

- ```Embed iframe```

<!------------------------------------------->

<br><br>

<h3 style="color:#ccc">Video Player with &lt;JavaScript&gt;</h3>

```js script
<div id="player"></div>

<script src="https://api.dmcdn.net/all.js"></script>

<script>
var player = DM.player(document.getElementById("player"), {
video: "VideoID",
width: "100%",
height: "100%",
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
</script>
```

<br>

**[See More](https://htmlpreview.github.io/?https://raw.githubusercontent.com/ZazerConer/dailymotion-video-player/main/index.html)**

<hr>

<!----------------------------------------->
