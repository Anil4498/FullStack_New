// anonomus function
var anonomus = function () {
  console.log("print me");
};
anonomus();


// iife function

(() => {
    console.log(
      "An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop."
    );
   })();

   (function(dt){
    console.log(dt.toLocaleTimeString());
    
   })(new Date())
