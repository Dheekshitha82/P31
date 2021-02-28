const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
    
}

function setup(){
    createCanvas(300,500);
    engine = Engine.create();
    world = engine.world;  
    
    drops1 = new Drops(40,187,10,10)
    drops2 = new Drops(101,172,10,10)
    drops3 = new Drops(234,247,10,10)
    drops4 = new Drops(102,245,10,10)
    drops5 = new Drops(168,65,10,10)
    drops6 = new Drops(112,374,10,10)
    drops7 = new Drops(239,383,10,10)
    drops8 = new Drops(72,156,10,10)
    drops9 = new Drops(204,361,10,10)
    drops10 = new Drops(227,195,10,10)
    drops11 = new Drops(218,191,10,10)
    drops12 = new Drops(36,268,10,10)
    drops13 = new Drops(243,119,10,10)
    drops14 = new Drops(215,116,10,10)
    drops15 = new Drops(229,389,10,10)
    drops16 = new Drops(222,180,10,10)
    drops17 = new Drops(154,10,10,10)
    drops18 = new Drops(137,42,10,10)
    drops19 = new Drops(292,367,10,10)
    drops20 = new Drops(65,332,10,10)
    drops21 = new Drops(162,135,10,10)
    drops22 = new Drops(171,318,10,10)
    drops23 = new Drops(56,108,10,10)
    drops24 = new Drops(150,45,10,10)
    drops25 = new Drops(38,321,10,10)
    drops26 = new Drops(61,384,10,10)
    drops27 = new Drops(34,170,10,10)
    drops28 = new Drops(32,202,10,10)
    drops29 = new Drops(283,343,10,10)
    drops30 = new Drops(69,395,10,10)
    drops31 = new Drops(129,28,10,10)
    drops32 = new Drops(113,236,10,10)
    drops33 = new Drops(136,322,10,10)
    drops34 = new Drops(137,183,10,10)
}

function draw(){
    background("black")
    drops1.display();
    drops2.display();
    drops3.display();
    drops4.display();
    drops4.display();
    drops5.display();
    drops6.display();
    drops7.display();
    drops8.display();
    drops9.display();
    drops10.display();
    drops11.display();
    drops12.display();
    drops13.display();
    drops14.display();
    drops15.display();
    drops16.display();
    drops17.display();
    drops18.display();
    drops19.display();
    drops20.display();
    drops21.display();
    drops22.display();
    drops23.display();
    drops24.display();
    drops25.display();
    drops26.display();
    drops27.display();
    drops28.display();
    drops29.display();
    drops30.display();
    drops31.display();
    drops32.display();
    drops33.display();
    drops34.display();

}   

