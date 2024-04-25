let submitBtn = document.getElementById('next-btn');
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let phoneError = document.getElementById('phoneError');
let genderError = document.getElementById('genderError');
let gender;
let radio;
let data = {}; // Declare and initialize data object
let anyradio = false;
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let mobileNumber = document.getElementById('mobileNumber');
submitBtn.addEventListener('click', () => {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;

    if (fullNameValidator(fullName, nameError) && emailVaildator(email, emailError) && phoneValidator(mobileNumber, phoneError) && findselecd()) {
        function sendData() {
            if (localStorage.getItem("data")) {
                let data = JSON.parse(localStorage.getItem('data'));
                data['fullname'] = fullName;
                data['email'] = email;
                data['mobilenumber'] = mobileNumber;
                for(let i=0;i < gender.length;i++){
                    if (gender[i].checked == true) {
                        data['gender'] =gender[i].value;
                    }
                }
                localStorage.setItem('data', JSON.stringify(data));
            }

            else {
                for(let i=0;i < gender.length;i++){
        
                    if (gender[i].checked == true) {
                        radio =gender[i].value;
                    }
                }
                data = { fullname: fullName, email: email, mobilenumber: mobileNumber, gender: radio}
                localStorage.setItem('data', JSON.stringify(data));

                console.log(data)
            }
        }
        sendData()
        window.location.href = "./EducationDetails.html";
    }
    else {
        console.log('please checkinput fiels');
    } 
});
/****functions  */
function fullNameValidator(fullName, nameError) {
    if (fullName == '' || fullName.trim() == '') {
        nameError.innerHTML = "this field is required";
        nameError.style.display = 'block';
        return false
    }
    else if (fullName.length < 8) {
        nameError.innerHTML = 'length should be of 8 character';
        nameError.style.display = 'block';
        return false

    }
    else {
        nameError.innerHTML = '';
        nameError.style.display = 'none';
        return true
    }
}
function emailVaildator(email, emailError) {
    if (email == '' || email.trim() == '') {
        emailError.innerHTML = "this field is required"
        emailError.style.display = 'block';
        return false
    }

    else if (!regex.test(email)) {
        emailError.innerHTML = 'invaild format'
        emailError.style.display = 'block';
        return false

    }
    else {
        emailError.innerHTML = '';
        emailError.style.display = 'none';
        return true
    }
}
function phoneValidator(mobileNumber, phoneError) {
    if (mobileNumber == '' || mobileNumber.trim() == '') {
        phoneError.innerHTML = "this field is required"
        phoneError.style.display = 'block';
        return false
    }

    else if (!Number.isInteger(Number(mobileNumber))) {
        phoneError.innerHTML = 'number should be integer'
        phoneError.style.display = 'block';
        return false
    }
    else {
        phoneError.innerHTML = '';
        phoneError.style.display = 'none';
        return true
    }
}


let findselecd = () => {
    gender = document.querySelectorAll("input[name='gender']");
    for(let i=0;i < gender.length;i++){
    if (gender[i].checked == true) {
        anyradio = true
        break;

    }
}

    if (!anyradio) {
        genderError.innerHTML = 'Please choose your gender.';
        genderError.style.display = 'block'
        return false;
    }
    else {
        genderError.innerHTML = '';
        genderError.style.display = 'none'
        return true
    }

}



const storedUserData = localStorage.getItem('data')
// console.log(storedUserData)

if (storedUserData) {
const userData = JSON.parse(storedUserData)
console.log(userData)
// You can use userData here...
fullName.value=userData.fullname;
email.value=userData.email;
mobileNumber.value=userData.mobilenumber;
gender = document.querySelectorAll("input[name='gender']");
     for(let i=0;i < gender.length;i++){
        if(gender[i].value==userData.gender){
            gender[i].checked=true
             anyradio = true;
        }
}
} else {
console.log('User data not found in local storage')
}

// window.addEventListener('load', () => {
//     // Clear local storage
//     localStorage.clear();
//     console.log('Local storage cleared on window load.');
// });

