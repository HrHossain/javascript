const resultElement = document.getElementById('result');
const startBtn = document.getElementById('startBtn');
const animatedSvg = startBtn.querySelector('svg');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);

let recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (recognition) {
  recognition = new recognition();
  console.log(recognition)
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'bn-BD';

  recognition.onstart = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    animatedSvg.classList.remove('hidden');
    console.log('Recording started');
  };

  recognition.onresult = function (event) {
    console.log(event.results)
    let result = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        result += event.results[i][0].transcript + ' ';
      } else {
        result += event.results[i][0].transcript;
      }
    }

    resultElement.innerText = result;

    if (result.toLowerCase().includes('stop recording')) {
      resultElement.innerText = result.replace(/stop recording/gi, '');
      stopRecording();
    }
  };

  recognition.onerror = function (event) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    console.error('Speech recognition error:', event.error);
  };

  recognition.onend = function () {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    animatedSvg.classList.add('hidden');
    console.log('Speech recognition ended');
  };
} else {
  console.error('Speech recognition not supported');
}

function startRecording() {
  resultElement.innerText = '';
  recognition.start();
  console.log("start recording")
}

function stopRecording() {
  if (recognition) {
    recognition.stop();
  }
  console.log("stop recording")
}
