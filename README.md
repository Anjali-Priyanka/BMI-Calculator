# BMI-Calculator
# ⚖️ BMI (Body Mass Index) Calculator

A simple and interactive **BMI Calculator** built using **HTML**, **CSS**, and **JavaScript**. Users can input their height and weight to calculate their **BMI** and view the associated **health category** (Underweight, Normal, Overweight, or Obese). Bonus features include color-coded results, reset functionality, and optional health tips.

---

## 🎯 Objective

Create a user-friendly web application to:
- Accept **height** and **weight** inputs
- Calculate **BMI**
- Display the **result** and the **BMI category**
- Provide a clean and responsive UI with optional enhancements

---

## 📷 Output

- 🧮 Enter height and weight
- 🔘 Click "Calculate BMI"
- 📊 Display BMI value and category (e.g., Normal weight)
- 🧼 Reset fields with "Reset" button
- 🌈 Bonus: Color-coded result + health tips

---

## ✅ Features

### 🔹 Core Features

1. **Input Fields**
   - Height input (in **cm** or **m**)
   - Weight input (in **kg**)
   - Validates for non-empty and numeric values

2. **Calculate BMI**
   - Button labeled **"Calculate BMI"**
   - Uses formula:  
     \[
     \text{BMI} = \frac{\text{Weight (kg)}}{(\text{Height (m)})^2}
     \]

3. **Result Display**
   - Shows the **calculated BMI** (1 decimal place)
   - Displays **BMI category**:
     - Underweight: BMI < 18.5  
     - Normal: 18.5 ≤ BMI < 24.9  
     - Overweight: 25 ≤ BMI < 29.9  
     - Obese: BMI ≥ 30

4. **Reset Button**
   - Clears all fields and result data

---

### 🌟 Bonus Features (Advanced)

- **🌈 Color-Coded Results**  
  Different background colors for each BMI category

- **📊 Visual Display (Optional)**  
  Progress bar or pie chart to show BMI category scale

- **📝 Health Tips**  
  Shows suggestions or messages based on the BMI category

- **📱 Responsive Design**  
  Works seamlessly across mobile and desktop screens

---

## 💻 Tech Stack

- **HTML** – For structuring the form and result display
- **CSS** – For styling, responsiveness, and color themes
- **JavaScript** – For logic, validation, and DOM manipulation

---

## 🛠 Development Guidelines

- Use `parseFloat()` to extract and validate numeric input
- Add event listeners with `addEventListener()`
- Use `.innerText` or `.textContent` for DOM updates
- Apply CSS classes dynamically to reflect BMI category
- Ensure mobile responsiveness using CSS Grid or Flexbox

---

## 📦 How to Use

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/your-username/bmi-calculator.git
   cd bmi-calculator

 2. Open index.html in a Browser

3.Input Your Height & Weight, then click Calculate BMI

4.View Your Result and use Reset to clear
