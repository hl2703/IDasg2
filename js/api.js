$(document).ready(function () {
 //referenced from https://repl.it/@malcolmyam/wk0x-ipapi-json from week9 materials   

    $.ajax({
      method: "GET",
      url: "https://ipapi.co/json",
     
    })
      .done(function (data) {
         
        $('#location').html(`${data.country_name}`);
        $('#currency').html(`${data.currency}`);
      
      });
  
  
  })