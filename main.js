// 1 task

function checkText() {
  var textareaText = document
    .getElementById("textareaElement")
    .value.toLowerCase();
  var inputText = document.getElementById("inputElement").value.toLowerCase();
  var resultElement = document.getElementById("result");

  if (textareaText.includes(inputText)) {
    resultElement.innerHTML = "Matn ichida so'z mavjud";
  } else {
    resultElement.innerHTML = "Matn ichida so'z yo'q";
  }
}

// 2 task

function displayFileSize() {
  var fileInput = document.getElementById("fileInput");
  var fileSizeDisplay = document.getElementById("fileSizeDisplay");

  if (fileInput.files.length > 0) {
    var fileSizeKB = fileInput.files[0].size / 1024;
    fileSizeDisplay.innerText = "Fayl hajmi: " + fileSizeKB.toFixed(2) + " KB";
  } else {
    fileSizeDisplay.innerText = "";
  }
}

// 3 task

function checkBrackets() {
  var inputString = document.getElementById("inputString").value;
  var bracketResult = document.getElementById("bracketResult");

  var openBrackets = 0;
  var closeBrackets = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      openBrackets++;
    } else if (inputString[i] === ")") {
      closeBrackets++;
    }
  }

  if (openBrackets === closeBrackets) {
    bracketResult.innerHTML = "Qavslar teng soni";
  } else {
    bracketResult.innerHTML = "Qavslar teng soni emas";
  }
}
