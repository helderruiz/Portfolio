const btnMobile = document.querySelector(".btn-mobile");
const iamgemIcon = document.querySelector("#imagem");
const nav = document.querySelector(".nav");

btnMobile.addEventListener("click", () => {
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  if (active) {
    iamgemIcon.setAttribute('src', 'assets/img/sair-da-tela.png')
  }else{
    iamgemIcon.setAttribute('src', 'assets/img/barra-de-menu.png')
  }
});
