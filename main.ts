huskylens.initI2c()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    huskylens.request()
    if (input.soundLevel() >= 80) {
        huskylens.takePhotoToSDCard(HUSKYLENSphoto.PHOTO)
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.clearScreen()
    }
})
