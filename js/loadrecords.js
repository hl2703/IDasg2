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
      
    //console.log(titleArray+dateArray);
    };
  
    window.addEventListener ('load',loadRecords,false) ;