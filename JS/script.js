function mensagem() {
    alert ("Olá, siga as orientações para gerenciar seus perfis.");
}

let usuarios = [
    { nome: "Yan", foto: "img/avatar1.png" }
    ,{ nome: "Lohany", foto: "img/avatar6.jpg" }
    ,{ nome: "Alex", foto: "img/avatar4.png" }
];

let ul = document.querySelector("ul"); 

console.log (ul)

ul.innerHTML = "";

for (let i = 0; i < usuarios.length; i++) {

    ul.innerHTML += `<li>
                        <a href="#">
                            <div class="profile">
                            <img src="${usuarios[i].foto}" alt="${usuarios[i].nome}">
                            <span>Yan</span>
                        </div>
                        </a>
                     </li>`;

}

ul.innerHTML += `<li>
                    <a href="#">
                        <div class="profile">
                            <i class='bx bxs-plus-circle'></i>
                            <span>Adicionar perfil</span>
                        </div>
                    </a>
                </li>`;