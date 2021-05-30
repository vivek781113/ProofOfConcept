console.log("hello world");

class InventoryViewModel {
  constructor() {
    let self = this;

    const iconTypes = [
      { icon: "icon-bone", text: "Bone" },
      { icon: "icon-ball", text: "Ball" },
      { icon: "icon-circle", text: "Circle" },
      { icon: "icon-rabbit", text: "Rabbit" },
    ];

    self.inventory = ko.observableArray([
      iconTypes[0],
      iconTypes[1],
      iconTypes[2],
    ]);

    self.addItem = () => {
      self.inventory.push(
        iconTypes[Math.floor(Math.random() * iconTypes.length)]
      );
    };
    self.removeItem = function (data, event) {
      const idxToRemove = event.target.getAttribute("item-index");
      //   console.log(data);
      //   alert(idxToRemove);
      self.inventory.splice(idxToRemove, 1);
    };
  }
}
const knockoutApp = document.querySelector("#knockout-app-inventory");
ko.applyBindings(new InventoryViewModel(), knockoutApp);
