




$(document).ready(function (){
   
})

const current = moment().format('MMMM Do YYYY')



let $dateHolder = $('#currentDay');
$dateHolder.text(current)



$('.saveBtn').on('click',function(){
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);

   
})
changeTab();

$('#9 .description').val(localStorage.getItem('9')); /// ask if there is a way to automate this
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));


function changeTab(){
let  currentHour = moment().hour();
let nineCount = 9
let tenCount = 10
let elevenCount = 11
let twelveCount = 12
let thirteenCount = 13
let fourteenCount = 14
let fifteenCount = 15
let sixteenCount = 16
let seventeenCount = 17
console.log(moment().hour());
if ( nineCount  === currentHour){
    $('#9').addClass('present')
}
else if (nineCount < currentHour){
    $('#9').addClass('past')
}
else {
    $('#9').addClass('future');
}
if ( tenCount === currentHour){
    $('#10').addClass('present')
}
else if (tenCount < currentHour){
    $('#10').addClass('past')
}
else {
    $('#10').addClass('future');
}
if ( elevenCount === currentHour){
    $('#11').addClass('present')
}
else if (elevenCount < currentHour){
    $('#11').addClass('past')
}
else {
    $('#11').addClass('future');
}
if ( twelveCount === currentHour){
    $('#12').addClass('present')
}
else if (twelveCount < currentHour){
    $('#12').addClass('past')
}
else {
    $('#12').addClass('future');
}
if ( thirteenCount === currentHour){
    $('#13').addClass('present')
}
else if (thirteenCount < currentHour){
    $('#13').addClass('past')
}
else {
    $('#9').addClass('future');
}
if ( fourteenCount === currentHour){
    $('#14').addClass('present')
}
else if (fourteenCount < currentHour){
    $('#14').addClass('past')
}
else {
    $('#9').addClass('future');
}
if ( fifteenCount === currentHour){
    $('#15').addClass('present')
}
else if (fifteenCount < currentHour){
    $('#15').addClass('past')
}
else {
    $('#15').addClass('future');
}
if ( sixteenCount === currentHour){
    $('#16').addClass('present')
}
else if (sixteenCount < currentHour){
    $('#16').addClass('past')
}
else {
    $('#16').addClass('future');
}
if ( seventeenCount === currentHour){
    $('#17').addClass('present')
}
else if (seventeenCount < currentHour){
    $('#17').addClass('past')
}
else {
    $('#17').addClass('future');
}

}
