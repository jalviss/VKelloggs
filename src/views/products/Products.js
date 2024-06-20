document.addEventListener("DOMContentLoaded", () => {
  // validation for newsletter in the footer
  document.getElementById("subscribe").addEventListener("click", () => {
    const form = document.getElementById("newsletter");
    const email = document.getElementById("email-newsletter").value;

    if (email === "") {
      alert("Email must be filled");
      return false;
    } else if (!validateEmail(email)) {
      alert("Email is not valid");
      return false;
    } else {
      alert(
        "Subscribe success. We will send you weekly updates with the newsletter."
      );
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


  //for tab hover styling / interactive (kids)
  const kidsToggleButton = document.getElementById('kids-toggle-button');
  const kidsToggleLabel = document.getElementById('kids-toggle');

  kidsToggleLabel.addEventListener('mouseover', () => {
      if (document.getElementById('adult-product-input').checked) {
          kidsToggleButton.classList.add('toggle-hover');
      }
      else {
        kidsToggleButton.classList.remove('toggle-hover');
      }
  });

  kidsToggleLabel.addEventListener('mouseout', () => {
      kidsToggleButton.classList.remove('toggle-hover');
  });

  //for tab hover styling / interactive (adult)
  const adultsToggleButton = document.getElementById('adults-toggle-button');
  const adultsToggleLabel = document.getElementById('adults-toggle');

  adultsToggleLabel.addEventListener('mouseover', () => {
      if (document.getElementById('kids-product-input').checked) {
          adultsToggleButton.classList.add('toggle-hover');
      }
      else {
        adultsToggleButton.classList.remove('toggle-hover');
      }
  });

  adultsToggleLabel.addEventListener('mouseout', () => {
      adultsToggleButton.classList.remove('toggle-hover');
  });

  // display kids product
  document.getElementById("kids-product-input").addEventListener("click", () => {
      if (document.getElementById("kids-product-input").checked) {
        console.log("masuk kids");

        //display product
        document.getElementById("adult-product").style.display = "none";
        document.getElementById("kids-product").style.display = "flex";

        //adult tab
        document.getElementById("adults-toggle-button").style.cssText = `
          background-color: #30455D;
          border-radius: 10px 10px 0 0;
          box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2);
          transition: 0.3s ease;
          color: white;
        `;

        //kids tab
        document.getElementById("kids-toggle-button").style.cssText = `
          border-radius: 10px 10px 0 0;
          background-color: #EAF0F7;
          box-shadow: 0 -10px 15px rgba(0, 0, 0, 0.2);
          color: #30455D;
          transition: 0.3s ease;
          z-index: 4;
        `;
      }
    });

  // display adult product
  document.getElementById("adult-product-input").addEventListener("click", () => {
      if (document.getElementById("adult-product-input").checked) {
        console.log("masuk kids");

        //display product
        document.getElementById("kids-product").style.display = "none";
        document.getElementById("adult-product").style.display = "flex";

        //adult tab
        document.getElementById("kids-toggle-button").style.cssText = `
          background-color: #30455D;
          border-radius: 10px 10px 0 0;
          box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2);
          transition: 0.3s ease;
          color: white;
        `;

        //kids tab
        document.getElementById("adults-toggle-button").style.cssText = `
          border-radius: 10px 10px 0 0;
          background-color: #EAF0F7;
          box-shadow: 0 -10px 15px rgba(0, 0, 0, 0.2);
          color: #30455D;
          transition: 0.3s ease;
          z-index: 4;
        `;
      }
    });
});
