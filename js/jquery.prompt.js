(function (T) {

    T.extend({

        prompt: function (text, type, times, callback) {

            (function (element) {

                if (!!element) {

                    element = $(element.join('')).appendTo('body');
                    element.css({
                        'marginLeft': -((element.width() + 25 * 2 /*padding*/ + 2 /*border*/ ) /2),
                        'marginTop': -((element.height() + 14 * 2 /*padding*/ + 2 /*border*/) /2 )
                    });

                    element.fadeIn();

                    times = times || 2000;

                    setTimeout(function () {

                        if (!!element) {

                            element.fadeOut(function () {

                                element.remove();
                                !!callback && callback();
                            });
                        }

                    }, times);
                }

            })(['<div class="prompt"><i class="', type, '"></i><span>', text, '</span></div>']);
        }

    });

})(jQuery);