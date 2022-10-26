
$(document).ready(function(){
    popupControl(".btnOpen",".btnClose","Popup","[id $= Popup]");
    customSlider(".mainSlider",false,4000,".customPager",true,1,1,0,0,0,true,true);
    customSlider(".carouselBO",true,4000,null,false,5,1,5,20,330,false,true);
    customSlider(".carouselSS",true,4000,null,false,5,1,5,20,330,false,true);
    customSlider(".carouselSP",true,4000,null,false,5,1,5,20,330,false,true);
    customSlider(".carouselC",true,4000,null,false,5,1,5,20,330,false,true);
    customSlider(".carouselN",false,4000,null,false,5,1,5,20,330,false,true);
    customSlider(".carouselCalendar",true,4000,null,false,8,3,0,20,30,false,false);
    carouselCalendarT();
    tabControl(".rpert li","[id$='Theater']");
    tabControl(".methodList li","[id$='Method']");
    tabControl("#simpleMethod .tabMenu li","[id$='Pay']");
    hoverControl("ul[id$='Theater'] > li");
    hoverControl("ul[id$='Theater'] > li ol li");
    hoverControl("ul[id$='Movie'] > li");
    hoverControl(".listTime li");
    mvControl(".selectComponent li","[id$='Movie']");
    testSwap(".textField",".selectComponent li");
    testSwap(".phoneAgency",".phoneAgencySelect li");
    testSwap(".firstNum",".firstNumSelect li");
    testSwap(".secondPhone",".secondPhoneSelect li");
    testSwap(".rowTextField",".rowList li");
    testSwap(".columnTextField","[class$='Column'] li");
    dateChk();
    timeCHk();
    peopleCount("#adultCount");
    peopleCount("#tennaagerCount");
    peopleCount("#seniorCount");
    peopleCount("#disacledCount");
    storeCount("#goodsCount");
    termsCheckAll();
    termsCheck();
    mvDetail();
    trailerSlider();
    plusBtn();
    fieldCheck(".upSign","#inStep1");
    fieldCheck(".upPinSign","#turnLogin");
    fieldCheck(".lostSign","#newPin");
    fieldCheck(".lostPinSign","#backLogin");
    fieldCheck(".inSign","#inputPin");
    fieldCheck(".inPinSign","#mainPage");
    theaterListTab();
    informationCheck();
    cpDetail();
    reservationListClick();
    changePassword();
    theaterClick();
    marketingAll();
    marketingCheck();
    headColor();
    topBtn();
    checkRow();
    choiceWeek();
    changeMui();
});

function changeMui(){
    $("header nav").click(function(){
        $(this).toggleClass("active");

        if($(".mui").attr("value") == "close"){
            $(".mui").val("menu")
        }else{
            $(".mui").val("close")
        }
    });
}

function choiceWeek(){
    $(".pointDetail > div:nth-of-type(2) ul li").click(function(){
        $(".pointDetail > div:nth-of-type(2) ul li").removeClass("active");
        $(this).addClass("active");
    });
}

function topBtn(){
    $(".topBtn").click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
}

function headColor(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $("header:not(.loginHeader)").css("background" , "black");
        }
        else{
          $("header:not(.loginHeader)").css("background" , "linear-gradient(180deg, black, transparent)");   
        }
    })
}

function theaterClick(){
    $("#myTheaterPopup .theaterList li ol li").click(function(){
        $("#myTheaterPopup .theaterList li ol li").removeClass("active");
        $(this).addClass("active");
    })
}

function fieldCheck(formData,transBtn){
    var field = $(formData + " input");
    $(transBtn).click(function(){
        var targetURL = $(this).attr("data-href");
        if(field.val() != ""){
            location.href = targetURL;
        }else{
            alert('data insert please');
        }
    });
}

function theaterListTab(){
    $(".theaterList > li").click(function(){
        $(".theaterList > li").removeClass('active');
        $(this).addClass('active');
    })
}

function popupControl(openBtn,closeBtn,panel,allPanel){
    $(openBtn).click(function(){
        var currentPanel = $(this).attr("data-popName") + panel;
        $(allPanel).removeClass("active");
        $("#" + currentPanel).addClass("active");
    });
    $(closeBtn).click(function(){
        $(allPanel).removeClass('active');
    });    
}

function tabControl(tabBtn,tabPanel){
    $(tabBtn).click(function(){
        $(tabBtn).removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('data-tabName');
        $(tabPanel).removeClass('active');
        $('#'+currentTab).addClass('active');    
    });
}

function hoverControl(target){
    $(target).hover(function(){
        $(target).removeClass('active');
        $(this).addClass('active');
    });
}

function mvControl(){
    $(".selectComponent li").click(function(){
        $(".selectComponent li").removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('data-tabName');
        $("[id$='Movie']").removeClass('active');
        $('#'+currentTab).addClass('active');    
    });
}

function mvDetail(){
    $(".tabMenu li").click(function(){
        $(".tabMenu li").removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('data-tabName');
        $("[id$='Information']").removeClass('active');
        $('#'+currentTab).addClass('active');    
    });
}

function checkRow(){
    $(".mbtabSeat > li:first-of-type ol li").click(function(){
        $(".mbtabSeat > li:first-of-type ol li").removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('data-tabName');
        $(".mbtabSeat > li:nth-of-type(2) ol").removeClass('active');
        $('.'+currentTab).addClass('active');    
    });
}

function cpDetail(){
    $(".couponTab li").click(function(){
        $(".couponTab li").removeClass('active');
        $(this).addClass('active');
        var  currentTab = $(this).attr('data-tabName');
        $("[id$='Coupon']").removeClass('active');
        $('#'+currentTab).addClass('active');
    })
}

function timeCHk(){
    $(".movieTime > ul li").click(function(){
        $(".movieTime > ul li").removeClass('active');
        $(this).addClass("active");
    });
}

function dateChk(){
    $(".carouselCalendar li").click(function(){
        var dateBG = $(this).children('time');
        $(".carouselCalendar li").children('time').removeClass('active');
        $(dateBG).addClass('active');
    });
}

function reservationListClick(){
    $(".reservationList ul li > button").click(function(){
        $(".reservationList ul li").toggleClass("active");
    });
    $(".reservationList ul li > div > dl").click(function(){
        $(".reservationList ul li").toggleClass("active");
    });
}


function trailerSlider(){
    var redrawTarget = $(".trailerSlider").bxSlider({
        controls : false,
        pagerCustom: '.customPager',
        video: true
    });
    $('.callTheSlider').click(function(){
        redrawTarget.redrawSlider();
    });
}
function customSlider(target,controlBool,pauseTime,customPager,autoVal,maxCount,minCount,movCount,marginVal,widthVal,pagerBool,infBool){
    $(target).bxSlider({
        controls : controlBool,
        pause: pauseTime,
        pagerCustom: customPager,
        auto: autoVal,
        maxSlides: maxCount,
        minSlides: minCount,
        moveSlides: movCount,
        slideMargin: marginVal,
        slideWidth: widthVal,
        pager: pagerBool,
        infiniteLoop : infBool
    });
}

function carouselCalendarT(){
    $(".carouselCalendar li").click(function(){
        var timeTab = $(this).children("time");
        $(".carouselCalendar li").children("time").removeClass('.active');
        $(timeTab).addClass('.active');
    })
}

function testSwap(field,dataLabel){
    $(dataLabel).click(function(){
        var insertTarget = $(this).text();
        console.log(insertTarget);
        $(field).text(insertTarget);
    })
}

function peopleCount(container){
    var plus = $(container).children(".btnPlus");
    var minus = $(container).children(".btnMins");
    var field = $(container).children(".txtNum");
    var currentCount = field.val();

    plus.click(function(){
        if(currentCount <= 7){
            currentCount++;
            field.val(currentCount);
        }else{
            alert('Up to 8 people are allowed.');
        }
    })
    minus.click(function(){
        if(currentCount >= 1){
            currentCount--;
            field.val(currentCount);
        }
    });
}

function storeCount(container){
    var plus = $(container).children(".btnPlus");
    var minus = $(container).children(".btnMins");
    var field = $(container).children(".txtNum");
    var currentCount = field.val();

    plus.click(function(){
        if(currentCount <= 7){
            currentCount++;
            field.val(currentCount);
        }else{
            alert('Up to 8 is possible.');
        }
    })
    minus.click(function(){
        if(currentCount >= 1){
            currentCount--;
            field.val(currentCount);
        }
    });
}

function termsCheckAll(){
    $(".termsTatal").off().on('click', function(){
        $(".termsTatal").click(function(){
            $(this).toggleClass("active");
            if($(".termsTatal").hasClass("active") === true){
                $(".payment >div:last-of-type > div ul li").addClass("active");
            }else{
                $(".payment >div:last-of-type > div ul li").removeClass("active");
            }
        });
    })
}

function termsCheck(){
    $(".payment >div:last-of-type > div ul li").off().on('click', function(){
        $(".payment >div:last-of-type > div ul li").click(function(){
            $(this).toggleClass("active");
            if($(".payment >div:last-of-type > div ul li").eq(0).hasClass("active") && $(".payment >div:last-of-type > div ul li").eq(1).hasClass("active") && $(".payment >div:last-of-type > div ul li").eq(2).hasClass("active") && $(".payment >div:last-of-type > div ul li").eq(3).hasClass("active")){
                $(".termsTatal").addClass("active");
            }else{
                $(".termsTatal").removeClass("active");
            }
        });
    })
}

function marketingAll(){
    $(".allMrketing label").click(function(){
        $(this).toggleClass("active");
        if($(".allMrketing label").hasClass("active") === true){
            $(".marketingList li").addClass("active");
        }else{
            $(".marketingList li").removeClass("active");
        }
    });
}

function marketingCheck(){
    $(".marketingList li label").click(function(){
        $(this).parent(".marketingList li").toggleClass("active");
        if($(".marketingList li").eq(0).hasClass("active") && $(".marketingList li").eq(1).hasClass("active") && $(".marketingList li").eq(2).hasClass("active") && $(".marketingList li").eq(3).hasClass("active")){
            $(".allMrketing label").addClass("active");
        }else{
            $(".allMrketing label").removeClass("active");
        }
    });
}

function plusBtn(){
    var count = 0;
    $("[class$='All'] > article > div:last-of-type > a:nth-of-type(2)").click(function(){
        count++;
        if(count % 2 != 0 ){
            $("[class$='All'] > article > div:last-of-type > a:nth-of-type(2) i").text("check");
            $("#interestPopup").addClass("active");
        }else{
            $("[class$='All'] > article > div:last-of-type > a:nth-of-type(2) i").text("add")
        }
    });
}

function informationCheck(){
    $("[id$='Popup'] .consentChk").click(function(){
        $("[id$='Popup'] .consentChk").toggleClass("active");
    });
}

function changePassword(){
    $(".changeBtn").click(function(){
        $(".changeBtn ~ div").toggleClass("active");

        if($(this).html() == "Cancel"){
            $(".changeBtn").html("Change")
        }else{
            $(".changeBtn").html("Cancel")
        }
    });
}