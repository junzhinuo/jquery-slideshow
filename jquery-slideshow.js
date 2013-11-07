+function($) {
    $.fn.extend({
        slider: function() {
            var thisObj = this;

            //init
            if (!$(this).data("inited")) {
                $(this).on("click", ".button", function() {
                    $(thisObj).find(".slider").eq($(this).index()).trigger("show");
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
                        $(this).slider();
                        $(this).removeClass("mouseover");
                    }).call(thisObj);
                });

                $(this).on("show", ".slider", function() {
                    var active = $(thisObj).find(".slider[data-slider='active']");
                    if (active[0] == this) {
                        return;
                    }
                    active.fadeOut(500).removeAttr("data-slider").removeClass("active");
                    $(thisObj).find(".button").removeClass("active");
                    $(this).fadeIn(500).attr("data-slider", "active");
                    $(thisObj).find(".button").eq($(this).index()).addClass("active");
                });

                $(thisObj).find(".slider").eq(0).trigger("show");

                $(this).data("inited", true);
            }

            //timer
            var timer = $(this).data("timer");
            clearInterval(timer);
            timer = setInterval(function() {
                (function() {
                    var length = $(this).find(".slider").length;
                    var active = $(this).find(".slider[data-slider='active']");
                    $(this).find(".slider").eq((active.index() + 1) % length).trigger("show");
                }).call(thisObj);
            }, 5000);
            $(this).data("timer", timer);


        }
    });
}(jQuery);

