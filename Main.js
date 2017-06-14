function ClearingIP () {
        document.getElementById('ip').style.removeProperty('border');
    }
function ClearingUrl () {
        document.getElementById('url').style.removeProperty('border');
}

    function validateIP(s){
        var Url = document.getElementById('url').value;
        var ipaddress = s;
var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
        var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var match1 = ipaddress.match(patt1);
        var match2 = ipaddress.match(patt2);
        var lowercase = Url.toLowerCase();
        
      if ( (match1 || match2) == null) {
        alert ("Please submit a valid IP address.");
          document.getElementById('ip').style.borderColor='red';
        return false;
    }
      else if  (Url == "") {  
        alert("Please insert the configuration Url");
        document.getElementById('url').style.borderColor="red";
            return false;
      }
      else if (( lowercase.indexOf ('http') ==-1) || ( lowercase.indexOf ('cfg') ==-1)){ 
          alert ("Please insert a valid configuration Url");
          document.getElementById('url').style.borderColor="red";
          return false;
          
          
    } else {
    alert("Your phone may reboot in few seconds") 
    link = (ipaddress) +"/admin/resync?"+(Url)
    window.open("http://"+link)
    }
  }
    
function admin(s){
        var Url = document.getElementById('url').value;
        var ipaddress = s;
        var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
        var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var match1 = ipaddress.match(patt1);
        var match2 = ipaddress.match(patt2);
      if ( (match1 || match2) == null) {
        alert ("Please submit a valid IP address.");
          document.getElementById('ip').style.borderColor="red";
        return false;
    
    } else {
    link = (ipaddress) +"/admin/advanced"
    window.open("http://"+link)
    }
  }
    
function reboot(s){
        var Url = document.getElementById('url').value;
        var ipaddress = s;
        var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
        var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var match1 = ipaddress.match(patt1);
        var match2 = ipaddress.match(patt2);

      if ( (match1 || match2) == null) {
        alert ("Please submit a valid IP address.");
          document.getElementById('ip').style.borderColor="red";
        return false; 
    } else {
    alert("Your phone will reboot now!") 
    link = (ipaddress) +"/admin/reboot"
    window.open("http://"+link)
    }
  }
