// - - - - - - - - - - - - - - - - Email Section - - - - - - - - - - - - - - -
window.addEventListener('load', (event) => {
  function sendEmail() {
      // Get form elements
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      // Validation
      let isValid = true;

      if (name.value.trim() === '') {
          name.classList.add('error');
          isValid = false;
      } else {
          name.classList.remove('error');
      }

      if (email.value.trim() === '') {
          email.classList.add('error');
          isValid = false;
      } else {
          email.classList.remove('error');
      }

      if (isValid) {
          const mailtoLink = `mailto:2024natijati@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent("اسم المرسل: " + name.value + "\n\nالرسالة:\n" + message.value)}`;
          window.location.href = mailtoLink;
      }
  }

  // Attach the function to the button
  document.getElementById('sendButton').addEventListener('click', sendEmail);
});


document.querySelector('.calculate-button-header').addEventListener('click', function(){
    window.location.href = '../pages/calculating-type.html';
  });
