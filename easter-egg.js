const calcPercentage = (partialValue, totalValue) => {
  return Math.round((partialValue / totalValue) * 100);
};

const createContainerElement = () => {
  const element = document.createElement("div");

  return element;
};

const createElement = ({ left = "50%" } = {}) => {
  const element = document.createElement("div");

  element.classList.add("easter-egg");
  element.style.left = left;

  return element;
};

const init = ({ targetElement }) => {
  const containerElement = createContainerElement();

  targetElement.append(containerElement);

  targetElement.addEventListener("click", (event) => {
    const screenWidth = window.innerWidth;
    const clickedLeftPosition = event.clientX;
    const leftPosition = `${calcPercentage(clickedLeftPosition, screenWidth)}%`;
    const element = createElement({ left: leftPosition });

    containerElement.append(element);
  });

  // Prevent excess elements in the body
  const observerOfExcessElements = new MutationObserver(() => {
    const allElements = containerElement.children;

    if (allElements.length > 10) {
      allElements[0].remove();
    }
  });

  observerOfExcessElements.observe(containerElement, { childList: true });
};

export default init;
