function myfunction()
	{
		alert("Page is loaded");
	}

function MyFun()
{
	var correct_way = /^[A-Za-z]+$/;
	var a = document.getElementById("first").value;
	if(a == "")
	{
		document.getElementById("Message").innerHTML= "**Please Fill Firstname";
		return false; 
	}
	else if(a.length<3)
	{
		document.getElementById("Message").innerHTML= "**username must be 3 charcter";
		return false;
	}
	else if(a.length>20)
	{
		document.getElementById("Message").innerHTML= "**username should be less than 20 charcter";
		return false;
	}
	else if(a.match(correct_way))
	{
		true;
	}
	else
	{
		document.correct_way("Message").innerHTML= "**only alphabets are allowed";
		return false;
	}
}