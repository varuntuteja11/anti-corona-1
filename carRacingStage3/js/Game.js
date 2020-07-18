class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(100,400);
    car2.addImage("car2",car2_img);
    car3 = createSprite(100,600);
    car3.addImage("car3",car3_img);
   // car4 = createSprite(100,800);
    //car4.addImage("car4",car4_img);
    cars = [car1, car2, car3];
    car1.scale="0.5"
    car2.scale="0.5"
    car3.scale="0.5"
    
    
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    spawnObstacles()
    if(allPlayers !== undefined){
      background(rgb(252,258,79));
      image(track, 0,-displayHeight*0,displayWidth*5, displayHeight);
    }
      /*var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x ;
      var y=200;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y=y+300;
        //use data form the database to display the cars in y direction
        x=  allPlayers[plr].distance;
       cars[index-1].position.x = x;
         cars[index-1].position.y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
        //cars[index-1].position.x = x;
        //cars[index-1].position.y = y;
          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].position.x
          camera.position.y = displayHeight/2
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
     
    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
    */
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
  
}
function  spawnObstacles(){
  console.log("obs")
  if (frameCount%100 === 0){
  var obstacle1=createSprite(displayWidth/2,displayHeight/2,50,50);
  obstacle1.x=random(displayWidth/4,displayWidth)
  obstacle1.y=random(0,displayHeight)
  obstacle1.velocityX=-6;
  obstacle1.addImage(obstacle_1);
  obstacle1.scale="0.5"
}
if (frameCount%130 === 0){
  var obstacle2=createSprite(displayWidth/2,displayHeight/4,50,50);
  obstacle2.velocityX=-6;
  obstacle2.x=random(displayWidth/4,displayWidth)
  obstacle2.y=random(0,displayHeight)
  obstacle2.addImage(obstacle_2);
  obstacle2.scale="0.5"
}
if (frameCount%140 === 0){
  var obstacle3=createSprite(displayWidth/2,displayHeight/8,50,50);
  obstacle3.velocityX=-6;
  obstacle3.x=random(displayWidth/4,displayWidth)
  obstacle3.y=random(0,displayHeight)
  obstacle3.addImage(obstacle_3);
  obstacle3.scale="0.5"
}
}