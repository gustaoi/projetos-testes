const botaoTrailer = document.querySelector(".button");

const modal = document.querySelector(".modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
})

const botaoFecharModal = document.querySelector(".fechar")

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
})

const video = document.getElementById("video#video")