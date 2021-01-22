class Form {
    constructor() {
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
  display(){
      var title = createElement('h2')
      title.html("CAR RACING GAME")
      title.position(130, 0);

    
      this.input.position(160, 160);
      this.button.position(230, 200);

      this.button.mousePressed(()=>{
          this.input.hide()
              this.button.hide()
              player.name = this.input.value()
              playerCount=playerCount+1
              player.update();
              player.updateCount(playerCount);
          this.greeting.html("Hello "+player.name);
          this.greeting.position(170, 160);
      })
  }
}