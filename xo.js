var score=0;
var XorO=0;
var key=0;
var win = parseInt(0);
function clicked(a)
{
	var turn = document.getElementById("turn");
	x=a.childNodes[0];
	if(x.innerHTML == "X" || x.innerHTML == "O")
	{
		alert("THIS HAS ALREADY BEEN SELECTED");
		
	}
	else
	{
				if(XorO%2 == 0){ 
				    turn.innerHTML="O's Turn";
					x.innerHTML="X";
				}
				else{
					turn.innerHTML="X's Turn";
					x.innerHTML="O";
				}
			XorO++;
		var winner = winnercheck();
		winner = parseInt(winner);
		win = win + winner; 		
		console.log(win);
		if(win>1)
		{
			alert("GAME HAS ALREADY FINISHED.Press Replay to Rebegin Or Press Ok.");
			location.reload();
		}
		else if(win==1)
		{
			if(XorO%2 == 0){
			turn.innerHTML="O has Won.Congrats";
			}
			else 
			{
			turn.innerHTML="X has Won.Congrats";
			}
			key=1;
		}
		var drawornot = drawcheck();
		if(drawornot == 1)
		{
			turn.innerHTML="Game is Draw";
		}
	}
}
function winnercheck()
{
		var box1=document.getElementById("one");
		var box2=document.getElementById("two");
		var box3=document.getElementById("three");
		var box4=document.getElementById("four");
		var box5=document.getElementById("five");
		var box6=document.getElementById("six");
		var box7=document.getElementById("seven");
		var box8=document.getElementById("eight");
		var box9=document.getElementById("nine");
	if(box1.innerHTML !==" " && box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML){
		winnerbox(box1,box2,box3);
	}
	else if(box4.innerHTML !==" " && box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML){
		winnerbox(box4,box5,box6);
	}
	else if(box7.innerHTML !==" " && box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML){
		winnerbox(box7,box8,box9);
	}
	else if(box1.innerHTML !==" " && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML){
		winnerbox(box1,box4,box7);
	}
	else if(box2.innerHTML !==" " && box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML){
		winnerbox(box2,box5,box8);
	}
	else if(box3.innerHTML !==" " && box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML){
		winnerbox(box3,box6,box9);
	}
	else if(box1.innerHTML !==" " && box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML){
		winnerbox(box1,box5,box9);
	}
	else if(box3.innerHTML !==" " && box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML){
		winnerbox(box3,box5,box7); 
	}
	else{return 0;}
	return 1;
}
function drawcheck()
{
	var boxes=document.getElementsByClassName("box");
	for(var i=0;i<=boxes.length-1;i++)
	{
		if(boxes[i].innerHTML ==" ")
		{
			break;
		}
	}
	if(i == boxes.length && key!=1)
	{
		key=1;
		return 1;	
	}
	return 0;
}
function winnerbox(b1,b2,b3)
{
	b1.style.backgroundColor="#FFA07A";
	b2.style.backgroundColor="#FFA07A";
	b3.style.backgroundColor="#FFA07A";
}
function over()
{
if(key == 1)
	{
	var superbox = document.getElementById("superbox");
	superbox.innerHTML = '<br> <br><br> <br><br><button type="button"  onclick="location.reload();">RESTART THE GAME</button>';
	}
}
