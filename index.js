
  let m=0,n=125
function checkKey(e) {
    e = e || window.event;
    console.log(m)
    console.log(n)
    //n-> 1, 249
    if(m>=348){
      alert("You Win")
      window.location.reload()
    }
    if(m>-1 && m<352 && n>-1 && n<252){
      if (e.keyCode == '38') {
              if(m<349){
          document.getElementById("ball").style.bottom = `${m+=2}px`
        }
          console.log("UP")
          // up arrow
      }
      else if (e.keyCode == '40' && m>0) {
          // down arrow
          console.log("Down")
          if(m>2){
            document.getElementById("ball").style.bottom = `${m-=2}px`
          }
      }
      else if (e.keyCode == '37') {
         // left arrow
         console.log("LEft")
         if(n<248){
          document.getElementById("ball").style.right = `${n+=2}px`
         }
      }
      else if (e.keyCode == '39') {
         // right arrow
         console.log("Right");
         if(n>2){
          document.getElementById("ball").style.right = `${n-=2}px`
         }         
      }
    }
}
let x=10.00
document.getElementById("h").addEventListener("click",()=>{
  document.getElementById("Rules").style.display="none"
  document.getElementById("allN").style.display="block"
  letters()
  
  console.log("Alak")

  setInterval(()=>{
    if(x>0){
      var cx= setInterval(()=>{
        document.getElementById("allN").style.display="none"
        document.getElementById("test").style.display="none"
        document.onkeydown = checkKey;
        if(x>0){
          x=(x-0.01).toFixed(2)
        }else{
          document.getElementById("test").style.display="block" 
          alert("No Time Left \n Try again later ")
          window.location.reload()
        }
        document.getElementById("v").textContent=`${x}`
    //  console.log(x)
    },10)
    setTimeout(()=>{clearInterval(cx);
      document.onkeydown = checkLKey;
      function checkLKey(e){
        if(e.keyCode=="37" || e.keyCode=="38" || e.keyCode=="39" || e.keyCode== "40"){
          document.getElementById("exp").style.display="block"
          alert("You lose")
          window.location.reload()
        }
      }
      document.getElementById("test").style.display="block" 
   },((Math.random() * (3 - 2) + 2).toFixed(2))*1000)
    } else{
      document.getElementById("test").style.display="block" 
      alert("No Time Left \n Try again later ")
      window.location.reload()
      clearInterval()
    }
  },5000)
})
function letters(){
  let A=["Ready", "Get", "Set","Start Now"]
  let i=0
  const ns=setInterval(()=>{
   document.getElementById("an1").textContent=A[i++]
   console.log("AQAA")
  },1000)
  setTimeout(()=>{
    clearInterval(ns)
  },5000)
}

