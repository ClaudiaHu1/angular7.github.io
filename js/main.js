$( document ).ready(function() {

  $('.lorem-slider').slick({
    autoplay: true,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplaySpeed: 5000

  });

  //use handle bars to template

  var objComments = {
    comment :  _.sortBy(comments, function(num){
      num.name = num.name.split(" ", 2)[0];
      return Number(num.timestamp);
    })
  };

  _.each(objComments.comment, function (value) {
    value.timestamp = convertDate (value.timestamp);
  });


  var theTemplate = Handlebars.compile($("#comment-template").html());


  $('.lorem-comment-block').append(theTemplate(objComments));

});

function convertDate(num) {
  var date = new Date(Number(num));
  return date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear();
}
