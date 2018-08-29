var q=0;
var text = "You wake up to find yourself locked in a closed room.A time bomb is live in this room.There is only one way to escape.The door opens on entering a code.You need to find the secret button to display the message and decipher the code.But you have only 90 seconds!!!"; 
var word = text.split("");
var i = 0;
var interval = setInterval(writeText, 30 );
function writeText() {
    var p = document.getElementsByTagName("b")[0];
    if (i < word.length) {
        p.innerHTML += word[i];
        i++;
    } else {
        clearInterval(interval);
         
        document.getElementById('str').style.display="block";
    }
}
function start()
{
   document.getElementById('str').style.display="none";
   var p = document.getElementsByTagName("b")[0];
   p.style.display ="none";
   
   document.getElementById("im").style.display="inline";
   
  

    var top = Math.random()*140;

    var left = Math.random()*190;

    

    document.getElementById("bt").style.top =top+"px";

    document.getElementById("bt").style.left =left+"px";

    

    

    document.getElementById("bt").style.display="inline";
        

    
}
function ap()
{
   document.getElementById("im").style.display="none";
document.getElementById("bt").style.display="none";
document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/c/c4/Backlit_keyboard.jpg')";
 q=Math.floor(Math.random()*100);
                if(q%2==0)
                {
                   document.getElementById("in").style.display="inline";
  
  document.getElementById("list").style.display="inline";
  document.getElementById("en").style.display="inline";
  document.getElementById("in1").style.display="none";
  }
  
  else
  {
      document.getElementById("in1").style.display="inline";
  document.getElementById("in").style.display="none";
  document.getElementById("list").style.display="inline";
  document.getElementById("en").style.display="inline";
  }
  }
  
  function ch()
  { 
      
      list.value=list.value.toLowerCase();
      if(q%2==0)
      {
      
      if(list.value=="hack")
      
    { 
       document.write('<span style ="color:teal;font-size: 25px">Congrats you survived.You are so happy that you wish to upvote this code!!!<br>')
    }
    
       else
       {document.getElementById("el").style.display="inline";
       navigator.vibrate(500);
       }
       }
       
       else if(q%2!=0)
       {
           
  if(list.value=="solo")
      
    { 
       document.write('<span style ="color:teal;font-size: 25px">Congrats you survived.You are so happy that you wish to upvote this code!!!<br>')
    }
    
       else
       {document.getElementById("el").style.display="inline";
       navigator.vibrate(500);
       }
  
  
       }
       
    
}
  
function clearInput(element){ element.value=""; }
