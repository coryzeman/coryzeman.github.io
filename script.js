document.querySelectorAll(".magnetic").forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (event.clientX - (left + width / 2)) * 0.2; // Magnetic pull strength
    const y = (event.clientY - (top + height / 2)) * 0.2;

    element.style.transform = `translate(${x}px, ${y}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "translate(0, 0)"; // Reset position when the cursor leaves
  });
});
