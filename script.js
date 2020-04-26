$(document).ready(function() {
    
       
    var point = 0;
    var totalpoint = 0;
    var timer = 120;
    var qnumber = 0;

  
     var questable = [
        ["Q1", "A1", "B1", "C1", "D1"],
        ["Q2", "A2", "B2", "C2", "D2"],
        ["Q3", "A3", "B3", "C3", "D3"],
        ["Q4", "A4", "B4", "C4", "D4"],
        ["Q5", "A5", "B5", "C5", "D5"],
    ];
    var anstable = [
        [0,1,0,0,0],
        [0,0,1,0,0],
        [0,0,0,1,0],
        [0,1,0,0,0],
        [0,0,1,0,0]
    ];
    
    //function to populate quiz
    function populatequiz(){
        
        $(".ques").empty();  
        
        var quizbttn = document.createElement("button");
        //create quiz 
        function repop(){
        for (i=0; i< questable.length; i++ ){
            
            quizbttn.setAttribute("value", i);
            quizbttn.setAttribute("id", "answerb");
            if (i===0){
            $(".ques").append("<div>" + questable[qnumber][i] + "</div>");        
            } else {
            $(".ques").append(`<div><button class='btn btn-secondary' value=${i} id='answerb'>${questable[qnumber][i]}</button></div>`); 
            }
        }
    };
        //end creating quiz
        repop();
    };



//On Start, populate quiz and replace things
$(".start").on("click", function(){
    setInterval(function(){
        
        if (timer>0){
        $("#Timer").empty();
        $("#Timer").append(`Time left: ${timer}`);
        timer -= 1;
        } else {
            clearInterval();
            $("#Timer").empty();
            $("#Timer").append(`Time is up!`);
          }
    }, 1000);
    
        
        // populatequiz();  
        if (qnumber<questable.length){
            
            populatequiz();
            
        } else {
            $(".ques").append("END QUIZ");        
        }
                    
//start btn onclick

$(".btn").on("click", function(){
    
    var pick = anstable[qnumber][$(this).val()];
    console.log(pick);
    
    if (pick === 0){     
        $(".prompt").empty();           
        $(".prompt").append("WRONG");
        
                //Store Totalpoint in local storage
                localStorage.point = totalpoint - 5;
                $(".nav-link").empty();
                $(".nav-link").append("Total Score :" + localStorage.point);
        console.log("wrong");
    } else {
        $(".prompt").empty();           
        $(".prompt").append("CORRECT");
                //Store Totalpoint in local storage
                localStorage.point = totalpoint + 10;
                $(".nav-link").empty();
                $(".nav-link").append("Total Score :" + localStorage.point);
        console.log("correct");
    }
    qnumber++;
    populatequiz();

    
    });
    
        //end btn onclick
        
        

    })
        
       
//end of ready function
})


    
    // console.log(localStorage.point);
    



