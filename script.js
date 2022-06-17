const btn = document.getElementById('button');



const ClearFields =() => {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("date").value = "";
    document.getElementById("color").value = "";
}


btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form


    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthDate = document.getElementById("birthDate").value;
    const color = document.getElementById("color").value;

    const today = (new Date()).toLocaleDateString('en-GB')

    localStorage.setItem("fullName", name);
    localStorage.setItem("email", email);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("color", color);
    localStorage.setItem("today", today);
   

    // ClearFields();

    document.getElementById('title').innerText = 'Thank you for telling us about yourself.' ;
    document.getElementById('title2').innerText = 'Your results have been saved';
    document.getElementById('title3').innerHTML = 'You can view the result here:' + '<a href="./result.html">Result</a>';


    form.style.display = 'none';
  }
});

