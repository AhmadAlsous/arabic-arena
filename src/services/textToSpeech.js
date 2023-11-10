import { SPEECH_API_URL } from '../config/constants';

export async function readText(text) {
  const request = {
    input: { text },
    voice: { languageCode: 'ar-XA', name: 'ar-XA-Wavenet-D' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  const response = await fetch(SPEECH_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (response.ok) {
    const data = await response.json();
    const audioBlob = new Blob(
      [Uint8Array.from(atob(data.audioContent), (c) => c.charCodeAt(0))],
      { type: 'audio/mp3' }
    );
    const audioURL = URL.createObjectURL(audioBlob);
    playAudio(audioURL);
  } else {
    console.error('Failed to synthesize text:', await response.text());
  }
}

function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}
