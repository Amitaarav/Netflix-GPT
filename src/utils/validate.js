export const checkValidData = (email, password,name) => {
    if (!validateEmail(email)) {
        return " Email is not valid";
    }
    
    if (!validatePassword(password)) {
        return " Password is not valid";
    }

    if(!validateName(name)){
        return " Name is not valid";
    }
    return "";
};

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const validatePassword = (password) => {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return regex.test(password);
};
const validateName = (name) => {
    var regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
}