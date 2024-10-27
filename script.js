document.getElementById('userForm').addEventListener('submit',function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const cccd = document.getElementById('cccd').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const sex = document.getElementById('sex').value;
    const note = document.getElementById('note').value;
    const messageElement = document.getElementById('message');

    // Kiểm tra tính hợp lệ của email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Sending email...';

        // Gửi email thông qua EmailJS
        emailjs.send("service_szvpo36","template_qr2uxcd",{
            fullName: fullName,
            cccd: cccd,
            email: email,
            phone: phone,
            sex: sex,
            note: note,
        })
            .then(function (response) {
                console.log('SUCCESS!',response.status,response.text);
                messageElement.textContent = 'Email sent successfully!';
            },function (error) {
                console.log('FAILED...',error);
                messageElement.textContent = 'Failed to send email.';
            });

    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Invalid email address. Please enter a valid email.';
    }
});
