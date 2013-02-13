/*
  Software:Love Calculator
	Developer:Dibyendu Sikdar
	email:ethical.coding@gmail.com
	Version:1.0
*/
var z=0;



function rate(){
	var n1=document.getElementById("n1").value.toLowerCase();
	var n2=document.getElementById("n2").value.toLowerCase();
	
	
	i=0;
	j=0;
	var arr=new Array();
	pos=0;
	while(i<n1.length){
		arr[pos]=n1.charAt(i);
		pos++;
		i++;
	}
	
	while(j<n2.length){
		arr[pos]=n2.charAt(j);
		pos++;
		j++;
	}
	
	x=0;
	for(x=0;x<arr.length;x++){
		var t=arr[x];
		y=0;
		while(y<arr.length){
			if((arr[x]==arr[y]) && (x!=y)){
				arr[x]="*";
				arr[y]="*";
				break;
				}
				y++;
		}
	}
	
	var cut=new Array();
	a=0;
	b=0;
	while(a<arr.length){
		if(arr[a]!="*")
			cut[b++]=arr[a];
		a++;
	}
	
	
			var l=cut.length;
			var ar = new Array("F", "L", "A", "M", "E", "S");
			var stp=1;
			for(var x=6; x>1; x--)
			{
				var g=((l%x)+stp)-1;
				if(g>x)
				{
					g=g%x;
				}
				if(g==0)
				{
					g=ar.length;
				}
				ar.splice(g-1,1);
				stp=g;
				//alert(ar);
			}
			
			if(ar=="F")
			{
				res="FRIENDS";
			}
			else if(ar=="L")
			{
				res="LOVER";
			}
			else if(ar=="A")
			{
				res="AFFECTION";
			} 
			else if(ar=="M")
			{
				res="MARRIAGE";
			}
			else if(ar=="E")
			{	
				res="ENEMY";
			}
			else if(ar=="S")
			{
				res="SISTER";
			}
			document.getElementById("result").innerHTML=res;
		
}


function loveQuotes()
{
	var arr = new Array("If Missing you is falling in love with you. Then I Miss you Endlessly","The hardest thing in my life is watching the person I love with someone else.","You are definitely the right kind of wrong","Dont you go breaking my heart and still say you love me. cause i know love and that aint it!","My days get better by talking to you, saying I love you is what I like to say. If we broke apart I wouldn’t know what to do, but being with you is a miracle that I say every day.","Don’t ask me why I love you, because I will have to explain to you why I live!","No matter what I do I always forget to forget you.","I’m afraid to lose you and you’re not even mine.","If I’m not made for you then why is my heart telling me I am?","Nothing hurts more than to be friends with someone, knowing you are both in love with each other, and yet not being able to be together.","When i love you , your face is  in my mind everytime.","It’s better to have one friend of great value, than to have many friends of small value.","My days get better by talking to you, saying I love you is what I like to say. If we broke apart I wouldn’t know what to do, but being with you is a miracle that I say every day.","The way you walk, way you talk, way you say my name; it’s beautiful, wonderful, don’t you ever change.","Go for someone whose not only proud and glad to have you, But will also take every risk and effort just to be with you.","I could search my whole life but never can find another you..I love my life because it gave me you…. I love you because you are my life!","Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.","Sometimes on the road in love, it bites, but we still fight, find something in it worth holding onto.","We’ll run where lights won’t chase us, hide where love can save us. I will never let you go.");
	
	if(z==arr.length)
		z=0;
		
	q=arr[z];
	z++;
	document.getElementById("quotes").innerHTML=q;
	
	window.setTimeout("loveQuotes();",5000);	
	
		
}
loveQuotes();




