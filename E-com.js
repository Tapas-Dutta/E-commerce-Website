let icon = document.querySelector(".icon");
let ul=document.querySelector("ul");

icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})

let shops=document.getElementById("shops");
let reviews=document.getElementById("reviews");
let blogs=document.getElementById("blogs");
let contacts=document.getElementById("contacts");

shops.addEventListener("click",()=>{
    shops.style.color="rgb(4, 250, 250)";
    reviews.style.color="white"
    blogs.style.color="white";
    contacts.style.color="white";

})
reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4, 250, 250)";
    shops.style.color="white"
    blogs.style.color="white";
    contacts.style.color="white";
})
blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4, 250, 250)";
    reviews.style.color="white"
    shops.style.color="white";
    contacts.style.color="white";
})
contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4, 250, 250)";
    reviews.style.color="white"
    blogs.style.color="white";
    shops.style.color="white";
})

//card js

let crd=document.querySelectorAll(".crd");
let itemPage=document.querySelector(".itemPage");
let container=document.querySelector(".container");
let itemImg=document.getElementById("itemImg");
let buyBtn=document.getElementById("buyBtn");
console.log(crd);

    crd.forEach(function(curValue){
        curValue.addEventListener("click",function(){
            itemPage.style.display="flex";
            container.style.display="none"

            let imgSrc=curValue.firstElementChild.src;
            itemImg.src=imgSrc;

            buyBtn.addEventListener("click",function(){
                document.querySelector(".buyPage").style.display="block";
                document.querySelector(".buyText").innerHTML=`
                <h3>Ente Details :</h3>
            <input type="text" placeholder="Enter Your Name:" id="name"><br>
            <input type="text" placeholder="Enter Your Address:" id="address"><br>
            <input type="text" placeholder="Enter Your Mobile Number:" id="num"><br>
            <h3>Payment Option :</h3>
            <select name="" id="">
                <option value="Google-Pay">Google-Pay</option>
                <option value="Phone-Pay">Phone-Pay</option>
                <option value="Bharat-Pay">Bharat-Pay</option>
                <option value="Cash-on-Delivery">Cash-on-Delivery</option>
            </select><br>
            <button>Submit</button>`

                let button=document.querySelector("button");
                button.innerText="Submit";
                buyText.appendChild(button);

                button.addEventListener("click",function(){
                    let name= document.getElementById("name");
                    if(name.value=="" && address.value=="" && num.value==""){
                        alert("Please Enter Details.")
                    }
                    else{
                        alert("Your Response Recorded.")
                        document.querySelector(".buyPage").style.display="none";
                    }
                })

                let cross=document.querySelector(".cross");
                cross.addEventListener("click",function() {
                    document.querySelector(".buyPage").style.display="none";
                }) 
            })
        })
    })

    //connect
    function connect(params) {
        let names=document.getElementById("names");
        let num=document.getElementById("number");
        if(names.value=="" && num.value==""){
            alert("Fill Details")
        }else{
            alert("Thanks for connecting.")
        }
    }

