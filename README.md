# 📊 Calculadora de IMC - React

Este projeto é uma **Calculadora de IMC (Índice de Massa Corporal)** desenvolvida em React. Ele permite que os usuários insiram sua altura e peso e, com base nessas informações, calcula e exibe o IMC, juntamente com uma classificação (abaixo do peso, peso normal, sobrepeso, etc.).

## ✨ Funcionalidades

- ✅ **Cálculo de IMC**: O usuário insere sua altura (em centímetros) e seu peso (em quilos) e obtém o valor do IMC.
- 🧮 **Classificação de IMC**: Após o cálculo, o IMC é classificado conforme as categorias:
  - 🟡 Abaixo do peso
  - 🟢 Peso normal
  - 🟠 Sobrepeso
  - 🔴 Obesidade grau 1
  - 🔴 Obesidade grau 2
- 📱 **Design responsivo**: A interface é feita com **Bootstrap** para ser compatível com dispositivos móveis e desktops.

## 📷 Demonstração

![Exemplo da Calculadora de IMC](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrV4hIsRO_1Le88wpLpjX4lQWimQ4A7irPg&s)

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- 🎨 **Bootstrap**: Framework CSS para criação de interfaces responsivas e estilizadas.
- 📜 **JavaScript**: Utilizado para lógica de cálculo do IMC.
- 🌐 **HTML/CSS**: Estrutura e estilização adicional.

## 🚀 Instalação e Execução

### Pré-requisitos

- 🟩 Node.js instalado (versão LTS recomendada)
- 📦 npm (gerenciador de pacotes do Node.js)

### Passos para rodar o projeto localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-imc.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd calculadora-imc
   ```
   
3. **Instale as dependências:**
     ```bash
      npm install
     ```
     
4. **Execute o projeto:**
     ```bash
      npm start
     ```
5. O aplicativo será aberto automaticamente no navegador, acessível em
   `http://localhost:3000.`

## 💻 Como Usar

1. Digite sua altura (em centímetros) e peso (em quilos) nos campos apropriados.
2. Clique no botão "Calcular".
3. O resultado do IMC e sua respectiva classificação serão exibidos na tela.

## 📁 Estrutura do Projeto

- `public/:` Contém o arquivo index.html e outros ativos públicos.
- `src/:` Contém o código-fonte do projeto React, incluindo o arquivo principal App.js.
- `App.js:` Componente principal onde está implementada a lógica de cálculo do IMC.
- `index.js:` Ponto de entrada do aplicativo React.

