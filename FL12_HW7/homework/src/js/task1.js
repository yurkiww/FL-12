let myTrue = true;

let userPass = 'UserPass';
let userMail = 'user@gmail.com';

let adminPass = 'AdminPass';
let adminMail = 'admin@gmail.com';


while (myTrue) {

    let email = prompt('Enter your email');
    if (email === '') {
        alert('Canceled!')
    } else if (email.length < 5) {
        alert("I don't know any emails having name length less than 5 symbols!")
    } else if (email === userMail || email === adminMail) {
        let currentPassword = prompt('Enter password.')
        if (email === userMail && currentPassword === userPass ||
            email === adminMail && currentPassword === adminPass) {
            let decision = confirm('Do you want to change your password?')
            if (decision) {
                let passwordValidation = prompt('Enter you old password')
                if (passwordValidation === currentPassword) {
                    let newPassword1 = prompt('Enter new password!')
                    if (newPassword1.length < 6) {
                        alert('It’s too short password. Sorry.')
                    } else {
                        let newPassword2 = prompt('Enter it again!')
                        if (newPassword1 === newPassword2) {
                            alert('You have successfully changed your password.')
                            console.log('yep')
                            if (email === userMail) {
                                userPass = newPassword2;
                            } else {
                                adminPass = newPassword2
                            }
                        } else {
                            alert('You wrote the wrong password.')
                        }
                    }

                } else {
                    alert('You entered a wrong password')
                }
            } else {
                alert('You have failed the change.')
            }
        } else {
            alert('Wrong password')
        }
    } else {
        alert("I don't know you")
    }
}