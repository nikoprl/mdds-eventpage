configObj = {
  buttonD: "M8 18.568L10.8 21.333 16 16.198 21.2 21.333 24 18.568 16 10.667z",
  buttonT:
    "translate(-1148 -172) translate(832 140) translate(32 32) translate(284)",
};
const createButton = (obj) => {
  const body = document.querySelector("body");

  backToTopButton = document.createElement("span");
  backToTopButton.id = "scroll-top";
  backToTopButton.classList.add(
    "scroll-top",
    "z-50",
    "w-10",
    "h-10",
    "mr-10",
    "mb-10",
    "rounded-full",
    "shadow-xl",
    "fixed",
    "outline-none",
    "right-0",
    "bottom-0",
    "cursor-pointer",
    "text-center",
    "border-2",
    "text-royalpurple",
    "bg-royalpurple",
    "hidden"
  );
  body.appendChild(backToTopButton);
  backToTopButton.innerHTML =
    '<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>';
  backToTopButtonSvg = document.querySelector(".back-to-top-button-svg");
  backToTopButtonSvg.classList.add(
    "align-middle",
    "m-auto",
    "justify-center",
    "w-8",
    "h-8"
  );
  backToTopButton.appendChild(backToTopButtonSvg);
  backToTopButtonImg = document.querySelector(".back-to-top-button-img");
  backToTopButtonImg.classList.add("fill-white");
  backToTopButtonSvg.appendChild(backToTopButtonImg);
  backToTopButtonImg.setAttribute("d", obj.buttonD);
  backToTopButtonImg.setAttribute("transform", obj.buttonT);
  
  window.onscroll = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
       backToTopButton.classList.remove("hidden")
    } else {
      backToTopButton.classList.add("hidden")
    }
  };
  backToTopButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
};
document.addEventListener("DOMContentLoaded", () => {
  createButton(configObj, null);
});
