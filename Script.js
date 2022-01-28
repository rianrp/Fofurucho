window.onload = function()
{
    // cria o app
    var app = new b5.App(document.getElementById('gamecanvas'), true);
    app.debug = false;
    app.clear_canvas = true; 
    //aqui nos redimensionamos a tela 
    app.setCanvasScalingMethod(b5.App.FitBest);

    // Aqui criamos uma cena
    var scene = new b5.Scene();
    // Aqui Adicionamos a cena no game
    app.addScene(scene);
    //aqui implantamos a fisica no game, colocando velocidade no eixo x e y, para verdadeiro
    scene.initWorld( 0, 10, true );

//aqui criamos os atores(objetos) 
  var actor = new b5.RectActor();
//var actor, e como se fosse uma variavel, entao pode ser varios nomes
  actor.fill_style = "#40ff4f";   //Selecionando a cor
  actor.x = 10;//Posição do eixo x
  actor.y = 10;//Posição do eixo y
  actor.w = 20;//Largura
  actor.h = 20;//altura 
  actor.corner_radius = 10;//borda, deixando ele em forma esférica
  scene.addActor(actor);//colocando o actor na cena
  actor.initBody("dynamic", true, false);
  //definindo uma fisica a ele
  //startamos o booty5
  app.start(); 
};