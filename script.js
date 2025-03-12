class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.velocidade = 0;
      this.ligado = false;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        this.atualizarStatus();
        console.log("Carro ligado!");
  
        // Tocar o som do carro ligando
        const somLigar = document.getElementById("som-ligar");
        somLigar.play();
  
      } else {
        console.log("O carro já está ligado!");
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        this.velocidade = 0;
        this.atualizarStatus();
        this.atualizarVelocidadeNaTela();
        console.log("Carro desligado!");
      } else {
        console.log("O carro já está desligado!");
      }
    }
  
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10;
        this.atualizarVelocidadeNaTela();
        console.log("Acelerando! Velocidade:", this.velocidade);
      } else {
        console.log("O carro precisa estar ligado para acelerar!");
      }
    }
  
    atualizarVelocidadeNaTela() {
      const velocidadeElement = document.getElementById("velocidade");
      velocidadeElement.textContent = `Velocidade: ${this.velocidade} km/h`;
    }
  
    atualizarStatus() {
      const statusElement = document.getElementById("status");
      statusElement.textContent = this.ligado ? "Ligado" : "Desligado";
    }
  }
  
  // Criando um objeto carro
  const meuCarro = new Carro("Pagani Zonda R", "Preto");
  
  // Obtendo os elementos HTML
  const ligarBotao = document.getElementById("ligar");
  const desligarBotao = document.getElementById("desligar");
  const acelerarBotao = document.getElementById("acelerar");
  
  // Adicionando os event listeners aos botões
  ligarBotao.addEventListener("click", () => meuCarro.ligar());
  desligarBotao.addEventListener("click", () => meuCarro.desligar());
  acelerarBotao.addEventListener("click", () => meuCarro.acelerar());

  // script.js

// Classe Carro (Classe Base)
class Carro {
  constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.ligado = false;
      this.velocidade = 0;
  }

  ligar() {
      this.ligado = true;
      atualizarInfo();
  }

  desligar() {
      this.ligado = false;
      this.velocidade = 0;
      atualizarInfo();
  }

  acelerar(incremento) {
      if (this.ligado) {
          this.velocidade += incremento;
          atualizarInfo();
      }
  }

  frear(decremento) {
      this.velocidade -= decremento;
      if (this.velocidade < 0) {
          this.velocidade = 0;
      }
      atualizarInfo();
  }
}

// Classe Caminhao (Herda de Carro)
class Caminhao extends Carro {
  constructor(modelo, cor, capacidadeCarga) {
      super(modelo, cor);
      this.capacidadeCarga = capacidadeCarga;
      this.cargaAtual = 0;
  }

  carregar(peso) {
      if (this.cargaAtual + peso <= this.capacidadeCarga) {
          this.cargaAtual += peso;
          atualizarInfo();
      }
  }

  descarregar(peso) {
      this.cargaAtual -= peso;
      if (this.cargaAtual < 0) {
          this.cargaAtual = 0;
      }
      atualizarInfo();
  }
}

// Criação do objeto Caminhao
const meuCaminhao = new Caminhao("Modelo X", "Azul", 10000);

// Elementos do HTML
const infoElement = document.getElementById("info");
const pesoCargaInput = document.getElementById("pesoCarga");
const carregarBtn = document.getElementById("carregar");
const descarregarBtn = document.getElementById("descarregar");
const ligarBtn = document.getElementById("ligar");
const desligarBtn = document.getElementById("desligar");
const acelerarBtn = document.getElementById("acelerar");
const frearBtn = document.getElementById("frear");

// Funções para os botões
carregarBtn.addEventListener("click", () => {
  const peso = parseInt(pesoCargaInput.value);
  meuCaminhao.carregar(peso);
});

descarregarBtn.addEventListener("click", () => {
  const peso = parseInt(pesoCargaInput.value);
  meuCaminhao.descarregar(peso);
});

ligarBtn.addEventListener("click", () => {
  meuCaminhao.ligar();
});

desligarBtn.addEventListener("click", () => {
  meuCaminhao.desligar();
});

acelerarBtn.addEventListener("click", () => {
  meuCaminhao.acelerar(10);
});

frearBtn.addEventListener("click", () => {
  meuCaminhao.frear(10);
});

// Função para atualizar as informações na tela
function atualizarInfo() {
  infoElement.textContent = `Modelo: ${meuCaminhao.modelo}, Cor: ${meuCaminhao.cor}, Ligado: ${meuCaminhao.ligado}, Velocidade: ${meuCaminhao.velocidade} km/h, Carga: ${meuCaminhao.cargaAtual} kg / ${meuCaminhao.capacidadeCarga} kg`;
}

// Inicialização
atualizarInfo();