function genderValidate()
    {
      var g = $("input[name='gender']:checked").val();
      if(g)
      {
        $("#lblgender").css('visibility','hidden');
      }
      else{
        $("#lblgender").css('visibility','visible');
      }
    }

function interestValidate()
{
  var g = $("input[name='check']:checked").val();
  if(g=="on")
  {
    $("#lblinterest").css('visibility','hidden');
  }
  else{
    $("#lblinterest").css('visibility','visible');
  }
}
function claculateAge()
{
    var month = $("#month").val();
    var year = $("#year").val();
    var day = $("#day").val();
    if(month != "select" && year != "select" && day != "select")
    {
      var date = new Date();
      
      var m = Number(month);
      var cm = Number(date.getMonth()+1);
      var y = Number(year);
      var cy = date.getFullYear();
      var d = Number(day);
      var cd = date.getDate();
      var mdiff = Math.abs(m-cm);
      var ydiff = cy - y;
      if(m>cm)
      {
        ydiff = ydiff-1;
        mdiff = 12 -(m-cm);
      }
      if(d < cd)
      {
        mdiff = mdiff+1;
      }
      if(d > cd)
      {
        mdiff = mdiff-1;
      }
      if(m == cm && d>cd)
      {
        ydiff = ydiff-1;
        mdiff = 12 - 1;
      }
      var result = ydiff+"."+mdiff;
      $("#age").val(result);
      $("#lblage").css('visibility','hidden');
      $("#age").removeClass("c1");
      $("#age").addClass("c2");
    }
    else{
      $("#lblage").css('visibility','visible');
      $("#age").addClass("c1");
      $("#age").removeClass("c2");
    }
}
$(document).ready(function () {

    $("#submit").click(function () { 
      genderValidate();
      interestValidate();
    });

    $.validator.addMethod("aboutYouValidate",function(value){
        var regex = /^[a-zA-Z \n]{10,}$/;
        return regex.test(value);
    },"enter atleast 10 characters(specialcharacters are not allowed)");

    $.validator.addMethod("monthValidate",function(value){
      return value != "select";
    },"--select month");

    $.validator.addMethod("dayValidate",function(value){
        return value != "select";
    },"--select day");

    $.validator.addMethod("yearValidate",function(value){
      return value != "select";
    },"--select year");

    $("#form1").validate({
        rules: {
          firstname: {
            required:true,
            nowhitespace:true,
            alphanumeric:true,
            minlength:3,
          },
          lastname: {
            required:true,
            nowhitespace:true,
            alphanumeric:true,
            minlength:3,
          },
          email: {
            required: true,
            nowhitespace:true,
            email: true
          },
          password: {
            required: true,
            nowhitespace:true,
            alphanumeric:true,
            rangelength: [8,12],
          },
          cpassword: {
            required: true,
            equalTo:"#password"
          },
          phone:{
            required:true,
            nowhitespace:true,
            alphanumeric:true,
            digits:true,
            rangelength:[10,10],
          },
          office:{
            required:true,
            nowhitespace:true,
            alphanumeric:true,
            digits:true,
            rangelength:[7,10],
          },
          aboutyou:{
            required:true,
            aboutYouValidate:true,
            // alphanumeric:true
          },
          month:{
            monthValidate:true
          },
          day:{
            dayValidate:true
          },
          year:{
            yearValidate:true
          }
        },      

        highlight:function(element){
          $(element).addClass("c1");
          $(element).removeClass("c2");

        },
        unhighlight:function(element){
          $(element).removeClass("c1");
          $(element).addClass("c2");
        },

        messages: {
          firstname: {
            required:"*first name is mandatory",
            nowhitespace:"*space is not allowed",
            alphanumeric:"special characters are not allowed(only alphanumeric)"
          },
          lastname: {
            required:"*last name is mandatory",
            nowhitespace:"*space is not allowed",
            alphanumeric:"special characters are not allowed(only alphanumeric)"
          },
          email: {
            required:"*email is mandatory",
            nowhitespace:"*space is not allowed",
            email:"*please enter a valid email"
          },
          password: {
            required:"*Password is mandatory",
            nowhitespace:"*space is not allowed",
            alphanumeric:"special characters are not allowed(only alphanumeric)",
            rangelength:"password must be 8 to 12 character long"
          },
          cpassword: {
            required: "*Enter a same password",
            equalTo:"*password doesn't matches"
          },
          phone:{
            required:"phone number is mandatory",
            nowhitespace:"space is not allowed",
            alphanumeric:"special characters are not allowed",
            digits:"please enter digits only",
            rangelength:"phone number must be of 10 digits"
          },
          office:{
            required:"office number is mandatory",
            nowhitespace:"space is not allowed",
            alphanumeric:"special characters are not allowed",
            digits:"please enter digits only",
            rangelength:"office number must be 7 to 10 digits long"
          },
          aboutyou:{
            required:"about you is mandatory"
          },
          
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
});
