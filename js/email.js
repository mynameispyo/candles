function sendEmail() {
      var name = document.getElementById('name').value, email = document.getElementById('email').value, phone = document.getElementById('phone').value, message= document.getElementById('message').value;
			if (name=="" || email=="" || phone=="" || message=="") {
        alert("Please complete all form");
      } if(grecaptcha.getResponse() == "") {
		alert("please click reCAPTCHA")
	} else {
        document.getElementById('wait').style.display = 'block';
        document.getElementById('contact-button').style.display = 'none';
        Email.send({
          SecureToken : "6b803461-532e-430c-b5c9-deb96e0243d3",
          To : 'mynameispyo@gmail.com',
          From : "the3countrys@naver.com",
          Subject : "email subject",
          Body : 'name:'+name+',email:'+email+',phone:'+phone+',message:'+message,
        })
        .then(function(message){
          alert("mail sent successfully");
          document.getElementById('wait').style.display = 'none';
          document.getElementById('contact-button').style.display = 'block';
        });
      }
		}
    function realtimeClock() {
      var prices = parseInt(document.getElementById('input-c').value, 10) * 3 + parseInt(document.getElementById('input-s').value, 10) * 3 + parseInt(document.getElementById('input-o').value, 10) * 2;
      document.getElementById('price').innerHTML = prices;
      document.getElementById('total').innerHTML = prices;
      setTimeout("realtimeClock()", 1000);
    }
    function makeOrder() {
      var name = document.getElementById('names').value, email = document.getElementById('emails').value, address = document.getElementById('address').value, city= document.getElementById('city').value, zip= document.getElementById('zip').value, christmas= document.getElementById('input-c').value, original= document.getElementById('input-o').value,snow  = document.getElementById('input-s').value,state = document.getElementById('state').value;
			if (name=="" || email=="" || address=="" || city=="" || state=="" || zip=="" || christmas=="" || snow=="" || original=="") {
        alert("Please complete all form");
      } else {
        document.getElementById('wait-m').style.display = 'block';
        document.getElementById('checkout').style.display = 'none';
        Email.send({
          SecureToken : "6b803461-532e-430c-b5c9-deb96e0243d3",
          To : 'mynameispyo@gmail.com',
          From : "the3countrys@naver.com",
          Subject : "email subject",
          Body : 'name:'+name+',email:'+email+',address:'+address+',city:'+city+',state:'+state+',zip:'+zip+',snow:'+snow+',christmas:'+christmas+',original:'+original,
        })
        .then(function(message){
          alert("mail sent successfully");
          document.getElementById('wait-m').style.display = 'none';
          document.getElementById('checkout').style.display = 'block';
          
        });
      }
		}
