let grados = 0
basic.forever(function () {
    grados = input.compassHeading()
    if (grados < 45 || grados > 315) {
        basic.showString("N")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
