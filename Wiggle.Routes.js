$(document).ready(function () {
    var restfulApp = Backbone.Router.extend({
        routes: {
            "Main(/:lcSubCategory)": "routeMain", 
            "About": "routeAbout",
            "Diagnostics": "routeDiagnostics",
            "M1_Prototype": "routeM1_Prototype",
            "Tyres/:lcSubCategory/:lcBrand(/:lcProduct)": "routeTyres",
            "Components/:lcSubCategory(/:lcBrand)(/:lcProduct)": "routeComponents",
            "Handlebars/:lcSubCategory(/:lcProduct)": "routeHandlebars",
            "Wheelsets/:lcSubCategory/:lcBrand(/:lcProduct)": "routeWheelsets",
            "Accessories/:lcSubCategory(/:lcBrand)(/:lcProduct)": "routeAccessories",
            "Privacy_Policy": "routePrivacyPolicy",
            "Survey_Form": "routeSurveyForm",
            "*page": "routeMain" //This simply matches any urls that weren't caught above and assigns it to "page"
        },
        defaultAction: function () {

                       $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
                       $("#modal_Tyres_Single_Model").modal('hide');
                       $(window).scrollTop(0);
                       $("#IJV_Main_Wrapper").animate({scrollTop: 0}, 600);
                       $(".fixed-plugin").css("display", "none");
            
                       lcMajor_Category = 'Main';
            //                    $("#IJV_Main_Screen").load("view/Article_01.Top_Menu.Bootstrap_Version.php", function(responseTxt, statusTxt, xhr){
                       $("#IJV_Main_Screen").load("view/Article_01.php", function (responseTxt, statusTxt, xhr) {
                           if (statusTxt === "success") {
                               $(".block-subtitle").removeClass("active");  //  None of the Side Wrapper items are "selected" after this.
                               Article_01.BuildWorldMap();
                               md.initDashboardPageCharts();
                               $("#IJV_Main_Screen").scrollTop(0);
                           }
                           if (statusTxt === "error") {
                               alert("Error: " + xhr.status + ": " + xhr.statusText);
                           }
                       });
                       if ($('#IJV_Main_Screen').hasClass("nav-open"))
                       {
                           $(".navbar-header .navbar-toggle").trigger("click");
                       }
                       $('#IJV_Main_Screen').show();
                       $('#IJV_Main_Screen_Modal').removeClass('shown');

                               alert('Default Page called');
        },
        routeMain: function (lcSubCategory) {
            $("#IJV_Main_Wrapper").animate({ scrollTop: 0 }, 600);
            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $(".block").addClass("collapsed");
            $(".id_sidebar_main").removeClass('collapsed');
            $(".fixed-plugin").css("display", "none");
            if ($('html').hasClass("nav-open")) {
                $(".navbar-toggle").trigger("click");
            }
            $('#IJV_Main_Screen').show();
            $('#IJV_Main_Screen_Modal').removeClass('shown');
            this.loadMainDashboardRoutes(lcSubCategory);

        },
        routeDiagnostics: function () {
            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $("#modal_Tyres_Single_Model").modal('hide');
            $(window).scrollTop(0);
            $("#IJV_Main_Wrapper").animate({ scrollTop: 0 }, 600);
            $('#IJV_Main_Screen_Modal').hide();
            $(".fixed-plugin").css("display", "none");
            lcMajor_Category = 'Diagnostics';
            $("#IJV_Main_Screen").load("view/Article_Diagnostics.html", function (responseTxt, statusTxt, xhr) {
                if (statusTxt === "success") {
                    $(".block-subtitle").removeClass("active");  //  None of the Side Wrapper items are "selected" after this.
                    demo.initChartist();  //  This procedure builds the pretty graphs at the bottom of the Diagnostics page.
                    F0_Build_Diagnostics();
                }
                if (statusTxt === "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
            if ($('#IJV_Main_Screen').hasClass("nav-open")) {
                $(".navbar-header .navbar-toggle").trigger("click");
            }
            $('#IJV_Main_Screen').show();
            $('#IJV_Main_Screen_Modal').removeClass('shown');

            //                        alert('Default Page called');
        },
        routeM1_Prototype: function () {

            $("#modal_Tyres_Single_Model").modal('hide');
            //$("#IJV_sidebar-wrapper").css('display', 'none');
            $('#IJV_Main_Screen').addClass('main-panel-dispatch-mode');
            $(window).scrollTop(0);
            $("#IJV_Main_Wrapper").animate({ scrollTop: 0 }, 600);
            $(".fixed-plugin").css("display", "none");
            lcMajor_Category = 'Main';
            $("#IJV_Main_Screen").load("view/Article_02.php", function (responseTxt, statusTxt, xhr) {
                //$("#IJV_Main_Screen").load("view/Article_01.Bootstrap_Form_Prototype.php", function (responseTxt, statusTxt, xhr) {
                //("#IJV_Main_Screen").load("view/Article_02.MasterList.php", function (responseTxt, statusTxt, xhr) {
                if (statusTxt === "success") {
                    F0_Build_Dispatching_Masterlist();
                }
                if (statusTxt === "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
            if ($('#IJV_Main_Screen').hasClass("nav-open")) {
                $(".navbar-header .navbar-toggle").trigger("click");
            }
            $('#IJV_Main_Screen').show();
            $('#IJV_Main_Screen_Modal').removeClass('shown');

            //                    alert('Default Page called');
        },
        routeAbout: function () {

            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $("#modal_Tyres_Single_Model").modal('hide');
            $(window).scrollTop(0);
            $("#IJV_Main_Wrapper").animate({ scrollTop: 0 }, 600);
            $('#IJV_Main_Screen_Modal').hide();
            $(".fixed-plugin").css("display", "none");
            lcMajor_Category = 'Diagnostics';
            $("#IJV_Main_Screen").load("view/Article_About_Us.php", function (responseTxt, statusTxt, xhr) {
                if (statusTxt === "success") {
                    goOverlay.hide();
                    demo.initChartist();
                }
                if (statusTxt === "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
            if ($('#IJV_Main_Screen').hasClass("nav-open")) {
                $(".navbar-header .navbar-toggle").trigger("click");
            }
            $('#IJV_Main_Screen').show();
            $('#IJV_Main_Screen_Modal').removeClass('shown');

            //                        alert('Default Page called');
        },
        routeTyres: function (lcSubCategory, lcBrand, lcProduct) {

            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $(".block").addClass("collapsed");
            $(".id_sidebar_tyres").removeClass('collapsed');
            this.loadMasterlistView(lcSubCategory, lcBrand, lcProduct, "Tyres");
        },
        routeComponents: function (lcSubCategory, lcBrand, lcProduct) {

            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $(".block").addClass("collapsed");
            if (lcSubCategory === 'By_Brand') {
                $(".id_sidebar_components").removeClass('collapsed');
            } else {
                $(".id_sidebar_components_by_category").removeClass('collapsed');
            }
            this.loadMasterlistView(lcSubCategory, lcBrand, lcProduct, "Components");
        },
        routeWheelsets: function (lcSubCategory, lcBrand, lcProduct) {
            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $(".block").addClass("collapsed");
            $(".id_sidebar_wheelsets").removeClass('collapsed');
            this.loadMasterlistView(lcSubCategory, lcBrand, lcProduct, "Wheelsets");
        },
        routeAccessories: function (lcSubCategory, lcBrand, lcProduct) {

            $('#IJV_Main_Screen').removeClass('main-panel-dispatch-mode');
            $(".block").addClass("collapsed");
            $(".id_sidebar_accessories").removeClass('collapsed');
            this.loadMasterlistView(lcSubCategory, lcBrand, lcProduct, "Accessories");
        },
        animalAction: function (animal) {
            //Once the default action is called we want to construct a link to our restful service
            //                    var restfulPageUrl = this.restfulUrl + animal + 'page'; //http://api.openkeyval.org/dogpage
            //Now we have a url lets get the data
            alert('Default Page called');
            this.loadRestfulData(restfulPageUrl);
        },
        loadMainDashboardRoutes: function (lcSubCategory, lcBrand, lcProduct, lcMainCategory) {
            if (lcSubCategory === null || lcSubCategory === "") {
                $("#IJV_Main_Screen").load("view/Article_01.php", function (responseTxt, statusTxt, xhr) {
                    if (statusTxt === "success") {
                        $(".block-subtitle").removeClass("active");  //  None of the Side Wrapper items are "selected" after this.
                        Article_01.BuildWorldMap();
                        md.initDashboardPageCharts();
                        $("#IJV_Main_Screen").scrollTop(0);
                    }
                    if (statusTxt === "error") {
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                    }
                });
            }
            if (lcSubCategory === "Privacy_Policy") {
                $("#IJV_Main_Screen").load("view/Article_01.Privacy_Policy.php", function (responseTxt, statusTxt, xhr) {
                    if (statusTxt === "success") {
                    }
                    if (statusTxt === "error")
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                });
            }
            if (lcSubCategory === "Sales_System") {
                $("#IJV_Main_Screen").load("view/Article_02.MasterList.php", function (responseTxt, statusTxt, xhr) {
                    //$("#IJV_Main_Screen").load("http://localhost/wconnect/Hello_World.wcs", function (responseTxt, statusTxt, xhr) {
                    //$("#IJV_Main_Screen").load("http://localhost/wconnect/wc.dll?wwdemo~VeloDataTestPage~&amp;Name=Rick&amp;Company=West+Wind", function (responseTxt, statusTxt, xhr) {
                    if (statusTxt === "success") {
                        F0_Build_Dispatching_Masterlist();
                    }
                    if (statusTxt === "error")
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                });
            }
            if (lcSubCategory === "Survey_Form") {
                $("#IJV_Main_Screen").load("view/Article_01.Survey_Form.php", function (responseTxt, statusTxt, xhr) {
                    if (statusTxt === "success") {
                    }
                    if (statusTxt === "error")
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                });
            }
            if (lcSubCategory === "Survey_Results") {
                if ($("#IJV_Main_Wrapper").width() < 1250) {
                    //alert("Sorry: Some options on VeloData require a minimum screen width to function properly,  the Survey Results function requires at least 1250 pixels of screen width unfortunately.");
                    //window.location.assign(window.location.protocol + '//' + window.location.hostname + '/#Main');
                }
                $("#IJV_Main_Screen").load("view/Article_01.Survey_Results.php", function (responseTxt, statusTxt, xhr) {
                    if (statusTxt === "success") {
                        //F0_Build_Survey_Masterlist();
                        demo.initChartist();  //  This procedure builds the pretty graphs at the bottom of the Diagnostics page.
                        F0_Build_Diagnostics();
                    }
                    if (statusTxt === "error")
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                });
            }
        },
        loadMasterlistView: function (lcSubCategory, lcBrand, lcProduct, lcMainCategory) {
            if (lcSubCategory === null || lcSubCategory === "") {
                window.location.assign(window.location.protocol + '//' + window.location.hostname + '/#Main');
            } else if (lcProduct !== null && lcProduct !== "") {
                $('#IJV_Main_Screen').addClass("SingleView");
                this.loadSingleView(lcMainCategory, lcSubCategory, lcBrand, lcProduct);
            } else if (lcProduct === null || lcProduct === "") {
                $('#IJV_Main_Screen').removeClass("SingleView");
                // console.log('loadMasterlistView :: lcMainCategory = ' + lcMainCategory + ', lcSubCategory = ' + lcSubCategory);
                // console.log('loadMasterlistView :: lcBrand = ' + lcBrand + ', lcProduct = ' + lcProduct);
                m0FilterByCategory = '';
                m0FilterByModel = '';
                m0FilterByBrand = '';
                m0FilterByTyreType = '';
                m0IncludeTwinPacks = true;
                if (lcMainCategory === 'Tyres') {

                    if (lcBrand === 'Twin_Packs') {
                        m0FilterByCategory = 'Twin_Packs';
                    } else {
                        m0FilterByBrand = lcBrand;
                    }
                }
                if (lcMainCategory === 'Components') {
                    if (lcBrand !== null && lcBrand !== "") {
                        m0FilterByBrand = lcBrand;
                    }
                    if (lcSubCategory === 'By_Brand') {
                        m0FilterByBrand = lcBrand;
                    } else {
                        m0FilterByCategory = lcSubCategory;
                    }
                }
                if (lcMainCategory === 'Wheelsets') {
                    m0FilterByBrand = lcBrand;
                    m0FilterByCategory = lcSubCategory;
                }
                if (lcMainCategory === 'Accessories') {
                    m0FilterByBrand = lcBrand;
                    m0FilterByCategory = lcSubCategory;
                }                         //
                //
                //  Please Not:  The LARGE LOGO for a Masterlist Brand is included in Article_Masterlist_Headar.php
                //
                //
                $("#IJV_Main_Screen").load("view/Article_Masterlist.php?lcMainCategory=" + lcMainCategory + "&lcSubCategory=" + lcSubCategory + "&lcBrand=" + lcBrand, function (responseTxt, statusTxt, xhr) {
                    if (statusTxt === "success") {
                        $("#modal-filter-options-div").empty();
                        $("#MasterList_Filter_Options_Large_Screen").empty();
                        if (lcMainCategory === 'Tyres') {
                            $("#modal-filter-options-div").load("view/Article_Masterlist_Filter_Options_Tyres.php?lcMainCategory=" + lcMainCategory +
                                "&lcSubCategory=" + lcSubCategory + "&lcBrand=" + lcBrand, function (responseTxt, statusTxt, xhr) {
                                    var htmlString = $("#modal-filter-options-div").html();
                                    $("#MasterList_Filter_Options_Large_Screen").html(htmlString);
                                }
                            );
                        }
                        if (lcMainCategory === 'Components') {
                            $("#modal-filter-options-div").load("view/Article_Masterlist_Filter_Options_Components.php?lcMainCategory=" + lcMainCategory +
                                "&lcSubCategory=" + lcSubCategory + "&lcBrand=" + lcBrand, function (responseTxt, statusTxt, xhr) {
                                    var htmlString = $("#modal-filter-options-div").html();
                                    $("#MasterList_Filter_Options_Large_Screen").html(htmlString);
                                }
                            );
                        }
                        if (lcMainCategory === 'Wheelsets') {
                            $("#modal-filter-options-div").load("view/Article_Masterlist_Filter_Options_Wheelsets.php?lcMainCategory=" + lcMainCategory +
                                "&lcSubCategory=" + lcSubCategory + "&lcBrand=" + lcBrand, function (responseTxt, statusTxt, xhr) {
                                    var htmlString = $("#modal-filter-options-div").html();
                                    $("#MasterList_Filter_Options_Large_Screen").html(htmlString);
                                }
                            );
                        }
                        if (lcMainCategory === 'Accessories') {
                            $("#modal-filter-options-div").load("view/Article_Masterlist_Filter_Options_Accessories.php?lcMainCategory=" + lcMainCategory +
                                "&lcSubCategory=" + lcSubCategory + "&lcBrand=" + lcBrand, function (responseTxt, statusTxt, xhr) {
                                    var htmlString = $("#modal-filter-options-div").html();
                                    $("#MasterList_Filter_Options_Large_Screen").html(htmlString);
                                }
                            );
                        }
                        F0_Build_MasterList(lcMainCategory, lcSubCategory);
                        //  $("#User_Comments_"+lcSubCategory).load("view/Article_Tyres_FB_Comments.php?lcBrand="+lcSubCategory);
                    }
                    if (statusTxt === "error")
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                });
                $(".fixed-plugin").css("display", "block");
                $("#IJV_Main_Screen_Modal").fadeOut(500);
                $('#IJV_Main_Screen_Modal').removeClass('shown');
                $(window).scrollTop(0);
                $("#IJV_Main_Wrapper").animate({ scrollTop: 0 }, 600);
                $('#IJV_Main_Screen_Modal').removeClass('shown');
                if ($('#IJV_Main_Screen').hasClass("nav-open")) {
                    $(".navbar-right .navbar-toggle").trigger("click");
                }
                $('#IJV_Main_Screen').show();
            } else {

            }
        },
        loadSingleView: function (lcMainCategory, lcSubCategory, lcBrand, lcProduct) {
            // console.log('loadSingleView :: lcMainCategory = ' + lcMainCategory + ', lcSubCategory = ' + lcSubCategory);
            // console.log('loadSingleView :: lcBrand = ' + lcBrand + ', lcProduct = ' + lcProduct);
            switch (lcMainCategory) {
                case 'Tyres':
                    break;
                case 'Components':
                    break;
                case 'Wheelsets':
                    break;
            }

            $("#iosLoading").click();
            $.ajax({
                url: "model/SQL_Log_The_Hit.php",
                type: "POST",
                data: {
                    lcAction: 'Master.Single',
                    lcMainCategory: lcMainCategory,
                    lcSubCategory: lcSubCategory,
                    lcBrand: lcBrand,
                    lcModel: lcProduct,
                    lcURL: window.location.href
                },
                dataType: "json",
                success: function (msg) {

                }
            });
            $.ajax({
                url: "model/Retrieve_Complex_Data.php",
                type: "POST",
                data: {
                    lcAction: 'Master.Single',
                    lcMainCategory: lcMainCategory,
                    lcSubCategory: lcSubCategory,
                    lcBrand: lcBrand,
                    lcModel: lcProduct,
                    lcURL: window.location.href
                },
                dataType: "json",
                success: function (msg) {
                    laRowData = new Array(11);
                    laRowData[0] = msg.data[0][0];
                    laRowData[1] = msg.data[0][1];
                    laRowData[2] = msg.data[0][2];
                    laRowData[3] = msg.data[0][3];
                    laRowData[4] = msg.data[0][4];
                    laRowData[5] = msg.data[0][5];
                    laRowData[6] = msg.data[0][6];
                    laRowData[7] = msg.data[0][7];
                    laRowData[8] = msg.data[0][8];
                    laRowData[9] = msg.data[0][9];
                    laRowData[10] = msg.data[0][10];
                    //                            $(window).scrollTop(0);
                    $("#IJV_Main_Wrapper").scrollTop(0);
                    $("#Modal_Checkbox_Include_OutofStock").attr('checked', true);
                    $("#Modal_Label_Include_OutofStock").addClass('checked');
                    $("#Modal_Checkbox_Include_Item_Photo").attr('checked', true);
                    $("#Modal_Label_Include_Item_Photo").addClass('checked');
                    $("#Modal_Tyres_Single_Header_H4").html(laRowData[1]);
                    $("#ARSPM_lcMainCategory_div").html(lcMainCategory);
                    $("#ARSPM_lcSubCategory_href").attr('href', '#' + lcMainCategory + '/' + lcSubCategory + '/' + lcBrand);
                    $("#ARSPM_lcSubCategory_div").html(lcBrand);
                    $("#Single_Product_Short_Description").html(laRowData[10]);
                    $("#ARSPM_Small_Screen_Block_Options").load("view/Article_Single_Product_Small_Screen_Options.php", function (responseTxt, statusTxt, xhr) {
                        if (statusTxt === "success") {
                            var lcPhotoString = laRowData[4];
                            $("#ARSPO_Main_Photo_BlueImp_Anchor").attr('href', lcPhotoString);
                            $("#ARSPO_Main_Photo_BlueImp_Anchor").attr('title', laRowData[1] + ' - Click to Enlarge');
                            $("#ARSPM_Single_Product_Description_Large_Screen").empty();
                            $("#ARSPM_Single_Product_Description_Large_Screen").append(laRowData[9].replace(/h3/g, "h4"));
                            $("#ARSPO_Single_Product_Description_Small_Screen").empty();
                            $("#ARSPO_Single_Product_Description_Small_Screen").append(laRowData[9].replace(/h3/g, "h4"));
                            $('#myModalSingleProduct').modal('show');
                            let result = lcPhotoString.replace("../assets/", "/assets/");

                            $("#ARSPO_Main_Photo_Small_Screen").attr('src', lcPhotoString);
                            $("#ARSPM_Main_Photo_Large_Screen").attr('src', lcPhotoString);
                        }
                    });

                    switch (lcMainCategory) {
                        case 'Tyres':
                            F0_Populate_ChildDataTable(laRowData, 'Tyres.Detailed');
                            break;
                        case 'Components':
                            F0_Populate_ChildDataTable(laRowData, 'Components.Detailed');
                            break;
                        case 'Wheelsets':
                            F0_Populate_ChildDataTable(laRowData, 'Wheelsets.Detailed');
                            break;
                        case 'Accessories':
                            F0_Populate_ChildDataTable(laRowData, 'Accessories.Detailed');
                            break;
                    }
                }
            });
        }
    });

    new restfulApp;
    //Initiate a new history and controller class
    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;
    Backbone.history.start();
});
