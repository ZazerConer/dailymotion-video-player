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
