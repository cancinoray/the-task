const name = localStorage.getItem('fullName');
const email = localStorage.getItem('email');
const birthDate = localStorage.getItem('birthDate');
const color = localStorage.getItem('color');
const today = localStorage.getItem('today');
const sendEmail = document.getElementById('remail')

// if(birthDate){
//     console.log('birthDate exists');
// }else{
//     console.log('birthDate is not found');
// }

const fbirthDate = birthDate.split("-").reverse().join("/");

     //collect input from HTML form and convert into date format  
     //birthDate from localStorage and new Date() function

    //calculate the difference of dates
    //converting it dates to millisecond  
const diffInMillisecond = new Date() - new Date(birthDate);
// console.log('diffInMillisecond', diffInMillisecond)

 //convert the difference in milliseconds and store in day and year variable 
const year_age = Math.floor(diffInMillisecond / 31536000000);  
const day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);
const month_age = Math.floor(day_age/30); 

    // console.log('year_age' , year_age );
    // console.log('day_age' , day_age )
    // console.log('month_age' , month_age )
    // `<a href="${`mailto:${email}?subject=Subject&body=message%20goes%20here`}">${email}</a>`;



sendEmail.addEventListener('click', () => {
    console.log('Click!');
    window.open(`mailto:${email}`);

})

    

document.getElementById('rtoday').innerText = today;
document.getElementById('rname').innerText = name;
document.getElementById('remail').innerHTML =  email;
document.getElementById('rbirthDate').innerText = fbirthDate;
document.getElementById('rname').innerText = name;
document.getElementById('rcolor').innerText = color;
document.getElementById('rage').innerText = `${year_age} years and ${month_age} months`;
document.getElementById("rcolorPreview").style.background = color;
