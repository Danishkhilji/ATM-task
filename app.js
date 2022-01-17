//Create function which accept amount and preference notes
const getCurrency=(amount ,preference)=>{
   
    //preference Note Counte
var preferenceNoteCounte = Math.floor(amount/preference)

    //error handling start for 1
//error handling start for 1 if user input amount is 2002 and preference note is 1. 
//ATM is restricted to give only 200 preference note 
if(preferenceNoteCounte>200 && preference==1)
{
    // find numbers of preference notes which are more then 200
    const findExtraNote = preferenceNoteCounte - 200;

    // round down for nearest down 5s e.g 33 will be 30 or 47 will be 45
    const roundDownExtraNote = (Math.floor(preferenceNoteCounte/5)*5 -200);

    //calculating extra "1" which are more then 200 
    const difference = (findExtraNote-roundDownExtraNote);

    //error handling for "0" if there are differenc value is "0"
    const deductNote = difference==0 ? difference : difference-5;
    // update preferenceNoteCounte
    preferenceNoteCounte =200+deductNote;

}
//error handling end for 1

// update preferenceNoteCounte if > 200
if(preferenceNoteCounte>200)
{
    preferenceNoteCounte=200;
}

// update amount after preference notes amount deduct
    amount = amount - (preferenceNoteCounte*preference)
// callback calculate function for note count and amount update
    const calculate=(element)=>{   
        if( element == preference){
            return preferenceNoteCounte  
        }
        else{
            const noteCounte = Math.floor(amount/element)
            amount = amount - (noteCounte*element)
            return noteCounte  
        }
    }

//initilize array for notes which are avalible in ATM 
  const notes =[500,100,50,20,10,5,1]

//map function called on notes array
const noteCounted=   notes.map(calculate);    

//Print on screen     
const ul =document.getElementById("amountList")
document.getElementById("amountList").innerHTML="";
for(i=0; i<noteCounted.length ; i++){
    
    var li = document.createElement('li')
    
    li.innerHTML=notes[i] +'  :  '+ noteCounted[i] 
    ul.append(li)
}
}

const withdraw=()=>{
 const amount=  document.getElementById("amount").value
 const preference =document.getElementById("selectPreference").value

 if(amount<100 || amount > 100000)
 {
    alert("Please insert amount between 100 to 100000")
 }
 else{
    getCurrency(amount,preference)
 }
}


