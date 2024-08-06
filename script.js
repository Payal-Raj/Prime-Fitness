function Submit_Form()

    {
    str1= document.fm.fname.value;

    if(str1.length == 0)
    {

    alert("enter first name");

    }

    str2 = document.fm.lname.value;

    if(str2.length == 0)
    {   
    alert("enter last name");
    }

    if(document.fm.city.selectedIndex == 0)
    {

    alert("select your city");

    }
    reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var addr=document.fm.email.value;
    if(reg.test(addr) == false)

    {
    alert("invalid email address");
    }
if(str1.length != 0 && str2.length != 0 && document.fm.city.selectedIndex != 0 && reg.test(addr) == true)
{

    disp=window.open("your information");   
    disp.document.write(" <b> First name :</b> "+str1+"<br />");
    disp.document.write("<b> Last name : </b> "+str2+"<br />");
    c = document.fm.city.value;
    disp.document.write("<b>city : </b> "+ c+"<br />");
    disp.document.write("<b> Email Address :</b>"+addr+"<br />");

}
else
{
window.open("submit.html");
}
}
