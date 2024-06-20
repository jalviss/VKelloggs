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

    // validation for the contact us form
    document.getElementById('submit-button').addEventListener('click', () => {
      const form = document.getElementById('contact-us')

      const firstName = document.getElementById('first-name').value
      const lastName = document.getElementById('last-name').value
      const email = document.getElementById('email').value
      const phone = document.getElementById('phone').value

      const productInfo = document.getElementById('product-info')
      const orderStatus = document.getElementById('order-status')
      const shipDel = document.getElementById('ship&del')
      const feedback = document.getElementById('feedback')
      const other = document.getElementById('other')

      const message = document.getElementById('message').value

      if (firstName === "") {
        alert("First name must be filled");
        return;
      } else if (lastName === "") {
        alert("Last name must be filled");
        return;
      } else if (email === "") {
        alert("Email must be filled");
        return;
      } else if (!validateEmail(email)) {
        alert("Email is not valid");
        return; 
      } else if (phone === "") {
        alert("Phone number must be filled");
        return;
      }else if (!validatePhone(phone)) {
        alert("Make sure your phone number is only contained with numbers, more than 10 characters, less than 13 characters, and start with '08', '628', or '+628'");
        return;
      } else if (!productInfo.checked && !orderStatus.checked && !shipDel.checked && !feedback.checked && !other.checked) {
        alert("Nature of inquiry must be selected")
      } else if (message == '') {
        alert("Please fill in you messages");
        return;
      } else {
        alert("Your message will be delivered!");
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

    function validatePhone(phone) {
      const phoneString = phone.toString()

      if (!Number(phone)) {
        return false;
      } else if (!phoneString.startsWith("+628") && !phoneString.startsWith("628") && !phoneString.startsWith("08")) {
        return false;
      } else if (phone.length > 13 || phone.length < 10) {
        return false;
      } else {
        return true;
      }
    }
});