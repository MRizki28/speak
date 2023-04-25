function speak() { 
    const text = document.getElementById("text-input").value;
    const languange = new SpeechSynthesisUtterance(text);
    languange.lang = "id-ID";
    window.speechSynthesis.speak(languange);
 }