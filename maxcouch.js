/*










let menuItems = ["home","pages","courses","event"]


for(let i = 0; i < menuItems.length; i++ ){

document.querySelectorAll(".navbar-item")[i].innerHTML="<a>"  + menuItems[i]+ "</a>"

}

function myFunc1(){

// baraye pak kardan class
    document.querySelector("#home").classList.remove("active");
// baraye ezafe kardan
    document.querySelector("#pages").classList.add("active");



}

function myFunc(){

    // baraye pak kardan class
        document.querySelector("#home").classList.add("active");
    // baraye ezafe kardan
        document.querySelector("#pages").classList.remove("active");
    
    }
    */

/*
    if ( 5 > 6){
        console.log(false)

}else if( 5 > 7) { 

    console.log(true)

}else {
    console.log("nemidonam")
}

*/

/*
let hesam = new Date().getDay()
    switch (hesam){
        case 0:
        console.log("yekshanbe")
        break;
}
*/

/*
let hesam

    for(hesam=0; hesam<3; hesam++){
        if(hesam==0){
            console.log("zero")
        }else if(hesam==1){
            console.log("one")
        }else if(hesam==2){
            console.log("two")
        }



        switch (hesam) {
            case 0:
                console.log("zero")
                break;
            case 1:
                console.log("one")
                break;
                case 2:
                    console.log("two")
                    break;
        }
    } 
*/
let amir=["one","two","three","four","five","six"]
let hesam =[Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1)]

    switch(hesam[0]) {
        case 1:
            document.getElementById("tas1").innerHTML=amir[0]
            break;
            case 2:
            document.getElementById("tas1").innerHTML=amir[1]
            break;
                case 3:
                document.getElementById("tas1").innerHTML=amir[2]
                break;
                case 4:
                document.getElementById("tas1").innerHTML=amir[3]
                break;
                case 5:
                document.getElementById("tas1").innerHTML=amir[4]
                break;
                case 6:
                document.getElementById("tas1").innerHTML=amir[5]
                break;    

    }
    switch(hesam[1]) {
        case 1:
            document.getElementById("tas2").innerHTML=amir[0]
            break;
            case 2:
            document.getElementById("tas2").innerHTML=amir[1]
            break;
            case 3:
            document.getElementById("tas2").innerHTML=amir[2]
            break;
            case 4:
            document.getElementById("tas2").innerHTML=amir[3]
            break;
            case 5:
            document.getElementById("tas2").innerHTML=amir[4]
            break;
            case 6:
            document.getElementById("tas2").innerHTML=amir[5]
            break;    
    }

    console.log(hesam[0])
    console.log(hesam[1])






