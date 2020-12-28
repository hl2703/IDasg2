let templist=JSON.parse(localStorage.getItem("recordList")); //retrieve data
var keys=Object.keys(templist);
var titleArray=[];
var dateArray=[];
var ieArray=[];
var catArray=[];
var amtArray=[];
var pArray=[];
var noteArray=[];

for (var i=0;i<keys.length;i++){
    titleArray.push(templist[i].title);
    dateArray.push(templist[i].date);
    ieArray.push(templist[i].ie);
    catArray.push(templist[i].category);
    amtArray.push(templist[i].amount);
    pArray.push(templist[i].pmode);
    noteArray.push(templist[i].note);
};
updateRecords();

function updateRecords(){
    var recordForm=document.getElementById("updateform");
    var selectOption=recordForm.selectrecord;
    
    var keys=Object.keys(templist);

    for (var i=0;i<keys.length;i++){
         var newOption=document.createElement("Option");
        newOption.text=titleArray[i];
        newOption.value= titleArray[i];
        selectOption.add(newOption); // add title option
    }
    selectOption.addEventListener("change",changeOption,false);

    function changeOption(){
        var selectVal=selectOption.value;
        var indexr=titleArray.indexOf(selectOption.value);
        console.log(indexr);
        console.log(titleArray[indexr]);
        recordForm.title.value=titleArray[indexr];//display data in form options
        recordForm.rdate.value=dateArray[indexr];
        console.log(dateArray[indexr]);
        recordForm.ie.value=ieArray[indexr];
        if (recordForm.ie.value=="income"){
            $(".exdiv").hide();
            $(".naclass").show();
        }
        if(recordForm.ie.value=="expense"){
            $(".naclass").hide();
            $(".exdiv").show();
        }
        console.log(ieArray[indexr]);
        recordForm.category.value=catArray[indexr];
        console.log(catArray[indexr]);
        recordForm.amount.value=amtArray[indexr];
        console.log(amtArray[indexr]);
        recordForm.pmode.value=pArray[indexr];
        console.log(pArray[indexr]);
        recordForm.note.value=noteArray[indexr];
        console.log(noteArray[indexr]);
        }
var saveChanges=recordForm.save;

function clickSave(){
    var indexr=titleArray.indexOf(selectOption.value);
    var recordForm=document.getElementById("updateform");
    var newTitle=recordForm.title.value;
    titleArray[indexr]=newTitle;

    var newDate=recordForm.rdate.value;
    dateArray[indexr]=newDate;


    var newIe=recordForm.ie.value;
    ieArray[indexr]=newIe;

    var newCat=recordForm.category.value;
    catArray[indexr]=newCat;

    var newAmt=recordForm.amount.value;
    amtArray[indexr]=newAmt;

    var newPmode=recordForm.pmode.value;
    pArray[indexr]=newPmode;

    var newNote=recordForm.note.value;
    noteArray[indexr]=newNote;

    console.log(newTitle+newDate+newIe+newCat+newAmt+newPmode+newNote);

    var listObj=templist[indexr];
    listObj.title=newTitle;
    console.log(listObj.title);
    console.log(templist[indexr]);
    listObj.date=newDate;
    listObj.ie=newIe;
    listObj.category=newCat;
    listObj.amount=newAmt;
    listObj.pmode=newPmode;
    listObj.note=newNote;
    console.log(templist[indexr]);
    console.log(templist);

    localStorage.setItem("recordList", JSON.stringify(templist)); //save data in local storage

    selectOption[indexr+1].text=newTitle;
    alert("Changes Saved!");

    var formEl=document.getElementById("updateform");

    formEl.reset();
    location.reload();
    }
    saveChanges.addEventListener('click',clickSave,false);

}
