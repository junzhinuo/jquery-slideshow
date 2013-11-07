jquery-slideshow
================

slideshow

Usage:

<!-- in html -->
<div id="slideshow" class="<!--[slideshow-buttons-center|slideshow-buttons-right]-->">
    <div class="slides">
        <div class="slide"><!-- 1st slide -->
            <!-- contents here -->
        </div>
        <div class="slide"><!-- 2nd slide -->
            <!-- contents here -->
        </div>
        <div class="slide"><!-- 3rd slide -->
            <!-- contents here -->
        </div>
        <!-- more slides -->
    </div>
    <div class="buttons"><!-- buttons div are optional -->
        <span class="button"></span>
        <span class="button"></span>
        <span class="button"></span>
    </div>
</div>

<!-- in script -->
$("#slideshow").slideshow();

<!-- in stylesheet -->
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