<p align="center">
<kbd>
<a href="https://vidkidz.github.io/">
<img style="border-radius:50%" height="150px" src="https://vidkidz.github.io/waflash-og-image.png"></a>
</kbd>
</p>

<h2 align="center">WAFlash Player</h2>
<p align="center">📌 How to use it on your website! • via html, css, js</p>

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
            swfUrl: "FLASH URL"
        }
    </script>
    <div id="waflashContainer">
        <canvas class="waflashCanvas" id="canvas" tabindex="1"></canvas>
        <div id="waflashStatus" style="display: none;">Playing...</div>
        <script crossorigin="anonymous" type="module">
            let is_mobile = /Mobi/i.test(window.navigator.userAgent); if (is_mobile) {
                function scrollToSubject() { try { window.scrollTo({ top: 100, left: 0, behavior: 'smooth' }); } catch (e) { } } scrollToSubject(); window.addEventListener("orientationchange",
                    function () { setTimeout(scrollToSubject, 100); });
            } else { document.getElementById('canvas').focus(); } document.getElementById('canvas').addEventListener("keydown", function (ev) { ev.preventDefault(); ev.stopPropagation(); }); document.getElementById('canvas').addEventListener("click",
                function () { document.getElementById('canvas').focus(); }); document.addEventListener("mousedown", (function () {
                    const canvasElement = document.getElementById('canvas'); let focused = false; return function (ev) {
                        if (ev.target == canvasElement) { if (!focused) { canvasElement.focus(); focused = true; } } else { if (focused) { focused = false; } } return true;
                    }
                })()); import { createWaflash } from 'https://cdn.jsdelivr.net/gh/nate-games/waflash@main/waflash-player.min.js';
            createWaflash(gameConfig.swfUrl, window.wafOptions || {});
        </script>
    </div>
</body>

</html>
```
