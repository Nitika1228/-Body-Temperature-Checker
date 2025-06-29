function checkTemp() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const result = document.getElementById("result");

  if (!temp || temp <= 0) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  let status = "";

  if (temp < 35.0) {
    status = "⚠️ Low Body Temperature";
  } else if (temp >= 35.0 && temp <= 37.5) {
    status = "✅ Normal Body Temperature";
  } else {
    status = "🌡️ Fever Detected";
  }

  result.innerHTML = `Your temperature is <strong>${temp.toFixed(1)}°C</strong> — ${status}`;
}

