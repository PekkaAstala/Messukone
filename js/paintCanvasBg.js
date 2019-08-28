var c = document.getElementById("bgCanvas");

var widthPx = function(widthFloat) {
  return widthFloat * c.width;
};
var heightPx = function(heightFloat) {
  return heightFloat * c.height;
};

var ctx = c.getContext("2d");

ctx.rect(0, 0, widthPx(1.0), heightPx(1.0));
ctx.fillStyle = "#d7e6f9";
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(widthPx(1.0), 0);
ctx.lineTo(widthPx(1.0), heightPx(0.36));
ctx.lineTo(0, heightPx(0.43));
ctx.closePath();
ctx.fillStyle = "#a5ccf2";
ctx.fill();
/* Bird image gray shadow */
ctx.beginPath();
ctx.moveTo(widthPx(0.05), heightPx(0.84));
ctx.lineTo(widthPx(0.43), heightPx(0.84));
ctx.lineTo(widthPx(0.41), heightPx(0.27));
ctx.lineTo(widthPx(0.06), heightPx(0.27));
ctx.closePath();
ctx.fillStyle = "#a7aaac";
ctx.fill();
/* Bird image white bg */
ctx.beginPath();
ctx.moveTo(widthPx(0.06), heightPx(0.27));
ctx.lineTo(widthPx(0.4), heightPx(0.26));
ctx.lineTo(widthPx(0.42), heightPx(0.83));
ctx.lineTo(widthPx(0.04), heightPx(0.83));
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();
/* facts area gray shadow */
ctx.beginPath();
ctx.moveTo(widthPx(0.49), heightPx(0.9));
ctx.lineTo(widthPx(0.935), heightPx(0.87));
ctx.lineTo(widthPx(0.945), heightPx(0.32));
ctx.lineTo(widthPx(0.47), heightPx(0.3));
ctx.closePath();
ctx.fillStyle = "#a7aaac";
ctx.fill();
/* facts area white bg */
ctx.beginPath();
ctx.moveTo(widthPx(0.47), heightPx(0.3));
ctx.lineTo(widthPx(0.94), heightPx(0.31));
ctx.lineTo(widthPx(0.93), heightPx(0.86));
ctx.lineTo(widthPx(0.48), heightPx(0.89));
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();
/* clear the image area */
ctx.globalCompositeOperation = "destination-out";
ctx.beginPath();
ctx.moveTo(widthPx(0.075), heightPx(0.29));
ctx.lineTo(widthPx(0.388), heightPx(0.28));
ctx.lineTo(widthPx(0.405), heightPx(0.805));
ctx.lineTo(widthPx(0.055), heightPx(0.805));
ctx.closePath();
ctx.fill();
