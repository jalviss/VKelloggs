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
    };

    // for toggle snack recipe
    document.getElementById("snack-input").addEventListener("click", () => {      
      if( document.getElementById('snack-input').checked ) {
        console.log("masuk kids");

        //display recipe
        document.getElementById("breakfast-recipe").style.display = "none";
        document.getElementById("dessert-recipe").style.display = "none";
        document.getElementById("snack-recipe").style.display = "flex";
        
        //display toggle
        document.getElementById("breakfast-toggle").style.display = "flex";
        document.getElementById("dessert-toggle").style.display = "flex";
        document.getElementById("snack-toggle").style.display = "none";
        
        //header
        document.getElementById("recipe-title").innerHTML = "Snack Recipes"
        document.getElementById("recipe-subtitle").innerHTML = "Perfect Between Meals"
      }
      
    });

    //for toggle breakfast recipe
    document.getElementById("breakfast-input").addEventListener("click", () => {      
      if( document.getElementById('breakfast-input').checked ) {
        console.log("masuk kids");

        //display recipe
        document.getElementById("breakfast-recipe").style.display = "flex";
        document.getElementById("dessert-recipe").style.display = "none";
        document.getElementById("snack-recipe").style.display = "none";
        
        //display toggle
        document.getElementById("breakfast-toggle").style.display = "none";
        document.getElementById("dessert-toggle").style.display = "flex";
        document.getElementById("snack-toggle").style.display = "flex";
        
        //header
        document.getElementById("recipe-title").innerHTML = "Breakfast Recipes"
        document.getElementById("recipe-subtitle").innerHTML = "Start Your Day Right"
      }
      
    });

    //for toggle dessert recipe
    document.getElementById("dessert-input").addEventListener("click", () => {      
      if( document.getElementById('dessert-input').checked ) {
        console.log("masuk kids");

        //display recipe
        document.getElementById("breakfast-recipe").style.display = "none";
        document.getElementById("dessert-recipe").style.display = "flex";
        document.getElementById("snack-recipe").style.display = "none";
        
        //display toggle
        document.getElementById("breakfast-toggle").style.display = "flex";
        document.getElementById("dessert-toggle").style.display = "none";
        document.getElementById("snack-toggle").style.display = "flex";
        
        //header
        document.getElementById("recipe-title").innerHTML = "Dessert Recipes"
        document.getElementById("recipe-subtitle").innerHTML = "Sweet Endings Awaits"
      }
      
    });
});