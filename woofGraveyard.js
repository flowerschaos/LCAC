// front hairrows
// var FRight = new Polygon()
// FRight.sides = 3
// FRight.length = 20
// FRight.color = "orange"
// FRight.x = -175
// FRight.y = 281
// FRight.onmousedown(() => {
//   frontHairIndex++
//   if (frontHairIndex >= frontHairImages.length) {
//     frontHairIndex = 0
//   }
// })
// var FLeft = new Polygon()
// FLeft.sides = 3
// FLeft.length = 20
// FLeft.color = "orange"
// FLeft.x = -226
// FLeft.y = 281
// FLeft.turnRight(180)
// FLeft.onMouseDown(() => {
//     frontHairImages[frontHairIndex].hide()
//     frontHairIndex--
//     if (frontHairIndex < 0) {
//       frontHairIndex = frontHairImages.length - 1
//     }
//     frontHairImages[frontHairIndex].show()
//     frontHairImages[frontHairIndex].sendToFront()
//   })
//   // front hair display
// var frontHairDisplay = new Text()
// frontHairDisplay.text = () => frontHairIndex
// frontHairDisplay.x = -201
// frontHairDisplay.y = 284
// frontHairDisplay.size = 30
// var frontHairText = new Text()
// frontHairText.text = () => "Front Hair"
// frontHairText.size = 25
// frontHairText.x = -190
// frontHairText.y = 250

// // back hair image url ==> image class
// backHair.forEach(hair => {
//   const hairImage = new Image({
//     url: hair
//   })
//   backHairImages.push(hairImage)
// })
// backHairImages.forEach(image => {
//     image.hide()
//   })
//   // back hairrows
// var BRight = new Polygon()
// BRight.sides = 3
// BRight.length = 20
// BRight.color = "orange"
// BRight.x = -70
// BRight.y = 281
// BRight.onMouseDown(() => {
//   backHairImages[backHairIndex].hide()
//   backHairIndex++
//   if (backHairIndex >= backHairImages.length) {
//     backHairIndex = 0
//   }
//   backHairImages[backHairIndex].show()
//   backHairImages[backHairIndex].sendToBack()
// })
// var BLeft = new Polygon()
// BLeft.sides = 3
// BLeft.length = 20
// BLeft.color = "orange"
// BLeft.x = -120
// BLeft.y = 281
// BLeft.turnRight(180)
// BLeft.onMouseDown(() => {
//     backHairImages[backHairIndex].hide()
//     backHairIndex--
//     if (backHairIndex < 0) {
//       backHairIndex = backHairImages.length - 1
//     }
//     backHairImages[backHairIndex].show()
//     backHairImages[backHairIndex].sendToBack()
//   })
//   // back hair display
// var backHairDisplay = new Text()
// backHairDisplay.text = () => backHairIndex
// backHairDisplay.x = -100
// backHairDisplay.y = 284
// backHairDisplay.size = 30
// var backHairText = new Text()
// backHairText.text = () => "Back Hair"
// backHairText.size = 25
// backHairText.x = -70
// backHairText.y = 250

// // eye image url ==> image class
// eyes.forEach(eye => {
//   const eyeImage = new Image({
//     url: eye
//   })
//   eyeImages.push(eyeImage)
// })
// eyeImages.forEach(image => {
//     image.hide()
//   })
//   // eyerrows
// var ERight = new Polygon()
// ERight.sides = 3
// ERight.length = 20
// ERight.color = "orange"
// ERight.x = 50
// ERight.y = 281
// ERight.onMouseDown(() => {
//   eyeImages[eyesIndex].hide()
//   eyesIndex++
//   if (eyesIndex >= eyeImages.length) {
//     eyesIndex = 0
//   }
//   eyeImages[eyesIndex].show()
// })
// var ELeft = new Polygon()
// ELeft.sides = 3
// ELeft.length = 20
// ELeft.color = "orange"
// ELeft.x = 5
// ELeft.y = 281
// ELeft.turnRight(180)
// ELeft.onMouseDown(() => {
//     eyeImages[eyesIndex].hide()
//     eyesIndex--
//     if (eyesIndex < 0) {
//       eyesIndex = eyeImages.length - 1
//     }
//     eyeImages[eyesIndex].show()
//   })
//   // eye display
// var eyesDisplay = new Text()
// eyesDisplay.text = () => eyesIndex
// eyesDisplay.x = 25
// eyesDisplay.y = 284
// eyesDisplay.size = 30
// var eyesText = new Text()
// eyesText.text = () => "Eyes"
// eyesText.size = 25
// eyesText.x = 25
// eyesText.y = 250

// // eyebrow image url ==> image class
// eyebrow.forEach(eyebrows => {
//   const eyebrowImage = new Image({
//     url: eyebrows
//   })
//   eyebrowImages.push(eyebrowImage)
// })
// eyebrowImages.forEach(image => {
//     image.hide()
//   })
//   // eyebrowrrows
// var EBRight = new Polygon()
// EBRight.sides = 3
// EBRight.length = 20
// EBRight.color = "orange"
// EBRight.x = 140
// EBRight.y = 281
// EBRight.onMouseDown(() => {
//   eyebrowImages[eyebrowIndex].hide()
//   eyebrowIndex++
//   if (eyebrowIndex >= eyebrowImages.length) {
//     eyebrowIndex = 0
//   }
//   eyebrowImages[eyebrowIndex].show()
// })
// var EBLeft = new Polygon()
// EBLeft.sides = 3
// EBLeft.length = 20
// EBLeft.color = "orange"
// EBLeft.x = 100
// EBLeft.y = 281
// EBLeft.turnRight(180)
// EBLeft.onMouseDown(() => {
//     eyebrowImages[eyebrowIndex].hide()
//     eyebrowIndex--
//     if (eyebrowIndex < 0) {
//       eyebrowIndex = eyebrowImages.length - 1
//     }
//     eyebrowImages[eyebrowIndex].show()
//   })
//   // eyebrow display
// var eyebrowDisplay = new Text()
// eyebrowDisplay.text = () => eyebrowIndex
// eyebrowDisplay.x = 120
// eyebrowDisplay.y = 284
// eyebrowDisplay.size = 30
// var eyebrowText = new Text()
// eyebrowText.text = () => "Eyebrows"
// eyebrowText.size = 25
// eyebrowText.x = 125
// eyebrowText.y = 250

// // mouth image url ==> image class
// mouth.forEach(mouth => {
//   const mouthImage = new Image({
//     url: mouth
//   })
//   mouthImages.push(mouthImage)
// })
// mouthImages.forEach(image => {
//     image.hide()
//   })
//   // mouth arrows
// var MRight = new Polygon()
// MRight.sides = 3
// MRight.length = 20
// MRight.color = "orange"
// MRight.x = -175
// MRight.y = 210
// MRight.onMouseDown(() => {
//   mouthImages[mouthIndex].hide()
//   mouthIndex++
//   if (mouthIndex >= mouthImages.length) {
//     mouthIndex = 0
//   }
//   mouthImages[mouthIndex].show()
// })
// var MLeft = new Polygon()
// MLeft.sides = 3
// MLeft.length = 20
// MLeft.color = "orange"
// MLeft.x = -226
// MLeft.y = 210
// MLeft.turnRight(180)
// MLeft.onMouseDown(() => {
//     mouthImages[mouthIndex].hide()
//     mouthIndex--
//     if (mouthIndex < 0) {
//       mouthIndex = mouthImages.length - 1
//     }
//     mouthImages[mouthIndex].show()
//   })
//   // mouth display
// var mouthDisplay = new Text()
// mouthDisplay.text = () => mouthIndex
// mouthDisplay.x = -200
// mouthDisplay.y = 210
// mouthDisplay.size = 30
// var mouthText = new Text()
// mouthText.text = () => "Mouth"
// mouthText.size = 25
// mouthText.x = -200
// mouthText.y = 180

// // suit image url ==> image class
// egoSuits.forEach(suit => {
//   const suitImage = new Image({
//     url: suit
//   })
//   egoSuitImages.push(suitImage)
// })
// egoSuitImages.forEach(image => {
//     image.hide()
//   })
//   // suit arrows
// var SRight = new Polygon()
// SRight.sides = 3
// SRight.length = 20
// SRight.color = "orange"
// SRight.x = -90
// SRight.y = 210
// SRight.onMouseDown(() => {
//   egoSuitImages[suitIndex].hide()
//   suitIndex++
//   if (suitIndex >= egoSuitImages.length) {
//     suitIndex = 0
//   }
//   egoSuitImages[suitIndex].show()
// })
// var SLeft = new Polygon()
// SLeft.sides = 3
// SLeft.length = 20
// SLeft.color = "orange"
// SLeft.x = -130
// SLeft.y = 210
// SLeft.turnRight(180)
// SLeft.onMouseDown(() => {
//     egoSuitImages[suitIndex].hide()
//     suitIndex--
//     if (suitIndex < 0) {
//       suitIndex = egoSuitImages.length - 1
//     }
//     egoSuitImages[suitIndex].show()
//   })
//   // suit display
// var suitDisplay = new Text()
// suitDisplay.text = () => suitIndex
// suitDisplay.x = -110
// suitDisplay.y = 210
// suitDisplay.size = 30
// var suitText = new Text()
// suitText.text = () => "Suit"
// suitText.size = 25
// suitText.x = -120
// suitText.y = 180

// // gift image url ==> image class
// egoGifts.forEach(gift => {
//   const giftImage = new Image({
//     url: gift
//   })
//   egoGiftImages.push(giftImage)
// })
// egoGiftImages.forEach(image => {
//     image.hide()
//   })
//   // gift arrows
// var GRight = new Polygon()
// GRight.sides = 3
// GRight.length = 20
// GRight.color = "orange"
// GRight.x = -5
// GRight.y = 210
// GRight.onMouseDown(() => {
//   egoGiftImages[giftIndex].hide()
//   giftIndex++
//   if (giftIndex >= egoGiftImages.length) {
//     giftIndex = 0
//   }
//   egoGiftImages[giftIndex].show()
// })
// var GLeft = new Polygon()
// GLeft.sides = 3
// GLeft.length = 20
// GLeft.color = "orange"
// GLeft.x = -45
// GLeft.y = 210
// GLeft.turnRight(180)
// GLeft.onMouseDown(() => {
//     egoGiftImages[giftIndex].hide()
//     giftIndex--
//     if (giftIndex < 0) {
//       giftIndex = egoGiftImages.length - 1
//     }
//     egoGiftImages[giftIndex].show()
//   })
//   // gift display
// var giftDisplay = new Text()
// giftDisplay.text = () => giftIndex
// giftDisplay.x = -25
// giftDisplay.y = 210
// giftDisplay.size = 30
// var giftText = new Text()
// giftText.text = () => "Gift"
// giftText.size = 25
// giftText.x = -40
// giftText.y = 180

// // PUT ALL CODE ABOVE THIS COMMENT
// if (showSwitch) {
//   showSwitch = false;
//   frontHairImages[frontHairIndex].show()
//   backHairImages[backHairIndex].show()
//   backHairImages[backHairIndex].sendToBack()
//   frontHairImages[frontHairIndex].sendToFront()
//   eyeImages[eyesIndex].show()
//   eyebrowImages[eyebrowIndex].show()
//   mouthImages[mouthIndex].show()
//   egoSuitImages[suitIndex].show()
//   egoGiftImages[giftIndex].show()
// }

// // department armband rendering
// if (showSwitch === false) {
//   // Control Team
//   controlBands.forEach(armband => {
//     const controlImage = new Image({
//       url: armband
//     })
//     controlBandImages.push(controlImage)
//   })
//   controlBandImages.forEach(image => {
//       image.hide()
//     })
//     // Information Team
//   informationBands.forEach(armband => {
//     const informationImage = new Image({
//       url: armband
//     })
//     informationBandImages.push(informationImage)
//   })
//   informationBandImages.forEach(image => {
//       image.hide()
//     })
//     // Security Team
//   securityBands.forEach(armband => {
//     const securityImage = new Image({
//       url: armband
//     })
//     securityBandImages.push(securityImage)
//   })
//   securityBandImages.forEach(image => {
//       image.hide()
//     })
//     // Training Team
//   trainingBands.forEach(armband => {
//     const trainingImage = new Image({
//       url: armband
//     })
//     trainingBandImages.push(trainingImage)
//   })
//   trainingBandImages.forEach(image => {
//       image.hide()
//     })
//     // Central Command Team
//   centralCommandBands.forEach(armband => {
//     const centralCommandImage = new Image({
//       url: armband
//     })
//     centralCommandBandImages.push(centralCommandImage)
//   })
//   centralCommandBandImages.forEach(image => {
//       image.hide()
//     })
//     // Disciplinary Team
//   disciplinaryBands.forEach(armband => {
//     const disciplinaryImage = new Image({
//       url: armband
//     })
//     disciplinaryBandImages.push(disciplinaryImage)
//   })
//   disciplinaryBandImages.forEach(image => {
//       image.hide()
//     })
//     // Welfare Team
//   welfareBands.forEach(armband => {
//     const welfareImage = new Image({
//       url: armband
//     })
//     welfareBandImages.push(welfareImage)
//   })
//   welfareBandImages.forEach(image => {
//       image.hide()
//     })
//     // Record Team
//   recordBands.forEach(armband => {
//     const recordImage = new Image({
//       url: armband
//     })
//     recordBandImages.push(recordImage)
//   })
//   recordBandImages.forEach(image => {
//       image.hide()
//     })
//     // Extraction Team
//   extractionBands.forEach(armband => {
//     const extractionImage = new Image({
//       url: armband
//     })
//     extractionBandImages.push(extractionImage)
//   })
//   extractionBandImages.forEach(image => {
//       image.hide()
//     })
//     // Architecture Team
//   architectureBands.forEach(armband => {
//     const architectureImage = new Image({
//       url: armband
//     })
//     architectureBandImages.push(architectureImage)
//   })
//   architectureBandImages.forEach(image => {
//     image.hide()
//   })
// }