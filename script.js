var move = 1
var line = document.getElementById("winline")
var c = 0
var o = 0
function plae(place,item){
    if (item === "circle"){
        
        document.querySelector(place).innerHTML = `<i class="ri-checkbox-blank-circle-line"></i>`
        document.querySelector(place).style.opacity = "100%"
    }
    else {
        document.querySelector(place).innerHTML = `<i class="ri-close-fill"></i>`
        document.querySelector(place).style.opacity = "100%"

    }
}
function disable(){
     document.querySelector(".box1").style.pointerEvents = "none"
     document.querySelector(".box2").style.pointerEvents = "none"
     document.querySelector(".box3").style.pointerEvents = "none"
     document.querySelector(".box4").style.pointerEvents = "none"
     document.querySelector(".box5").style.pointerEvents = "none"
     document.querySelector(".box6").style.pointerEvents = "none"
     document.querySelector(".box7").style.pointerEvents = "none"
     document.querySelector(".box8").style.pointerEvents = "none"
     document.querySelector(".box9").style.pointerEvents = "none"
}

function winning(){
    var circle = `<i class="ri-checkbox-blank-circle-line"></i>`
    var cross = `<i class="ri-close-fill"></i>`
    var b1 = document.querySelector(".box1").innerHTML
    var b2 = document.querySelector(".box2").innerHTML
    var b3 = document.querySelector(".box3").innerHTML
    var b4 = document.querySelector(".box4").innerHTML
    var b5 = document.querySelector(".box5").innerHTML
    var b6 = document.querySelector(".box6").innerHTML
    var b7 = document.querySelector(".box7").innerHTML
    var b8 = document.querySelector(".box8").innerHTML
    var b9 = document.querySelector(".box9").innerHTML
    
    if (b1 === cross && b2 === cross && b3 === cross){
        line.style.height = "400px"
        line.style.width = "8px"
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.left = "66px"
        disable()
        return "c"
    }
    if (b4 === cross && b5 === cross && b6 === cross){
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.left = "206px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"   
    }
    if (b7 === cross && b8 === cross && b9 === cross){
        line.style.opacity = "100"
        line.style.left = "346px"
        line.style.top = "15px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"
    }
    if (b1 === cross && b4 === cross && b7 === cross){
        
        line.style.opacity = "100"
        line.style.top = "-130px"
        line.style.left = "205px"
        line.style.transform = "rotate(90deg)"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"
    }
    if (b2 === cross && b5 === cross && b8 === cross){
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.transform = "rotate(90deg)"
        line.style.left = "205px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"
    }
    if (b3 === cross && b6 === cross && b9 === cross){
        line.style.opacity = "100"
        line.style.transform = "rotate(90deg)"
        line.style.top = "160px"
        line.style.left = "205px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"
    }
    if (b1 === cross && b5 === cross && b9 === cross){
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.transform = "rotate(-45deg)"
        line.style.left = "210px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"
    }
    if (b3 === cross && b5 === cross && b7 === cross){
        line.style.opacity = "100"
        line.style.transform = "rotate(45deg)"
        line.style.top = "15px"
        line.style.left = "210px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "c"
    }
    if (b1 === circle && b2 === circle && b3 === circle){
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.left = "66px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
    }
    if (b4 === circle && b5 === circle && b6 === circle){
        line.style.top = "15px"
        line.style.opacity = "100"
        line.style.left = "206px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"   
    }
    if (b7 === circle && b8 === circle && b9 === circle){
        line.style.opacity = "100"
        line.style.left = "346px"
        line.style.top = "15px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
    }
    if (b1 === circle && b4 === circle && b7 === circle){
        line.style.opacity = "100"
        line.style.transform = "rotate(90deg)"
        line.style.left = "205px"
        line.style.top = "-130px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
    }
    if (b2 === circle && b5 === circle && b8 === circle){
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.transform = "rotate(90deg)"
        line.style.left = "205px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
    }
    if (b3 === circle && b6 === circle && b9 === circle){
        line.style.opacity = "100"
        line.style.top = "160px"
        line.style.transform = "rotate(90deg)"
        line.style.left = "205px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
    }
    if (b1 === circle && b5 === circle && b9 === circle){
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.left = "210px"
        line.style.transform = "rotate(-45deg)"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
    }
    if (b3 === circle && b5 === circle && b7 === circle){
        line.style.transform = "rotate(45deg)"
        line.style.opacity = "100"
        line.style.top = "15px"
        line.style.left = "210px"
        disable()
        line.style.height = "400px"
        line.style.width = "8px"
        return "o"
        
    }
}
function reset(){
    document.querySelector(".box1").style.pointerEvents = "auto"
    document.querySelector(".box2").style.pointerEvents = "auto"
    document.querySelector(".box3").style.pointerEvents = "auto"
    document.querySelector(".box4").style.pointerEvents = "auto"
    document.querySelector(".box5").style.pointerEvents = "auto"
    document.querySelector(".box6").style.pointerEvents = "auto"
    document.querySelector(".box7").style.pointerEvents = "auto"
    document.querySelector(".box8").style.pointerEvents = "auto"
    document.querySelector(".box9").style.pointerEvents = "auto"
    document.querySelector("#pl1").style.backgroundColor = "white"
    document.querySelector("#pl2").style.backgroundColor = "white"
    line.style.opacity = "0"
    document.querySelector(".box1").innerHTML = " "
    document.querySelector(".box2").innerHTML = " "
    document.querySelector(".box3").innerHTML = " "
    document.querySelector(".box4").innerHTML = " "
    document.querySelector(".box5").innerHTML = " "
    document.querySelector(".box6").innerHTML = " "
    document.querySelector(".box7").innerHTML = " "
    document.querySelector(".box8").innerHTML = " "
    document.querySelector(".box9").innerHTML = " "
    }

document.querySelector(".reset").addEventListener("click",function(){
    reset()
})


document.querySelector(".box1").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box1").innerHTML === " "){
        console.log("hello")
        plae(".box1","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box1").innerHTML === " "){
        plae(".box1","l")
        move++
    }
    var x = winning() 
        if (x === "c"){
            c++
            document.querySelector(".scr1").textContent = c
            document.querySelector("#pl1").style.backgroundColor = "green"
            console.log(c)
        }
        else if (x === "o"){
            o++
            document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
    
    
    
})
document.querySelector(".box2").addEventListener("click",function(){
    console.log(document.querySelector(".box2").innerHTML)
    if (move%2 === 0 && document.querySelector(".box2").innerHTML === " " ){
        plae(".box2","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box2").innerHTML === " "){
        plae(".box2","l")
        move++
    }
    var x = winning() 
    console.log(x)
    if (x === "c"){
        c++
        document.querySelector("#pl1").style.backgroundColor = "green"
            document.querySelector(".scr1").textContent = c
            console.log(c)
        }
        else if (x === "o"){
            o++
            document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
        
})
document.querySelector(".box3").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box3").innerHTML === " "){
        plae(".box3","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box3").innerHTML === " "){
        plae(".box3","l")
        move++
    }
    var x = winning() 
    console.log(x)
        if (x === "c"){
            c++
            document.querySelector(".scr1").textContent = c
            document.querySelector("#pl1").style.backgroundColor = "green"
            console.log(c)
        }
        else if (x === "o"){
            o++
            document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
})
document.querySelector(".box4").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box4").innerHTML === " "){
        plae(".box4","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box4").innerHTML === " "){
        plae(".box4","l")
        move++
    }
    var x = winning() 
    console.log(x)
        if (x === "c"){
            c++
            document.querySelector(".scr1").textContent = c
            document.querySelector("#pl1").style.backgroundColor = "green"
            console.log(c)
        }
        else if (x === "o"){
            o++
            document.querySelector(".scr2").textContent = o
            document.querySelector("#pl2").style.backgroundColor = "green"
            console.log(o)
        }
})
document.querySelector(".box5").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box5").innerHTML === " "){
        plae(".box5","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box5").innerHTML === " "){
        plae(".box5","l")
        move++
    }
    var x = winning() 
    console.log(x)
        if (x === "c"){
            c++
            document.querySelector(".scr1").textContent = c
            document.querySelector("#pl1").style.backgroundColor = "green"
            console.log(c)
        }
        else if (x === "o"){
            o++
            document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
})
document.querySelector(".box6").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box6").innerHTML === " "){
        plae(".box6","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box6").innerHTML === " "){
        plae(".box6","l")
        move++
    }
    var x = winning() 
    console.log(x)
    if (x === "c"){
        c++
        document.querySelector("#pl1").style.backgroundColor = "green"
        document.querySelector(".scr1").textContent = c
        console.log(c)
    }
    else if (x === "o"){
        o++
        document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
})
document.querySelector(".box7").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box7").innerHTML === " "){
        plae(".box7","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box7").innerHTML === " "){
        plae(".box7","l")
        move++
    }
    var x = winning() 
    console.log(x)
        if (x === "c"){
            c++
            document.querySelector(".scr1").textContent = c
            document.querySelector("#pl1").style.backgroundColor = "green"
            console.log(c)
        }
        else if (x === "o"){
            o++
            document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
})
document.querySelector(".box8").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box8").innerHTML === " "){
        plae(".box8","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box8").innerHTML === " "){
        plae(".box8","l")
        move++
    }
    var x = winning() 
    console.log(x)
    if (x === "c"){
        c++
        document.querySelector("#pl1").style.backgroundColor = "green"
        document.querySelector(".scr1").textContent = c
        console.log(c)
    }
    else if (x === "o"){
        o++
        document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
})
document.querySelector(".box9").addEventListener("click",function(){
    if (move%2 === 0 && document.querySelector(".box9").innerHTML === " "){
        plae(".box9","circle")
        move++
    }
    else if (move%2 === 1 && document.querySelector(".box9").innerHTML === " "){
        plae(".box9","l")
        move++
    }
    var x = winning() 
    console.log(x,"c")
        if (x === "c"){
            c++
            document.querySelector(".scr1").textContent = c
            document.querySelector("#pl1").style.backgroundColor = "green"
            console.log("")
        }
        else if (x === "o"){
            o++
            document.querySelector("#pl2").style.backgroundColor = "green"
            document.querySelector(".scr2").textContent = o
            console.log(o)
        }
})
