//switching selected headers logic

const headerIds = ["#section2-headers-technology","#section2-headers-imagination","#section2-headers-monetary","#section2-headers-education"];
const mainImageIds = ["#section2-mainImage-technology","#section2-mainImage-imagination","#section2-mainImage-monetary","#section2-mainImage-education"];
const mainTextIds = ["#section2-mainText-technology","#section2-mainText-imagination","#section2-mainText-monetary","#section2-mainText-education"];
const imageSources = ["HedgehogCyborg", "HedgehogInLeaves", "HedgehogInGrass", "Hedgehog_regular"];


//HTML Elements
const section2MainImage = $('#section2-mainImage');

//////////////

let selectedHeaderIndex = 0;

$(headerIds[0]).click(function() {
    switchSelectedHeader(0);
});
$(headerIds[1]).click(function() {
    switchSelectedHeader(1);
});
$(headerIds[2]).click(function() {
    switchSelectedHeader(2);
});
$(headerIds[3]).click(function() {
    switchSelectedHeader(3);
});

function switchSelectedHeader(headerIndex){
    if(headerIndex == selectedHeaderIndex){return;}

    $(headerIds[selectedHeaderIndex]).removeClass('section2-headers-selected');
    $(headerIds[headerIndex]).addClass('section2-headers-selected');

    $(mainImageIds[selectedHeaderIndex]).fadeTo(150, 0);    
    $(mainImageIds[headerIndex]).fadeTo(150, 1);    

    $(mainTextIds[selectedHeaderIndex]).fadeTo(150, 0);    
    $(mainTextIds[headerIndex]).fadeTo(150, 1);    

    selectedHeaderIndex = headerIndex;
}

//Text the same width as image logic
$(document).ready(function() {
    $(".section2-text-main").css({
      'width': ($("#section2-mainImage-technology").width() + 'px')
    });
  });


