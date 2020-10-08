class Food {
  constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage("images/Milk.png");
  }

  getFoodStock() {
    return this.foodStock;
  }

  updateFoodStock(foodStock) {
    this.foodStock=foodStock;
  }

  deductFood() {
    if(this.foodStock>0) {
      this.foodStock=this.foodStock-1;
    }
  }

  getFedTime(lastFed) {
    this.lastFed=lastFed;
  }

  garden() {
    backGround(garden,550,550);
  }

  bedroom() {
    backGround(bedroom,550,550);
  }

  washroom() {
    backGround(washroom,550,550);
  }

  display() {
    var x=80,y=100;
      
    imageMode(CENTER);
    //image(this.image,500,200,60,60);

    if(this.foodStock!=0) {
      for(var i=0;i<this.foodStock;i++) {
        if(i%10===0) {
          x=80;
          y=y+50;
        }

        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
}