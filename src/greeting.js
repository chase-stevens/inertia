$(document).ready(function() {
  var username = getCookie('username');
  // Check cookie and loads username
  if(username){
    $('.greeting').css('display','inline-block');
    $('.greeting').html(`<strong>Hi there, <span class="stored-name"> ${username}</span></strong>.`);
    $('.username').css('display','none');
  }

  // If no username cookie, gets name from user
  else {
    $('.username').css('display','inline-block');
    $('.greeting').html(`<strong>What's your name?</strong>`);
    $('.greeting').css('display','inline-block');
  }

  // Gets username and submits on pressing Enter/Return
  $('.username').keypress(function(e) {
    if(e.which == 13) {
      var value = e.target.value;
      if(!value) return;
      $('.username').fadeOut(function(){
        $('.greeting').html(`<strong>Hi there, ${value}.</strong>`);
        $('.greeting').fadeIn(function(){
          setCookie('username', value, 365);
          console.log(`cookie set!: ${decodeURIComponent(document.cookie)}`)
        });
      });
    }
  });
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
