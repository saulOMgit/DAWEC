window.onload = function(){
    const ctx = document.querySelector("canvas").getContext("2d");

  

        
       ctx.beginPath();
       ctx.lineWidth=2;
       
       ctx.strokeStyle="red";
       ctx.moveTo(20,120);
       ctx.lineTo(100,120);
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.strokeStyle="brown";
       ctx.moveTo(50,120);
       ctx.lineTo(50,80);
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.strokeStyle="yellow";
       ctx.moveTo(50,80);
       
       
       


}