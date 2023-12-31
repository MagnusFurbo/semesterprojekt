namespace SpriteKind {
    export const forsker = SpriteKind.create()
    export const Pynt = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (landmand.isHittingTile(CollisionDirection.Bottom)) {
        landmand.vy = -143
    }
})
function kørTilemap () {
    tilemaps = [
    tilemap`level3`,
    tilemap`level12`,
    tilemap`level13`,
    tilemap`level14`,
    tilemap`level16`,
    tilemap`level17`,
    tilemap`level18`,
    tilemap`level19`,
    tilemap`level20`,
    tilemap`level21`
    ]
}
function sætFugle () {
    fugl1 = sprites.create(img`
        ....................
        ....................
        ....................
        ...........ffff.....
        .ffff.....f2222f....
        feeeefffff221854f...
        ffeeeeef222225554f..
        .feeeef2222211fff...
        ..ffff2222f111f.....
        ....f2222f111fef....
        ....f222f11ffeef....
        ....f222fff.feef....
        ....f222f....ff.....
        .....f22f...........
        .....f22f...........
        ......ff............
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    fugl2 = sprites.create(img`
        ....................
        ....................
        ....................
        ...........ffff.....
        .ffff.....f9999f....
        f8888fffff991854f...
        ff88888f999995554f..
        .f8888f9999911fff...
        ..ffff9999f111f.....
        ....f9999f111f8f....
        ....f999f11ff88f....
        ....f999fff.f88f....
        ....f999f....ff.....
        .....f99f...........
        .....f99f...........
        ......ff............
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    fugl3 = sprites.create(img`
        ....................
        ....................
        ....................
        ...........ffff.....
        .ffff.....f7777f....
        f5555fffff771854f...
        ff55555f777775554f..
        .f5555f7777711fff...
        ..ffff7777f111f.....
        ....f7777f111f5f....
        ....f777f11ff55f....
        ....f777fff.f55f....
        ....f777f....ff.....
        .....f77f...........
        .....f77f...........
        ......ff............
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    fugl1.setPosition(71, landmand.y + -20)
    fugl1.setVelocity(100, 0)
    fugl2.setPosition(71, landmand.y + -215)
    fugl2.setVelocity(100, 0)
    fugl3.setPosition(71, landmand.y + -310)
    fugl3.setVelocity(100, 0)
}
function fuglspg () {
    valgspg = randint(0, 9)
    pause2 = true
    game.showLongText(spg[valgspg], DialogLayout.Bottom)
    story.showPlayerChoices(svar1[valgspg], svar2[valgspg])
}
function spørgsmål () {
    spg = [
    "Hvad er vertikalt landbrug?",
    "Hvorfor vælge vertikalt landbrug?",
    "Kan man benytte vertikalt landbrug overalt?",
    "Hvordan kan vertikalt landbrug gøres bæredygtigt?",
    "Hvad er de største ulemper ved vertikalt landbrug?",
    "Hvor mange gange større er CO2 udslippet ved vertikalt landbrug, i forhold til konventionelt landbrug?",
    "Hvor høj en procentdel af CO2-aftrykket står LED for i et vertikalt landbrug?",
    "Må vertikalt landbrug kalde sig for økologisk?",
    "Hvordan støtter staten vertikalt landbrug?",
    "Hvordan gros planter i et vertikalt landbrug?"
    ]
    svar1 = [
    "Landbrug i et niveau",
    "Det er den mest bæredygtige løsning på markedet",
    "Ja",
    "Ved at gro andre typer af planter",
    "Dårlig udnyttelse af plads og skader biodiversiteten",
    "5-16 gange større",
    "70-85%",
    "Nej",
    "Pr. kvadratmeter",
    "I vand, hvor der tilsættes næring"
    ]
    svar2 = [
    "Landbrug i flere niveauer ",
    "'Det hjælper med biodiversitet og pladsmangel",
    "Nej",
    "Ved at energinettet bliver 100% bestående af grøn energi",
    "Udefrakommende energi ikke er grønt og mangel på støtte",
    "Det er mindre ",
    "20-30%",
    "Ja",
    "Pr. afgrøde der dyrkes",
    "I jord, hvor der tilsættes næring"
    ]
}
function planter () {
    for (let index = 0; index < 6; index++) {
        plante = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . 7 7 2 2 . . . . . 
            . . . . . 7 7 7 . 2 2 . . . . . 
            . . . . 7 7 7 7 . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 2 2 . . 7 7 7 7 . . . . . 
            . . . 2 2 . . 7 7 7 7 . . . . . 
            . . . . . . . 7 . . 2 2 . . . . 
            . . . . . . . 7 . . 2 2 . . . . 
            . . . . 1 8 1 8 8 8 8 1 . . . . 
            . . . . 1 8 8 8 1 1 8 1 . . . . 
            . . . . 1 8 8 8 8 8 8 1 . . . . 
            . . . . . 1 8 8 8 8 1 . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `, SpriteKind.Pynt)
        tiles.placeOnRandomTile(plante, assets.tile`myTile`)
        plante.y = plante.y - 15
    }
}
let plante: Sprite = null
let svar2: string[] = []
let svar1: string[] = []
let spg: string[] = []
let pause2 = false
let valgspg = 0
let fugl3: Sprite = null
let fugl2: Sprite = null
let fugl1: Sprite = null
let tilemaps: tiles.TileMapData[] = []
let landmand: Sprite = null
landmand = sprites.create(assets.image`Landmand`, SpriteKind.Player)
let forsker = sprites.create(img`
    ....................
    .......ffffff.......
    ......ffdddfff......
    .....fffddddfff.....
    ....fffdddddddf.....
    ....fffddfffffff....
    ....f11ff11fddff....
    ....f11ff11fddff....
    .....ff33ffddff.....
    .....f3333dddf......
    ......f111111f......
    .....f11111111f.....
    ....f1111b11111f....
    ....f1111111111f....
    ....f1111b11111f....
    ....f1111111111f....
    ....ff111b1111ff....
    .....f11111111f.....
    .....ffffffffff.....
    .....feef..feef.....
    ......ff....ff......
    `, SpriteKind.forsker)
controller.moveSprite(landmand, 100, 0)
landmand.ay = 200
landmand.setPosition(80, 460)
forsker.setPosition(148, 470)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(landmand)
scene.setBackgroundImage(img`
    bbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbb
    b22277bbb222bbbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbb22277bbb222bbbb22277bbb222bbb
    b222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbb
    b222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb
    bbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbb
    bbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbb
    bbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbb
    bbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbb
    bbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbb
    bbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbb77777bbbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbb77777bbbbbbbbbb77777bbbb
    bbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbbb7b7b77bbbb
    bbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbb
    b22277bbb222bbbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbb22277bbb222bbbb22277bbb222bbb
    b222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbb
    b222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb
    bbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbb
    bbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbb
    bbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbb
    bbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbb
    bbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbb
    bbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbb77777bbbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbb77777bbbbbbbbbb77777bbbb
    bbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbbb7b7b77bbbb
    bbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbb
    b22277bbb222bbbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbb22277bbb222bbbb22277bbb222bbb
    b222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbb
    b222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb
    bbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbb
    bbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbb
    bbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbb
    bbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbb
    bbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbb
    bbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbb77777bbbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbbb77777bbbbbbbbb77777bbbbbbbbbb77777bbbb
    bbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbbb7b7b77bbbbbbbb7b7b77bbbbbbbbb7b7b77bbbb
    bbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbbb777bbb222bbbbb777bbb222bbbbbb777bbb222bbb
    b22277bbb222bbbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbbb22277bbb222bbb22277bbb222bbbb22277bbb222bbb
    b222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbbb222b7bbb222bbb222b7bbb222bbbb222b7bbb222bbb
    b222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb222b7bbbbbbbbbb222b7bbbbbbbbb
    bbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbb
    bbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbbbbbb7bbbbbbbbbbbbbb7bbbbbbbbb
    bbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbbb7777bbbbbbbbbb7777bbbbbbbbbbb7777bbbbbb
    bbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbb
    bbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbbbbb77bbbbbbbbbbbbb77bbbbbbbbb
    bbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbbbbb777bbbbbbbbbbbb777bbbbbbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    11199999111bbbb11199999111bbb11199999111bbb11199999111bbb11199999111bbb11199999111bbbb11199999111bbbb11199999111bbbb11199999111bbb11199999111bbbb11199999111bbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    bbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbbb11111bbbbbbbbb11111bbbbbbbbbb11111bbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
kørTilemap()
spørgsmål()
sætFugle()
planter()
music.stopAllSounds()
music.setVolume(3)
info.setScore(0)
pause(200)
forever(function () {
    forsker.sayText("INFO")
    if (landmand.overlapsWith(forsker) && controller.A.isPressed()) {
        story.printCharacterText("HJÆLP!")
        story.printCharacterText("Fuglene er sluppet løs i vores vertikale landbrug, og ødelægger vores planter. Indfang dem og besvar spørgsmål for ekstra points. Nå så langt som muligt.")
    }
})
forever(function () {
    if (fugl1.x >= 150 || fugl1.isHittingTile(CollisionDirection.Right)) {
        fugl1.setVelocity(-100, 0)
        fugl1.setImage(img`
            ....................
            ....................
            ....................
            .....ffff...........
            ....f2222f.....ffff.
            ...f458122fffffeeeef
            ..f455522222feeeeeff
            ...fff1122222feeeef.
            .....f111f2222ffff..
            ....fef111f2222f....
            ....feeff11f222f....
            ....feef.fff222f....
            .....ff....f222f....
            ...........f22f.....
            ...........f22f.....
            ............ff......
            ....................
            ....................
            ....................
            ....................
            `)
    }
    if (fugl1.x <= 0 || fugl1.isHittingTile(CollisionDirection.Left)) {
        fugl1.setVelocity(100, 0)
        fugl1.setImage(img`
            ....................
            ....................
            ....................
            ...........ffff.....
            .ffff.....f2222f....
            feeeefffff221854f...
            ffeeeeef222225554f..
            .feeeef2222211fff...
            ..ffff2222f111f.....
            ....f2222f111fef....
            ....f222f11ffeef....
            ....f222fff.feef....
            ....f222f....ff.....
            .....f22f...........
            .....f22f...........
            ......ff............
            ....................
            ....................
            ....................
            ....................
            `)
    }
    if (fugl2.x >= 150 || fugl2.isHittingTile(CollisionDirection.Right)) {
        fugl2.setVelocity(-100, 0)
        fugl2.setImage(img`
            ....................
            ....................
            ....................
            .....ffff...........
            ....f9999f.....ffff.
            ...f458199fffff8888f
            ..f455599999f88888ff
            ...fff1199999f8888f.
            .....f111f9999ffff..
            ....f8f111f9999f....
            ....f88ff11f999f....
            ....f88f.fff999f....
            .....ff....f999f....
            ...........f99f.....
            ...........f99f.....
            ............ff......
            ....................
            ....................
            ....................
            ....................
            `)
    }
    if (fugl2.x <= 0 || fugl2.isHittingTile(CollisionDirection.Left)) {
        fugl2.setVelocity(100, 0)
        fugl2.setImage(img`
            ....................
            ....................
            ....................
            ...........ffff.....
            .ffff.....f9999f....
            f8888fffff991854f...
            ff88888f999995554f..
            .f8888f9999911fff...
            ..ffff9999f111f.....
            ....f9999f111f8f....
            ....f999f11ff88f....
            ....f999fff.f88f....
            ....f999f....ff.....
            .....f99f...........
            .....f99f...........
            ......ff............
            ....................
            ....................
            ....................
            ....................
            `)
    }
    if (fugl3.x >= 150 || fugl3.isHittingTile(CollisionDirection.Right)) {
        fugl3.setVelocity(-100, 0)
        fugl3.setImage(img`
            ....................
            ....................
            ....................
            .....ffff...........
            ....f7777f.....ffff.
            ...f458177fffff5555f
            ..f455577777f55555ff
            ...fff1177777f5555f.
            .....f111f7777ffff..
            ....f5f111f7777f....
            ....f55ff11f777f....
            ....f55f.fff777f....
            .....ff....f777f....
            ...........f77f.....
            ...........f77f.....
            ............ff......
            ....................
            ....................
            ....................
            ....................
            `)
    }
    if (fugl3.x <= 0 || fugl3.isHittingTile(CollisionDirection.Left)) {
        fugl3.setVelocity(100, 0)
        fugl3.setImage(img`
            ....................
            ....................
            ....................
            ...........ffff.....
            .ffff.....f7777f....
            f5555fffff771854f...
            ff55555f777775554f..
            .f5555f7777711fff...
            ..ffff7777f111f.....
            ....f7777f111f5f....
            ....f777f11ff55f....
            ....f777fff.f55f....
            ....f777f....ff.....
            .....f77f...........
            .....f77f...........
            ......ff............
            ....................
            ....................
            ....................
            ....................
            `)
    }
    if (info.score() < 0) {
        info.setScore(0)
    }
})
forever(function () {
    if (landmand.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`) && landmand.isHittingTile(CollisionDirection.Bottom)) {
        landmand.sayText("3")
        pause(500)
        landmand.sayText("2")
        pause(500)
        landmand.sayText("1")
        pause(500)
        tileUtil.setWalls(assets.tile`myTile1`, false)
        tileUtil.replaceAllTiles(assets.tile`myTile1`, assets.tile`transparency16`)
        landmand.sayText("")
        pause(2000)
    }
})
forever(function () {
    music.play(music.createSong(hex`0064000408030300001c00010a006400f401640000040000000000000000000000000005000004670000000400012a0400080001270c001000012410001400012918001c00012c1c002000012020002400012a28002c0001272c003000012c34003800012c38003c0001253c0040000120440048000222274c005000012c54005800012758005c00012a5c006000012006001c00010a006400f401640000040000000000000000000000000000000002480000000400012408000c00012910001400012518001c00012a28002c00012530003400012938003c0001273c00400001224400480001244c00500001245400580001255c006000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80092000000010001020400050001020800090001020c000d0001021000110002020b1400150001021800190001021c001d000202052000210001022400250001022800290001022c002d0001023000310001023400350001023800390001023c003d0001024000410001024400450001024800490001024c004d0001025000510001025400550001025800590001025c005d000102`), music.PlaybackMode.UntilDone)
})
forever(function () {
    if (landmand.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`) && landmand.isHittingTile(CollisionDirection.Bottom)) {
        sprites.destroy(forsker)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        sprites.destroyAllSpritesOfKind(SpriteKind.Pynt)
        pause(500)
        landmand.setPosition(80, 460)
        tiles.setCurrentTilemap(tilemaps._pickRandom())
        sætFugle()
        planter()
    }
})
forever(function () {
    if (landmand.vy > 145) {
        game.setGameOverMessage(false, "For langt ned")
        game.gameOver(false)
    }
})
forever(function () {
    if (landmand.overlapsWith(fugl1)) {
        sprites.destroy(fugl1)
        fuglspg()
    }
    if (landmand.overlapsWith(fugl2)) {
        sprites.destroy(fugl2)
        fuglspg()
    }
    if (landmand.overlapsWith(fugl3)) {
        sprites.destroy(fugl3)
        fuglspg()
    }
    if (story.checkLastAnswer(svar2[valgspg]) && valgspg < 5) {
        info.changeScoreBy(200)
        landmand.sayText("Korrekt", 1000, false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        pause2 = false
        valgspg = 999
    } else if (story.checkLastAnswer(svar1[valgspg]) && valgspg < 5) {
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        landmand.sayText("Forkert", 1000, false)
        pause2 = false
        valgspg = 999
    }
    if (story.checkLastAnswer(svar2[valgspg]) && valgspg >= 5) {
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        landmand.sayText("Forkert", 1000, false)
        pause2 = false
        valgspg = 999
    } else if (story.checkLastAnswer(svar1[valgspg]) && valgspg >= 5) {
        info.changeScoreBy(200)
        landmand.sayText("Korrekt", 1000, false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        pause2 = false
        valgspg = 999
    }
})
forever(function () {
    info.changeScoreBy(landmand.y * 0 + 1)
    pauseUntil(() => landmand.vy < 0)
})
forever(function () {
    info.changeScoreBy(landmand.y * 0 + -1)
    pauseUntil(() => landmand.vy > 0)
})
forever(function () {
    if (pause2 == true) {
        landmand.vy = 0
        landmand.ay = 0
        controller.moveSprite(landmand, 0, 0)
    }
    if (pause2 == false) {
        controller.moveSprite(landmand, 100, 0)
        landmand.ay = 200
    }
})
