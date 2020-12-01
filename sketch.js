var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var score, background1, backie, bananaGroup, obstaclesGroup, ground, survivalTime

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backie = loadImage("background for monkey runner.jpg")
}



function setup() {


  background1 = createSprite(300, 300)
  background1.addImage(backie)



  ground = createSprite(400, 320, 900, 10)
  ground.velocityX = -10

  monkey = createSprite(40, 315, 10, 10)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
  survivalTime = 0
  bananaGroup = new Group();
  obstaclesGroup = new Group();


}


function draw() {
  if (ground.x < 0) {
    ground.x = ground.x / 2
  }

  if (keyDown("space") && monkey.y >= 240) {
    monkey.velocityY = monkey.velocityY - 2
  }
  survivalTime = Math.ceil(frameCount / frameRate())
  monkey.velocityY = monkey.velocityY + 0.5
  spawnBananas();
  spawnObstacles();
  monkey.collide(ground)
  drawSprites();
  fill("pink")
  stroke("red")
  textSize(32)
  textFont("letteromatic")

  text("Survival Time:" + survivalTime, 90, 50)


}

function spawnBananas() {
  if (frameCount % 90 === 0) {
    banana = createSprite(250, 200, 10, 10)
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.scale = 0.10
    banana.y = Math.round(random(100, 250))
    banana.lifetime = 100
    bananaGroup.add(banana)
  }
}

function spawnObstacles() {
  if (frameCount % 240 === 0) {
    obstacle = createSprite(250, 290, 10, 10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15
    obstacle.velocityX = -3
    obstacle.lifetime = 100
    obstaclesGroup.add(obstacle)
  }

}