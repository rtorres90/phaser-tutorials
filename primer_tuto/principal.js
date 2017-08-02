let fondoJuego;
let boton;
let flappy;
let cursores;

let juego = new Phaser.Game(370, 550, Phaser.CANVASpajaro, 'bloque_juego');

let estadoPrincipal = {
    preload: function(){
        //Carga los recursos.
        juego.load.image('fondo', 'img/bg.png');
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 36, 26);
        // juego.load.image('btn', 'img/btn.png');
    },
    create: function(){
        //una vez cuando inicie
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
        flappy = juego.add.sprite(100, 100, 'pajaros');
        flappy.frame = 1;
        flappy.animations.add('vuelo', [0, 1, 2], 10, true);
        // boton = juego.add.sprite(juego.width/2, juego.height/2, 'btn');
        // boton.anchor.setTo(0.5);
        cursores = juego.input.keyboard.createCursorKeys();
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        juego.physics.arcade.enable(flappy);
        flappy.body.collideWorldBounds = true;
    },
    update: function(){
        //loop de verificación animación etc
        flappy.animations.play('vuelo');
        if(cursores.right.isDown){
            flappy.position.x += 1;
        }
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');