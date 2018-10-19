const GRADIENTS = [
  "linear-gradient( 135deg, #F6D242 10%, #FF52E5 100%)",
  "linear-gradient( 135deg, #92FFC0 10%, #002661 100%)",
  "linear-gradient( 135deg, #F0FF00 10%, #58CFFB 100%)",
  "linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)",
  "linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%)",
  "linear-gradient( 135deg, #FFF3B0 10%, #CA26FF 100%)",
  "linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)"
]

const EMOJI_LINES = [
  "Let’s get this bread 🍞",
  "/wave 🌊",
  "Beep boop 🤖",
  "Scootin’ along 🐛",
  "Rome wasn’t build in a day 🏛",
  "Time for a cup of coffee ☕️",
  "A whale of a tale 🐋"
]

$(document).ready(function(){
  // Sets the current time, a random emoji line, and the background gradient.
  setCurrentTime();
  setEmojiLine();
  setBackgroundGradient();

  // Time updates every 10 seconds.
  setInterval(function() {
    setCurrentTime();
  }, 10*1000);

  // Sets current time and formats minutes into double digits.
  function setCurrentTime() {
    let now = new Date();
    let hours = now.getHours()
    if (hours === '0') { hours = '00' }
    let mins = ('0' + now.getMinutes()).slice(-2);
    $('.time').html(`${hours}:${mins}`);
  }

  // Sets a background gradient based on the day of the week.
  function setBackgroundGradient() {
    let day = new Date().getDay();
    document.getElementById("bg").style.backgroundImage = GRADIENTS[day];
  }

  // Pulls a random line out of EMOJI_LINES.
  function setEmojiLine() {
    let randNum = Math.floor( Math.random() * EMOJI_LINES.length );
    document.getElementById("emoji-line").innerHTML = "<strong>" + EMOJI_LINES[randNum] + "</strong>";
  }
});
