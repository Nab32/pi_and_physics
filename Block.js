class Block{
    constructor(x,w,v,m){
        this.x=x;
        this.y=height-w;
        this.m=m;
        this.v=v;
        this.w=w;
    }

    update(){
        this.x+=this.v;
    }

    collisionwithblock(other){
        if (this.x+this.w < other.x || this.x > other.x + other.w){
            return false;
        }else{
            return true;
        }
        
    }


    bouncing(other){
        let tempv1=this.v;
        let tempv2=other.v;

        this.v=(((this.m-other.m)/(this.m+other.m))*tempv1)+(((2*other.m)/(other.m+this.m))*tempv2);
        other.v=(((this.m*2)/(other.m+this.m))*tempv1)+(((other.m-this.m)/(other.m+this.m))*tempv2);
    }


    collisionwithwall(){
        if (this.x<=0){
            return true;
        }
    }

    show(){
        fill(150);
        rect(this.x,this.y,this.w,this.w);
    }
}