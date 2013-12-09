"use strict";

module.exports = {
  keyPress: keyPress
};

function keyPress(def, key) {
  if (key == "w") {
    if (def.julia.juliaMovement)  def.julia.b -= 0.1 / def.pixelsPerUnit;
    else                          def.y -= 10 / def.pixelsPerUnit;
  } else if (key == "a") {
    if (def.julia.juliaMovement)  def.julia.a -= 0.1 / def.pixelsPerUnit;
    else                          def.x -= 10 / def.pixelsPerUnit;
  } else if (key == "s") {
    if (def.julia.juliaMovement)  def.julia.b += 0.1 / def.pixelsPerUnit;
    else                          def.y += 10 / def.pixelsPerUnit;
  } else if (key == "d") {
    if (def.julia.juliaMovement)  def.julia.a += 0.1 / def.pixelsPerUnit;
    else                          def.x += 10 / def.pixelsPerUnit;
  } else if (key == "r") {
    def.pixelsPerUnit *= 2;
  } else if (key == "f") {
    def.pixelsPerUnit /= 2;
  } else if (key == "t") {
    def.iterations += 10;
  } else if (key == "g") {
    def.iterations -= 10;
  } else if (key == "j") {
    def.julia.on = !def.julia.on;
    def.julia.juliaMovement = def.julia.juliaMovement && def.julia.on;
  } else if (key == "e" && def.julia.on) {
    def.julia.juliaMovement = !def.julia.juliaMovement;
  }
  return def;
}