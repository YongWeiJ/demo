namespace SpriteKind {
    export const Frog = SpriteKind.create()
    export const Fly = SpriteKind.create()
    export const PowerUp = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Frog, function (sprite, otherSprite) {
    sprites.destroy(Frog_1, effects.bubbles, 1000)
    if (sprite == Player1) {
        Player1.scale += -0.1
        info.player1.changeScoreBy(-5)
        p1isAlive = 0
    }
    if (sprite == Player2) {
        Player2.scale += -0.1
        info.player2.changeScoreBy(-5)
        p2isAlive = 0
    }
    frogRespawn = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fly, function (sprite, otherSprite) {
    if (otherSprite == flySprite) {
        sprites.destroy(flySprite, effects.spray, 500)
        if (sprite == Player1) {
            info.player1.changeScoreBy(1)
        }
        if (sprite == Player2) {
            info.player2.changeScoreBy(1)
        }
    }
    if (otherSprite == fatFly) {
        sprites.destroy(fatFly, effects.bubbles, 500)
        if (sprite == Player1) {
            Player1.scale += 0.1
            info.player1.changeScoreBy(1)
            p1VX += 50
            p1VY += 50
        }
        if (sprite == Player2) {
            Player2.scale += 0.1
            info.player2.changeScoreBy(1)
            p2VX += 50
            p2VY += 50
        }
    }
})
let Flug_poäng: Sprite = null
let Power_up_snabb: Sprite = null
let frogRespawn = 0
let p2isAlive = 0
let p1isAlive = 0
let Frog_1: Sprite = null
let fatFly: Sprite = null
let flySprite: Sprite = null
let Player2: Sprite = null
let Player1: Sprite = null
Player1 = sprites.create(img`
    ...............bbbbbbbbbbbbbbbbbbb...............
    ...........bbbbdd111111111111111ddbbbb...........
    ........bbbd1111111111111111111111111dbbb........
    ......bbd11111111dddddddddddddd111111111dbb......
    ....bbd1111111ddd11111111111111dddd1111111dbb....
    ...bd111111ddd111111111111111111111ddd111111db...
    ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
    .bd11111dd111dddd111111111111111dddd111dd11111db.
    .b11111d111ddd111111111111111111111ddd111d11111b.
    bd11111d1ddd1111111111111111111111111ddd1111111db
    b11111d1ddd111111111111111111111111111ddd1d11111b
    b11111ddddd111111111111111111111111111ddddd11111b
    b11111ddddd111111111111111111111111111dddbd11111b
    b111111dddd111111111111111111111111111dddb111111b
    bd111111dddd1111111111111111111111111dddbd11111db
    .b1111111dddd11111111111111111111111dddbd111111b.
    .bd1111111dbbdd1111111111111111111dddbbd111111db.
    ..bd11111111dbbdd111111111111111dddbbd1111111db..
    ...bd111111111dbbbbbbdddddddddddddd111111111db...
    ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
    ......bbdd11111111111111111111111111111ddbb......
    ........bbbdd11111111111111111111111ddbbb........
    ...........bbbbbddd11111111111dddbbbbb...........
    ................bbbbbbbbbbbbbbbbb................
    `, SpriteKind.Player)
Player1.setPosition(5, 15)
Player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Player2.setPosition(5, 85)
flySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Fly)
flySprite.setPosition(50, 50)
fatFly = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Fly)
fatFly.setPosition(100, 100)
Frog_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Frog)
Frog_1.setPosition(111, 60)
p1isAlive = 1
p2isAlive = 1
let p1VY = 50
let p1VX = 50
let p2VX = 50
let p2VY = 50
let Enemy = sprites.create(img`
    ...fff.....fff....
    ..f111f...f111f...
    .f1ff11fff11ff1f..
    .f1ff1177711ff1f..
    .f1111177711111f..
    ..f11177777111f...
    .f7777777777777f..
    f77f777777777f77f.
    f777fffffffff777f.
    f777777777777777f.
    .f7777777777777f..
    ..fff7777777fff...
    ...f777777777f....
    .ff77777177777ff..
    f7f77771117777f7f.
    f777f7f111f7f777f.
    .fff.f.fff.f.fff..
    ..................
    `, SpriteKind.Enemy)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . 9 . . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 9 . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 9 9 9 9 9 9 1 1 9 9 . . . . 
    . 9 9 9 9 9 9 9 9 1 9 9 9 . . . 
    . 9 9 9 9 9 9 9 9 1 9 9 9 . . . 
    . 9 9 9 9 9 9 9 9 1 1 9 9 . . . 
    . 9 9 9 9 9 9 9 9 9 1 9 9 . . . 
    . . 9 9 9 9 9 9 9 1 1 9 9 . . . 
    . . 9 9 9 9 9 9 1 1 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    `, Enemy, 50, 50)
projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . 9 . . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 9 . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 9 9 9 9 9 9 1 1 9 9 . . . . 
    . 9 9 9 9 9 9 9 9 1 9 9 9 . . . 
    . 9 9 9 9 9 9 9 9 1 9 9 9 . . . 
    . 9 9 9 9 9 9 9 9 1 1 9 9 . . . 
    . 9 9 9 9 9 9 9 9 9 1 9 9 . . . 
    . . 9 9 9 9 9 9 9 1 1 9 9 . . . 
    . . 9 9 9 9 9 9 1 1 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    `, Enemy, 10, 30)
game.onUpdate(function () {
    if (p1isAlive == 1) {
        controller.player1.moveSprite(Player1, p1VX, p1VY)
    } else {
        Player1.setPosition(5, 15)
        p1isAlive = 1
    }
    if (p2isAlive == 1) {
        controller.player2.moveSprite(Player2, p2VX, p2VX)
    } else {
        Player2.setPosition(5, 85)
        p2isAlive = 1
    }
    if (info.player1.score() < info.player2.score()) {
        Frog_1.follow(Player2, 10)
    } else {
        Frog_1.follow(Player1, 10)
    }
    if (frogRespawn == 1) {
        Frog_1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Frog)
        Frog_1.setPosition(111, 60)
        frogRespawn = 0
    }
})
game.onUpdateInterval(5000, function () {
    Power_up_snabb = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.PowerUp)
    Power_up_snabb.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    timer.after(1500, function () {
        sprites.destroy(Power_up_snabb)
    })
})
game.onUpdateInterval(2000, function () {
    Flug_poäng = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Food)
    Flug_poäng.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    timer.after(1500, function () {
        sprites.destroy(Flug_poäng)
    })
})
