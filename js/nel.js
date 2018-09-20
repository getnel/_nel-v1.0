/*------------------------------------------------------------------

[_nel Framework]

Organization  : Flamecore
Name Project  : _nel
Version       : 1.0
Last Change   : 28/08/2018 [Create]
Github Page   : http://get_nel.github.io 
Author        : andikachamberlin.github.io
License       : MIT

-------------------------------------------------------------------*/

// ready load
_load();

// load function
function _load(){
    $(window).on("load", function () {
        $("#_load").fadeOut(1000);
    });
}

// ready ie
_ie();
_ieAlert();

// ie function
function _ie(){
    
    // Code BY Mario
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
          // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
      
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
      
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
    
}

function _ieAlert(){
    // Get IE or Edge browser version
    var version = _ie();

    if (version) {
        document.getElementById('_IE-Alert').innerHTML = '<div class="_IE-alert"></div>';
        $("body").css('overflow','hidden');
    }
}

// anonymous function jquery
$(function(){

    // ready function
    _sidebar();
    _tab();
    _navDefault();
    _navUltimate();
    _nuMobileResponsive();
    _navSmall();
    _navInside();
    _navScrollSticky();
    _navScrollMobile();
    _navScrollActive();
    _scrollTop();

    // special function
    var _window = $(window);

    _window.on('scroll', function(){
        _navScrollSticky();
    });


    
    // sidebar function
    function _sidebar(){
        // sidebarordion
        var sidebar_list = $("#_sidebar-list"),
            sidebar = $("._sidebar-dropdown"),
            sidebar_arrow = $("._sidebar-arrow");

        // click sidebarordion child
        $(sidebar_list).on("click", "li a:not(:only-child)", function (e) {

            // siblings sidebarordion end slide toggle 
            $(this).siblings(sidebar).slideToggle(300);
            // find arrow and active arrow rotate
            $(this).find(sidebar_arrow).toggleClass("_sidebar-arrow-active");
            // active hover click
            $(this).toggleClass("_sidebar-active");

            return false;
        });

        // sidebar
        var sidebar_btn = $("#_sidebar-btn"),
            sidebar = $("#_sidebar"),
            sidebar_window = $("#_sidebar-window");
            sidebar_overflow = $("body");

        // sidebar btn show sidebar
        $(sidebar_btn).on("click", function () {
            $(sidebar).toggleClass("_sidebar-active");
            $(sidebar_window).fadeIn(300);
            $(sidebar_overflow).toggleClass("_sidebar-overflow");

            return false;
        });

        // window click close
        $(sidebar_window).on("click", function () {
            $(this).fadeOut(300);
            $(sidebar).removeClass("_sidebar-active");
            $(sidebar_overflow).removeClass("_sidebar-overflow");

            return false;
        });

    }

    // tab function
    function _tab(){
        $("#_tab-list").on("click", "._tab", function(e) {
            e.preventDefault();

            $("._tab").removeClass("_tab-active");
            $("._tab-content").removeClass("_tab-show");
            $(this).addClass("_tab-active");
            $($(this).attr("href")).addClass("_tab-show");
        });

        $("#_subtab-list").on("click", "._tab", function(e) {
            e.preventDefault();

            $("._tab").removeClass("_subtab-active");
            $("._subtab-content").removeClass("_tab-show");
            $(this).addClass("_subtab-active");
            $($(this).attr("href")).addClass("_tab-show");
        });

        $("#_endsubtab-list").on("click", "._tab", function(e) {
            e.preventDefault();

            $("._tab").removeClass("_endsubtab-active");
            $("._endsubtab-content").removeClass("_tab-show");
            $(this).addClass("_endsubtab-active");
            $($(this).attr("href")).addClass("_tab-show");
        });
    }

    // navbar default function
    function _navDefault(){
        var _btn = $("#_nav-default-toggle");

        _btn.click(function(e){
            var _nav = document.getElementById("_nav-default");
            
            if (_nav.className === "_nav-default") {
                _nav.className += " _nav-default-responsive";
            } else {
                _nav.className = "_nav-default";
            }

            e.preventDefault();
        });
    }

    // navbar ultimate function
    function _navUltimate(){
        var _nav_icon = $("#_nav-icon"),
            _nav_items = $("#_nav-items"),
            _nav_search = $("#_nav-search"),
            _nav_search_input = $("#_nav-search-input"),
            _nav_search_close = $("#_nav-search-close");

        _nav_icon.click(function(){
            _nav_items.slideToggle(300);
            $(this).toggleClass("_nav-active");

            return false;
        });

        _nav_search.click(function(){
            _nav_search_input.fadeIn();
        });

        _nav_search_close.click(function(){
            _nav_search_input.fadeOut();
        });

    }

    function _nuMobile(responsive) {

        var _nav_list = $("#_nav-list"),
            _nav_dropdown = $("._nav-dropdown"),
            _nav_arrow = $("._nav-arrow");

        if (responsive.matches) {
            
            _nav_list.on("click", "li a:not(:only-child)", function (e) {
                $(this).siblings(_nav_dropdown).slideToggle(300);
                $(this).find(_nav_arrow).toggleClass("_nav-arrow-active");
                $(this).toggleClass("_nav-active");

                e.preventDefault();
            });

        }else{
            _nav_list.off();
        }
    }

    function _nuMobileResponsive(){
        var responsive = window.matchMedia("(max-width: 992px)");
        
        _nuMobile(responsive);
        responsive.addListener(_nuMobile);
    }

    // navbar small function
    function _navSmall(){

        var _nav_small_mobile = $("#_nav-small-mobile"),
            _nav_small_toggle = $("#_nav-small-toggle");

        _nav_small_toggle.click(function(){
            _nav_small_mobile.slideToggle(300);
            $(this).toggleClass("_nav-small-active");
        });
    }


    // navbar inside function
    function _navInside(){

        var _nav_inside_toggle = $("#_nav-inside-toggle"),
            _nav_inside_list = $("#_nav-inside-list");

        _nav_inside_toggle.click(function(){
            _nav_inside_list.slideToggle(300);
            $("._nav-inside-toggle i").toggleClass("_nav-inside-active");
        });

    }

    // nav scroll sticky function
    function _navScrollSticky(){
        var _window = $(window),
            _nav_scroll = $("#_nav-scroll");

        if(_window.scrollTop() > 0){
            _nav_scroll.addClass("_nav-scroll-sticky");
        }else{
            _nav_scroll.removeClass("_nav-scroll-sticky");
        }
    };

    // nav scroll mobile function
    function _navScrollMobile(){
        var _nav_scroll_items = $("#_nav-scroll-items"),
            _nav_scroll_toggle = $("#_nav-scroll-toggle");

        _nav_scroll_toggle.on('click', function(){
            _nav_scroll_items.slideToggle(300);

            return false;
        });
    };

    // nav scroll active function
    function _navScrollActive(){
        $.scrollIt();
    }

    function _scrollTop(){
        var _scroll_top_toggle = $("#_scroll-top-toggle");

        _scroll_top_toggle.on('click', function(e) {

            if (this.hash !== "") {

                var hash = this.hash;
            
                $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                });
            }

            e.preventDefault();

        });
    }

});
// end anonymous function jquery

/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
(function($) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'ease-out',
        scrollTime: 600,
        activeClass: '_nav-scroll-active',
        onPageChange: null,
        topOffset : -80
    };

    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
            if(ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function (e) {
            var target = $(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') ||
            $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function (e) {
            var key = e.which;
            if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if(key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if(key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if(settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[data-scroll-nav]').removeClass(settings.activeClass);
            $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top + settings.topOffset &&
                winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll',watchActive).scroll();

        $(window).on('keydown', keyNavigation);

        $('body').on('click','[data-scroll-nav], [data-scroll-goto]', function(e){
            e.preventDefault();
            doScroll(e);
        });

    };
}(jQuery));

/*!
 * jquery.counterup.js 2.1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Feb 24, 2017
 */
(function ($) {
    "use strict";

    $.fn.counterUp = function (options) {

        // Defaults
        var settings = $.extend({
                'time': 400,
                'delay': 10,
                'offset': 100,
                'beginAt': 0,
                'formatter': false,
                'context': 'window',
                callback: function () {
                }
            }, options),
            s;

        return this.each(function () {

            // Store the object
            var $this = $(this),
                counter = {
                    time: $(this).data('counterup-time') || settings.time,
                    delay: $(this).data('counterup-delay') || settings.delay,
                    offset: $(this).data('counterup-offset') || settings.offset,
                    beginAt: $(this).data('counterup-beginat') || settings.beginAt,
                    context: $(this).data('counterup-context') || settings.context
                };

            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $this.attr('data-num') ? $this.attr('data-num') : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                var decimalPlaces = (num.split('.')[1] || []).length;
                if (counter.beginAt > num)
                    counter.beginAt = num;

                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);

                // Convert time to total seconds
                if (isTime) {
                    var times = num.split(':'),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }

                // Generate list of incremental numbers to display
                for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {

                    var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);

                    // Add incremental seconds and convert back to time
                    if (isTime) {
                        newNum = parseInt(s / divisions * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }

                    // Preserve commas if input had commas
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }

                $this.data('counterup-nums', nums);
                $this.text(counter.beginAt);

                // Updates the number until we're done
                var f = function () {
                    if (!$this.data('counterup-nums')) {
                        return;
                    }
                    $this.html($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), counter.delay);
                    } else {
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null);
                        settings.callback.call(this);
                    }
                };
                $this.data('counterup-func', f);

                // Start the count up
                setTimeout($this.data('counterup-func'), counter.delay);
            };

            // Perform counts when the element gets into view
            $this.waypoint(function (direction) {
                counterUpper();
                this.destroy(); //-- Waypoint 3.0 version of triggerOnce
            }, {offset: counter.offset + "%", context: counter.context});
        });

    };

})(jQuery);