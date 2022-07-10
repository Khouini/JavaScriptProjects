const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};
mark.calcBMI();
john.calcBMI();
const check = mark.bmiValue > john.bmiValue;
if (check) {
  console.log(
    `Mark's BMI (${mark.bmiValue}) is higher than John's BMI (${john.bmiValue})`
  );
} else {
  console.log(
    `John's BMI" (${john.bmiValue}) is higher than Mark's BMI (${mark.bmiValue})`
  );
}
