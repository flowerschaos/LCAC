// it's like an onion - it has *layers*

var layers = [];  // holds layers
function addLayer(order){ /// creates and adds a layer
    var l;
    layers.push(l = {
        order : order,
        items : [],
        render : function(){
           this.items.forEach(function(img){
               ctx.drawImage(img.bitmap,img.x,img.y);
          });
    });
    return l;
}

// some items for the layers
var img1 = {
    bitmap : new Image("URL"),
    x : 100,
    y : 200,
}
var img2 = {
    bitmap : new Image("URL"),
    x : 300,
    y : 200,
}
// create a layer order 1
var lay1 = AddLayer(1);
// add some items to lay1
lay1.items.push(img1);
lay1.items.push(img2);
// add a second layer order 0
var lay2 = AddLayer(0);
lay1.items.push(img3);
lay1.items.push(img4);

module.exports = addLayer;