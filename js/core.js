var popupAllTarget = null;
var closeBtn = null;
var popupTail = null;
var openBtn = null;
var carouselBO = null;
var carouselSS = null;
var carouselSP = null;
var carouselC = null;
var carouselN = null;
var mvTabBtn = null;
var mvTheater = null;
var mvSelect = null;
var mvCategory = null;
var calendarDate = null;
var hoverTarget = null;
var movieHTarget = null;
var timeHTarget = null;
var dateChecking = null;

var textField = null;
var selectTarget = null;

var adultContainer = null;
var tennaagerCount = null;
var seniorCount = null;
var disacledCount = null;
var goodsCount = null;

var seatCheckB = null;

var termsList = null;

var informationSelet = null;
var detailInformation = null;

var theaterArea = null;
var informationTab = null;

var couponSelet =  null;
var detailCoupon = null;

var reservationList = null;
var reservationListBtn = null;
var reservationListTitle = null;

var changePin = null;

var theaterTab = null;

var plusCont = null;
var plusContIcon = null;

var paymentCategory = null;

var methodSelect = null; 
var methodCategory = null;

var pointDate = null;

var headerMenu = null;

var methodTabBtn = null;
var methodP = null;


$(document).ready(function(){
    init();
    popupControl(openBtn,closeBtn,popupTail,popupAllTarget);
    mainSlider();
    carouselSlider(carouselBO);
    carouselSlider(carouselSS);
    carouselSlider(carouselSP);
    carouselSlider(carouselC);
    carouselSlider(carouselN);
    tabControl(mvTabBtn,mvTheater);
    tabControl(methodSelect,methodCategory);
    tabControl(methodTabBtn,methodP);
    carouselCalendar();
    carouselCalendarT();
    hoverControl(hoverTarget);
    hoverControl(movieHTarget);
    hoverControl(timeHTarget);
    mvControl(mvSelect,mvCategory);
    testSwap(textField,selectTarget);
    testSwap(".phoneAgency",".phoneAgencySelect li");
    testSwap(".firstNum",".firstNumSelect li");
    testSwap(".secondPhone",".secondPhoneSelect li");
    testSwap(".rowTextField",".rowList li");
    testSwap(".columnTextField","[class$='Column'] li");
    dateChk();
    timeCHk();
    peopleCount(adultContainer);
    peopleCount(tennaagerCount);
    peopleCount(seniorCount);
    peopleCount(disacledCount);
    storeCount(goodsCount);
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

function init(){
    popupAllTarget = $("[id $= Popup]");
    closeBtn = $(".btnClose"); 
    popupTail = "Popup";
    openBtn = $(".btnOpen");  
    carouselBO = $(".carouselBO");
    carouselSS = $(".carouselSS");
    carouselSP = $(".carouselSP");
    carouselC = $(".carouselC");
    carouselN = $(".carouselN");
    mvTabBtn = $(".rpert li");
    mvTheater = $("[id$='Theater']");
    mvSelect = $(".selectComponent li") 
    mvCategory = $("[class$='Movie']");
    methodTabBtn = $("#simpleMethod .tabMenu li");
    methodP = $("[id$='Pay']");
    calendarDate = $(".carouselCalendar li");
    hoverTarget  = $("ul[id$='Theater'] > li");
    movieHTarget = $("ul[class$='Movie'] > li");
    timeHTarget = $(".listTime li")
    dateChecking = $(".carouselCalendar li");
    timeChecking = $(".movieTime > ul li");
    textField = $(".textField");
    selectTarget =$(".selectComponent li");
    adultContainer = $("#adultCount");
    tennaagerCount = $("#tennaagerCount");
    seniorCount = $("#seniorCount");
    disacledCount = $("#disacledCount");
    goodsCount = $("#goodsCount");
    termsList = $(".payment >div:last-of-type > div ul li");
    informationSelet = $(".tabMenu li");
    detailInformation = $("[class$='Information']");
    couponSelet = $(".couponTab li");
    detailCoupon + $("[id$='Coupon']");
    theaterArea = $(".theaterList > li")
    informationTab = $("[id$='Popup'] .consentChk");
    reservationList = $(".reservationList ul li");
    reservationListBtn = $(".reservationList ul li > button");
    reservationListTitle = $(".reservationList ul li > div > dl");
    changePin = $(".changeBtn ~ div");
    theaterTab = $("#myTheaterPopup .theaterList li ol li");
    plusCont = $("[class$='All'] > article > div:last-of-type > a:nth-of-type(2)");
    plusContIcon = $("[class$='All'] > article > div:last-of-type > a:nth-of-type(2) i");
    pagerSlider = $(".trailerInformation .customPager");
    methodSelect = $(".methodList li") 
    methodCategory = $("[id$='Method']");
    pointDate = $(".pointDetail > div:nth-of-type(2) ul li");
    headerMenu = $("header nav");
}

function changeMui(){
    $(headerMenu).click(function(){
        $(this).toggleClass("active");

        if($(".mui").attr("value") == "close"){
            $(".mui").val("menu")
        }else{
            $(".mui").val("close")
        }
    });
}

function choiceWeek(){
    $(pointDate).click(function(){
        $(pointDate).removeClass("active");
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
    $(theaterTab).click(function(){
        $(theaterTab).removeClass("active");
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
/* 
    formData = form 부모 클래스
    transBtn = 링크 아이디값

    field.val() != ""
    빈 문자열이 아닐 시 해당 링크로 이동(!는 부정을 뜻함)
    빈 문자열 일 경우 경고창
 */


function theaterListTab(){
    $(theaterArea).click(function(){
        $(theaterArea).removeClass('active');
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
        target.removeClass('active');
        $(this).addClass('active');
    });
}

function mvControl(){
    $(mvSelect).click(function(){
        $(mvSelect).removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('data-tabName');
        $(mvCategory).removeClass('active');
        $('.'+currentTab).addClass('active');    
    });
}

function mvDetail(){
    $(informationSelet).click(function(){
        $(informationSelet).removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('data-tabName');
        $(detailInformation).removeClass('active');
        $('.'+currentTab).addClass('active');    
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
    $(couponSelet).click(function(){
        $(couponSelet).removeClass('active');
        $(this).addClass('active');
        var  currentTab = $(this).attr('data-tabName');
        $(detailCoupon).removeClass('active');
        $('#'+currentTab).addClass('active');
    })
}

function timeCHk(){
    $(timeChecking).click(function(){
        $(timeChecking).removeClass('active');
        $(this).addClass("active");
    });
}

function dateChk(){
    $(dateChecking).click(function(){
        var dateBG = $(this).children('time');
        $(dateChecking).children('time').removeClass('active');
        $(dateBG).addClass('active');
    });
}

function reservationListClick(){
    $(reservationListBtn).click(function(){
        $(reservationList).toggleClass("active");
    });
    $(reservationListTitle).click(function(){
        $(reservationList).toggleClass("active");
    });
}

function mainSlider(){
    var touchDevice = false;
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
          touchDevice = true;
    }
    $(".mainSlider").bxSlider({
        controls : false,
        pause: 4000,
        pagerCustom: '.customPager',
        auto: true,
        touchEnabled : touchDevice
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

function carouselSlider(target){
    var touchDevice = false;
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
          touchDevice = true;
    }
    $(target).bxSlider({
        maxSlides: 5,
        minSlides: 1,
        moveSlides: 5,
        slideMargin: 20,
        infiniteLoop: false,
        slideWidth: 330,
        pager: false,
        touchEnabled : touchDevice
    });
}

function carouselCalendar(){
    $(".carouselCalendar").bxSlider({
        maxSlides: 8,
        minSlides: 3,
        infiniteLoop: false,
        slideMargin: 20,
        pager: false,
        slideWidth: 30,
        touchEnabled : false
    });
}

function carouselCalendarT(){
    $(calendarDate).click(function(){
        var timeTab = $(this).children("time");
        $(calendarDate).children("time").removeClass('.active');
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
    var plus = container.children(".btnPlus");
    var minus = container.children(".btnMins");
    var field = container.children(".txtNum");
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
    var plus = container.children(".btnPlus");
    var minus = container.children(".btnMins");
    var field = container.children(".txtNum");
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
                $(termsList).addClass("active");
            }else{
                $(termsList).removeClass("active");
            }
        });
    })
}

function termsCheck(){
    $(termsList).off().on('click', function(){
        $(termsList).click(function(){
            $(this).toggleClass("active");
            if($(termsList).eq(0).hasClass("active") && $(termsList).eq(1).hasClass("active") && $(termsList).eq(2).hasClass("active") && $(termsList).eq(3).hasClass("active")){
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
    $(plusCont).click(function(){
        count++;
        if(count % 2 != 0 ){
            $(plusContIcon).text("check");
            $("#interestPopup").addClass("active");
        }else{
            $(plusContIcon).text("add")
        }
    });
}

function informationCheck(){
    $(informationTab).click(function(){
        $(informationTab).toggleClass("active");
    });
}

function changePassword(){
    $(".changeBtn").click(function(){
        $(changePin).toggleClass("active");

        if($(this).html() == "Cancel"){
            $(".changeBtn").html("Change")
        }else{
            $(".changeBtn").html("Cancel")
        }
    });
}