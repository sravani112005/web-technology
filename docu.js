document.getElementById("registrationform").addEventListener("submit",
    function(event){
        event.preventDefault();
        let isValid=true

        let name=document.getElementById("name").value;
        let namePattern=/^[A-Za-z]+$/;
        if(!namePattern.test(name)){
            document.getElementById("nameerror").innerText="Name must contain only alphabets and no spaces."
            isValid=false
        }else{
            document.getElementById("nameerror").innerText = "";
        }

        let age=document.getElementById("age").value;
        if(age<18 || age>60){
            document.getElementById("ageerror").innerText="Age must be between 18 and 60";
            isValid=false;
        }else{
            document.getElementById("ageerror").innerText=""
        }

        let email=document.getElementById("mail").value;
        let emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailPattern.test(email)){
            document.getElementById("emailerror").innerText="Enter a valid email address."
            isValid=false;
        }else{
            document.getElementById("emailerror").innerText = "";
        }

        let pin=document.getElementById("pin").value;
        let pinPattern= /^\d{6}$/;
        if(!pinPattern.test(pin)){
            document.getElementById("pinerror").innerText="Pin code must be exactly 6 digits."
            isValid=false;
        }else{
            document.getElementById("pinerror").innerText = "";
        }

        let password=document.getElementById("password").value;
        let passwordPattern= /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if(!passwordPattern.test(password)){
            document.getElementById("passworderror").innerText="Enter valid password"
            isValid=false;
        }else{
            document.getElementById("passworderror").innerText ="";
        }

        if(isValid){
            alert("Registration successful!");
            document.getElementById("registrationform").reset();
        }
    }
)