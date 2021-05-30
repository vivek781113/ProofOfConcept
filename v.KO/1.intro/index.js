console.log("hello world");
class CounterViewModel {
    constructor() {
        let self = this;
        self.userName = ko.observable("Bruce");
        self.count = ko.observable(0);

        const fullName = "Bruce Wayne";
        //update the data-binding by calling as function
        self.userName(fullName);

        self.increase = function () {
            const currentValue = self.count();
            self.count(currentValue + 1);
        };

        self.decrease = function () {
            const currentValue = self.count();
            if (currentValue > 0)
                self.count(currentValue - 1);
        };

        self.dogStatus = ko.computed(function () {
            const currentCount = self.count();
            if (currentCount === 0)
                return "Upset!";
            else if (currentCount === 1)
                return "Underwhelmed";
            else if (currentCount >= 2)
                return "Excited";
            else
                return "...";
        });
    }
}

ko.applyBindings(
  new CounterViewModel(),
  document.querySelector("#knockout-app-counter")
);
