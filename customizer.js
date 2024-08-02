document.addEventListener("DOMContentLoaded", () => {
  var canvas = document.getElementById("viewport")
  ctx = canvas.getContext("2d")  

// let showSwitch = true

// item indexes
var frontHairIndex = 0
var backHairIndex = 0
var eyebrowIndex = 0
var eyeIndex = 0
var mouthIndex = 0
var suitIndex = 0
var giftIndex = 0
var weaponIndex = 0
var deptIndex = 0
var rankIndex = 0

// head setup
var headCanvas = document.getElementById("head")
headCTX = headCanvas.getContext("2d") 
drawHead()
function drawHead(){
      // head
  var head = new Image()
  head.src = "https://file.garden/ZqEYEbTufxMF4XJQ/agenthead.png"
  head.onload = function(){
    headCTX.drawImage(head,0,0)
  }
}

// body parts
const frontHairs = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair3.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair4.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair5.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair6.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair7.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair8.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair9.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair10.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair11.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair12.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair13.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair14.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair15.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair16.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair17.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair18.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair19.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair20.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair21.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair22.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair23.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair24.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair25.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair26.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair27.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair28.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair29.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair30.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair31.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair32.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair33.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair34.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair35.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair36.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair37.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair38.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair39.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair40.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair41.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair42.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair43.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair44.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair45.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/front%20hair/hair46.png",
  "https://firebasestorage.googleapis.com/v0/b/woofjs-d1b27.appspot.com/o/UserImageUpload%2FdkDBOuX1YiWVA6WGooLAP7vjayG2%2Fagent-picker-thing%2F7wybycwu4u9lyyr8xrd?alt=media&token=b3175df4-ebca-4b71-aaf9-e3e6a3850ff4"
]
const backHairs = [
    "https://firebasestorage.googleapis.com/v0/b/woofjs-d1b27.appspot.com/o/UserImageUpload%2FdkDBOuX1YiWVA6WGooLAP7vjayG2%2Fagent-picker-thing%2F7wybycwu4u9lyyr8xrd?alt=media&token=b3175df4-ebca-4b71-aaf9-e3e6a3850ff4",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair0.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair1.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair2.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair3.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair4.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair5.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair6.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair7.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair8.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair9.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair10.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair11.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair12.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair13.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair14.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair15.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair16.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair17.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair18.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair19.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair20.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair21.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair22.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair23.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair24.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair25.png",
    "https://file.garden/ZqEYEbTufxMF4XJQ/back%20hair/bhair26.png"
]
const eyebrows = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow3.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow4.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow5.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow6.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyebrows/eyebrow7.png"
]
const eyes = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye3.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye4.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye5.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye6.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye7.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye8.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye9.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye10.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye11.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye12.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye13.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye14.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye15.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye16.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye17.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye18.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye19.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye20.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye21.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye22.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye23.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye24.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye25.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye26.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye27.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye28.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye20.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye30.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye31.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye32.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye33.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye34.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye35.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye36.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye37.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye38.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye39.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye40.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye41.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye42.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye43.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/eyes/eye44.png",
]
const mouths = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouth1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth3.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth4.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth5.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth6.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/mouth7.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/SodaGift.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/mouths/MagicBulletGift.png"
]

// E.G.O.
const egoSuits = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/suits/DefaultSuit.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/suits/SodaSuit.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/suits/MagicBulletSuit.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/suits/SwordSharpenedByTearsSuit.png"
]
const egoGifts = [
  "https://firebasestorage.googleapis.com/v0/b/woofjs-d1b27.appspot.com/o/UserImageUpload%2FdkDBOuX1YiWVA6WGooLAP7vjayG2%2Fagent-picker-thing%2F7wybycwu4u9lyyr8xrd?alt=media&token=b3175df4-ebca-4b71-aaf9-e3e6a3850ff4",
  "https://file.garden/ZqEYEbTufxMF4XJQ/gifts/SwordSharpenedByTearsGift.png"
]

// department armbands
const controlBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/control/Control0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/control/Control1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/control/Control2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/control/Control3.png"
]
const informationBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/information/Information0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/information/Information1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/information/Information2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/information/Information3.png"
]
const securityBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/security/Security0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/security/Security1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/security/Security2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/security/Security3.png"
]
const trainingBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/training/Training0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/training/Training1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/training/Training2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/training/Training3.png"
]
const centralCommandBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/central%20command/CentralCommand0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/central%20command/CentralCommand1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/central%20command/CentralCommand2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/central%20command/CentralCommand3.png"
]
const disciplinaryBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/disciplinary/Disciplinary0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/disciplinary/Disciplinary1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/disciplinary/Disciplinary2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/disciplinary/Disciplinary3.png"
]
const welfareBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/welfare/Welfare0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/welfare/Welfare1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/welfare/Welfare2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/welfare/Welfare3.png"
]
const recordBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/record/Record0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/record/Record1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/record/Record2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/record/Record3.png"
]
const extractionBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/extraction/Extraction0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/extraction/Extraction1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/extraction/Extraction2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/extraction/Extraction3.png"
]
const architectureBands = [
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/architecture/Architecture0.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/architecture/Architecture1.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/architecture/Architecture2.png",
  "https://file.garden/ZqEYEbTufxMF4XJQ/depts/architecture/Architecture3.png"
]
var frontHairCanvas = document.getElementById("fronthair")
frontHairCTX = frontHairCanvas.getContext("2d") 
drawFrontHair()
function drawFrontHair(){
      // front hair
  var frontHair = new Image()
  frontHair.src = frontHairs[frontHairIndex]
  frontHair.onload = function(){
    frontHairCTX.drawImage(frontHair,0,0)
  }
}
var faceCanvas = document.getElementById("face")
faceCTX = faceCanvas.getContext("2d") 
drawEyebrows()
function drawEyebrows(){
      // eyebrows
  var eyebrow = new Image()
  eyebrow.src = eyebrows[eyebrowIndex]
  eyebrow.onload = function(){
    faceCTX.drawImage(eyebrow,0,0)
  }
}
drawEyes()
function drawEyes(){
      // eyes
  var eye = new Image()
  eye.src = eyes[eyeIndex]
  eye.onload = function(){
    faceCTX.drawImage(eye,0,0)
  }
}
drawMouths()
function drawMouths(){
      // mouths
  var mouth = new Image()
  mouth.src = mouths[mouthIndex]
  mouth.onload = function(){
    faceCTX.drawImage(mouth,0,0)
  }
}
var backHairCanvas = document.getElementById("backhair")
backHairCTX = backHairCanvas.getContext("2d") 
drawBackHair()
function drawBackHair(){
      // back hair
  var backHair = new Image()
  backHair.src = backHairs[backHairIndex]
  backHair.onload = function(){
    backHairCTX.drawImage(backHair,0,0)
  }
}
var suitCanvas = document.getElementById("suit")
suitCTX = suitCanvas.getContext("2d") 
drawEgoSuits()
function drawEgoSuits(){
      // suits
  var egoSuit = new Image()
  egoSuit.src = egoSuits[suitIndex]
  egoSuit.onload = function(){
    suitCTX.drawImage(egoSuit,0,0)
  }
}

// front hair
function frontHairLeft() {
  frontHairIndex--
  if (frontHairIndex < 0) {
      frontHairIndex = frontHairs.length-1
  }
  let fI = document.getElementById("frontHairIndex")
  fI.innerHTML = frontHairIndex
  frontHairCTX.clearRect(0,0,500,500)
  drawFrontHair()
}
function frontHairRight() {
  frontHairIndex++
  if (frontHairIndex >= frontHairs.length) {
          frontHairIndex = 0
        }
  let fHI = document.getElementById("frontHairIndex")
  fHI.innerHTML = frontHairIndex
  frontHairCTX.clearRect(0,0,500,500)
  drawFrontHair()
}
// back hair
function backHairLeft() {
  backHairIndex--
  if (backHairIndex < 0) {
      backHairIndex = backHairs.length-1
  }
  let bI = document.getElementById("backHairIndex")
  bI.innerHTML = backHairIndex
  backHairCTX.clearRect(0,0,500,500)
  drawBackHair()
}
function backHairRight() {
  backHairIndex++
  if (backHairIndex >= backHairs.length) {
      backHairIndex = 0
    }
  let bHI = document.getElementById("backHairIndex")
  bHI.innerHTML = backHairIndex
  backHairCTX.clearRect(0,0,500,500)
  drawBackHair()
}
})