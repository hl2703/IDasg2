 
$(".naclass").hide();
var submitForm=-1;
//validate title
function checkUsername() {                        
    var username = el.value;
    var add=0;                     
    if (username.length <3) {     //check if length is less than 3                
               
      elMsg.textContent = 'Please enter valid title'; 
    
        
    } else {                                     
      elMsg.textContent = '';   
      add=1;                 
    }
    submitForm=submitForm+add
    //console.log(add);
    //console.log('submitnum:'+submitForm);
  }
  
  function tipUsername() {                          
   
    elMsg.innerHTML = 'Title must be at least 3 characters'; 
  
  }
  
  var el = document.getElementById('name');    
  var elMsg = document.getElementById('feedback');  
  
 
  el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
  el.addEventListener('blur', checkUsername, false);// blur call checkUsername()
  


  function checkDate() {                        
    var datev = del.value;  
    add=0;                  
    if (datev.length ==0) {                      
     
      delMsg.textContent = 'Please input date';//prompt if no date selected
      
    } else {                                        
      delMsg.textContent = '';     
      add=1;        
    }
    //console.log(add);
    submitForm=submitForm+add
  }
  
  
  
  var del = document.getElementById('date');     
  var delMsg = document.getElementById('dfeedback');  

  
  del.addEventListener('blur', checkDate, false);

  function checkAmt() {                        
    var amtv = ael.value; 
    add=0;              
    if (isNaN(amtv) || amtv<=0 ||amtv=="") {      //check if value is greater than 0               
     
      aelMsg.textContent = 'Please enter an amount greater than 0';
      
    } else {                                        
      aelMsg.textContent = '';    
      add=1;     
    }
    //console.log(add);
    submitForm=submitForm+add
  }
  
  
  
  var ael = document.getElementById('amt');     
  var aelMsg = document.getElementById('afeedback');  

  
  ael.addEventListener('blur', checkAmt, false);

  function checkI(){
    
        $(".exdiv").hide();
        $(".naclass").show();
     
      };
    
    var iel = document.getElementById('ieid');     
    
  
    
    iel.addEventListener('change', checkI, false);
    function checkE(){
     
          $(".naclass").hide();
          $(".exdiv").show();
      
        };
      
      var exEl= document.getElementById('idex');     
     
      
      exEl.addEventListener('change', checkE, false);

     // console.log(submitForm);
$(document).on('click','#savebutton',function(e){
        event.preventDefault();
        
       
        if (submitForm==2){
var titleInput=document.getElementById("name").value;

var dateInput=document.getElementById("date").value;
var ieInput = [];
$.each($("input[name='ie']:checked"), function(){
ieInput.push($(this).val());
});

var catInput = [];
$.each($("input[name='category']:checked"), function(){
catInput.push($(this).val());
});

var amtInput=document.getElementById("amt").value;

var pInput = [];
$.each($("input[name='pmode']:checked"), function(){
pInput.push($(this).val());
});



var noteInput=document.getElementById("inote").value;

//console.log(titleInput+dateInput+ieInput+catInput+amtInput+pInput+noteInput);
alert("Record Saved!");



function record(title, date,ie, category,amount,pmode,note) {

this.title = title;
this.date=date;
this.ie=ie;
this.category=category;
this.amount=amount;
this.pmode=pmode;
this.note=note
}

        var newRecord = new record(titleInput,dateInput,ieInput,catInput,amtInput,pInput,noteInput);
        let getList = JSON.parse(localStorage.getItem("recordList")) ||[];
       
        getList.push(newRecord);
        console.log("record created");
        localStorage.setItem("recordList", JSON.stringify(getList)); //store data in local storage
       
       



    //console.log(submitForm);



var formEl=document.getElementById("createform");

formEl.reset();
location.reload();
submitForm=-1;
        }

else if (submitForm<2){
    alert("Pls enter fields accordingly.");
}
});

      //console.log(submitForm);