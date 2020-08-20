function formvalidate()
{
    var flag = true;
    if(!nameValidate("fname","lblfname"))
    {
        // return false;
        flag = false;
    }
    if(!nameValidate("lname","lbllname"))
    {
        // return false;
        flag = false;
    }
    if(!numberValidate("pnumber","lblpnumber"))
    {
        // return false;
        flag = false;
    }
    if(!numberValidate("onumber","lblonumber"))
    {
        // return false;
        flag = false;
    }
    if(!emailValidate())
    {
        // return false;
        flag = false;
    }
    if(!passwordValidate())
    {
        // return false;
        flag = false;
    }
    if(!passwordMatch())
    {
        // return false;
        flag = false;
    }
    if(!dobValidate())
    {
        // return false;
        flag = false;
    }
    if(!genderValidate())
    {
        // return false;
        flag = false;
    }
    if(!interestValidate())
    {
        // return false;
        flag = false;
    }
    if(!aboutYouValidate())
    {
        // return false;
        flag = false;
    }
    if(flag == false)
    {
        return false;
    }
}
function nameValidate(name,lbl)
{
    
    var fname = document.getElementById(name).value;
    var lblfname = document.getElementById(lbl);
    if(fname.trim()=="")
    {
        lblfname.style.visibility="visible";
        return false;
    }
    if(!spaceValidate(fname,lblfname))
    {
        return false;
    }
    if(!specialChar(fname,lblfname))
    {
        return false;
    }
    if(fname.length < 3)
    {
        lblfname.innerHTML="minimum 3 characters are required";
        lblfname.style.visibility="visible";
        return false;
    }

    // else{
        lblfname.style.visibility="hidden";
        // console.log(fname);
        return true;
    // }
}

function numberValidate(name,lbl)
{
    var number = document.getElementById(name).value;
    var lblnumber = document.getElementById(lbl);

    var regex1 = /^[7-9][0-9]{9}$/;  // mobile no
    var regex2 = /^[0-9]{7,10}$/;  // phone no
    // console.log(name,lbl);
    if(!required(number,lblnumber))
    {
        return false;
    }
    if(!spaceValidate(number,lblnumber))
    {
        return false;
    }
    if(!specialChar(number,lblnumber))
    {
        return false;
    }
    if(!letterValidate(number,lblnumber))
    {
        return false;
    }
    if(name=="pnumber" && regex1.test(number))
    {
        lblnumber.style.visibility="hidden";
        // console.log(number);
        return true;
    }
    else if(name=="onumber" && regex2.test(number))
    {
        lblnumber.style.visibility="hidden";
        // console.log(number);
        return true;
    }
    else if(name=="pnumber"){
        lblnumber.innerHTML="phone number must be of 10 digits";
        lblnumber.style.visibility="visible";
        return false;
    }
    else if(name=="onumber"){
        lblnumber.innerHTML="phone number must have atleast 7 digits";
        lblnumber.style.visibility="visible";
        return false;
    }

}
function emailValidate()
{
    var email = document.getElementById("email").value;
    var lblemail = document.getElementById("lblemail");
    var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if(!required(email,lblemail))
    {
        return false;
    }
    if(regex.test(email))
    {
        lblemail.style.visibility="hidden";
        // console.log(email);
        return true;
    }
    if(!spaceValidate(email,lblemail))
    {
        return false;
    }
    else{
        lblemail.innerHTML="please enter a valid email"
        lblemail.style.visibility="visible";
        return false;
    }
}
function passwordValidate()
{
    var password = document.getElementById("password").value;
    var lblpassword = document.getElementById("lblpassword");
    var regex = /^[a-zA-Z0-9]{8,12}$/;

    if(!required(password,lblpassword))
    {
        return false;
    }
    if(!spaceValidate(password,lblpassword))
    {
        return false;
    }
    if(!specialChar(password,lblpassword))
    {
        return false;
    }
    if(regex.test(password))
    {
        lblpassword.style.visibility="hidden";
        // console.log(password);
        return true;
    }
    else{
        lblpassword.innerHTML="password must be atleast 8 to 12 characters(only alphanumeric)"
        lblpassword.style.visibility="visible";
        return false;
    }
}

function passwordMatch()
{
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var lblcpassword = document.getElementById("lblcpassword");
    if(password == cpassword)
    {
        lblcpassword.style.visibility="hidden";
        // console.log(cpassword);
        return true;
    }
    else{
        lblcpassword.style.visibility="visible";
        return false;
    }
}
function dobValidate()
{
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var year = document.getElementById("year").value;
    var lbldob = document.getElementById("lbldob");
    if(month == "select" || day=="select"|| year=="select")
    {
        lbldob.style.visibility="visible";
        return false;
    }
    else{
        lbldob.style.visibility="hidden";
        claculateAge();
        return true;
    }
}
function claculateAge()
{
    
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var day = document.getElementById("day").value;
    var age = document.getElementById("age");
    var lblage = document.getElementById("lblage");
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
      age.value = result;
      lblage.style.visibility="hidden";
    }
    else
    {
      lblage.style.visibility="visible";
    }
}
function genderValidate()
{
    var male = document.getElementById("residence1").checked;
    var female = document.getElementById("residence2").checked;
    var lblgender = document.getElementById("lblgender");
    if(male == true || female == true)
    {
        lblgender.style.visibility="hidden";
        return true;
    }
    else{
        lblgender.style.visibility="visible";
        return false;
    }
}
function interestValidate()
{
    var interest1 = document.getElementById("checkbox_sample18").checked;
    var interest2 = document.getElementById("checkbox_sample19").checked;
    var interest3 = document.getElementById("checkbox_sample20").checked;

    var lblinterest = document.getElementById("lblinterest");
    if(interest1 == true || interest2 == true || interest3 == true)
    {
        lblinterest.style.visibility="hidden";
        return true;
    }
    else{
        lblinterest.style.visibility="visible";
        return false;
    }
}
function aboutYouValidate()
{
    var aboutyou = document.getElementById("aboutyou").value;
    var lblaboutyou = document.getElementById("lblaboutyou");
    var regex = /^[a-zA-Z ]{10,100}$/;
    

    if(!required(aboutyou,lblaboutyou))
    {
        return false;
    }
    if(regex.test(aboutyou))
    {
        lblaboutyou.style.visibility="hidden";
        return true;
    }
    else{
        lblaboutyou.innerHTML="minimum 10 character required"
        lblaboutyou.style.visibility="visible";
        return false;
    }
}

function required(name,lblname)
{
    if(name.trim()=="")
    {
        // lblname.innerHTML="required";
        lblname.style.visibility="visible";
        return false;
    }
    else{
        lblname.style.visibility="hidden";
        return true;
    }
}
function specialChar(name,lblname)
{
    let res=/\W/g;
    // let rea = /[@&\/\\#,+()$~%.'":*?<>{}]/g;
    if(res.test(name))
    {
        // alert(name);
        lblname.innerHTML="Special characters are not allowed";
        lblname.style.visibility="visible";
        return false;
    }
    else
    {
        lblname.style.visibility="hidden";
        return true;
    }
    
}

function spaceValidate(name,lblname)
{
    let re = /\s/g;
    if(re.test(name))
    {
        lblname.innerHTML="space are not allowed";
        lblname.style.visibility="visible";
        return false;
    }
    else
    {
        // lblfname.innerHTML="name is mandatory";
        lblname.style.visibility="hidden";
        return true;
    }
}
function letterValidate(name,lblname)
{
    let rel = /\w\D/g;
    if(rel.test(name))
    {
        lblname.innerHTML="letters are not allowed";
        lblname.style.visibility="visible";
        return false;
    }
    else
    {
        lblname.style.visibility="hidden";
        return true;
    }
}