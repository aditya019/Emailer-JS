const nodemailer = require('nodemailer');
const prompt = require('prompt-sync')({sigint: true});

const emailer = async (userEmail, userPass, emailService) => {
    let transporter = nodemailer.createTransport({
        service: emailService,
        auth: {
            user: userEmail,
            pass: userPass
        }
    });

    const emailTo = prompt("Enter the mail address you want to send email to : ");
    const subject = prompt("Enter the Subject of the mail : ");
    const text = prompt("Enter the text of the mail : ");

    let mailOptions = {
        from: userEmail,
        to: emailTo,
        subject: subject,
        text: text
    }

    await transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Email Sent : " + info.response );
        }
    })
}

console.log('Welcome To Emailer-JS');
const userEmail = prompt("Enter your Email : ");
const userPass = prompt("Enter your password : ");
const emailService = prompt('Enter the name of your email service (eg: gmail)');
console.log(`Your email is ${userEmail}`);
emailer(userEmail, userPass, emailService);