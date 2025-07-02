function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultBox = document.getElementById("resultBox");
  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");
  const bmiTips = document.getElementById("bmiTips");

  // Validation
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(1);

  // Determine category
  let category = "";
  let tips = "";
  resultBox.className = "result"; // reset classes

  if (bmi < 18.5) {
    category = "Underweight";
    resultBox.classList.add("underweight");
    tips = "Try to eat more balanced meals and consult a doctor.";
  } else if (bmi < 24.9) {
    category = "Normal";
    resultBox.classList.add("normal");
    tips = "Great job! Maintain a healthy lifestyle.";
  } else if (bmi < 29.9) {
    category = "Overweight";
    resultBox.classList.add("overweight");
    tips = "Exercise regularly and watch your diet.";
  } else {
    category = "Obese";
    resultBox.classList.add("obese");
    tips = "Please consult a healthcare provider.";
  }

  // Display result
  bmiValue.textContent = `Your BMI: ${roundedBMI}`;
  bmiCategory.textContent = `Category: ${category}`;
  bmiTips.textContent = tips;
  resultBox.classList.remove("hidden");
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  const resultBox = document.getElementById("resultBox");
  resultBox.classList.add("hidden");
}
