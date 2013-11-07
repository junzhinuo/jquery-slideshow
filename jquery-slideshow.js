+function($) {
    $.fn.extend({
        slideshow: function() {
            var thisObj = this;

            //init
            if (!$(this).data("inited")) {

                if (!$(this).find(".buttons").length) {
                    var buttons = $("<div class='buttons'></div>");
                    for (var i = 0; i < $(this).find(".slide").length; i++) {
                        buttons.append($("<span class='button'></span>"));
                    }
                    $(this).append(buttons);
                }

                $(this).find(".slide").eq(0).addClass("active");
                $(this).find(".button").eq(0).addClass("active");

                $(this).on("click", ".button", function() {
                    $(thisObj).find(".slide").eq($(this).index()).trigger("show");
                });

                $(this).on("mouseenter", function() {
                    (function() {
                        var timer = $(this).data("timer");
                        clearInterval(timer);
                        $(this).addClass("mouseover");
                    }).call(thisObj);
                });
                $(this).on("mouseleave", function() {
                    (function() {
                        $(this).slideshow();
                        $(this).removeClass("mouseover");
                    }).call(thisObj);
                });

                $(this).on("show", ".slide", function() {
                    var active = $(thisObj).find(".slide.active");
                    if (active[0] === this) {
                        return;
                    }
                    active.fadeOut(500).removeClass("active");
                    $(thisObj).find(".button").removeClass("active");
                    $(this).fadeIn(500).addClass("active");
                    $(thisObj).find(".button").eq($(this).index()).addClass("active");
                });

                $(thisObj).find(".slide").eq(0).trigger("show");

                $(this).data("inited", true);
            }

            //timer
            var timer = $(this).data("timer");
            clearInterval(timer);
            timer = setInterval(function() {
                (function() {
                    var length = $(this).find(".slide").length;
                    var active = $(this).find(".slide.active");
                    $(this).find(".slide").eq((active.index() + 1) % length).trigger("show");
                }).call(thisObj);
            }, 5000);
            $(this).data("timer", timer);


        }
    });
}(jQuery);

