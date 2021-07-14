const signUp = e => {
    let formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        pwd: document.getElementById('pwd').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log(localStorage.getItem('formData'));
    dispData();
    e.preventDefault();
}

function dispData(){
    // console.log(localStorage.getItem('formData'));
    let {fname, lname, email, pwd} = JSON.parse(localStorage.getItem('formData'));
    var output = document.getElementById('output');
    output.innerHTML = `
    <table>
        <tbody>
            <tr>
                <td>First Name</td>
                <td>${fname}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>${lname}</td>
            </tr>
            <tr>
                <td>Email Address</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>${pwd}</td>
            </tr>
        </tbody>
    </table>`;
}
dispData();