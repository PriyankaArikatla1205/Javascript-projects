

const right = document.querySelector(".right");
right.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    const answer = e.target.parentElement.querySelector(".answer");
    const arrow = e.target.querySelector(".arrow");
    const img = e.target.querySelector("img");
      answer.classList.toggle("hidden")
      arrow.classList.toggle("hidden")
      img.classList.toggle("hidden2")
      e.target.classList.toggle("active");
    }
    else if (e.target.classList.contains("p")) {
      const answer = e.target.parentElement.parentElement.querySelector(".answer");
      const arrow = e.target.parentElement.querySelector(".arrow");
      const img = e.target.parentElement.querySelector("img");
      answer.classList.toggle("hidden");
     arrow.classList.toggle("hidden");
      img.classList.toggle("hidden2");
      e.target.parentElement.classList.toggle("active");
    }
});