// Função para adicionar o botão "Voltar"
function addBackButton() {
  const backButton = document.createElement("button");
  backButton.setAttribute("id", "back-btn");
  backButton.setAttribute("class", "btn btn-primary float-right mt-3 mb-3");
  backButton.innerText = "Voltar";

  // Adiciona evento de clique ao botão "Voltar"
  backButton.addEventListener("click", function () {
    showWelcomePage(); // Volta para a página de boas-vindas
  });

  // Adiciona o botão "Voltar" ao main-screen
  document.getElementById("main-screen").appendChild(backButton);
}

// Função para exibir a página de boas-vindas
function showWelcomePage() {
  document.getElementById("main-screen").innerHTML = `
      <h2>Bem-vindo!</h2>
    `;
  document.getElementById("form-details").innerHTML = ""; // Limpa os detalhes do formulário
}

// Botão 1
document
  .getElementById("insert-form-btn")
  .addEventListener("click", function () {
    document.getElementById("main-screen").innerHTML = `
      <h2>Formulário de Inserção de Dados</h2>
      <form id="data-form">
        <div class="form-group">
          <label for="inputName">Nome</label>
          <input type="text" class="form-control" id="inputName" required>
        </div>
        <div class="form-group">
          <label for="inputMaritalStatus">Estado Civil</label>
          <select class="form-control" id="inputMaritalStatus" required>
            <option>Casado</option>
            <option>Solteiro</option>
            <option>Divorciado</option>
            <option>Viúvo</option>
          </select>
        </div>
        <div class="form-group">
          <label for="inputBirthYear">Ano de Nascimento</label>
          <input type="number" class="form-control" id="inputBirthYear" required>
        </div>
        <div class="form-group">
          <label for="inputHeight">Altura</label>
          <input type="number" class="form-control" id="inputHeight" required>
        </div>
        <div class="form-group">
          <label for="inputIsMember">Sócio (Sim/Não)</label>
          <select class="form-control" id="inputIsMember" required>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" required>
        </div>
        <div class="form-group">
          <label for="inputFootballClub">Clube de Futebol</label>
          <input type="text" class="form-control" id="inputFootballClub" required>
        </div>
        <button type="submit" class="btn btn-primary">Inserir Dados</button>
      </form>
    `;

    document
      .getElementById("data-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("inputName").value;
        const birthYear = document.getElementById("inputBirthYear").value;
        const footballClub = document.getElementById("inputFootballClub").value;

        // Calcula a idade a partir do ano de nascimento
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        // Verifica se os campos foram preenchidos corretamente
        if (name && birthYear && footballClub) {
          // Exibir mensagem no ecran preto
          document.getElementById("main-screen").innerHTML = `
          <h2>O Formando ${name} tem ${age} anos</h2>
          <p>Eu sou o ${name} e sou adepto do ${footballClub}</p>
          <p>
          Nome: ${name}<br>
          Estado Civil: ${
            document.getElementById("inputMaritalStatus").value
          }<br>
          Ano de Nascimento: ${birthYear}<br>
          Idade: ${age}<br>
          Altura: ${document.getElementById("inputHeight").value}<br>
          Sócio: ${document.getElementById("inputIsMember").value}<br>
          Email: ${document.getElementById("inputEmail").value}<br>
          Clube de Futebol: ${footballClub}
        </p>
        <p>
          Todo o nome: ${name}<br>
          Primeira Letra do Nome: ${name.charAt(0)}<br>
          Ultima letra do nome: ${name.charAt(name.length - 1)}<br>
          Da primeira letra até à 3ª: ${name.slice(0, 3)}<br>
          Todas as letras menos a primeira: ${name.slice(1)}<br>
          Duas ultimas letras: ${name.slice(-2)}<br>
          Todos os nomes separados por espaços (split): ${name.split(" ")}
        </p>
        `;
        } else {
          // Caso algum campo não tenha sido preenchido, exibe uma mensagem de erro
          alert("Por favor, preencha todos os campos do formulário.");
        }
        addBackButton();
      });
  });

// Botão 2

document.getElementById("welcome-btn").addEventListener("click", function () {
  // Obter a data atual
  const currentDate = new Date();
  // Obter a hora atual
  const currentHour = currentDate.getHours();

  let greeting;
  // Definir a saudação com base na hora atual
  if (currentHour < 12) {
    greeting = "Bom dia";
  } else if (currentHour < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  // Obter informações da data
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("pt", { month: "long" });

  // Exibir a mensagem com a saudação e informações da data
  document.getElementById(
    "main-screen"
  ).innerHTML = `<h2 class="texto">${greeting} hoje são ${currentHour}h${currentDate.getMinutes()}m e estamos no dia ${day} de ${month}</h2>`;
  addBackButton();
});

// Botão 4

document.getElementById("address-btn").addEventListener("click", function () {
  var currentURL = window.location.href;

  document.getElementById(
    "main-screen"
  ).innerHTML = `<h2 class="texto">Endereço da Página: ${currentURL}</h2>`;
  addBackButton();
});

// Botão 5

document.getElementById("numbers-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
  <div id="form-container">
  <div class="form-group">
    <label for="inputNumber1">Número 1:</label>
    <input class="form-control" id="inputNumber1" required>
  </div>
  <div class="form-group">
    <label for="inputNumber2">Número 2:</label>
    <input class="form-control" id="inputNumber2" required>
  </div>
  <div class="form-group">
    <label for="inputNumber3">Número 3:</label>
    <input class="form-control" id="inputNumber3" required>
  </div>
  <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
</div>
</div>
`;

  document.getElementById("confirm-btn").addEventListener("click", function () {
    // Obter os valores dos números inseridos pelo utilizador
    const number1 = parseFloat(document.getElementById("inputNumber1").value);
    const number2 = parseFloat(document.getElementById("inputNumber2").value);
    const number3 = parseFloat(document.getElementById("inputNumber3").value);

    // Verificar se os valores inseridos são números
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
      alert("Por favor, insira apenas números.");
      return; // Encerra a execução da função se algum dos valores não for um número
    }

    // Função para verificar se um número é positivo ou negativo
    function checkPositiveNegative(number) {
      return number >= 0 ? "positivo" : "negativo";
    }

    // Função para ordenar os números do maior para o menor
    function sortNumbersDescending(a, b) {
      return b - a;
    }

    // Verificar qual número está mais perto de 100
    function closestTo100(a, b, c) {
      const distA = Math.abs(100 - a);
      const distB = Math.abs(100 - b);
      const distC = Math.abs(100 - c);

      if (distA < distB && distA < distC) {
        return a;
      } else if (distB < distA && distB < distC) {
        return b;
      } else {
        return c;
      }
    }

    // Calcular a diferença entre o maior e o menor número
    function differenceBetweenMaxMin(a, b, c) {
      const max = Math.max(a, b, c);
      const min = Math.min(a, b, c);
      return max - min;
    }

    // Calcular a soma dos números de 1 até ao primeiro valor introduzido pelo utilizador
    function sumFrom1ToN(n) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
    }

    // Processar e exibir os resultados
    const results = `
      <h2>1. Positivo ou Negativo:</h2>
      <br>
      <p>O primeiro número inserido foi ${number1} e é ${checkPositiveNegative(
      number1
    )}
    <br>
    </p>
      <p>O segundo número inserido foi ${number2} e é ${checkPositiveNegative(
      number2
    )}
    <br>
    </p>
      <p>O terceiro número inserido foi ${number3} e é ${checkPositiveNegative(
      number3
    )}
    <br>
    </p>
      <h2>2. Maior para o Menor:</h2>
      <p>${[number1, number2, number3]
        .sort(sortNumbersDescending)
        .join("<br>")}</p>
      <h2>3. Número mais próximo de 100:</h2>
      <p>O número ${closestTo100(
        number1,
        number2,
        number3
      )} está mais perto de 100.</p>
      <h2>4. Diferença entre o Maior e o Menor:</h2>
      <p>A diferença entre ${Math.max(number1, number2, number3)} e ${Math.min(
      number1,
      number2,
      number3
    )} é ${differenceBetweenMaxMin(number1, number2, number3)}.
    <br>
    </p>
      <h2>5. Soma dos Números de 1 até ao Primeiro Valor:</h2>
      <p>A soma dos números de 1 até ${number1} é ${sumFrom1ToN(number1)}.</p>
  `;

    // Exibir os resultados no main-screen
    document.getElementById("main-screen").innerHTML = results;
    addBackButton();
  });
});

// Botão 6
document.getElementById("guess-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
  <div id="form-container">
      <div class="form-group">
          <label for="inputNumber10">Insira um número entre 1 e 6:</label>
          <input class="form-control" id="inputNumber10" required>
          <br>
          <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
  </div>
  `;

  document.getElementById("confirm-btn").addEventListener("click", function () {
    // Obter o valor inserido pelo utilizador
    const userGuess = parseInt(document.getElementById("inputNumber10").value);

    // Gerar um número aleatório entre 1 e 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Verificar se o palpite do utilizador corresponde ao número gerado aleatoriamente
    if (userGuess >= 1 && userGuess <= 6) {
      if (userGuess === randomNumber) {
        document.getElementById(
          "main-screen"
        ).innerHTML = `Parabéns Ganhaste. Escolheste o número ${userGuess} e o número correto é ${randomNumber}.`;
      } else {
        document.getElementById(
          "main-screen"
        ).innerHTML = `Infelizmente, erraste. Escolheste o número ${userGuess} e o número correto era ${randomNumber}.`;
      }
    } else {
      alert("Por favor, insira um número entre 1 e 6.");
    }
    addBackButton();
  });
});

// Botão 7
document.getElementById("note-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
  <div id="form-container">
  
      <div class="form-group">
      <label for="inputnamefor">Insira o nome do Formando</label>
          <input class="form-control" id="inputnamefor" required>
          <br>
          <label for="inputnote">Insira uma nota entre 0 e 20:</label>
          <input class="form-control" id="inputnote" required>
          <br>
          <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
  </div>
  `;

  document.getElementById("confirm-btn").addEventListener("click", function () {
    // Obter o valor inserido pelo utilizador
    const userName = document.getElementById("inputnamefor").value;
    const userGuess = parseFloat(document.getElementById("inputnote").value);

    // Verificar a nota do utilizador
    let message;
    if (userGuess >= 0 && userGuess < 5) {
      message = `A nota ${userGuess} do Formando ${userName} é Muito insuficiente.`;
    } else if (userGuess >= 5 && userGuess < 9.5) {
      message = `A nota ${userGuess} do Formando ${userName}  é Insuficiente.`;
    } else if (userGuess >= 9.5 && userGuess < 14) {
      message = `A nota ${userGuess} do Formando ${userName}  é Suficiente .`;
    } else if (userGuess >= 14 && userGuess < 16) {
      message = `A nota ${userGuess} do Formando ${userName} é Boa.`;
    } else if (userGuess >= 16 && userGuess <= 20) {
      message = `A nota ${userGuess} do Formando ${userName}  é Muito boa.`;
    } else {
      alert("Por favor, insira uma nota entre 0 e 20.");
      return;
    }

    // Exibir a mensagem na tela principal
    document.getElementById("main-screen").innerHTML = message;

    // Verificar se a nota é superior a 9.5 para exibir a caixa de diálogo
    if (userGuess >= 9.5) {
      confirmResult = confirm(`O Formando ${userName} está aprovado.`);
    } else {
      confirmResult = confirm(`O Formando ${userName} está reprovado.`);
    }

    if (!confirmResult) {
      // Se o utilizador clicar em "Cancelar" na caixa de diálogo
      alert("O Formando não teve a aprovação confirmada.");
    }
    addBackButton();
  });
});

// Botão 8
document.getElementById("phrase-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
      <h2>Insira uma frase</h2>
      <form id="data-form">
        <div class="form-group">
          <label for="inputphrase">Inserir frase</label>
          <input type="text" class="form-control" id="inputphrase" required>
          <br>
          <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
        </div>
      </form>
    `;

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const phrase = document.getElementById("inputphrase").value;

      // Contar o número de caracteres numéricos na frase
      const caracteresNumericos = (phrase.match(/\d/g) || []).length;

      // Remover a palavra "não" da frase
      const novaFrase = phrase.replace(/não|nao/gi, "");

      // Remover todos os caracteres especiais da frase
      const fraseSemEspeciais = phrase.replace(/[^\w\s]/gi, "");

      // Inverter os caracteres da frase
      const fraseInvertida = phrase.split("").reverse().join("");

      // Exibir os resultados na tela
      document.getElementById("main-screen").innerHTML = `
      <p>A frase: "${phrase}" tem ${caracteresNumericos} caracteres numéricos</p>
      <p>Frase sem a palavra "não": ${novaFrase}</p>
      <p>Frase sem caracteres especiais: ${fraseSemEspeciais}</p>
      <p>Frase invertida: ${fraseInvertida}</p>
    `;

      addBackButton();
    });
});

// Botão 9
document.getElementById("converter-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
      <h2>Conversor</h2>
      <form id="data-form">
        <div class="form-group">
          <label for="inputvalue">Inserir valor</label>
          <input type="text" class="form-control" id="inputvalue" required>
          <br>
          <label for="inputconver">Inserir taxa de conversão</label>
          <input type="text" class="form-control" id="inputconver" required>
          <br>
          <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
        </div>
      </form>
    `;
  addBackButton();
  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Obter os valores inseridos pelo usuário
      const valorEmEuros = parseFloat(
        document.getElementById("inputvalue").value
      );
      const taxaDeConversao = parseFloat(
        document.getElementById("inputconver").value
      );

      // Verificar se os valores inseridos são números
      if (!isNaN(valorEmEuros) && !isNaN(taxaDeConversao)) {
        // Calcular o valor convertido
        const valorConvertido = valorEmEuros * taxaDeConversao;

        // Mostrar o valor convertido em dólares em uma caixa de diálogo
        const confirmResult = confirm(
          `O valor convertido é: ${valorConvertido.toFixed(
            2
          )}. Deseja fazer mais conversões?`
        );

        // Verificar a resposta do usuário
        if (confirmResult) {
          // Se o usuário clicou em "Ok", mostrar a mensagem "Bem escolhido" e chamar a função novamente
          alert("Bem escolhido");
          document.getElementById("inputvalue").value = ""; // Limpar o campo de valor
          document.getElementById("inputconver").value = "";
        } else {
          // Se o usuário clicou em "Cancelar", mostrar a mensagem "Já chega de conversões"
          alert("Já chega de conversões");
          // Redirecionar para a página de boas-vindas (ou fazer qualquer outra ação necessária)
          showWelcomePage();
        }
      } else {
        // Se os valores inseridos não forem números, mostrar uma mensagem de erro
        alert("Insira valores numéricos nos campos de entrada.");
      }
    });
});

// Botão 10
document.getElementById("negative-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Transformar valor em negativo</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="inputvaluepos">Inserir valor</label>
        <input type="number" class="form-control" id="inputvaluepos" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const valuepos = parseFloat(
        document.getElementById("inputvaluepos").value
      );
      const valueposconv = valuepos * -1;

      // Exibir os resultados na tela
      document.getElementById("main-screen").innerHTML = `
      <p>O valor negativo é: ${valueposconv}</p>`;

      addBackButton();
    });
});

// Botão 11
function calcularSemImposto(valuetax, tax) {
  const valorImposto = (valuetax * tax) / 100;
  const valorSemImposto = valuetax - valorImposto;
  return { valorSemImposto, valorImposto };
}

document.getElementById("tax-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Calculadora de Imposto</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="valuetax">Inserir valor com imposto</label>
        <input type="number" class="form-control" id="valueim" required>
        <br>
        <label for="tax">Inserir percentagem do imposto</label>
        <input type="number" class="form-control" id="tax" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  document.getElementById("confirm-btn").addEventListener("click", function () {
    const valuetax = parseFloat(document.getElementById("valueim").value);
    const tax = parseFloat(document.getElementById("tax").value);

    const resultado = calcularSemImposto(valuetax, tax);

    document.getElementById("main-screen").innerHTML = `
      <p>O valor sem imposto é: ${resultado.valorSemImposto}</p>
      <p>O valor do imposto é: ${resultado.valorImposto}</p>
    `;

    addBackButton();
  });
});

// Botão 12
function gerarPassword() {
  const ListaChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Obter o número de caracteres desejado do usuário
  const comprimento = parseInt(prompt("Insira o comprimento da senha:"));

  // Validar se o comprimento é um número válido
  if (isNaN(comprimento) || comprimento <= 0) {
    alert("Por favor, insira um comprimento válido.");
    return;
  }

  let password = "";

  // Gerar a senha com base no comprimento fornecido
  for (var i = 0; i < comprimento; i++) {
    const randomIndex = Math.floor(Math.random() * ListaChars.length);
    password += ListaChars[randomIndex];
  }

  // Exibir a senha gerada
  alert(`A senha gerada é: ${password}`);
}

// Botão 13
function encontrarMaiorMenorEMultiplosDeTres() {
  // Função para encontrar o maior número num array
  function encontrarMaiorNumero(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
      return "O array está vazio.";
    }

    // Inicializa a variável 'maior' com o primeiro elemento do array
    var maior = array[0];

    // Percorre o array para encontrar o maior número
    for (var i = 1; i < array.length; i++) {
      // Compara o elemento atual com o valor atual de 'maior'
      if (array[i] > maior) {
        // Se o elemento atual for maior, atualiza o valor de 'maior'
        maior = array[i];
      }
    }

    // Retorna o maior número encontrado
    return maior;
  }

  // Função para encontrar o menor número em um array
  function encontrarMenorNumero(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
      return "O array está vazio.";
    }

    // Inicializa a variável 'menor' com o primeiro elemento do array
    var menor = array[0];

    // Percorre o array para encontrar o menor número
    for (var i = 1; i < array.length; i++) {
      // Compara o elemento atual com o valor atual de 'menor'
      if (array[i] < menor) {
        // Se o elemento atual for menor, atualiza o valor de 'menor'
        menor = array[i];
      }
    }

    // Retorna o menor número encontrado
    return menor;
  }

  // Função para imprimir todos os múltiplos de 3 entre 1 e 100
  function imprimirMultiplosDeTres() {
    // Inicializa um array para armazenar os múltiplos de 3
    var multiplosDeTres = [];

    // Percorre os números de 1 a 100
    for (var i = 1; i <= 100; i++) {
      // Verifica se o número é múltiplo de 3
      if (i % 3 === 0) {
        // Se for múltiplo de 3, adiciona-o ao array
        multiplosDeTres.push(i);
      }
    }

    // Retorna o array com os múltiplos de 3 encontrados
    return multiplosDeTres;
  }

  // Gerar um array com 100 números aleatórios entre 1 e 1000
  var numerosAleatorios = [];
  for (var i = 0; i < 100; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 1000) + 1);
  }

  // Encontrar o maior número
  var maiorNumero = encontrarMaiorNumero(numerosAleatorios);

  // Encontrar o menor número
  var menorNumero = encontrarMenorNumero(numerosAleatorios);

  // Encontrar os múltiplos de 3
  var multiplosDeTres = imprimirMultiplosDeTres();

  // Exibir os resultados na tela
  document.getElementById("main-screen").innerHTML = `
    <p>O maior número deste array é: ${maiorNumero}</p>
    <p>O menor número deste array é: ${menorNumero}</p>
    <p>Os múltiplos de 3 deste array são: ${multiplosDeTres.join(", ")}</p>
  `;

  // Adicionar botão de voltar
  addBackButton();
}

// Botão 14
function contaKM() {
  document.getElementById("main-screen").innerHTML = `
    <h2>Conta KM</h2>
    <br>
    <form id="data-form">
      <div class="form-group">
        <label for="inputdistance">Insira a distancia total (KM): </label>
        <input type="number" class="form-control" id="inputdistance" required>
        <br>
        <label for="inputqtd">Insira a quantidade de combustivel gasta (L): </label>
        <input type="number" class="form-control" id="inputqtd" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var distanciaKM = parseFloat(
        document.getElementById("inputdistance").value
      );
      var quantidadeCombustivelLitros = parseFloat(
        document.getElementById("inputqtd").value
      );

      // Verificar se os valores inseridos são válidos
      if (distanciaKM <= 0 || quantidadeCombustivelLitros <= 0) {
        alert("Insira valores válidos maiores que zero.");
        return;
      }

      var consumoMedioCombustivel = distanciaKM / quantidadeCombustivelLitros;

      // Exibir os resultados na tela
      document.getElementById("main-screen").innerHTML = `
      <p>Percorreu ${distanciaKM} km com uma média de consumo de ${consumoMedioCombustivel} litros </p>`;

      addBackButton();
    });
}

document.getElementById("km-btn").addEventListener("click", contaKM);

// Botão 15
document.getElementById("dados-btn").addEventListener("click", function () {
  var contagem = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  // Simular o lançamento do dado 35000 vezes
  for (var i = 0; i < 35000; i++) {
    var resultado = Math.floor(Math.random() * 6) + 1; // Lançar o dado
    contagem[resultado]++; // Incrementar a contagem do resultado atual
  }

  // Limpar o conteúdo anterior
  document.getElementById("main-screen").innerHTML = "";

  // Exibir a contagem de cada resultado na tela
  for (var numero in contagem) {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = `Número ${numero}: ${contagem[numero]} vezes`;
    document.getElementById("main-screen").appendChild(paragrafo);
  }

  // Adicionar botão de volta
  addBackButton();
});

// Botão 16
document.getElementById("conta-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Criar conta</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="inputmail">Inserir email</label>
        <input type="email" class="form-control" id="inputmail" required>
        <br>
        <label for="inputpass">Inserir password (mínimo 6 caracteres)</label>
        <input type="password" class="form-control" id="inputpass" minlength="6" required>
        <br>
        <label for="confirmpass">Confirmar password</label>
        <input type="password" class="form-control" id="confirmpass" required>
        <br>
        <input type="checkbox" id="showPassCheckbox"> Mostrar senha
        <br>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  // Função para alternar a visibilidade da senha
  function togglePasswordVisibility() {
    var passInput = document.getElementById("inputpass");
    var confirmPassInput = document.getElementById("confirmpass");

    if (passInput.type === "password") {
      passInput.type = "text";
      confirmPassInput.type = "text";
    } else {
      passInput.type = "password";
      confirmPassInput.type = "password";
    }
  }

  // Adicionar evento de clique ao checkbox de mostrar senha
  document
    .getElementById("showPassCheckbox")
    .addEventListener("change", togglePasswordVisibility);

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("inputmail").value;
      var metadeEmail =
        "*".repeat(email.length / 2) + email.slice(email.length / 2); // Metade oculta do email

      var pass = document.getElementById("inputpass").value;
      var passcon = document.getElementById("confirmpass").value;

      if (pass !== passcon) {
        alert("As senhas não são iguais");
        return; // Encerrar a execução da função se as senhas não forem iguais
      }

      // Exibir os resultados na tela
      document.getElementById("main-screen").innerHTML = `
        <p>Conta criada com sucesso para o email: ${metadeEmail}</p>
      `;

      addBackButton();
    });
});

// Botão 17
document
  .getElementById("draw-shape-btn")
  .addEventListener("click", function () {
    document.getElementById("main-screen").innerHTML = `
    <h2>Escolha uma forma para desenhar</h2>
    <button id="rectangle-btn" class="btn btn-primary">Retângulo</button>
    <button id="circle-btn" class="btn btn-primary">Círculo</button>
  `;

    document
      .getElementById("rectangle-btn")
      .addEventListener("click", function () {
        desenharRetangulo();
      });

    document
      .getElementById("circle-btn")
      .addEventListener("click", function () {
        desenharCirculo();
      });
  });

function desenharRetangulo() {
  document.getElementById("main-screen").innerHTML = `
    <h2>Desenhar Retângulo</h2>
    <div class="shape-container">
      <div class="shape rectangle"></div>
    </div>
  `;
  addBackButton();
}

function desenharCirculo() {
  document.getElementById("main-screen").innerHTML = `
    <h2>Desenhar Círculo</h2>
    <div class="shape-container">
      <div class="shape circle"></div>
    </div>
  `;
  addBackButton();
}

// Botão 18
document
  .getElementById("asterisk-shape-btn")
  .addEventListener("click", function () {
    document.getElementById("main-screen").innerHTML = `
    <h2>Escolha o número de linhas (até 30)</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="numbl">Inserir número de linhas</label>
        <input type="number" class="form-control" id="numbl" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

    document
      .getElementById("data-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        var numbll = parseInt(document.getElementById("numbl").value);

        // Verificar se o número de linhas é positivo e não ultrapassa 30
        if (numbll > 0 && numbll <= 30) {
          var output = ""; // Variável para armazenar todas as linhas

          for (var i = 1; i <= numbll; i++) {
            var linha = ""; // Variável para armazenar os asteriscos da linha atual

            for (let j = 1; j <= i; j++) {
              linha += "* "; // Adiciona um asterisco à linha atual
            }

            output += `<p>${linha}</p>`; // Adiciona a linha atual ao output
          }

          // Exibir todos os resultados na tela de uma só vez
          document.getElementById("main-screen").innerHTML = output;

          addBackButton();
        } else {
          alert("Insira um número positivo menor ou igual a 30.");
        }
      });
  });

// Botão 19

document.getElementById("time-out-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Calcular Hora de Saída</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="workin">Hora de Entrada (HH:MM)</label>
        <input type="text" class="form-control" id="workin" required>
        <br>
        <label for="workout">Hora de Saída (HH:MM)</label>
        <input type="text" class="form-control" id="workout" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var workin = document.getElementById("workin").value;
      var workout = document.getElementById("workout").value;

      // Verificar se as horas estão no formato correto (HH:MM)
      var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (!timeRegex.test(workin) || !timeRegex.test(workout)) {
        alert("Por favor, insira as horas no formato HH:MM.");
        return;
      }

      // Extrair horas e minutos da entrada
      var [inHours, inMinutes] = workin.split(":").map(Number);
      var [outHours, outMinutes] = workout.split(":").map(Number);

      // Converter horas para minutos para facilitar o cálculo
      var inTotalMinutes = inHours * 60 + inMinutes;
      var outTotalMinutes = outHours * 60 + outMinutes;

      if (outTotalMinutes <= inTotalMinutes) {
        alert("A hora de saída deve ser posterior à hora de entrada.");
        return;
      }

      // Calcular diferença de tempo
      var totalHours = Math.floor((outTotalMinutes - inTotalMinutes) / 60);
      var totalMinutes = (outTotalMinutes - inTotalMinutes) % 60;

      // Exibir resultados formatados
      var message = `Trabalhou ${totalHours} horas e ${totalMinutes} minutos.`;
      document.getElementById("main-screen").innerHTML = `<p>${message}</p>`;

      addBackButton();
    });
});

// Botão 20

document.getElementById("price-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Adivinhe o preço certo (entre 1000 e 10 000)</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="price1">Primeira tentativa</label>
        <input type="text" class="form-control" id="price1" required>
        <br>
        <label for="price2">Segunda tentativa</label>
        <input type="text" class="form-control" id="price2" required>
        <br>
        <label for="price3">Terceira tentativa</label>
        <input type="text" class="form-control" id="price3" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var price1 = parseFloat(document.getElementById("price1").value);
      var price2 = parseFloat(document.getElementById("price2").value);
      var price3 = parseFloat(document.getElementById("price3").value);
      var randomNumber2 = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

      var dif1 = Math.abs(randomNumber2 - price1);
      var dif2 = Math.abs(randomNumber2 - price2);
      var dif3 = Math.abs(randomNumber2 - price3);

      // Verificar se o preço está dentro do intervalo especificado
      if (
        price1 >= 1000 &&
        price1 <= 10000 &&
        price2 >= 1000 &&
        price2 <= 10000 &&
        price3 >= 1000 &&
        price3 <= 10000
      ) {
        // Verificar qual tentativa está mais próxima do preço certo, ignorando tentativas superiores
        var closestPrice = randomNumber2; // Define o preço mais próximo inicialmente como o randomNumber2
        if (dif1 < closestPrice && price1 <= randomNumber2) {
          closestPrice = dif1;
        }
        if (dif2 < closestPrice && price2 <= randomNumber2) {
          closestPrice = dif2;
        }
        if (dif3 < closestPrice && price3 <= randomNumber2) {
          closestPrice = dif3;
        }

        // Exibir mensagem com a tentativa mais próxima do preço certo
        if (closestPrice === dif1) {
          document.getElementById("main-screen").innerHTML = `
            <p>A primeira tentativa de ${price1} está mais próxima do preço certo (${randomNumber2}).</p>
          `;
        } else if (closestPrice === dif2) {
          document.getElementById("main-screen").innerHTML = `
            <p>A segunda tentativa de ${price2} está mais próxima do preço certo (${randomNumber2}).</p>
          `;
        } else {
          document.getElementById("main-screen").innerHTML = `
            <p>A terceira tentativa de ${price3} está mais próxima do preço certo (${randomNumber2}).</p>
          `;
        }

        addBackButton();
      } else {
        alert("Insira um preço entre 1000 e 10 000.");
      }
    });
});

// Botão 21
document.getElementById("election-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Eleições para Presidente da Junta</h2>
    <form id="data-form">
      <div class="form-group">
        <label for="candidate1">Candidato 1</label>
        <input type="number" class="form-control" id="candidate1" required>
        <br>
        <label for="candidate2">Candidato 2</label>
        <input type="number" class="form-control" id="candidate2" required>
        <br>
        <label for="candidate3">Candidato 3</label>
        <input type="number" class="form-control" id="candidate3" required>
        <br>
        <button id="confirm-btn" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  `;

  document
    .getElementById("data-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var votes1 = parseInt(document.getElementById("candidate1").value);
      var votes2 = parseInt(document.getElementById("candidate2").value);
      var votes3 = parseInt(document.getElementById("candidate3").value);

      // Verificar se os votos são números positivos
      if (votes1 < 0 || votes2 < 0 || votes3 < 0) {
        alert("Os votos devem ser números positivos.");
        return;
      }

      var winner;
      var maxVotes = Math.max(votes1, votes2, votes3);

      if (votes1 === votes2 && votes2 === votes3) {
        winner = "Empate";
      } else if (votes1 === maxVotes) {
        winner = "Candidato 1";
      } else if (votes2 === maxVotes) {
        winner = "Candidato 2";
      } else {
        winner = "Candidato 3";
      }

      // Exibir os resultados na tela
      document.getElementById("main-screen").innerHTML = `
        <p>Candidato 1: ${votes1} votos</p>
        <p>Candidato 2: ${votes2} votos</p>
        <p>Candidato 3: ${votes3} votos</p>
        <p>O vencedor é: ${winner}</p>
      `;

      addBackButton();
    });
});

// Botão 22
document.getElementById("arrayTwo-btn").addEventListener("click", function () {
  var numerosAleatorios = [];

  // Gerar 100 números aleatórios entre 1 e 200 e armazená-los em um array
  for (var i = 0; i < 100; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 200) + 1);
  }

  var counts = {};
  var mostCommonNumber;
  var maxCount = 0;

  // Contar ocorrências de cada número e encontrar o número que aparece mais vezes
  for (var i = 0; i < numerosAleatorios.length; i++) {
    var num = numerosAleatorios[i];
    if (num in counts) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostCommonNumber = num;
    }
  }

  // Ordenar o array com Bubble Sort
  function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  // Ordenar o array com Insertion Sort
  function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      var key = arr[i];
      var j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

  // Ordenar o array com Selection Sort
  function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      var minIndex = i;
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }

  // Remover números repetidos do array
  function removeNumerosRepetidos(arr) {
    var uniqueNumbers = {};
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (!(arr[i] in uniqueNumbers)) {
        uniqueNumbers[arr[i]] = true;
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }

  document.getElementById("main-screen").innerHTML = `
  <p>Números repetidos: ${Object.keys(counts).join(", ")}</p>
  <p>O número que aparece mais vezes é: ${mostCommonNumber}</p>
  <p>Array sem números repetidos: ${removeNumerosRepetidos(
    numerosAleatorios.slice()
  ).join(", ")}</p>
  <p>Array ordenado com Bubble Sort: ${bubbleSort(
    numerosAleatorios.slice()
  ).join(", ")}</p>
  <p>Array ordenado com Insertion Sort: ${insertionSort(
    numerosAleatorios.slice()
  ).join(", ")}</p>
  <p>Array ordenado com Selection Sort: ${selectionSort(
    numerosAleatorios.slice()
  ).join(", ")}</p>
`;

  addBackButton();
});

// Botão 23
document.getElementById("divide-btn").addEventListener("click", function () {
  var min = 1000;
  var max = 50000;
  var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  var numeroString = numeroAleatorio.toString(); // Convertendo o número para uma string
  var resultado = ""; // String para armazenar o resultado

  // Iterar pela string do número aleatório
  for (var i = 0; i < numeroString.length; i++) {
    // Adicionar o dígito atual à string resultante
    resultado += numeroString[i];

    // Verificar se o próximo dígito existe e se ambos os dígitos são pares
    if (
      i < numeroString.length - 1 &&
      parseInt(numeroString[i]) % 2 === 0 &&
      parseInt(numeroString[i + 1]) % 2 === 0
    ) {
      resultado += "-"; // Adicionar um hífen entre os dígitos pares
    }
  }

  // Exibir o resultado na tela
  document.getElementById("main-screen").innerHTML = `
    <p>Número aleatório: ${numeroAleatorio}</p>
    <p>Resultado com hífens entre os pares: ${resultado}</p>
  `;

  addBackButton();
});

// Botão 24
document
  .getElementById("sum-arrays-btn")
  .addEventListener("click", function () {
    // Função para gerar um array com valores aleatórios entre min e max
    function generateRandomArray(length, min, max) {
      var array = [];
      for (var i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return array;
    }

    // Gerar dois arrays com 10 valores aleatórios cada
    var array1 = generateRandomArray(10, 0, 10);
    var array2 = generateRandomArray(10, 0, 10);

    // Array para armazenar os resultados da soma de cada índice
    var resultado = [];

    // Iterar sobre os arrays originais, somando os valores de cada índice
    for (var i = 0; i < array1.length; i++) {
      resultado.push(array1[i] + array2[i]);
    }

    // Exibir os arrays originais e o resultado na tela
    document.getElementById("main-screen").innerHTML = `
    <p>Array 1: [${array1.join(", ")}]</p>
    <p>Array 2: [${array2.join(", ")}]</p>
    <p>Resultado: [${resultado.join(", ")}]</p>
  `;

    addBackButton();
  });

// Botão 25

document
  .getElementById("count-elements-btn")
  .addEventListener("click", function () {
    // Função para gerar um número aleatório entre min e max
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Gerar uma matriz bidimensional 10x10 com números inteiros aleatórios
    var matriz = [];
    for (var i = 0; i < 10; i++) {
      matriz[i] = [];
      for (var j = 0; j < 10; j++) {
        matriz[i][j] = getRandomInt(1, 100); // Altere os limites conforme necessário
      }
    }

    // Contador para armazenar a quantidade de elementos entre 10 e 20
    var count = 0;

    // Iterar sobre cada elemento da matriz e verificar se está entre 10 e 20
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (matriz[i][j] >= 10 && matriz[i][j] <= 20) {
          count++;
        }
      }
    }

    // Exibir a quantidade de elementos entre 10 e 20 na tela
    document.getElementById("main-screen").innerHTML = `
      <p>Quantidade de elementos entre 10 e 20 na matriz: ${count}</p>
    `;

    addBackButton();
  });

// Botão 26

document
  .getElementById("number-converter-btn")
  .addEventListener("click", function () {
    document.getElementById("main-screen").innerHTML = `
      <h2>Conversor Decimal para Binário</h2>
      <form id="data-form">
        <div class="form-group">
          <label for="numberConvert">Insira um número decimal positivo:</label>
          <input type="number" class="form-control" id="numberConvert" required>
          <br>
          <button id="confirm-btn" class="btn btn-primary">Converter</button>
        </div>
      </form>
    `;

    document
      .getElementById("data-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        var numberConvert = parseInt(
          document.getElementById("numberConvert").value
        );

        // Verificar se os votos são números positivos
        if (numberConvert < 0) {
          alert("Por favor, insira um número decimal positivo.");
          return;
        }

        var binaryDigits = []; // Armazenar os dígitos binários

        // Converter o número decimal para binário
        while (numberConvert > 0) {
          var remainder = numberConvert % 2; // Obter o resto da divisão por 2
          binaryDigits.unshift(remainder); // Adicionar o resto ao início do array
          numberConvert = Math.floor(numberConvert / 2); // Atualizar o número decimal para o quociente inteiro
        }

        // Se o número for zero, então o binário é apenas zero
        if (binaryDigits.length === 0) {
          binaryDigits.push(0);
        }

        var binaryNumber = binaryDigits.join(""); // Concatenar os dígitos binários em uma string

        // Exibir o número binário na tela
        document.getElementById("main-screen").innerHTML = `
        <p>O número binário equivalente é: ${binaryNumber}</p>
      `;

        addBackButton();
      });
  });

// Botão 27
document.getElementById("change-bg-btn").addEventListener("click", function () {
  document.body.style.backgroundImage = `url('${randomImage()}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
});

function randomImage() {
  // Lista de URLs de imagens

  var imageUrls = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    // Adicione mais URLs conforme necessário
  ];
  // Escolha uma imagem aleatória da lista
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

// Botão 28
document
  .getElementById("apply-color-btn")
  .addEventListener("click", function () {
    document.getElementById("main-screen").innerHTML = `
    <input type="color" id="color-picker">
`;

    document.getElementById("main-screen").innerHTML += `
    <br>
    <br>
    <p id="colorParagraph">
        Este é um parágrafo com uma cor de fundo inicial.
    </p>
`;

    var colorParagraph = document.getElementById("colorParagraph");
    var colorPicker = document.getElementById("color-picker");

    colorPicker.addEventListener("input", function (event) {
      colorParagraph.style.backgroundColor = event.target.value;
    });
    addBackButton();
  });

// Botão 29

document.getElementById("table-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Crie uma Tabela Dinâmica</h2>
    <form id="table-form">
      <label for="rows">Número de Linhas:</label>
      <input type="number" id="rows" name="rows" min="1" value="5">
      <br><br>
      <label for="cols">Número de Colunas:</label>
      <input type="number" id="cols" name="cols" min="1" value="5">
      <br><br>
      <button type="submit" class="btn btn-primary">Criar Tabela</button>
    </form>
  `;

  document
    .getElementById("table-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      function createTable() {
        // Obter os valores de linhas e colunas fornecidos pelo usuário
        var rows = parseInt(document.getElementById("rows").value);
        var cols = parseInt(document.getElementById("cols").value);

        // Verificar se os valores fornecidos são válidos
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
          alert(
            "Por favor, insira valores válidos para o número de linhas e colunas."
          );
          return "";
        }

        // Construir a tabela HTML
        var tableHTML = "<table class='table table-bordered'>";
        for (var i = 0; i < rows; i++) {
          tableHTML += "<tr>";
          for (var j = 0; j < cols; j++) {
            tableHTML +=
              "<td>Linha " + (i + 1) + ", Coluna " + (j + 1) + "</td>";
          }
          tableHTML += "</tr>";
        }
        tableHTML += "</table>";

        return tableHTML;
      }

      // Exibir a tabela na tela
      document.getElementById("main-screen").innerHTML = `
      <p>Tabela:</p>
      ${createTable()}
    `;

      addBackButton();
    });
});

// Botão 30

document.getElementById("tablecons-btn").addEventListener("click", function () {
  document.getElementById("main-screen").innerHTML = `
    <h2>Crie uma Tabela Dinâmica</h2>
    <div class="center">
      <form id="table-form">
        <label for="text">Texto:</label>
        <input type="text" id="text" name="text">
        <br><br>
        <label for="row">Linha:</label>
        <input type="number" id="row" name="row" min="1" max="3" value="1">
        <br><br>
        <label for="col">Coluna:</label>
        <input type="number" id="col" name="col" min="1" max="3" value="1">
        <br><br>
        <button type="submit">Adicionar Texto</button>
      </form>
    </div>
    <div class="center">
      <table id="myTable" border="1">
        <tr>
          <td id="cell-1-1"></td>
          <td id="cell-1-2"></td>
          <td id="cell-1-3"></td>
        </tr>
        <tr>
          <td id="cell-2-1"></td>
          <td id="cell-2-2"></td>
          <td id="cell-2-3"></td>
        </tr>
        <tr>
          <td id="cell-3-1"></td>
          <td id="cell-3-2"></td>
          <td id="cell-3-3"></td>
        </tr>
      </table>
    </div>
  `;

  document
    .getElementById("table-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Obter texto inserido pelo utilizador
      var text = document.getElementById("text").value;

      // Obter linha e coluna especificadas pelo utilizador
      var row = parseInt(document.getElementById("row").value);
      var col = parseInt(document.getElementById("col").value);

      // Verificar se os valores de linha e coluna estão dentro dos limites (1-3)
      if (
        isNaN(row) ||
        isNaN(col) ||
        row < 1 ||
        row > 3 ||
        col < 1 ||
        col > 3
      ) {
        alert("Por favor, insira valores válidos para linha e coluna (1-3).");
        return;
      }

      // Adicionar texto à célula especificada na tabela
      var cell = document.getElementById(`cell-${row}-${col}`);
      cell.textContent = text;
    });
});

// Tamanho Página
function getSize() {
  // Obter as dimensões da janela
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Exibir as dimensões na página
  document.getElementById("sizeDisplay").innerText =
    "Width: " + width + "px | Height: " + height + "px";
}

// Botao Jogo
// Função para alterar o background
function changeBackground(imageUrl, color) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundColor = color; // opcional: define uma cor de fundo
}

// Função para reverter o background para o padrão
function resetBackground() {
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = ""; // opcional: reseta a cor de fundo
}

// Função para alterar a imagem de fundo do #monitor
function changeMonitorBackground(imageUrl) {
  const monitor = document.getElementById("monitor");
  if (monitor) {
    monitor.style.backgroundImage = `url(${imageUrl})`;
  }
}

// Função para reverter a imagem de fundo do #monitor para o padrão
function resetMonitorBackground() {
  const monitor = document.getElementById("monitor");
  if (monitor) {
    monitor.style.backgroundImage = 'url("./images/computer.png")';
  }
}

// Função para ocultar todos os botões
function hideButtons() {
  const buttons = document.querySelectorAll(".retro-button");
  buttons.forEach((button) => {
    button.classList.add("hidden");
  });
}

// Função para desocultar todos os botões
function showButtons() {
  const buttons = document.querySelectorAll(".retro-button");
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
}

document.getElementById("game-btn").addEventListener("click", function () {
  var mainScreen = document.getElementById("main-screen");
  mainScreen.innerHTML = `
    <div class="textojogo">

    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒██▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████░░██▓▓██▓▓▒▒▒▒▓▓▓▓▓▓██▓▓██▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▒▒▓▓▒▒▓▓▓▓▓▓▓▓▒▒██▓▓▓▓██▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▓▓██░░██▒▒▓▓██▓▓▓▓▓▓▒▒▓▓▓▓██████████████████████████▓▓▓▓██▓▓▒▒▓▓▓▓▓▓▓▓██▒▒▓▓▓▓▓▓▓▓▓▓██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▓▓██░░██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▓▓████████████████████████████▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██▓▓██░░██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒██████████░░░░░░░░░░░░████████████▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██▓▓██▓▓▒▒▒▒▒▒██▒▒▒▒▒▒▒▒████████░░░░░░░░░░░░░░░░▒▒░░████████▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██████████████████████████▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒██▒▒████████░░██████████░░░░░░░░██████████░░████████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████████████░░░░██▓▓▓▓▓▓██░░░░██▓▓▓▓▓▓██░░░░██████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒██▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒██▒▒██▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒████████████░░░░██▓▓██▓▓██░░░░██▓▓▓▓▓▓██░░░░██████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒████████████░░░░  ████████░░  ██████▓▓░░░░░░██████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒████▓▓▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▓▓████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▓▓▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████████████▒▒░░░░░░░░░░▓▓░░░░▓▓░░░░░░░░░░▓▓██████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒████████▓▓░░░░▓▓░░░░░░  ██░░░░██░░░░░░░░▓▓░░  ████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒████▒▒▒▒▒▒██████████████████████████▒▒░░▓▓░░░░░░▓▓░░░░░░▒▒▓▓░░░░░░▓▓░░▓▓██████████████████████████████▒▒▒▒▒▒██▓▓▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒██████████▓▓░░▓▓░░░░░░░░██░░░░▓▓░░░░░░░░▓▓  ██████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒██▒▒██▒▒▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████████████▓▓░░░░██░░▓▓░░████░░▓▓░░▓▓░░░░████████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒██▒▒▒▒██▒▒██▒▒▓▓████▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▓▓▒▒██▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██████████████████░░░░▓▓▓▓▓▓▓▓▓▓▓▓░░░░████████████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒▓▓▒▒██▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒██▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒████████████████░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░██████████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒▓▓██▒▒██▒▒▒▒██▒▒▒▒▒▒
▒▒▒▒▒▒▒▒██▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒████████▓▓████░░░░██░░░░░░░░██░░░░██▒▒▒▒████████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒████▒▒▒▒▒▒██▓▓▒▒▒▒██▒▒▒▒▒▒
▒▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒██░░██░░░░░░░░██░░██▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒
▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒████████████████████████████████████████████████████████████████████████████████████████████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒██▒▒
▒▒▒▒██▒▒▒▒▓▓████▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▓▓▓▓████▓▓▓▓██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▓▓████▒▒▒▒▒▒██▒▒
▒▒▓▓██▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▓▓▓▓▓▓████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓██▓▓██▓▓██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▓▓██▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒██▓▓
▒▒████▒▒▓▓██▒▒██▒▒▒▒██▒▒██▒▒██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██████████████████  ██▓▓▓▓████▓▓▓▓██  ████████████████▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒██▒▒▓▓▓▓▒▒██▒▒▒▒████
██▒▒██▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒▒▒▒▒▒▒▒▒██████████████████████  ████    ████  ████████████████████████▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒██▒▒▒▒██▒▒▓▓▒▒▒▒██▒▒██▒▒
▒▒▒▒██▒▒██▒▒▒▒██▒▒██▒▒▒▒████▒▒▒▒▓▓██▒▒▒▒▒▒▒▒▒▒██████████████████████  ░░░░    ░░░░  ████████████████████████▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒████▒▒▓▓██▓▓▓▓▒▒▒▒██▒▒██▒▒
▒▒▒▒██▓▓▒▒▒▒▒▒████▒▒▒▒▒▒██▒▒▒▒▒▒▓▓██████████████████████████████████▓▓            ▓▓██████████████████████████████████████▒▒▒▒▒▒▒▒██▒▒▒▒▓▓██▓▓▒▒▒▒▒▒████▒▒
▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██▓▓▓▓▓▓▓▓▓▓████████████████████████████        ████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒
▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒████▒▒▒▒▒▒██▓▓▓▓▓▓▓▓████████████████████████████████    ▓▓██████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒████▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒██▒▒
▒▒████▒▒▒▒▒▒████▒▒▒▒▒▒████▒▒▒▒██▓▓▓▓▓▓▓▓▓▓████████████████████████████████    ████████▓▓██▓▓██████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒████▒▒▒▒▓▓████▒▒▒▒▒▒████
▒▒████▒▒▒▒▓▓████▒▒▒▒██▒▒██▒▒██▓▓▓▓▓▓▓▓▓▓▓▓██████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒██▒▒██▒▒▒▒████▒▒▒▒▒▒████
██▒▒██▒▒▓▓██▒▒██▒▒██▒▒▒▒██▒▒██▓▓▓▓▓▓▓▓▓▓████████████████████████████████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒██▒▒▓▓██▓▓▓▓▒▒██▒▒▒▒██▒▒
▒▒▒▒██▓▓▓▓▒▒▒▒██▒▒██▒▒▒▒████▓▓▓▓▓▓▓▓▓▓▓▓████████████████████████████████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒▒▒██▒▒▓▓▒▒▒▒██▒▒██▒▒
▒▒▒▒██▒▒██▒▒▒▒██▓▓▓▓▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓██████████████▓▓████████████████████████████████████████████▓▓██████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▓▓▓▓▓▓▒▒▒▒██▒▒██▒▒
▒▒▒▒████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒████████████████████████████████████████████████████████████████████████████████████████████████████████████▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒████▒▒
▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████▓▓████████████████████████████████████████████▓▓████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▒▒▒▒▒▒▓▓██▒▒
▒▒▒▒██▒▒▒▒▒▒████▒▒▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████▓▓▓▓████████████████████████████████████████████▓▓▓▓██████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒████▒▒▒▒▒▒██▒▒
▒▒████▒▒▒▒▒▒████▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓████████████████████████████████████████████▓▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒████▒▒▒▒▒▒████
▒▒████▒▒▒▒██▒▒██▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓████████████████████████████████████████████▓▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▓▓▒▒██▒▒▒▒████
██▒▒██▒▒▓▓▒▒▒▒██▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████▓▓▓▓▓▓██████████████████████████████████████████████▓▓▓▓████████████▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒██▒▒▒▒██▒▒██▒▒
▒▒▒▒██▓▓██▒▒▒▒████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████░░░░████▓▓▓▓▓▓██████████████████████████████████████████████▓▓▓▓████▓▓░░░░░░████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒▒▒██▒▒██▒▒
▒▒▒▒████▒▒▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓░░░░░░░░░░██▓▓▓▓██████████████████████████████████████████████▓▓▓▓▓▓██░░░░░░░░░░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒████▒▒
▒▒▒▒██▒▒▒▒▒▒▒▒████████████████████▓▓░░██  ██  ██████████████████████████████████████████████████████████████▓▓░░██░░██░░██████████████████████▒▒▒▒▒▒▒▒██▒▒
▒▒▒▒██▒▒▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓░░██  ██░░██░░░░░░░░░░░░░░░░░░████████████████████████░░░░░░░░░░░░░░░░░░██░░██░░██░░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒██▒▒
▒▒████▒▒▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████░░██░░██░░██░░░░░░░░░░░░░░░░░░░░░░██████████████▓▓░░░░░░░░░░░░░░░░░░░░░░██░░██░░██░░████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒████
▒▒████▒▒▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓████████████████████████████████░░░░░░░░████████░░░░░░░░██████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒████
██▒▒██▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████████░░░░░░░░░░░░░░▒▒████████████▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒██▒▒
▒▒▒▒██▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████████████░░░░░░░░████████████████▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒██▒▒
▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████████████▓▓▓▓▓▓▓▓████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒
▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████████████████▒▒▒▒██████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒
▒▒▒▒████████████████████████████████████████████████████████████████████████░░░░████████████████████████████████████████████████████████████████████████▒▒
▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████████████████░░░░██████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓██████████████████████░░░░██████████████████▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██

    </div>
    <br>
    <div>Vamos jogar um jogo?</div>
    <br>
    <div class="row">
    <div class="col-6">
    <button class="button" id="no-btn">
      NAO
    </button>
  </div>
  <div class="col-6">
    <button class="button" id="game2-btn">
      SIM
    </button>
  </div>
    </div>
  `;

  // Alterar o background quando o usuário clica em "game-btn"
  changeBackground("images/bgHorror.jpg", "#000");
  changeMonitorBackground("images/computer-game.png");
  hideButtons();

  document.getElementById("no-btn").addEventListener("click", () => {
    resetBackground();
    resetMonitorBackground();
    showWelcomePage();
    showButtons();
  });

  document
    .getElementById("game2-btn")
    .addEventListener("click", startMemoryGame);
});

//Jogo
function startMemoryGame() {
  var mainScreen = document.getElementById("main-screen");
  mainScreen.innerHTML = `
    <div class="player-info">
      <span class="title">Jogo da Memória</span>
      <span class="timer">60</span>
    </div>
    <div class="grid"></div>
    <div class="info">
      <div class="attempts">Tentativas: <span class="attempt-count">0</span></div>
      <div class="correct-attempts">Tentativas Corretas: <span class="correct-attempt-count">0</span></div>
    </div>
    <div id="end-message" class="end-message" style="display: none;"></div>
  `;

  const grid = document.querySelector(".grid");
  const timer = document.querySelector(".timer");
  const attemptCountElement = document.querySelector(".attempt-count");
  const correctAttemptCountElement = document.querySelector(
    ".correct-attempt-count"
  );
  const endMessage = document.getElementById("end-message");

  // Adicione o nome do jogador ao iniciar o jogo
  const playerName = prompt("Digite o nome do jogador:");
  const playerInfo = document.querySelector(".player-info");
  const playerNameElement = document.createElement("span");
  playerNameElement.classList.add("player");
  playerNameElement.textContent = playerName;
  playerInfo.appendChild(playerNameElement);

  const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  let firstCard = "";
  let secondCard = "";
  let attempts = 0;
  let correctAttempts = 0;
  let gameEnded = false;

  const showEndMessage = (message) => {
    endMessage.innerHTML = message;
    endMessage.style.display = "block";
    gameEnded = true;
    setTimeout(resetBackground, 5000); // Reverter o background após 10 segundos
    setTimeout(showButtons, 5000);
    setTimeout(resetMonitorBackground, 5000);
  };

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");

    if (disabledCards.length === 20) {
      clearInterval(this.loop);
      showEndMessage(`Parabéns, ${playerName}! Você ganhou o jogo!`);
    }
  };

  const checkCards = () => {
    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    attempts++;
    attemptCountElement.textContent = attempts;

    if (firstCharacter === secondCharacter) {
      firstCard.firstChild.classList.add("disabled-card");
      secondCard.firstChild.classList.add("disabled-card");

      correctAttempts++;
      correctAttemptCountElement.textContent = correctAttempts;

      firstCard = "";
      secondCard = "";

      checkEndGame();
    } else {
      setTimeout(() => {
        firstCard.classList.remove("reveal-card");
        secondCard.classList.remove("reveal-card");

        firstCard = "";
        secondCard = "";
      }, 500);
    }
  };

  const revealCard = ({ target }) => {
    if (gameEnded || target.parentNode.className.includes("reveal-card")) {
      return;
    }

    if (firstCard === "") {
      target.parentNode.classList.add("reveal-card");
      firstCard = target.parentNode;
    } else if (secondCard === "") {
      target.parentNode.classList.add("reveal-card");
      secondCard = target.parentNode;

      checkCards();
    }
  };

  const createCard = (character) => {
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-character", character);

    return card;
  };

  const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
      const card = createCard(character);
      grid.appendChild(card);
    });
  };

  const startTimer = () => {
    let currentTime = 60;
    timer.innerHTML = currentTime;
    this.loop = setInterval(() => {
      currentTime--;
      timer.innerHTML = currentTime;
      if (currentTime === 0) {
        clearInterval(this.loop);
        showEndMessage("Tempo esgotado! Você perdeu.");
      }
    }, 1000);
  };

  loadGame();
  startTimer();
}
