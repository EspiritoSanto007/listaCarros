let listaCarros = [
  {
    nome: "Drako GTE",
    img: "img/drako-gte.webp",
    descricao: "O Drako GTE e um sedã esportivo",
  },
  {
    nome: "De Tomaso",
    img: "img/de-tomaso.webp",
    descricao: "O De Tomaso P72 e um supercarro",
  },
  {
    nome: "Ferrari LaFerrari",
    img: "img/ferrari-laferrari.webp",
    descricao: "O Ferrari LaFerrari e um supercarro",
  },
  {
    nome: "Pagani Huayra",
    img: "img/pagani-huayra.webp",
    descricao: "O Pagani Huayra e um supercarro",
  },
  {
    nome: "McLaren Elva",
    img: "img/mclaren-elva.webp",
    descricao: "O McLaren Elva e um supercarro",
  },
  {
    nome: "Czinger 21C",
    img: "img/czinger-21c.webp",
    descricao: "O Czinger 21C e um supercarro",
  },
];

listaCarros.map((carro, possicao) => {
  let cardCarro = document.getElementById("cards");
  cardCarro.innerHTML += `
        <div class="col-md-4">
          <div class="card m-2">
            <img src="${carro.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${carro.nome}</h5>
              <a href="#" onclick=zoomImg('${possicao}') class="btn btn-secondary"><i class="bi bi-zoom-in"></i></a>
            </div>
          </div>
        </div>`;
});

function zoomImg(possicao) {
  let carroSelecionado = listaCarros[possicao];
  document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
  document.getElementById("descricaoCarro").innerHTML =
    carroSelecionado.descricao;
  document.getElementById("imgModal").src = carroSelecionado.img;

  new bootstrap.Modal("#zoomImg").show();
}

function alterarTemaSite() {
  let tema = document.querySelector("html").getAttribute("data-bs-theme");
  if (tema === "dark") {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector(
      "#alterarTemaSite"
    ).innerHTML = `<i class="bi bi-moon-fill"></i>`;
  } else {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector(
      "#alterarTemaSite"
    ).innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
  }
}
