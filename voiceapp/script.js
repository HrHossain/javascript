    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const audioPlayback = document.getElementById('audioPlayback');

    let mediaRecorder;
    let audioChunks = [];

    startButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];

            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'text/plain' }); // Or other format
                const audioUrl = URL.createObjectURL(audioBlob);
                console.log(audioBlob)
                audioPlayback.src = audioUrl;
                stopButton.disabled = true;
                startButton.disabled = false;
            };

            mediaRecorder.start();
            startButton.disabled = true;
            stopButton.disabled = false;

            console.log(audioChunks)
        } catch (err) {
            console.error('Error accessing microphone:', err);
        }
    });

    stopButton.addEventListener('click', () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }
    });
