$('.first-el__info, .second-el__info').hide();

 var firstElementInfoVisible = false;
 var secondElementInfoVisible = false;


 $('.first-el__header').click(()=>{

    firstElementInfoVisible = !firstElementInfoVisible;
    $('.first-el__info').toggle();
    $('.first-el__i').css(rotateArrow(firstElementInfoVisible));
});


 $('.second-el__header').click(()=>{

        secondElementInfoVisible = !secondElementInfoVisible;
        $('.second-el__info').toggle();
        $('.second-el__i').css(rotateArrow(secondElementInfoVisible));
 });


 function rotateArrow(isElementPressed){
    return isElementPressed == true ? {'transform': 'scaleX(0.77) scaleY(1.22) rotateX(180deg) translateY(2px)'} : {'transform': 'scaleX(0.77) scaleY(1.22) rotateX(0deg)'};
 }


