var selectors=document.querySelectorAll(".drum");
for(i=0;i<selectors.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
    
}
function handleclick(){
    var buttonhtml=this.innerHTML;
    if(buttonhtml==="w"){
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(buttonhtml==="a"){
        var hey=new Audio("sounds/kick-bass.mp3");
        hey.play();
    }
    else if(buttonhtml==="s"){
        var next=new Audio("sounds/snare.mp3");
        next.play();
    }
    else if(buttonhtml==="d"){
        var what=new Audio("sounds/tom-1.mp3");
        what.play();
    }
    else if(buttonhtml==="j"){
        var di=new Audio("sounds/tom-2.mp3");
        di.play();
    }
    else if(buttonhtml==="k"){
        var ku=new Audio("sounds/tom-3.mp3");
        ku.play();
    }
    else{
        var ke=new Audio("sounds/tom-4.mp3");
        ke.play();
    }


}