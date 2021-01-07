function sortRecords(){
    let templist=JSON.parse(localStorage.getItem("recordList"));// retrieve records
    var dateArray=[];
    var ieArray=[];
    var amtArray=[];
    var monthArray=[];

    for (var i=0;i<templist.length;i++){
        dateArray.push(templist[i].date);//add date to array
        ieArray.push(templist[i].ie);//add income/expense type to array
        amtArray.push(templist[i].amount);//add amt to array
    }
    
    var month = [];//add months to array
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    for (var i=0;i<dateArray.length;i++){
        var indexel=dateArray[i];
        var firstNum=indexel.charAt(5);
        var secNum=indexel.charAt(6);
        
        var combineNum=String(firstNum)+String(secNum);
        
        var convertNum=parseInt(combineNum);
        
        var convertDate=month[convertNum-1];//retrieve month
       
        monthArray.push(convertDate);
      
    }
   
    //console.log(monthArray);
    var tablerecords= document.getElementById("summarytable");  
    var tr = tablerecords.getElementsByTagName("tr");
      
    for (var i = 1; i < tr.length; i++) {
      var monthlyIncome=0;
      var monthlyExpense=0;
      var monthlySavings=0;
      var td = tr[i].getElementsByTagName("td")[0];
   
      var tdtext=td.textContent;
      
      for (var w=0;w<monthArray.length;w++){
        if(tdtext==monthArray[w] && ieArray[w]=="income"){
            monthlyIncome=monthlyIncome+Number(amtArray[w]);
           
            $('tr').eq(i).find('td').eq(1).text(monthlyIncome);
        }
        
        else if (tdtext==monthArray[w] && ieArray[w]=="expense"  ){
          
            if(tdtext==monthArray[w] && ieArray[w]=="expense"){
                monthlyExpense=monthlyExpense+ Number(amtArray[w]);
        
                $('tr').eq(i).find('td').eq(2).text(monthlyExpense);
            
            
            }
        }
       
        monthlySavings=monthlyIncome-monthlyExpense;
        $('tr').eq(i).find('td').eq(3).text(monthlySavings);
        }
    }
        var yrIncome=0;
        for (var i = 1; i < tr.length-1; i++) {
          var tdIncome = tr[i].getElementsByTagName("td")[1].textContent;
          yrIncome=yrIncome+Number(tdIncome);
        
      }
      $('tr').eq(13).find('td').eq(1).text(yrIncome);

      var yrExpense=0;
        for (var i = 1; i < tr.length-1; i++) {
          var tdExpense = tr[i].getElementsByTagName("td")[2].textContent;
          yrExpense=yrExpense+Number(tdExpense);
          
      }
      $('tr').eq(13).find('td').eq(2).text(yrExpense);

      var yrSavings=0;
        for (var i = 1; i < tr.length-1; i++) {
          var tdSavings = tr[i].getElementsByTagName("td")[3].textContent;
          yrSavings=yrSavings+Number(tdSavings);
        
        
      }
      $('tr').eq(13).find('td').eq(3).text(yrSavings);
    }
  
sortRecords();