$(document).ready(function(){
     $("#inputUsername").hide();
     $("#inputEmail").hide();
     $("#inputPassword").hide();
     $("#btnSignup").click(function () {
          $("#inputUsername").slideDown();
          $("#inputEmail").slideDown();
          $("#inputPassword").slideDown();
          $("#btnLogin").before($("#btnSignup"));
          $("#btnLogin").before($("#or"));

     });
     $("#btnLogin").click(function () {
          $("#inputUsername").slideDown();
          $("#inputPassword").slideDown();
          $("#inputEmail").slideUp();
          //$("#btnSignup").css("margin-top","175px");
          //$("#btnLogin").css("position","fixed");
          $("#btnSignup").before($("#btnLogin"));
          $("#btnSignup").before($("#or"));
     });
});
