const calcPercentage = (partialValue, totalValue) => {
  return Math.round((partialValue / totalValue) * 100);
};

const createLinesElement = () => {
  const element = document.createElement("div");

  element.classList.add("easter-egg-lines");

  return element;
};

const createLineElement = ({ left = "50%" } = {}) => {
  const element = document.createElement("div");

  element.classList.add("easter-egg-line");
  element.style.left = left;

  return element;
};

const init = ({ targetElement }) => {
  const linesElement = createLinesElement();

  targetElement.append(linesElement);

  targetElement.addEventListener("click", (event) => {
    const targetWidth = targetElement.offsetWidth;
    const clickedLeftPosition = event.clientX;
    const leftPosition = `${calcPercentage(clickedLeftPosition, targetWidth)}%`;
    const lineElement = createLineElement({ left: leftPosition });

    linesElement.append(lineElement);
  });

  // Prevent excess elements in the body
  const observerOfExcessElements = new MutationObserver(() => {
    const allLineElements = linesElement.children;

    if (allLineElements.length > 10) {
      allLineElements[0].remove();
    }
  });

  observerOfExcessElements.observe(linesElement, { childList: true });
};

export default init;
