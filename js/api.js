$(document).ready(function () {
    

    $.ajax({
      method: "GET",
      url: "https://ipapi.co/json",
     
    })
      .done(function (data) {
         
        $('#location').html(`${data.country_name}`);
        $('#currency').html(`${data.currency}`);
      
      });
  
  
  })