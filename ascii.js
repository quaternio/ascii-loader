const EventEmitter = require('events');

class ASCIILoader extends EventEmitter {
  constructor(barLength = 10) {
    super();
    this.progress = 0;
    this.barLength = barLength;
    this.representation = "[" + "-".repeat(barLength) + "]";
  }

  updateProgress(progress) {
    this.progress = progress;
    this.numTicks = Math.round(progress * this.barLength);

    // Create ASCII representation
    this.updateRepresentation();

    this.emit("updated");
  }

  /**
    * Update the ASCII representation of progress.
    *
    * "[----------]"   0%
    * "[=---------]"  10%
    * "[==--------]"  20%
    * "[===-------]"  30%
    * "[====------]"  40%
    * "[=====-----]"  50%
    * "[======----]"  60%
    * "[=======---]"  70%
    * "[========--]"  80%
    * "[=========-]"  90%
    * "[==========]" 100%
    */
  updateRepresentation() {
    this.representation = "[" + "=".repeat(this.numTicks) + "-".repeat(this.barLength - this.numTicks) + "]";
  }

  getRepresentation() {
    return this.representation;
  }
}

module.exports = {
  ASCIILoader,
};

