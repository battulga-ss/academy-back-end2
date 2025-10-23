 
    const correctUsername = "admin@erxes.io";
    const correctPassword = "12345";

    
    document.getElementById("loginBtn").onclick = () => {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      const result = document.getElementById("result");

      if (user === correctUsername && pass === correctPassword) {
        window.alert("Login successful!");
        
      } else {
         window.alert("Invalid username or password!")
        
      }
    };