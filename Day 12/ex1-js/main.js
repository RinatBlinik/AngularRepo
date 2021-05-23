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
    console.log(this.a + '+' + this.b + '='  + this.add() );
    console.log(this.a + '-' + this.b + '='  + this.sub() );
    console.log(this.a + '*' + this.b + '='  + this.mult() );
}

var c1= new Calculate(5,10);
var c2= new Calculate(50,20);
c1.log();
c2.log();

setTimeout(c1.log.bind(c1), 2000);