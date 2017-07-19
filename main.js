 window.onload = function () {

     var ip = document.getElementById('ip');
     var url = document.getElementById('url');
     var provision = document.getElementById('provision');
     var admin = document.getElementById('admin');
     var reboot = document.getElementById('reboot');

     ip.onclick = function () {
         ip.style.removeProperty('border');
     };
     url.onclick = function () {
         url.style.removeProperty('border');
     };


     provision.onclick = function () {
         var ipValue = document.getElementById('ip').value;
         var urlValue = document.getElementById('url').value;
         var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
         var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
         var match1 = ipValue.match(patt1);
         var match2 = ipValue.match(patt2);
         var lowercase = urlValue.toLowerCase();

         if ((match1 || match2) == null) {
             alert("Please submit a valid IP address.");
             ip.style.borderColor = 'red';
             return false;
         } else if (urlValue == "") {
             alert("Please insert the configuration Url");
             url.style.borderColor = "red";
             return false;
         } else if ((lowercase.indexOf('http') == -1) || (lowercase.indexOf('cfg') == -1)) {
             alert("Please insert a valid configuration Url");
             url.style.borderColor = "red";
             return false;
         } else {
             alert("Your phone may reboot in few seconds")
             link = (ipValue) + "/admin/resync?" + (urlValue)
             window.open("http://" + link)
         }
     }

     admin.onclick = function () {
         var ipValue = document.getElementById('ip').value;
         var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
         var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
         var match1 = ipValue.match(patt1);
         var match2 = ipValue.match(patt2);
         if ((match1 || match2) == null) {
             alert("Please submit a valid IP address.");
             ip.style.borderColor = "red";
             return false;

         } else {
             link = (ipValue) + "/admin/advanced"
             window.open("http://" + link)
         }
     }

     reboot.onclick = function () {
         var ipValue = document.getElementById('ip').value;
         var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
         var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
         var match1 = ipValue.match(patt1);
         var match2 = ipValue.match(patt2);

         if ((match1 || match2) == null) {
             alert("Please submit a valid IP address.");
             ip.style.borderColor = "red";
             return false;
         } else {
             alert("Your phone will reboot now!")
             link = (ipValue) + "/admin/reboot"
             window.open("http://" + link)
         }
     }
 }
