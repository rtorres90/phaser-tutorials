let fondoJuego;
let boton;
let flappy;
let cursores;
let persona;
let mirando = "arriba";

let juego = new Phaser.Game(370, 550, Phaser.CANVASpajaro, 'bloque_juego');

let estadoPrincipal = {
    preload: function(){
        //Carga los recursos.
        juego.load.image('fondo', 'img/bg.png');
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 36, 26);
        juego.load.spritesheet('personas', 'img/sprite_player.png', 51, 72);
        // juego.load.image('btn', 'img/btn.png');
    },
    create: function(){
        //una vez cuando inicie
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
        persona = juego.add.sprite(juego.width/2, juego.height/2, 'personas');
        persona.anchor.setTo(0.5);
        persona.animations.add('abajo', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        persona.animations.add('izquierda', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        persona.animations.add('derecha', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
        persona.animations.add('arriba', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
        // flappy = juego.add.sprite(100, 100, 'pajaros');
        // flappy.frame = 1;
        // flappy.animations.add('vuelo', [0, 1, 2], 10, true);
        // boton = juego.add.sprite(juego.width/2, juego.height/2, 'btn');
        // boton.anchor.setTo(0.5);
        cursores = juego.input.keyboard.createCursorKeys();
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        // juego.physics.arcade.enable(flappy);
        juego.physics.arcade.enable(persona);
        persona.body.collideWorldBounds = true;
        // flappy.body.collideWorldBounds = true;
    },
    update: function(){
        //loop de verificación animación etc
        // flappy.animations.play('vuelo');
        if(cursores.up.isDown){
            persona.animations.play('arriba');
            persona.position.y -= 1;
            if(mirando != "arriba"){
                mirando = "arriba";
            }
            // flappy.position.x += 1;
        }else if(cursores.down.isDown){
            persona.animations.play('abajo');
            persona.position.y += 1;
            if(mirando != "abajo"){
                mirando = "abajo";
            }
            // flappy.position.x += 1;
        }else if(cursores.left.isDown){
            persona.animations.play('izquierda');
            persona.position.x -= 1;
            if(mirando != "izquierda"){
                mirando = "izquierda";
            }
            // flappy.position.x += 1;
        }else if(cursores.right.isDown){
            persona.animations.play('derecha');
            persona.position.x += 1;
            if(mirando != "derecha"){
                mirando = "derecha";
            }
            // flappy.position.x += 1;
        }else{
            if(mirando != "espera"){
                persona.animations.stop();
            }
            mirando = "espera"; 
        }
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');