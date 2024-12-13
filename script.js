$(document).ready(function () {  
    $('#sign-up1').click(function() {
        // Redirect to the about.html page
        window.location.href = 'login.html';
    });

    



    $('#sign-in').click(function(){
        let regEx = /^[a-zA-Z0-9._+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/
        let input = $('#email').val()
        let err = $('#err')
    
        if(!input){
            err.text('Email input cannot be empty').css('color','red')
        } else if(!regEx.test(input)){
            err.text('invalid email format').css('color','red')
        } else{
            err.text('valid email').css('color','green')
        }
    })

    $('#sign-in').click(function(){
        let input1 = $('#Confirm').val()
        let err1 = $('#err1')
    
        if(!input1){
            err1.text('confirm password').css('color','red')
        } else{
            err1.text('valid').css('color','green')
        }
    })
    $('#sign-in').click(function(){
        let input2 = $('#password').val()
        let err2 = $('#err2')
    
        if(input2 <6){
            err2.text('password cannot be less than 6').css('color','red')
        } else{
            err2.text('valid').css('color','green')
        }
    })
    

    $('#sign-in').click(function() {
        // Redirect to the about.html page
        window.location.href = 'sign.html';
    });
    $('#login').click(function() {
        // Redirect to the about.html page
        window.location.href = 'home.html';
    });

   


})