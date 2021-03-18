class Form {
    constructor() {

        this.title = createElement('h1')
        this.input = createInput("Enter your Name");
        this.button = createButton('Play');
        //this.button = createImg('Playnow.png');
        this.greeting = createElement('h2')
       
        this.leaderBoard = createElement("h2")
      
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
  
    display(){
        background(loginImg)

        image(starImg, width/2-50, 100, 120,120)
        //image(logoImg, width/2, 140, 80,60)

        startSound.play()
       
        this.title.html("Welcome to Galaxy Hunter");
        this.title.position(width/2-270,height/2-100);
        this.title.style("fontSize", "50px");
        this.title.style("color", "#43DADB");

       
        this.input.position(width/2-130, height/2+50);
        this.input.style("height", "50px");
        this.input.style("width", "250px");
        this.input.style("borderRadius", "60px");
        this.input.style("fontSize", "25px");
        this.input.style("background-color", "#01010B");
        this.input.style("borderColor", "#02F4F2");
        this.input.style("borderWidth", "6px");
        this.input.style("color", "#A13BFF");



       
        this.button.position(width/2-60, height/2+140);
        this.button.style("background-color", "#3A18AA");
        this.button.style("width", "120px");
        this.button.style("height", "50px");
        this.button.style("fontSize", "25px");
        this.button.style("borderColor", "#C123AB");
        this.button.style("borderWidth", "6px");
        


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            name = this.input.value();

           
            this.greeting.html("Hello, "+name+ " Welcome");
            this.greeting.position(width/2-300, height/2-50);
            this.greeting.style("fontSize", "60px");
            this.greeting.style("color", "yellow") ;          

            gameState = 1
        })
    }

}