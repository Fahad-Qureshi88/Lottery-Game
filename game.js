function GetRandomNumber()
{
    let score=0;
    getscore.textContent=score;

    let a=Math.floor(Math.random()*10);
    let b=Math.floor(Math.random()*10);
    let c=Math.floor(Math.random()*10);

    let getnum1=document.getElementById('getnum1');
    let getnum2=document.getElementById('getnum2');
    let getnum3=document.getElementById('getnum3');
    
    getnum1.textContent=a;
    getnum2.textContent=b;
    getnum3.textContent=c;

    if(a==b && b==c)
    {
        score+=10;
        getscore.textContent=score;
        alert("You Won The Lottery!!!!");
    }

    if(a==b || b==c || a==c)
    {
        score+=5;
        getscore.textContent=score
    
    }
}
GetRandomNumber();