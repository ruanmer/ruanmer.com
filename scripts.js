/* Message to developers */
console.log(`Hi there! 👋 

Click on the body to see a basic but cool animation. 🐰

The source code can be found at https://github.com/ruanmer/ruanmer.com. 😉

Have a nice day! 😄`);

/* Easter Egg script */
const bodyElement = document.body;

const calcPercentage = (partialValue, totalValue) => {
  return Math.round((partialValue / totalValue) * 100);
};

bodyElement.addEventListener("click", function (event) {
  const screenWidth = window.innerWidth;
  const clickedLeftPosition = event.clientX;
  const easterEggElement = document.createElement("div");
  const easterEggLeftPosition = `${calcPercentage(clickedLeftPosition, screenWidth)}%`;

  easterEggElement.classList.add("easter-egg");
  easterEggElement.style.left = easterEggLeftPosition;

  bodyElement.append(easterEggElement);
});

// Prevent excess elements in the body
const observerOfExcessElements = new MutationObserver(() => {
  const allEasterEggElements = document.querySelectorAll(".easter-egg");

  if (allEasterEggElements.length > 10) {
    allEasterEggElements[0].remove();
  }
});

observerOfExcessElements.observe(bodyElement, { childList: true });
