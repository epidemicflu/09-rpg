var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/images/tiles.png');
    this.load.image('greencup', 'assets/images/greencup.png');
    this.load.image('bluecup', 'assets/images/bluecup.png');
    //this.load.image('player', 'assets/images/004.png');
    this.load.image('browndoor', 'assets/images/browndoor.png');
    
    this.load.image('playerLeft', 'assets/image/playerLeft.png');
    this.load.image('playerRight', 'assets/image/playerRight.png');
    this.load.image('playerUp', 'assets/image/playerUp.png');
    this.load.image('playerDown', 'assets/image/playerDown.png');
  },
  create: function() {
    this.state.start('Game');
  }
};
