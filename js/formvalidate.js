$(".naclass").hide();
//form validation referenced from: wk07 learning materials
function checkUsername() {                       
    var username = el.value;                        
    if (username.length <3) {                     
                 
      elMsg.textContent = 'Please enter valid title'; 
        
        return false
    } else {                                       
      elMsg.textContent = '';   
      return true                   
    }
  }
  
  function tipUsername() {                         
                          
    elMsg.innerHTML = 'Title must be at least 3 characters'; 
   
  }
  
  var el = document.getElementById('name');     
  var elMsg = document.getElementById('feedback');  
  el.addEventListener('focus', tipUsername, false); 
  el.addEventListener('blur', checkUsername, false);


  function checkDate() {                        
    var datev = del.value;                        
    if (datev.length ==0) {                      
     
      delMsg.textContent = 'Please input date';
      return false;
    } else {                                        
      delMsg.textContent = '';     
      return true;         
    }
  }
  
  
  
  var del = document.getElementById('date');     
  var delMsg = document.getElementById('dfeedback');  

  
  del.addEventListener('blur', checkDate, false);

  function checkAmt() {                        
    var amtv = ael.value;                        
    if (isNaN(amtv) || amtv<0) {                      
     
      aelMsg.textContent = 'Please enter an amount greater than 0';
      return false;
    } else {                                        
      aelMsg.textContent = '';    
      return true;      
    }
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
