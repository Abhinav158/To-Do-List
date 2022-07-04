//jshint esversion:6
//Get the current date and export it 
exports.getDate =  function (){

    const today = new Date(); //get the current date using JS 
    const options = {
            weekday: "long", 
            day: "numeric", 
            month: "long", 
    };
    return today.toLocaleDateString("en-US", options);
   
}
//exports is shorthand notation for module.exports
exports.getDay = function (){

    const today = new Date(); //get the current date using JS 
    const options = {
            weekday: "long"            
    };
    return today.toLocaleDateString("en-US", options);
    
}


