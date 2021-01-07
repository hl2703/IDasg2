
function loadRecords(){
  let templist=JSON.parse(localStorage.getItem("recordList")); //retrieve data
  
  var keys=Object.keys(templist);
  //console.log(templist[0].title);
  var titleArray=[];
  var dateArray=[];
  var ieArray=[];
  var catArray=[];
  var amtArray=[];
  var pArray=[];
  var noteArray=[];
  
  for (var i=0;i<keys.length;i++){
    // store data in arrays
      titleArray.push(templist[i].title);
      dateArray.push(templist[i].date);
      ieArray.push(templist[i].ie);
      catArray.push(templist[i].category);
      amtArray.push(templist[i].amount);
      pArray.push(templist[i].pmode);
      noteArray.push(templist[i].note);
  };
  
  var ieopt = document.getElementById("ieoption");
  function ieSearch() {
      //sort based on income/expense         
      var ieopt = document.getElementById("ieoption");
      var req = ieopt.value.toUpperCase();
      
      var tablerecords= document.getElementById("viewrecords");
      var tr = tablerecords.getElementsByTagName("tr");
      
      for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase()==req) {
            tr[i].style.display = ""; //show if results match
          } 
          
          else {
            tr[i].style.display = "none";//hide if input does not match data
          }
           if(ieopt.value=="---"){
              tr[i].style.display = ""
          }
        }       
      }
  
    }
  
    ieopt.addEventListener("change",ieSearch,false);
  
    var titleinput = document.getElementById("idinput");
    function searchFunction() {
                
      //search for title
      var req = titleinput.value.toUpperCase();
      
      var tablerecords= document.getElementById("viewrecords");
      var tr = tablerecords.getElementsByTagName("tr");
      
      for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(req) > -1) {
            tr[i].style.display = "";
          } 
          else {
            tr[i].style.display = "none";
         }
        }       
      }
    }
    
    titleinput.addEventListener("keyup",searchFunction,false);
    var cinput = document.getElementById("cidinput");
    function catSearch() {
      
      //search for category
      var req = cinput.value.toUpperCase();
      
      var tablerecords= document.getElementById("viewrecords");
      var tr = tablerecords.getElementsByTagName("tr");
      
      for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(req) > -1) {
            tr[i].style.display = "";
          } 
          else {
            tr[i].style.display = "none";
          }
        }       
      }
    }
    cinput.addEventListener("keyup",catSearch,false);

    var pinput = document.getElementById("payinput");
    function paySearch() {


      var req = pinput.value.toUpperCase();
      
      var tablerecords= document.getElementById("viewrecords");
      var tr = tablerecords.getElementsByTagName("tr");
      
      for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[5];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(req) > -1) {
            tr[i].style.display = "";
          } 
          else {
            tr[i].style.display = "none";
          }
        }       
      }
    }  
    pinput.addEventListener("keyup",paySearch,false);
  
    var aButton = document.getElementById("lhbutton");
    aButton.addEventListener("click",sortTable,false);
    var dButton = document.getElementById("hlbutton");
    dButton.addEventListener("click",sortdTable,false);
  
  
    function sortTable() {
    
    var table = document.getElementById("viewrecords");
    var switching = true;
    
    while (switching) {
    
    switching = false;
    var rows = table.rows;
    
    for (var i = 1; i < (rows.length - 1); i++) {
    
    var switchRows= false;
    
    var firstEl = rows[i].getElementsByTagName("TD")[4];
    var secondEl = rows[i + 1].getElementsByTagName("TD")[4];
    //compare element with element after it
    if (Number(firstEl.innerHTML) > Number(secondEl.innerHTML))  {
    
    switchRows= true;
    break;
    }
    }
    if (switchRows) {
    //switch places if element is greater
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    }
    }
    }                 
    function sortdTable() {
    
      var table = document.getElementById("viewrecords");
    var switching = true;
    
    while (switching) {
    
    switching = false;
    var rows = table.rows;
    
    for (var i = 1; i < (rows.length - 1); i++) {
    
    var switchRows= false;
    
    var firstEl = rows[i].getElementsByTagName("TD")[4];
    var secondEl = rows[i + 1].getElementsByTagName("TD")[4];
    
    if (Number(firstEl.innerHTML) < Number(secondEl.innerHTML))  {
    
    switchRows= true;
    break;
    }
    }
    if (switchRows) {
    
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    }
    }
    }       
    
    for(i=0;i<keys.length;i++){
        var tableEl=document.getElementById("viewrecords");
        var row={};
        //insert values into table
        row=tableEl.insertRow();
        row.insertCell(-1).textContent = titleArray[i]; 
        row.insertCell(-1).textContent = dateArray[i]; 
        row.insertCell(-1).textContent = ieArray[i]; 
        row.insertCell(-1).textContent = catArray[i]; 
        row.insertCell(-1).textContent = amtArray[i]; 
        row.insertCell(-1).textContent = pArray[i]; 
        row.insertCell(-1).textContent = noteArray[i]; 
    }
      
  
  };
  
  
  
  
  
  window.addEventListener ('load',loadRecords,false) ;