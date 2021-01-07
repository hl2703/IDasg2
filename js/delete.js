let templist=JSON.parse(localStorage.getItem("recordList"));
var titleArray=[];
var dateArray=[];
var ieArray=[];
var catArray=[];
var amtArray=[];
var pArray=[];
var noteArray=[];



function displayRecords(){
    var recordForm=document.getElementById("deleteform");
    var selectOption=recordForm.selectrecord;
    var deleteButton=recordForm.deleteR;
    for (var i=0;i<templist.length;i++){

        titleArray.push(templist[i].title);
        dateArray.push(templist[i].date);
        ieArray.push(templist[i].ie);
        catArray.push(templist[i].category);
        amtArray.push(templist[i].amount);
        pArray.push(templist[i].pmode);
        noteArray.push(templist[i].note);
    }


    
    for (var i=0;i<titleArray.length;i++){
         var newOption=document.createElement("Option");
        newOption.text=titleArray[i];
        newOption.value= titleArray[i];
        selectOption.add(newOption); //add title to dropdown list
    }
    selectOption.addEventListener("change",changeOption,false);
    function changeOption(){
        var selectVal=selectOption.value;
        var indexr=titleArray.indexOf(selectVal);
        console.log(indexr);
        console.log(templist[indexr]);

  
        
    //display details of selected record
    $("#titleid").text(titleArray[indexr]); 
    $("#dateid").text (dateArray[indexr]); 
    $("#ieid").text (ieArray[indexr]); 
    $("#catid").text (catArray[indexr]); 
    $("#amtid").text (amtArray[indexr]); 
    $("#pmid").text (pArray[indexr]); 
    $("#noteid").text (noteArray[indexr]); 
    }

    


 
    function deleteRecord(){
        
    var selectedVal=selectOption.value;
    var indexr=titleArray.indexOf(selectedVal);
    var selectedID = document.getElementById("selectid");
    selectedID.remove(indexr+1);

        
        templist.splice(indexr,1); //clear data
        titleArray.splice(indexr,1); //delete title
        console.log(templist);
        alert("Record deleted");
        localStorage.setItem("recordList", JSON.stringify(templist)); //save to local storage
    
        $("#titleid").text("--"); 
        $("#dateid").text ("--"); 
        $("#ieid").text ("--"); 
        $("#catid").text ("--"); 
        $("#amtid").text ("--"); 
        $("#pmid").text ("--"); 
        $("#noteid").text ("--"); 
        var formEl=document.getElementById("deleteform");

        formEl.reset(); //reset form
        }


    deleteButton.addEventListener('click',deleteRecord,false);


}
$(document).on('click','#deleteallr',function(e){
    e.preventDefault();
    localStorage["recordList"] = "[]"; //clear array
    alert("All records deleted!");
    location.reload();
});

window.addEventListener ('load',displayRecords,false) ;