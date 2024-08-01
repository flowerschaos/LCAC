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

// Select the control elements
const fLeftButton = document.querySelector(".leftTriangle.front");
const fRightButton = document.querySelector(".rightTriangle.front");
const bLeftButton = document.querySelector(".leftTriangle.back");
const bRightButton = document.querySelector(".rightTriangle.back");

// Front hair controls
fLeftButton.addEventListener("click", () => {
  frontHairIndex--;
  if (frontHairIndex < 0) {
    frontHairIndex = frontHairs.length - 1;
  }
  document.getElementById("frontHairIndex").innerHTML = frontHairIndex;
  frontHairCTX.clearRect(0, 0, 500, 500);
  drawFrontHair();
});

fRightButton.addEventListener("click", () => {
  frontHairIndex++;
  if (frontHairIndex >= frontHairs.length) {
    frontHairIndex = 0;
  }
  document.getElementById("frontHairIndex").innerHTML = frontHairIndex;
  frontHairCTX.clearRect(0, 0, 500, 500);
  drawFrontHair();
});

// Back hair controls
bLeftButton.addEventListener("click", () => {
  backHairIndex--;
  if (backHairIndex < 0) {
    backHairIndex = backHairs.length - 1;
  }
  document.getElementById("backHairIndex").innerHTML = backHairIndex;
  backHairCTX.clearRect(0, 0, 500, 500);
  drawBackHair();
});

bRightButton.addEventListener("click", () => {
  backHairIndex++;
  if (backHairIndex >= backHairs.length) {
    backHairIndex = 0;
  }
  document.getElementById("backHairIndex").innerHTML = backHairIndex;
  backHairCTX.clearRect(0, 0, 500, 500);
  drawBackHair();
});


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
})