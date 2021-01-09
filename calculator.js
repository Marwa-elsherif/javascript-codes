
var firstNum;

   function EnterNumber(num)
   {
     firstNum =parseInt(num) ;
    
    document.getElementById('ans').value = document.getElementById('ans').value +firstNum;
    
   }
   function EnterOperator(oper)
   {
       var operator = oper;
       document.getElementById('ans').value = document.getElementById('ans').value +operator;
       
   }
   function EnterEqual()
   {
        
        document.getElementById('ans').value = eval(document.getElementById('ans').value);
       
   }
//function to clear the calculator screen
   function EnterClear()
   { 

        document.getElementById("ans").value = "";
        
   }