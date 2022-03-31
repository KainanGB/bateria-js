const getHtmlKeys = document.querySelectorAll(".key");
const getUserValue = document.querySelector("input");
const getButton = document.querySelector(".composer button");

const getPressedKeys = document.addEventListener("keyup", (event) => {
  playAudioHandler(event.key.toLowerCase());
  //console.log(event.code);
});

const playAudioHandler = (keyWord) => {
  let getAudio = document.querySelector(`#s_key${keyWord}`);
  let getDataKey = document.querySelector(`div[data-key="key${keyWord}"]`);

  if (getAudio) {
    getAudio.play();
    if (getAudio.paused) {
      getAudio.play();
    } else getAudio.currentTime = 0;
  }

  if (getAudio) {
    getDataKey.classList.add("active");
    setTimeout(() => {
      getDataKey.classList.remove("active");
    }, 300);
  }
};

const getUserInputValueToComposition = () => {
  let value = getUserValue.value;
  let newValue = value.split("");

  newValue.forEach((key, index) => {
    setTimeout(() => {
      playAudioHandler(key);
    }, 300 * (index + 1));
  });
};

getButton.addEventListener("click", getUserInputValueToComposition);
