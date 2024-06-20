document.addEventListener('DOMContentLoaded', () => {
    // validation for newsletter in the footer
    document.getElementById('subscribe').addEventListener('click', () => {
      const form = document.getElementById('newsletter');
      const email = document.getElementById('email-newsletter').value;
  
      if (email === "") {
        alert("Email must be filled");
        return false;
      } else if (!validateEmail(email)) {
        alert("Email is not valid");
        return false;
      } else {
        alert("Subscribe success. We will send you weekly updates with the newsletter.");
        form.submit();
      }
    });
  
    function validateEmail(email) {
      if (email.startsWith("@") || email.startsWith(".")) {
        return false;
      } else if (email.endsWith("@") || email.endsWith(".")) {
        return false;
      } else if (email.indexOf("@.") > -1 || email.indexOf(".@") > -1) {
        return false;
      } else if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
        return false;
      } else {
        return true;
      }
    }
});