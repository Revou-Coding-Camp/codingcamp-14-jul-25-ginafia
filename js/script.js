// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const dob = document.getElementById("dob");
  const genderInputs = document.getElementsByName("gender");
  const messageText = document.getElementById("messageText");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = Array.from(genderInputs).find((input) => input.checked);

    if (!name.value || !dob.value || !gender || !messageText.value) {
      result.innerHTML = `<span class="text-red-500">Semua field harus diisi!</span>`;
      return;
    }

    const currentTime = new Date().toLocaleString();

    result.innerHTML = `
    <strong>Current Time:</strong> ${currentTime}

    <strong>Nama:</strong> ${name.value}
    <strong>Tanggal Lahir:</strong> ${dob.value}
    <strong>Jenis Kelamin:</strong> ${gender.value}
    <strong>Pesan:</strong> ${messageText.value}
        `;
  });
});
