const sounds = [
  "./audio/darling/001.mp3",
  "./audio/darling/002.mp3",
  "./audio/darling/003.mp3",
  "./audio/darling/004.mp3",
  "./audio/darling/005.mp3",
  "./audio/darling/006.mp3",
  "./audio/darling/007.mp3",
  "./audio/darling/008.mp3",
  "./audio/darling/009.mp3",
  "./audio/darling/010.mp3",
  "./audio/darling/011.mp3",
  "./audio/darling/012.mp3",
];

function audio() {
  var audio = document.getElementById("audio");
  audio.src = sounds[Math.floor(Math.random() * 12)];
  audio.volume = 1;
  audio.play();
  gsap.to("#img", { duration: 0.4, y: "20px" });
  audio.onended = () => {
    gsap.to("#img", { duration: 0.4, y: "0px" });
  };
}

document.getElementById("img").onclick = audio;

// var SpeechRecognition =
// 	window.SpeechRecognition || SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList =
// 	window.SpeechGrammarList || SpeechGrammarList || webkitSpeechGrammarList;
// var grammar = "#JSGF V1.0;";
// var recognition = new SpeechRecognition();
// var grammarList = new SpeechGrammarList();
// grammarList.addFromString(grammar, 1);
// recognition.grammers = grammarList;
// recognition.lang = "pl-PL";
// recognition.interimResults = false;
// var canOpen = true;
// recognition.onresult = e => {
// 	console.log(e);
// 	let result = e.results[0][0].transcript.toLowerCase();
// 	document.getElementById("msg").innerHTML += result + "<br>";
// 	console.log(result);
// 	if (canOpen && result.includes("otwórz")) {
// 		canOpen = false;
// 		var sentence = result.split("otwórz ")[1];
// 		window.open(
// 			`http://www.google.com/search?q=${encodeURI(sentence)}&btnI`
// 		);
// 	}
// 	if (result.includes("wyślij wiadomość")) {
// 		var sentence = result
// 			.split("wyślij wiadomość")
// 			.slice(1)
// 			.join("wyślij wiadomość");
// 		// $.post(
// 		// 	"https://discordapp.com/api/webhooks/495156803374678016/QGiOR_Zqp-Hb7emFihO4bA6JX841UmMh_l1XB3IX-2dw4ECmduaTgMl2FcL9bq0TEBhK",
// 		// 	{ content: sentence, username: username }
// 		// );
// 	}

// 	console.log("onresult");
// };
// recognition.onspeechend = e => {
// 	console.log(e);
// 	recognition.stop();
// 	console.log("onsppechend");
// };
// recognition.onend = e => {
// 	canOpen = true;
// 	recognition.start();
// 	console.log("onend");
// };
// recognition.start();
