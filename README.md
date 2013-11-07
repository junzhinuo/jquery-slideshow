jquery-slideshow
================

slideshow

Usage:

composer.json

``` json
{
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/junzhinuo/jquery-slideshow.git"
        }],
    "require": {
        "junzhinuo/jquery-slideshow": "dev-master"
    }
}
```

in html

``` html

<div id="slideshow" ><!--class="slideshow-buttons-center|slideshow-buttons-right"-->
    <div class="slides">
        <div class="slide"><!-- 1st slide -->
            <!-- contents here -->
            <h1>Slide 1</h1>
        </div>
        <div class="slide"><!-- 2nd slide -->
            <!-- contents here -->
            <h1>Slide 2</h1>
        </div>
        <div class="slide"><!-- 3rd slide -->
            <!-- contents here -->
            <h1>Slide 3</h1>
        </div>
        <!-- more slides -->
    </div>
    <div class="buttons"><!-- buttons div are optional -->
        <span class="button"></span>
        <span class="button"></span>
        <span class="button"></span>
    </div>
</div>
```

in script

``` javascript
$("#slideshow").slideshow(5000<!-- delay in ms, 300ms default -->);
```

in css

``` css
.slideshow{
    height: 300px;
    width: 400px;
    background:#ffccff;
}
.slideshow .button{
    width: 50px;
    height: 50px;
    background: #ccffff;
}
.slideshow .button.active{
    background: #00cccc;
}
```
