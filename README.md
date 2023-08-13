<p align="center">
<kbd>
<a href="https://vidkidz.github.io/">
<img style="border-radius:50%" height="150px" src="https://vidkidz.github.io/waflash-og-image.png"></a>
</kbd>
</p>

<h2 align="center">WAFlash Player</h2>
<p align="center">📌 How to use it on your website! • via html, css, js <br><br> Play <a href="https://raw.githack.com/nate-games/waflash/main/code.html">Live</a> Plants vs. Zombies (Web Version) used for an example.</p>

## Dependency
HTML5 is required for this to work on your website
## What's this?
This documentation is the key to emulating flash games on your website, fastest emulator for flash files on the internet.
Incase you don't know what WAFlash is, it's a WebAssembly AS2/AS3 Flash compatible player developed with HTML5, WebGL, WebAssembly and Emscripten.

### Code
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://cdn.jsdelivr.net/gh/nate-games/waflash@main/style.css"
        rel="stylesheet" type="text/css">
</head>

<body>
    <script>
        var gameConfig = {
            swfUrl: "https://cdn.jsdelivr.net/gh/nate-games/nate-games.github.io@main/0/g/pvz/game/pvz.swf"
        }
    </script>
    <div id="waflashContainer">
        <canvas class="waflashCanvas" id="canvas" tabindex="1"></canvas>
        <div id="waflashStatus" style="display: none;">Playing...</div>
<script src="https://cdn.jsdelivr.net/gh/nate-games/waflash@main/main.js"  rossorigin="anonymous" type="module"></script>
    </div>
</body>

</html>
```
