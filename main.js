
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

     function Validate() {
         var patt1 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):[0-9]{1,5}$/;
         var patt2 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
         var match1 = ip.value.match(patt1);
         var match2 = ip.value.match(patt2);

         if (ip.value == "") {
             alert("Please submit an IP address.");
             ip.style.borderColor = 'red';
             return false;
         } else if ((match1 || match2) == null) {
             alert("Please submit a valid IP address.");
             ip.style.borderColor = 'red';
             return false;
         } else {
             return true;
         }
     }

     provision.onclick = function () {
         var lowercase = url.value.toLowerCase();

         if (Validate()) {
             if (url.value == "") {
                 alert("Please insert the configuration Url");
                 url.style.borderColor = "red";
                 return false;
             } else if ((lowercase.indexOf('http') == -1) || (lowercase.indexOf('cfg') == -1)) {
                 alert("Please insert a valid configuration Url");
                 url.style.borderColor = "red";
                 return false;
             } else {
                 alert("Your phone may reboot in few seconds")
                 link = (ip.value) + "/admin/resync?" + (url.value)
                 window.open("http://" + link)
             }
         }
     }
     admin.onclick = function () {
         if (Validate()) {
             link = (ip.value) + "/admin/advanced"
             window.open("http://" + link)
         }
     }


     reboot.onclick = function () {
         if (Validate()) {
             alert("Your phone will reboot now!")
             link = (ip.value) + "/admin/reboot"
             window.open("http://" + link)
         }

     }
