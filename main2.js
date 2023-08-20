document.addEventListener("DOMContentLoaded", function () {
    // Your code here
  });
  
//create tables for document
var cards = Array.from(document.querySelectorAll(".card"));
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deletebtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var plusbtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtns = Array.from(document.querySelectorAll(".fa-minus-circle"));

//to add likes to the cards
for(let fav of favs){
    //to activate the clicking button 
    fav.addEventListener("click",function(){
        //to change the heart color(or add like)
        if (fav.style.color == "black"){
            fav.style.color="red"
        }
        else {
            fav.style.color = "black"
        }
    })
}

//to delete the cards
for (let i in deletebtns) {
    //to activate the clicking button 
    deletebtns[i].addEventListener("click", function(){
        //to delete the card when clicking
        cards[i].remove()
        
    })
}

//to increase the number of purchases
for (let plusbtn of plusbtns){
    //to activate the clicking button 
    plusbtn.addEventListener("click" , function(){
        //to increase the number of purchases in the web page
        plusbtn.nextElementSibling.innerHTML++
    })
}

//to decrease the number of purchases
for (let minusbtn of minusbtns){
    //to activate the clicking button 
    minusbtn.addEventListener("click" , function(){
        //to increase the number of purchases in the web page
        minusbtn.previousElementSibling.innerHTML--
    })
}

// to calculate the total
function total(){
    let s = 0;
//create tables for the qute and unittprice values
var qte = Array.from(document.querySelectorAll(".qute"));
var prices = Array.from(document.querySelectorAll(".unitt-price"));
//calculate the sum
for ( let i = 0 ; i < prices.length ; i++){
    s = s + prices[i].innerHTML * qte[i].innerHTML
}
//write the total in the web page
document.getElementById('total-price').innerHTML = s
}
total()
