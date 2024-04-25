

let data = JSON.parse(localStorage.getItem('data'));
console.log(data)
        let nextBtn = document.getElementById('next-btn1');
        let backBtn = document.getElementById('back');
        let hobbies;
        let values = [];//to hold hobbies value in array
        let qualification = document.getElementById('qualification');
        hobbies = document.getElementsByName('hobbies');
        let hobbiesError = document.getElementById('hobbiesError')
        let dropdownError = document.getElementById('dropdownError')
        backBtn.addEventListener('click', () => {

            window.location.href = "./personalInfo.html";
        })
        nextBtn.addEventListener('click', () => {
            let qualification = document.getElementById('qualification').value;
            hobbies = document.getElementsByName('hobbies');
            if (qualificationValidator(qualification, dropdownError) && hobbiesValidator(hobbies, hobbiesError, values)) {
                function sendData() {
                    data["qualification"]=qualification;
                    data["hobbies"]=values;
                    console.log(values)
                    localStorage.setItem('data', JSON.stringify(data));
                }
                sendData()
                window.location.href = "./passwordChecker.html";
            }
            else {
                console.log('check input fields')
            }
        });

        //*****************functions*******// 
        function qualificationValidator(qualification, dropdownError) {
            if (qualification == '') {
                dropdownError.innerHTML = 'Please choose  qualification.';
                dropdownError.style.display = 'block'
                return false
            }
            else {
                dropdownError.innerHTML = '';
                dropdownError.style.display = 'none'
                return true
            }
        }
        function hobbiesValidator(hobbies, hobbiesError, values) {
            let anychecked = false;
            for (let i = 0; i < hobbies.length; i++) {
                if (hobbies[i].checked == true) {
                    values.push(hobbies[i].value)
                    anychecked = true
                }
            }
            if (!anychecked) {
                hobbiesError.innerHTML = 'Please choose one option.';
                hobbiesError.style.display = 'block'
                return false;
            }
            else {
                hobbiesError.innerHTML = '';
                hobbiesError.style.display = 'none'
                return true;
            }

        }

        const storedUserData = localStorage.getItem('data')

if (storedUserData) {
  const userData = JSON.parse(storedUserData)
  console.log(userData)
  // You can use userData here..
  if(userData.qualification && userData.hobbies){
    qualification.value=userData.qualification;
    for(let i=0;i < hobbies.length;i++){
        // console.log(hobbies[i])
        // 
        for(let j=0;j<userData.hobbies.length;j++){
            // console.log(userData.hobbies[i])
            if(hobbies[i].value==userData.hobbies[j]){
                    // console.log('matched')
                    hobbies[i].checked=true
                    // break;
                }
     }
    }
}
     
} else {
  console.log('User data not found in local storage')
}
// window.addEventListener('load', () => {
//     // Clear local storage
//     localStorage.clear();
//     console.log('Local storage cleared on window load.');
//     window.location.href = "./personalInfo.html";
// });