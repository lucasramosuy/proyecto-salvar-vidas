basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 500) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
