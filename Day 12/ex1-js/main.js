function Calculate(a,b)
{
    this.a=a;
    this.b=b;
}

Calculate.prototype.add = function (){
    return this.a + this.b;
}
Calculate.prototype.sub = function (){
    return this.a - this.b;
}
Calculate.prototype.mult = function (){
    return this.a * this.b;
}
Calculate.prototype.log = function (){
    console.log('a + b = ' + this.add() + '   a - b = ' + this.sub()  + '   a * b = ' + this.mult() );
}

var c1= new Calculate(5,10);
var c2= new Calculate(50,20);
c1.log();
c2.log();
var func = c1.log;
setTimeout(func.call(c1), 2000);