// Velo Data,  April 2016
// First 160 lines lifted from the free dashboard chassis provided by "Creative Tim",  Bootstrap specialists.
// All functions from Line 160 are written by Ivan Vetsich for this software project
// 
// 
var lcContent = null;
var lcBrandID = null;
var gcBrandID = null;
var lcURL_Route = null;
var laRowData = null;
var lcTyreType = null;
var lcSubcategory = null;
var gcSubrange = null;
var lcSprocketCount = null;
var lcMajor_Category = null;
var gcCurrent_URL = null;
var gcPrevious_URL = null;
var gcModel_Name = null;
var goLocation = null;
var goOverlay = null;
var goComponentsCampagnolo = null;
var goComponentsShimano = null;
var goComponentsSRAM = null;
var goComponentsFSA = null;
var m0FilterByCategory = '';
var m0FilterByModel = '';
var m0FilterByBrand = '';
var m0FilterByTyreType = '';
var m0IncludeTwinPacks = true;
var Artist = null;
var Artists = null;
var artistArray = null;
var person = null;


var viewportWidth = $(window).width();
var viewportHeight = $(window).height();


var searchVisible = 0;
var transparent = true;
var transparentDemo = true;
var fixedTop = false;
var navbar_initialized = false;
var left_navbar_initialized = false;

$(document).ready(function () {
    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    lbd.checkSidebarImage();

    // Init navigation toggle for small screens   
    if (window_width <= 991) {
        //lbd.initRightMenu();  THIS IS NOW DONE IN footer.php after loading sidebar-wrapper.php
    }

    //  Activate the tooltips   
    $('[rel="tooltip"]').tooltip();

    //      Activate the switches with icons 
    if ($('.switch').length !== 0) {
        $('.switch')['bootstrapSwitch']();
    }
    //      Activate regular switches
    if ($("[data-toggle='switch']").length !== 0) {
        $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    }

    $('.form-control').on("focus", function () {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

});

// activate collapse right menu when the windows is resized 
$(window).resize(function () {
    if ($(window).width() <= 991) {
        // lbd.initRightMenu();  THIS IS NOW DONE IN footer.php 
    }

    //    if ($(window).width() * 0.25 <= 335) {
    //        $("#main-panel").css("width","75%");
    //    }
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    $("#sidebar-wrapper-home").empty();
    $("#sidebar-wrapper-home").html($("#IJV-Masterlist-Content").outerWidth());
    format_column_width();

});


lbd = {//  lbd   gets called above during the window resize function....
    misc: {
        navbar_menu_visible: 0
    },
    checkSidebarImage: function () {
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if (image_src !== undefined) {
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
            $sidebar.append(sidebar_container);
        }
    },
    initRightMenu: function () {
        if (!navbar_initialized) {

            //  
            //  
            //  This process creates a clone of the known element in the widescreen navbar with class '.navbar-collapse'
            //  It then places that element all the way down the bottom of the DOM,  I rename it to FUCKYOU_MOTHERFUCKER to help you find it!
            //  It then copies the content from the widescreen SideBar Wrapper options and inserts that content into the cloned element.
            //  However,  this process should only ever occur once.  And it can only take place after the navbar and sidebar wrappers are loaded via AJAX.
            //  Hence,  the final call to kick off this process is now found only in footer.php
            //  
            //  
            //  
            $navbar = $('nav').find('.navbar-collapse').first().clone(true);
            $navbar.attr('id', 'IJV_SLIDE_IN_NAVBAR');

            $sidebar = $('.sidebar');
            sidebar_color = $sidebar.data('color');

            $logo = $sidebar.find('.logo').first();
            logo_content = $logo[0].outerHTML;


            ul_content = '';

            $navbar.attr('data-color', sidebar_color);

            // add the content from the sidebar to the right menu
            content_buff = $sidebar.find('.nav').html();

            ul_content = ul_content + content_buff;

            //  add the content from the regular header to the right menu
            //  $navbar.children('ul').each(function () {
            //      content_buff = $(this).html();
            //      ul_content = ul_content + content_buff;
            //  });

            ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';

            navbar_content = logo_content + ul_content;
            // navbar_content = ul_content;

            $navbar.html(navbar_content);
            $navbar.find('.logo').css("background", "linear-gradient(#fefefe, #d3d8e8)");
            $navbar.find('.logo').css("margin-top", "0px");
            $navbar.find('.logo').css("margin-bottom", "0px");


            $('body').append($navbar);

            background_image = $sidebar.data('image');
            if (background_image !== undefined) {

            }


            $toggle = $('.navbar-toggle');  // find the collapse hamburger button on the Responsive Navigation Bar.....

            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $navbar.find('button').addClass('btn-simple btn-block');

            $toggle.click(function () {
                if (lbd.misc.navbar_menu_visible === 1) {

                    $('html').removeClass('nav-open');
                    lbd.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                    setTimeout(function () {
                        $toggle.removeClass('toggled');
                    }, 400);

                } else {

                    setTimeout(function () {
                        $toggle.addClass('toggled');
                    }, 430);

                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function () {
                        $('html').removeClass('nav-open');
                        lbd.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                        setTimeout(function () {
                            $toggle.removeClass('toggled');
                        }, 400);
                    });

                    $('html').addClass('nav-open');
                    lbd.misc.navbar_menu_visible = 1;

                }
            });
            navbar_initialized = true;
        }

    }
};




// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
;



// The following functions are added by IJV April 2016
// 
// 
// 





function isNumberKey(evt, element) {
    document.getElementById("lcMasterHeader").innerHTML = "Inputting value into " + element.id + ":  Numeric only,  2 decimal places";
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46)
        return false;
    else {
        var len = element.value.length;
        var index = element.value.indexOf('.');
        //var len = document.getElementById("ipWidth").value.length;
        //var index = document.getElementById("ipWidth").value.indexOf('.');

        if (index > 0 && charCode === 46) {
            return false;
        }
        if (index > 0) {
            var CharAfterdot = (len + 1) - index;
            if (CharAfterdot > 3) {
                return false;
            }
        }
    }
    return true;
}

function isInteger(evt, element) {
    document.getElementById("lcMasterHeader").innerHTML = "Inputting value into " + element.id + ":  Must be a whole number,  greater than zero.";
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode >= 48 && charCode <= 57)
        return true;
    else {
        return false;
    }
    return false;
}



function F0_convertISODate(mysqlDate) {
    var dateStr = "2011-08-03 09:15:11"; //returned from mysql timestamp/datetime field
    var a = mysqlDate.split(" ");
    var d = a[0].split("-");
    var t = a[1].split(":");
    var jsDate = new Date(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]);
    //    var jsDate    = new Date(mysqlDate)
    var dd = jsDate.getDate();
    var mm = jsDate.getMonth() + 1; //January is 0!
    var yyyy = jsDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    jsDate = yyyy + '-' + mm + '-' + dd;
    jsDate = dd + '/' + mm + '/' + yyyy;
    return jsDate;
}
;



function F0_Convert2PrettyTime(mysqlDate) {
    var lcDate = new Date(mysqlDate);
    var lcDateStr = lcDate.toString(); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    // return lcDateStr;
    var a = lcDateStr.split(" ");
    return a[1] + ' ' + a[2] + ' ' + a[3] + ' ' + a[4];
}
;



function F0_UST2LocalTime(mysqlDate) {
    var lcDate = new Date(mysqlDate + ' UTC');
    var lcDateStr = lcDate.toString(); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    // return lcDateStr;
    var a = lcDateStr.split(" ");
    return a[1] + ' ' + a[2] + ' ' + a[3] + ' ' + a[4];
}
;



$.fn.disableScroll = function () {
    window.oldScrollPos = $(window).scrollTop();

    $(window).on('scroll.scrolldisabler', function (event) {
        $(window).scrollTop(window.oldScrollPos);
        event.preventDefault();
    });
};

$.fn.enableScroll = function () {
    $(window).off('scroll.scrolldisabler');
};



//  This element is found in the Navbar on the left....
$("#Download_Hits_Detailed").on('click', function () {

    $.ajax({
        url: 'model/Retrieve_Hits_Detailed.php',
        dataType: 'text',
        success: function (data) {
            //data returned from php
        }
    });
});




















function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user !== "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user !== "" && user !== null) {
            setCookie("username", user, 30);
        }
    }
}

function checkSecretCookie() {
    var user = getCookie("secretcode");
    if (user !== "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your Secret Code:", "");
        if (user !== "" && user !== null) {
            setCookie("secretcode", user, 30);
        }
    }
}

function F0_GetCookieCurrency() {
    var lcCountryCode = getCookie("countryCode");
    var lcCurrency = getCookie("currencyCode");
    var lcCurrencySymbol = getCookie("currencySymbol");
    if (lcCountryCode !== "" && lcCurrency !== "") {
        F0_SetNavbarCountryFlag(lcCountryCode, lcCurrency);
    } else {
        setCookie("countryCode", "AU", 30);
        setCookie("currencyCode", "AUD", 30);
        setCookie("currencySymbol", "&", 30);
        F0_SetNavbarCountryFlag("AU", "AUD");
    }
}

function F0_SetCookieCurrency(lcCountryCode, lcCurrency) {
    setCookie("countryCode", lcCountryCode, 30);
    setCookie("currencyCode", lcCurrency, 30);
    switch (lcCountryCode) {
        case 'AU':
            lcCurrencySymbol = '$';
            break;
        case 'CA':
            lcCurrencySymbol = '$';
            break;
        case 'FR':
            lcCurrencySymbol = '€';
            break;
        case 'DE':
            lcCurrencySymbol = '€';
            break;
        case 'IT':
            lcCurrencySymbol = '€';
            break;
        case 'JP':
            lcCurrencySymbol = '¥';
            break;
        case 'NZ':
            lcCurrencySymbol = '$';
            break;
        case 'GB':
            lcCurrencySymbol = '£';
            break;
        case 'US':
            lcCurrencySymbol = '$';
            break;
    }
    setCookie("currencySymbol", lcCurrencySymbol, 30);
    F0_SetNavbarCountryFlag(lcCountryCode, lcCurrency);
    if ($('#IJV_Main_Screen_Modal').hasClass('shown')) {
        if (window.location.href.includes("#Tyres")) {
            F0_Populate_ChildDataTable(laRowData, 'Tyres.Detailed');
        }
        if (window.location.href.includes("#Components")) {
            F0_Populate_ChildDataTable(laRowData, 'Components.Detailed');
        }
        if (window.location.href.includes("#Wheels")) {
            F0_Populate_ChildDataTable(laRowData, 'Wheelsets.Detailed');
        }
        if (window.location.href.includes("#Wheels")) {
            F0_Populate_ChildDataTable(laRowData, 'Accessories.Detailed');
        }
    }
    else {
        if (window.location.href.includes("#Tyres")) {
            F0_Build_MasterList('Tyres', 'Road_Race');
        }
        if (window.location.href.includes("#Components")) {
            // if ( window.location.href.includes("Campagnolo") || window.location.href.includes("Shimano") || window.location.href.includes("SRAM") || window.location.href.includes("FSA") )
            if (window.location.href.includes("Components/By_Brand")) {
                F0_Build_MasterList('Components', 'By_Brand', m0FilterByBrand);
            }
            else {
                F0_Build_MasterList('Components', m0FilterByCategory);
            }
        }
        if (window.location.href.includes("#Wheelsets")) {
            F0_Build_MasterList('Wheelsets', 'Road_Race', m0FilterByBrand);
        }
        if (window.location.href.includes("#Accessories")) {
            F0_Build_MasterList('Accessories', m0FilterByCategory);
        }
    }
}



function F0_SetNavbarCountryFlag(lcCountryCode, lcCurrency) {

    $("#navbar-AU").removeClass('current');
    $("#navbar-CA").removeClass('current');
    $("#navbar-FR").removeClass('current');
    $("#navbar-DE").removeClass('current');
    $("#navbar-IT").removeClass('current');
    $("#navbar-JP").removeClass('current');
    $("#navbar-NZ").removeClass('current');
    $("#navbar-GB").removeClass('current');
    $("#navbar-US").removeClass('current');
    $("#navbar-country-flag").removeClass('au');
    $("#navbar-country-flag").removeClass('ca');
    $("#navbar-country-flag").removeClass('fr');
    $("#navbar-country-flag").removeClass('de');
    $("#navbar-country-flag").removeClass('it');
    $("#navbar-country-flag").removeClass('jp');
    $("#navbar-country-flag").removeClass('nz');
    $("#navbar-country-flag").removeClass('gb');
    $("#navbar-country-flag").removeClass('us');
    switch (lcCountryCode) {
        case 'AU':
            $("#navbar-country-flag").addClass('au');
            $("#navbar-AU").addClass('current');
            break;
        case 'CA':
            $("#navbar-country-flag").addClass('ca');
            $("#navbar-CA").addClass('current');
            break;
        case 'FR':
            $("#navbar-country-flag").addClass('fr');
            $("#navbar-FR").addClass('current');
            break;
        case 'DE':
            $("#navbar-country-flag").addClass('de');
            $("#navbar-DE").addClass('current');
            break;
        case 'IT':
            $("#navbar-country-flag").addClass('it');
            $("#navbar-IT").addClass('current');
            break;
        case 'JP':
            $("#navbar-country-flag").addClass('jp');
            $("#navbar-JP").addClass('current');
            break;
        case 'NZ':
            $("#navbar-country-flag").addClass('nz');
            $("#navbar-NZ").addClass('current');
            break;
        case 'GB':
            $("#navbar-country-flag").addClass('gb');
            $("#navbar-GB").addClass('current');
            break;
        case 'US':
            $("#navbar-country-flag").addClass('us');
            $("#navbar-US").addClass('current');
            break;
    }
    //    if ($('#IJV_Main_Screen_Modal').hasClass('shown'))



}



















function F0_Build_MasterList(lcMainCategory, lcSubCategory) {
    $("#iosLoading").click();
    if (lcSubCategory === null || lcSubCategory === "") {

        return;
    }
    var iTableCounter = 1;
    var oInnerTable;
    var lcURL_Route = '';
    //    gcBrandID = lcBrand;



    $.ajax({
        "url": "model/SQL_Log_The_Hit.php",
        "type": "POST",
        "data": {
            lcAction: 'Master.List',
            lcMainCategory: lcMainCategory,
            lcSubCategory: lcSubCategory,
            m0FilterByCategory: m0FilterByCategory,
            m0FilterByBrand: m0FilterByBrand,
            m0FilterByModel: m0FilterByModel,
            m0FilterByTyreType: m0FilterByTyreType,
            m0IncludeTwinPacks: m0IncludeTwinPacks,
            lcURL: window.location.href
        },
        dataType: "json",
        error: function (xhr, statusTxt, responseTxt) {
            console.log("Error: " + responseTxt + ", " + xhr.status + ": " + xhr.statusText);
        },
        success: function (msg) { }
    });

    $.ajax({
        "url": "model/Retrieve_Complex_Data.php",
        "type": "POST",
        "data": {
            lcAction: 'Master.List',
            lcMainCategory: lcMainCategory,
            lcSubCategory: lcSubCategory,
            m0FilterByCategory: m0FilterByCategory,
            m0FilterByBrand: m0FilterByBrand,
            m0FilterByModel: m0FilterByModel,
            m0FilterByTyreType: m0FilterByTyreType,
            m0IncludeTwinPacks: m0IncludeTwinPacks
        },
        dataType: "json",
        error: function (xhr, statusTxt, responseTxt) {
            console.log("Error: " + responseTxt + ", " + xhr.status + ": " + xhr.statusText);
        },
        success: function (msg) {
            $("#iosLoading").hide();
            goOverlay.hide();
            //            $("#MasterList_" + lcBrand).empty();

            lcContent = '<ul id="product-list" class="products-grid fluid-grid multiple-columns loaded" data-size0="480" data-margin0="0" data-size460="220" data-margin460="0" data-size769="350" data-margin769="0" data-size1280="325" data-margin1280="0">';
            lcContent = '	<div class="container-fluid">' +
                '           <div class="row"> ';

            var lcCountryCode = getCookie("countryCode");
            var lcCurrency = getCookie("currencyCode");
            var lcCurrencySymbol = getCookie("currencySymbol");

            switch (lcCountryCode) {
                case 'AU':
                    lcCurrencySymbol = '$';
                    break;
                case 'CA':
                    lcCurrencySymbol = '$';
                    break;
                case 'FR':
                    lcCurrencySymbol = '€';
                    break;
                case 'DE':
                    lcCurrencySymbol = '€';
                    break;
                case 'IT':
                    lcCurrencySymbol = '€';
                    break;
                case 'JP':
                    lcCurrencySymbol = '¥';
                    break;
                case 'NZ':
                    lcCurrencySymbol = '$';
                    break;
                case 'GB':
                    lcCurrencySymbol = '£';
                    break;
                case 'US':
                    lcCurrencySymbol = '$';
                    break;
            }


            Artist = Backbone.Model.extend({
                defaults: {
                    brand: 'XYZ',
                    model: 'XYZ',
                    price: 'XYZ',
                    qty: 'XYZ',
                    image_URL: 'XYZ',
                    size: 'XYZ',
                    weight: 'XYZ',
                    category: 'XYZ',
                    model_URL: 'XYZ',
                    model_descrip: 'XYZ',
                    shortdescr: 'XYZ',
                    image_SM: 'XYZ',
                    best_vendor: 'XYZ',
                    extraName: 'XYZ',
                    countryCode: 'XYZ',
                    currency: 'XYZ',
                    symbol: 'XYZ',
                    dteprfmd: 'XYZ'
                },
                initialize: function () {

                }
            });
            Artists = Backbone.Collection.extend({
                model: Artist,
                initialize: function () {

                },
                FilterByBrand: function (color) {
                    filtered = _(this.filter(function (Artist) {
                        return Artist.get("model") === "Clincher";
                    }));
                    return new Artists(filtered);
                },
                FilterByCategory: function (color) {
                    filtered = _(this.filter(function (Artist) {
                        return Artist.get("model") === "Clincher";
                    }));
                    return new Artists(filtered);
                },
                FilterByModel: function (color) {
                    filtered = _(this.filter(function (Artist) {
                        return Artist.get("model") === "Clincher";
                    }));
                    return new Artists(filtered);
                }

            });
            artistArray = [];
            var laAddRow = true;
            for (var i = 0; i < msg.recordsFiltered; i++) {
                laAddRow = true;
                if (m0IncludeTwinPacks === false) {
                    if (msg.data[i][1].indexOf("Twin Pack") !== -1) {
                        laAddRow = false;
                    }
                }
                if (laAddRow === true) {
                    laRowData = new Array(15);
                    laRowData[0] = msg.data[i][0];
                    laRowData[1] = msg.data[i][1];
                    laRowData[2] = msg.data[i][2];
                    laRowData[3] = msg.data[i][3];
                    laRowData[4] = msg.data[i][4];
                    laRowData[5] = msg.data[i][5];
                    laRowData[6] = msg.data[i][6];
                    laRowData[7] = msg.data[i][7];
                    laRowData[8] = msg.data[i][8];
                    laRowData[9] = msg.data[i][9];
                    laRowData[10] = msg.data[i][10];
                    laRowData[11] = msg.data[i][11];
                    laRowData[12] = msg.data[i][12];
                    laRowData[13] = msg.data[i][13];
                    laRowData[14] = msg.data[i]['dteprfmd'];
                    lcContent = lcContent + format_product_li(laRowData);
                    lcURL_Route = lcMainCategory + '/' + laRowData[7] + '/' + laRowData[0];
                    var biggie = new Artist({
                        id: i,
                        brand: msg.data[i][0],
                        model: msg.data[i][1],
                        price: msg.data[i][2],
                        qty: msg.data[i][3],
                        image_URL: msg.data[i][4],
                        size: msg.data[i][5],
                        weight: msg.data[i][6],
                        category: msg.data[i][7],
                        model_URL: window.location.protocol + '//' + window.location.hostname + window.location.pathname + '#' + lcURL_Route + '/' + laRowData[8],
                        model_descrip: msg.data[i][9],
                        shortdescr: msg.data[i][10],
                        image_SM: msg.data[i][11],
                        best_vendor: msg.data[i][12],
                        extraName: msg.data[i][13],
                        countryCode: lcCountryCode,
                        currency: lcCurrency,
                        symbol: lcCurrencySymbol,
                        dteprfmd: msg.data[i]['dteprfmd'].substring(0, 10)
                    });
                    artistArray.push(biggie);
                }
            }

            lcContent = lcContent + '    </div>' +
                '</div>';
            //$("#MasterList_" + lcBrand).append( lcContent );
            collectionArtists = new Artists(artistArray);



            var ArtistView = Backbone.View.extend({
                el: '.IJV-MasterList',
                initialize: function () {
                    this.render();
                },
                render: function () {
                    var source = $('#template-Masterlist').html();
                    //  id= #template-Masterlist is found in Format_Masterlist.php which gets included at the bottom of Article_Masterlist.php
                    var template = Handlebars.compile(source);
                    var html = template(collectionArtists.toJSON());
                    this.$el.html(html);
                }
            });
            var artistList = new ArtistView();
            //            format_column_width(lcBrand);
            format_column_width();
            $("#iosLoadingContainer").css("display", "none");
            $("#IJV_Main_Screen").scrollTop(0);
        }
    });
}


function format_column_width() {
    if (window.location.hostname.indexOf("localhost") !== -1) {
        // Do Nothing,  we are in localhost development mode...
    } else {

        $("#navbar_Signup").css("display", "none");
        $("#navbar_Login").css("display", "none");
    }
    if ($(window).width() <= 1200) {
        $("#navbar_Diagnostics").css("display", "none");
        $("#navbar_Notifications").css("display", "none");
        $("#IJV-Masterlist-Filter-Bar").css("display", "block");
    } else {
        $("#navbar_Diagnostics").css("display", "block");
        $("#navbar_Notifications").css("display", "block");
        $("#IJV-Masterlist-Filter-Bar").css("display", "none");
    }
    if ($(window).width() <= 1300) {
        $("#navbar_Download_Hits_Detailed").css("display", "none");
    } else {
        $("#navbar_Download_Hits_Detailed").css("display", "block");
    }
    if ($("#IJV_Main_Wrapper").width() < 520) {
        $('.IJV-Single-Product').removeClass('col-xs-12');
        $('.IJV-Single-Product').removeClass('col-xs-6');
        $('.IJV-Single-Product').removeClass('col-xs-4');
        $('.IJV-Single-Product').removeClass('col-xs-3');
        $('.IJV-Single-Product').removeClass('col-xs-2');
        $('.IJV-Single-Product').addClass('col-xs-12');
    }
    else if ($("#IJV_Main_Wrapper").width() >= 520 && $("#IJV_Main_Wrapper").width() < 800) {
        $('.IJV-Single-Product').removeClass('col-xs-12');
        $('.IJV-Single-Product').removeClass('col-xs-6');
        $('.IJV-Single-Product').removeClass('col-xs-4');
        $('.IJV-Single-Product').removeClass('col-xs-3');
        $('.IJV-Single-Product').removeClass('col-xs-2');
        $('.IJV-Single-Product').addClass('col-xs-6');
    }
    else if ($("#IJV_Main_Wrapper").width() >= 800 && $("#IJV_Main_Wrapper").width() < 1500) {
        $('.IJV-Single-Product').removeClass('col-xs-12');
        $('.IJV-Single-Product').removeClass('col-xs-6');
        $('.IJV-Single-Product').removeClass('col-xs-4');
        $('.IJV-Single-Product').removeClass('col-xs-3');
        $('.IJV-Single-Product').removeClass('col-xs-2');
        $('.IJV-Single-Product').addClass('col-xs-4');
    }
    else if ($("#IJV_Main_Wrapper").width() >= 1500 && $("#IJV_Main_Wrapper").width() < 1700) {
        $('.IJV-Single-Product').removeClass('col-xs-12');
        $('.IJV-Single-Product').removeClass('col-xs-6');
        $('.IJV-Single-Product').removeClass('col-xs-4');
        $('.IJV-Single-Product').removeClass('col-xs-3');
        $('.IJV-Single-Product').removeClass('col-xs-2');
        $('.IJV-Single-Product').addClass('col-xs-4');
    }
    else if ($("#IJV_Main_Wrapper").width() >= 1700) {
        $('.IJV-Single-Product').removeClass('col-xs-12');
        $('.IJV-Single-Product').removeClass('col-xs-6');
        $('.IJV-Single-Product').removeClass('col-xs-4');
        $('.IJV-Single-Product').removeClass('col-xs-3');
        $('.IJV-Single-Product').removeClass('col-xs-2');
        $('.IJV-Single-Product').addClass('col-xs-3');
    };


    if ($("#IJV_Main_Wrapper").width() < 768) {
        $('#IJV-Masterlist-Filters').css('display', 'none');
        $('#IJV-Masterlist-Data').removeClass('col-xs-10');
        $('#IJV-Masterlist-Data').removeClass('col-xs-9');
        $('#IJV-Masterlist-Data').removeClass('col-xs-8');
        $('#IJV-Masterlist-Data').addClass('col-xs-12');
    }
    else if ($("#IJV_Main_Wrapper").width() >= 768 && $("#IJV_Main_Wrapper").width() < 992) {
        $('#IJV-Masterlist-Filters').css('display', 'none');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-4');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-3');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-2');
        $('#IJV-Masterlist-Filters').addClass('col-xs-3');
        $('#IJV-Masterlist-Data').removeClass('col-xs-10');
        $('#IJV-Masterlist-Data').removeClass('col-xs-9');
        $('#IJV-Masterlist-Data').removeClass('col-xs-8');
        $('#IJV-Masterlist-Data').addClass('col-xs-12');

    }
    else if ($("#IJV_Main_Wrapper").width() >= 992 && $("#IJV_Main_Wrapper").width() < 1200) {
        $('#IJV-Masterlist-Filters').css('display', 'none');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-4');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-3');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-2');
        $('#IJV-Masterlist-Filters').addClass('col-xs-3');
        $('#IJV-Masterlist-Data').removeClass('col-xs-10');
        $('#IJV-Masterlist-Data').removeClass('col-xs-9');
        $('#IJV-Masterlist-Data').removeClass('col-xs-8');
        $('#IJV-Masterlist-Data').addClass('col-xs-12');

    }
    else if ($("#IJV_Main_Wrapper").width() >= 1200 && $("#IJV_Main_Wrapper").width() < 1400) {
        $('#IJV-Masterlist-Filters').css('display', 'block');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-4');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-3');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-2');
        $('#IJV-Masterlist-Filters').addClass('col-xs-3');
        $('#IJV-Masterlist-Data').removeClass('col-xs-10');
        $('#IJV-Masterlist-Data').removeClass('col-xs-9');
        $('#IJV-Masterlist-Data').removeClass('col-xs-8');
        $('#IJV-Masterlist-Data').addClass('col-xs-9');

    }
    else if ($("#IJV_Main_Wrapper").width() >= 1600) {
        $('#IJV-Masterlist-Filters').css('display', 'block');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-4');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-3');
        $('#IJV-Masterlist-Filters').removeClass('col-xs-2');
        $('#IJV-Masterlist-Filters').addClass('col-xs-2');
        $('#IJV-Masterlist-Data').removeClass('col-xs-10');
        $('#IJV-Masterlist-Data').removeClass('col-xs-9');
        $('#IJV-Masterlist-Data').removeClass('col-xs-8');
        $('#IJV-Masterlist-Data').addClass('col-xs-10');
    };




    //    if ( $("#IJV-Masterlist-Content").width() < 800 ) {
    //        $('#IJV-Masterlist-Header-Column-B').css('display','none');
    //        $('#IJV-Masterlist-Header-Column-A').removeClass('col-xs-6');
    //        $('#IJV-Masterlist-Header-Column-A').addClass('col-xs-12');
    //        $('#IJV-Masterlist-Header-Column-B').removeClass('col-xs-6');
    //        $('#IJV-Masterlist-Header-Column-B').addClass('col-xs-12');
    //    }
    //    else if ( $("#IJV-Masterlist-Content").width() < 1000 ) {
    //        $('#IJV-Masterlist-Header-Column-B').css('display','block');
    //        $('#IJV-Masterlist-Header-Column-A').removeClass('col-xs-6');
    //        $('#IJV-Masterlist-Header-Column-A').addClass('col-xs-12');
    //        $('#IJV-Masterlist-Header-Column-B').removeClass('col-xs-6');
    //        $('#IJV-Masterlist-Header-Column-B').addClass('col-xs-12');
    //    }
    //    else {
    //        $('#IJV-Masterlist-Header-Column-B').css('display','block');
    //        $('#IJV-Masterlist-Header-Column-A').removeClass('col-xs-12');
    //        $('#IJV-Masterlist-Header-Column-A').addClass('col-xs-6');
    //        $('#IJV-Masterlist-Header-Column-B').removeClass('col-xs-12');
    //        $('#IJV-Masterlist-Header-Column-B').addClass('col-xs-6');
    //    }



    if ($("#IJV_Main_Wrapper").width() < 800) {
        $('#ASRP-Column-B').css('display', 'block');
        $('#ASRP-Column-A').removeClass('col-xs-6');
        $('#ASRP-Column-A').addClass('col-xs-12');
        $('#ASRP-Column-B').removeClass('col-xs-6');
        $('#ASRP-Column-B').addClass('col-xs-12');
    }
    else if ($("#IJV_Main_Wrapper").width() < 1500) {
        $('#ASRP-Column-B').css('display', 'block');
        $('#ASRP-Column-A').removeClass('col-xs-6');
        $('#ASRP-Column-A').addClass('col-xs-12');
        $('#ASRP-Column-B').removeClass('col-xs-6');
        $('#ASRP-Column-B').addClass('col-xs-12');
    }
    else {
        $('#ASRP-Column-B').css('display', 'block');
        $('#ASRP-Column-A').removeClass('col-xs-12');
        $('#ASRP-Column-A').addClass('col-xs-6');
        $('#ASRP-Column-B').removeClass('col-xs-12');
        $('#ASRP-Column-B').addClass('col-xs-6');
    }

}


function format_product_li(laRowData) {

    return '' +
        '<div class="col-md-6 col-sm-6" >' +
        '<div class="products-grid one-column" style="width: 100%; margin-right: 0px;">' +
        '   <div class="outer">' +
        '	    <div class="inner">' +
        '           <div class="ijv-image-wrapper">' +
        '              <div class="ijv-image-container">' +
        '                  <img src="' + laRowData[11] + '">' +
        '              </div>' +
        '           </div>' +
        '           <div class="information">' +
        '               <div class="ratings">' +
        '                   <div class="rating-box">' +
        '                       <div class="rating" style="width:100%"></div>' +
        '                   </div>' +
        '                   <span class="amount">' +
        '			    (' + laRowData[3] + ' records)' +
        '                   </span>' +
        '               </div>' +
        '                   ' +
        '                   ' +
        '               <h2 class="name">' +
        '                   ' + laRowData[1] + '' +
        '		    </h2>' +
        '		    ' +
        '		    ' +
        '		    <div class="price-box">' +
        '                       <span class="regular-price product-price-1657" id="product-price-1657">' +
        '                       <span class="price notranslate">$' + laRowData[2] + ' AUD</span>                                    </span>' +
        '                       <p class="old-price">' +
        '                       <span class="price-rrp product-price-rrp-1657" id="product-price-rrp-1657">Best Price: <span class="price">' + laRowData[12] + '</span></span>' +
        '                       <span class="price-save price product-price-save-1657" id="product-price-save-1657">save 24%</span>' +
        '                       </p>' +
        '		    </div>' +
        '		    ' +
        '	            ' +
        '               <span class="stock in-stock">In Stock</span>' +
        '		    <a class="quick-view js-quick-view" href="' + laRowData[8] + '">Quick View</a>' +
        '           </div>' +
        '           <a class="mobile-click-area" href="' + laRowData[8] + '"><span></span></a>' +
        '	    </div>' +
        '   </div>' +
        '</div>' +
        '</div>';

}



function format_createdRow(row, data, dataIndex) {
    lcContent = '';

    lcContent = lcContent + '            <div class="ijv-image-wrapper">';
    lcContent = lcContent + '                <div class="ijv-image-container">';
    lcContent = lcContent + '                    <img src="' + data[11] + '">';
    lcContent = lcContent + '                </div>';
    lcContent = lcContent + '            </div>';

    $(row).find('td:eq(0)').html(lcContent);
    $(row).find('td:eq(0)').addClass('masterlist');
    $(row).find('td:eq(1)').html(format_Pedals_Table(data));
    $(row).find('td:eq(1)').addClass('masterlist');
    $(row).find('td:eq(2)').html(lcContent);
    $(row).find('td:eq(2)').addClass('masterlist');
    $(row).find('td:eq(3)').html(format_Pedals_Table(data));
    $(row).find('td:eq(3)').addClass('masterlist');
}



function format_Level3_Data(laRowData, lcCategory) {

    return '<table class="child" cellpadding="5" cellspacing="0" border="0" style="padding-left:250px;">' +
        '<tr class="child">' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>Website:</td>' +
        '<td>' + '<a href="' + laRowData[11] + '" target="_blank" style="color:#772222; font-weight: 700;">Ckick here for Item</a>' + '</td>' +
        '<td>MasterSKU:</td>' +
        '<td>' + laRowData[4] + '</td>' +
        '</tr>' +
        '</table>';
}




function F0_FormatChildDataTable() {
    var lcCountryCode = getCookie("countryCode");
    var lcCurrency = getCookie("currencyCode");
    var lcCurrencySymbol = getCookie("currencySymbol");
    //    return  '    <table id="ChildDataTable" class="display table table-select" cellspacing="0" width="100%">' +
    return '    <table id="ChildDataTable" class="display " cellspacing="0" width="100%">' +
        '        <thead>' +
        '            <tr>' +
        '                <th >Vendor</th>' +
        '                <th >Style</th>' +
        '                <th >' + lcCurrencySymbol + lcCurrency + '</th>' +
        '                <th >Brand</th>' +
        '                <th >masterSKU</th>' +
        '                <th >prodSKU</th>' +
        '                <th >Model</th>' +
        '                <th >Currency</th>' +
        '                <th >Shipping</th>' +
        '                <th >inStock</th>' +
        '                <th >Category</th>' +
        '                <th >URL</th>' +
        '                <th >Last Date</th>' +
        '                <th >Success</th>' +
        '                <th ></th>' +
        '            </tr>' +
        '        </thead>' +
        '        <tbody></tbody>' +
        '    </table>';

}




function F0_Populate_ChildDataTable(laRowData, lcAction) {

    if ($.fn.DataTable.isDataTable('#ChildDataTable')) //  YES!  initialised
    {
        $("#ChildDataTableContainer").empty();
        $("#ChildDataTableContainer").append(F0_FormatChildDataTable());
    }

    var lcString = laRowData[0];
    $("#Modal_Tyres_Single_Logo").attr('src', '/assets/img/LOGO_LARGE_' + lcString.toUpperCase() + '.png');
    F0_Ajax_ChildDataTable(laRowData, lcAction);
    format_column_width();

}



function F0_Ajax_ChildDataTable(laRowData, lcAction) {

    $.ajax({
        url: "model/Retrieve_Complex_Data.php",
        type: "POST",
        //        data: {lcAction: lcAction,  lcSearchKey: 'Continental',  lcBrand : laRowData[0],  lcModel : laRowData[1],
        //               lcCountry: goLocation.country_name, lcRegion: goLocation.region_name, lcCity: goLocation.city,  lcZipCode: goLocation.zip_code, lcTimezone: goLocation.time_zone },
        data: {
            lcAction: lcAction,
            lcSearchKey: 'Continental',
            lcBrand: laRowData[0],
            lcModel: laRowData[1],
            m0FilterByCategory: laRowData[7],
            m0FilterByBrand: m0FilterByBrand,
            m0FilterByModel: m0FilterByModel,
            m0FilterByTyreType: m0FilterByTyreType
        },
        dataType: "json",
        error: function (xhr, statusTxt, responseTxt) {
            console.log("Error: " + responseTxt + ", " + xhr.status + ": " + xhr.statusText);
        },
        success: function (msg) {
            $("#IJV_Main_Screen").fadeOut(500);
            $('#IJV_Main_Screen_Modal').fadeIn(500);
            $('#IJV_Main_Screen_Modal').addClass('shown');
            var lcCountryCode = getCookie("countryCode");
            var lcCurrency = getCookie("currencyCode");
            var lcCurrencySymbol = getCookie("currencySymbol");
            goOverlay.hide();
            $('#ChildDataTable').dataTable({
                dom: 'Brtip',
                //dom: 'lrtip',
                buttons: [
                    {
                        text: 'Expand All',
                        action: function (e, dt, node, config) {
                            var oTestTable = $('#ChildDataTable').DataTable();
                            oTestTable.rows().every(function (rowIdx, tableloop, rowLoop) {
                                oTestTable.row(':eq(' + rowIdx + ')', { page: 'current' }).select();

                            });
                        }
                    },
                    {
                        text: 'Collapse All',
                        action: function (e, dt, node, config) {
                            var oTestTable = $('#ChildDataTable').DataTable();
                            oTestTable.rows().every(function (rowIdx, tableloop, rowLoop) {
                                oTestTable.row(':eq(' + rowIdx + ')', { page: 'current' }).deselect();
                            });
                        }
                    }
                ],
                colReorder: true,
                pageLength: 50,
                retrieve: true,
                scrollX: false,
                select: {
                    style: 'multi'
                },
                columns: [
                    { className: "dt-left maxwidth100px" },
                    null,
                    {
                        className: "dt-right",
                        "render": function (data, type, row) {
                            return lcCurrencySymbol + row['0o2'];
                        }
                    },
                    null,
                    null,
                    null,
                    null,
                    {
                        "render": function (data, type, row) {
                            // return '<a href=# ><span class="glyphicon glyphicon-pencil"></span> Edit</a>&nbsp;&nbsp;&nbsp;&nbsp<a href=# ><span class="glyphicon glyphicon-remove"></span> Delete</a>';
                            return row[7]; //+ ' ' + row[6]  ;
                        }
                    },
                    null,
                    null,
                    null,
                    {
                        "targets": 0,
                        "name": "website",
                        "data": "download_link",
                        className: "dt-left",
                        "render": function (data, type, row) {
                            return '<a href="' + row[11] + '" target="_blank">Website</a>';
                            //                            return '<a href="' + row[11] + '" target="_blank"><span class="glyphicon glyphicon-globe"></span></a>';
                        }
                    },
                    {
                        "targets": 0,
                        "render": function (data, type, row) {
                            return F0_convertISODate(row[12]);
                        }
                    },
                    {
                        "name": "processed",
                        "width": '100px'
                    },
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": '',
                        "name": 'details',
                        "width": '30px'
                    }
                ],

                "createdRow": function (row, data, dataIndex) {
                    $(row).find('td:eq(12)').html(F0_convertISODate(data[12]));

                    switch (data[0]) {
                        case 'BikeBug':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_BIKEBUG.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Chain Reaction':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_CHAIN_REACTION.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Competitive Cyclist':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_COMPETITIVE_CYCLIST.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Merlin Cycles':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_MERLIN.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Performance Bike':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_PERFORMANCE_BIKE.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'ProBikeKit':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_PROBIKEKIT.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Pushys':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_PUSHYS.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Ribble':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_RIBBLE.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                        case 'Wiggle':
                            $(row).find('td:eq(0)').html('<img src="/assets/img/LOGO_SMALL_WIGGLE.png" align="center" style="width:80px; opacity: 1.0; ">');
                            break;
                    }
                    $(row).find('td:eq(0)').addClass('maxwidth100px');
                    $(row).find('td:eq(1)').html(format_Style_Field(data));
                    $(row).find('td:eq(1)').addClass('masterlist');
                    if (data[10] === "Rigid Clincher") {

                        $(row).find('td:eq(09)').addClass('dt_Warning');
                        $(row).find('td:eq(10)').addClass('dt_Warning');

                    }
                    switch (data[9]) {
                        case 'Out of Stock':
                            $(row).addClass('dt_OutofStock');
                            $(row).find('td:eq(09)').css("color", "#888888");
                            break;
                        case 'Discontinued':
                            $(row).addClass('dt_Discontinued');
                            $(row).find('td:eq(09)').css("color", "#888888");
                            break;

                        default:
                            $(row).find('td:eq(09)').html('Yes');
                            $(row).addClass('dt_Normal');
                            break;
                    }
                    $(row).find('td:eq(11)').css('text-align', 'left');
                }


            });


            var Table = $('#ChildDataTable').DataTable();
            var laAddRow = true;
            Table.clear();
            for (var i = 0; i < msg.recordsFiltered; i++) {
                laAddRow = true;
                if ($('#Modal_Checkbox_Include_OutofStock').is(':checked')) {

                    laAddRow = true;
                } else {
                    if (msg.data[i][9] === 'Out of Stock' || msg.data[i][9] === 'Discontinued') {

                        laAddRow = false;
                    }
                }
                if (laAddRow === true) {
                    Table.row.add([
                        msg.data[i][0],
                        msg.data[i][1],
                        msg.data[i][2],
                        msg.data[i][3],
                        msg.data[i][4],
                        msg.data[i][5],
                        msg.data[i][6],
                        msg.data[i][7],
                        msg.data[i][8],
                        msg.data[i][9],
                        msg.data[i][10],
                        msg.data[i]['url'],
                        msg.data[i][12],
                        msg.data[i]['processed'],
                        msg.data[i]['extraName']
                    ]);
                }
            }
            Table.columns().iterator('column', function (ctx, idx) {
                $(Table.column(idx).header()).append('<span class="sort-icon"/>');
            });

            Table.columns.adjust().order([2, 'asc']);
            Table.column(3).visible(false);
            Table.column(4).visible(false);
            Table.column(5).visible(false);
            Table.column(6).visible(false);
            Table.column(7).visible(false);
            Table.column(8).visible(false);
            Table.column(9).visible(false);  // inStock
            Table.column(10).visible(false);  // 
            Table.column('processed:name').visible(false);  // date processed
            Table.column('website:name').visible(false);  // date processed

            if (viewportWidth < 768) {
                Table.column(9).visible(false);  // inStock
                Table.column(10).visible(false);  // 
                Table.column(12).visible(false);  // last date
                //Table.column(14).visible(false);  // Extra
            }

            if (viewportWidth < 992) {
                Table.column(12).visible(false);  // last date
            }

            Table.columns.adjust().draw();
            format_column_width();
            var oChildRecord = $('#ChildDataTable').DataTable();
            oChildRecord.on('select', function (e, dt, type, indexes) {
                if (type === 'row') {
                    var laRowData = oChildRecord.row(indexes).data();

                    var loRowObject = oChildRecord.row(indexes);
                    if (!loRowObject.nodes().to$().hasClass('shown')) {
                        Build_Level3_Data(laRowData, lcAction, loRowObject);
                    }
                }
            });
            oChildRecord.on('deselect', function (e, dt, type, indexes) {
                if (type === 'row') {

                    if (oChildRecord.row(indexes).child.isShown()) {

                        oChildRecord.row(indexes).child(false).remove();
                        oChildRecord.row(indexes).nodes().to$().removeClass('shown');
                    }
                }
            });

        }
    });

}


//  The following function is used to create Child Rows from Parent Rows
function Build_Level3_Data(laRowData, lcMainCategory, loRowObject) {
    $.ajax({
        url: "model/Retrieve_Complex_Data.php",
        type: "POST",
        data: { lcAction: 'Extra.Detailed', lcMainCategory: lcMainCategory, lcVendor: laRowData[0], lcBrand: laRowData[3], lcModel: laRowData[6] },
        dataType: "json",
        success: function (msg) {
            var lcHTMLString = '<table class="child" cellpadding="5" cellspacing="0" border="0" style="width:100%;">';
            for (var i = 0; i < msg.recordsFiltered; i++) {
                laAddRow = true;
                if ($('#Modal_Checkbox_Include_OutofStock').is(':checked')) {
                    laAddRow = true;
                } else {

                }
                if (laAddRow === true) {
                    if (msg.data[i][9] === 'Out of Stock' || msg.data[i][9] === 'Discontinued') {
                        lcHTMLString = lcHTMLString +
                            '<tr class="child dt_OutofStock">' +
                            '<td> #' + msg.data[i][4] + '</td>' +
                            '<td style="             text-align: left;">' + msg.data[i][1] + ' (Out of Stock)</td>' +
                            '<td style="width: 50px; text-align: right;">' + msg.data[i][2] + '</td>' +
                            '<td style="width: 50px; text-align: right;">' + '<a href="' + msg.data[i]['url'] + '" target="_blank" style="color:#772222; font-weight: 700;" >Website</a>' + '</td>' +
                            '</tr>';
                    } else {
                        lcHTMLString = lcHTMLString +
                            '<tr class="child">' +
                            '<td> #' + msg.data[i][4] + '</td>' +
                            '<td style="             text-align: left;">' + msg.data[i][1] + '</td>' +
                            '<td style="width: 50px; text-align: right;">' + msg.data[i][2] + '</td>' +
                            '<td style="width: 50px; text-align: right;">' + '<a href="' + msg.data[i]['url'] + '" target="_blank" style="color:#772222; font-weight: 700;" >Website</a>' + '</td>' +
                            '</tr>';
                    }
                }
            }
            lcHTMLString = lcHTMLString + '</table>';

            if (!loRowObject.child.isShown()) {

                loRowObject.child(lcHTMLString).show();
                loRowObject.nodes().to$().addClass('shown');
                loRowObject.child().addClass('child');
            }
        }
    });

}




function format_Style_Field(laRowData) {

    return '' +
        '<div class="products-grid one-column product" style="width: 100%; margin-right: 0px;">' +

        '       <div class="XXinformation">' +
        //            '               <div class="ratings">' +
        //            '                   <div class="rating-box">' +
        //            '                       <div class="rating" style="width:100%"></div>' +
        //            '                   </div>' +
        //            '                   <span class="amount">' +
        //            '			(' + laRowData[3] + ' records)' +
        //            '                   </span>' +
        //            '               </div>' +
        '                   ' +
        '                   ' +
        '           <h2 class="name" style="display: block; margin: 3px 0 3px 0;">' +
        '               ' + laRowData[1] + '' +
        '		</h2>' +
        '		' +
        '		' +
        '		<div class="price-box"  style="margin-top: -06px; margin-bottom: -2px; display: none;">' +
        //            '                   <span class="regular-price product-price-1657" id="product-price-1657">' +
        //            '                   <span class="price notranslate">$' + laRowData[2] + ' AUD</span>                                    </span>' +
        '               <p class="old-price">' +
        '                   <span class="price-rrp product-price-rrp-1657" id="product-price-rrp-1657"><span class="price">' + laRowData[14] + '</span></span>' +
        //            '                   <span class="price-save price product-price-save-1657" id="product-price-save-1657">save 24%</span>' +
        '               </p>' +
        '		</div>' +
        '		' +
        '		' +
        //            '               <span class="stock in-stock">In Stock</span>' +
        //            '		<a class="quick-view js-quick-view" href="' + laRowData[8] + '">Quick View</a>' +
        '       </div>' +

        '</div>';

}






function format_Pedals_Table(laRowData) {

    return '' +
        '<div id="product-1657" class="products-grid one-column product" style="width: 100%; margin-right: 0px;">' +
        '   <div class="outer">' +
        '	<div class="inner">' +
        '           <div class="information">' +
        '               <div class="ratings">' +
        '                   <div class="rating-box">' +
        '                       <div class="rating" style="width:100%"></div>' +
        '                   </div>' +
        '                   <span class="amount">' +
        '			(' + laRowData[3] + ' records)' +
        '                   </span>' +
        '               </div>' +
        '                   ' +
        '                   ' +
        '               <h2 class="name">' +
        '                   ' + laRowData[1] + '' +
        '		</h2>' +
        '		' +
        '		' +
        '		<div class="price-box">' +
        '                   <span class="regular-price product-price-1657" id="product-price-1657">' +
        '                   <span class="price notranslate">$' + laRowData[2] + ' AUD</span>                                    </span>' +
        '                   <p class="old-price">' +
        '                   <span class="price-rrp product-price-rrp-1657" id="product-price-rrp-1657">Best Price: <span class="price">' + laRowData[12] + '</span></span>' +
        '                   <span class="price-save price product-price-save-1657" id="product-price-save-1657">save 24%</span>' +
        '                   </p>' +
        '		</div>' +
        '		' +
        '		' +
        '               <span class="stock in-stock">In Stock</span>' +
        '		<a class="quick-view js-quick-view" href="' + laRowData[8] + '">Quick View</a>' +
        '           </div>' +
        '           <a class="mobile-click-area" href="' + laRowData[8] + '"><span></span></a>' +
        '	</div>' +
        '   </div>' +
        '</div>';

}




