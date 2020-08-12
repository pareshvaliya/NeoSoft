function formvalidate()
{
    if(!nameValidate("fname","lblfname"))
    {
        return false;
    }
    else if(!nameValidate("lname","lbllname"))
    {
        return false;
    }
    else if(!numberValidate("pnumber","lblpnumber"))
    {
        return false;
    }
    else if(!numberValidate("onumber","lblonumber"))
    {
        return false;
    }
    else if(!emailValidate())
    {
        return false;
    }
    else if(!passwordValidate())
    {
        return false;
    }
    else if(!passwordMatch())
    {
        return false;
    }
    else if(!dobValidate())
    {
        return false;
    }
    else if(!genderValidate())
    {
        return false;
    }
    else if(!interestValidate())
    {
        return false;
    }
    else if(!aboutYouValidate())
    {
        return false;
    }
    else{
        return true;
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
    else{
        lblfname.style.visibility="hidden";
        // console.log(fname);
        return true;
    }
}

function numberValidate(name,lbl)
{
    var number = document.getElementById(name).value;
    var lblnumber = document.getElementById(lbl);
    var regex1 = /^[7-9][0-9]{9}$/;  // mobile no
    var regex2 = /^[0-9]{7,10}$/;  // phone no
    // console.log(name,lbl);
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
    else{
        lblnumber.style.visibility="visible";
        return false;
    }
}
function emailValidate()
{
    var email = document.getElementById("email").value;
    var lblemail = document.getElementById("lblemail");
    var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if(regex.test(email))
    {
        lblemail.style.visibility="hidden";
        // console.log(email);
        return true;
    }
    else{
        lblemail.style.visibility="visible";
        return false;
    }
}
function passwordValidate()
{
    var password = document.getElementById("password").value;
    var lblpassword = document.getElementById("lblpassword");
    var regex = /^[a-zA-Z0-9]{8,12}$/;

    if(regex.test(password))
    {
        lblpassword.style.visibility="hidden";
        // console.log(password);
        return true;
    }
    else{
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
    var month = Number(document.getElementById("month").value);
    var year = Number(document.getElementById("year").value);
    var age = document.getElementById("age");
    var date = new Date();
    var m = Math.abs(month - Number(date.getMonth()+1));
    var y = date.getFullYear() - year;
    var result = y+"."+m;
    age.value = result;
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

    if(regex.test(aboutyou))
    {
        lblaboutyou.style.visibility="hidden";
        return true;
    }
    else{
        lblaboutyou.style.visibility="visible";
        return false;
    }
}
