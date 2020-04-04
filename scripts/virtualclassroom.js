const wait = t => new Promise(resolve => setTimeout(resolve, t));

if (document.fullscreenEnabled) main();

async function main() {
  do {
    await wait(100);
    var $fullscreenOld = document.querySelector(".acorn-fullscreen-button");
  } while ($fullscreenOld === null);

  let $fullscreen = $fullscreenOld.cloneNode(true); // Remove event listeners
  $fullscreenOld.replaceWith($fullscreen);

  $fullscreen.addEventListener("click", (e) => {
    e.preventDefault();

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  }, false);
}
