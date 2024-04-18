# Projeto Site - Crash Bandicoot
![image](https://github.com/LehLapa/SiteDJWII/blob/main/Crash.avif)
# Criadores:
Aluna: Letícia da Lapa Silva 

**Cursando:** ETEC Professor Basilídes de Godoy - Ensino Médio Integrado ao Curso Técnico de Programação de Jogos Digitais. 2ºA/2023

# Descrição 
Esse projeto é a criação de um site, para se familiarizar e desenvolver a linguagem Java Script. Especificamente o Add Event Listener utilizando o **click** do **mouse**. 

    var myimage = document.getElementById("imgc");
      myimage.addEventListener('click', () =>{
      let imgp = Math.round(Math.random () * 10) + 1;
      myimage.setAttribute("src", "img/"+imgp+".jpg");
    });
##
# Códigos Git Bash
- Em primeiro passo, passei todos os códigos para o programa Visual Code, após, adicionei "New Files" com as linhas de código. Códigos de HTML, CSS e JavaScript. Adicionei também uma "New Folder", pasta para adicionar as imagens do Site. 

- Segundo passo foi abrir o Git Bash na pasta, no qual programei o trabalho e digitar os **seguintes códigos**:
    - $ **git --version** // Para verificar a versão que instalei do Git Bash. Logo após adicionei:
    - $ **git init** // Para inicializar um repositório vazio no Git. (Esse foi o primeiro passo para começar a fazer a **conexão do Git Desktop com o Git Bash**). Em seguida, escrevi:
    - $ **git add .** // Para adicionar **todos** os arquivos que queremos que vá para a área de Staging. Após:
    - $ **git status** // Verificar a situação do nosso staging. 
    - $ **git commit -m "First commit - Adicionando arquivos para Git Web"** // Para fazer o commit dos arquivos. Fiz novamente o código para verificar o status do Staging:
    - $ **git status** // Verificar status do staging. Depois, renomeie a nomenclatura da branch principal "master" para "main"
    - $ **git branch -M (ou -am) "main"** // (Renomeie a nomenclatura). Depois das dessas pequenas linhas de código, entrei no GitHub Web para criar o repositório do meu projeto, com fins de todo nosso projeto/alterações que fizermos no repositório local possa ser enviado para o GitHub Web. Faciliando, se necessário, o acesso do projeto em qualquer máquina que há o GitHub Web. Depois da criação do repositório na interface gráfica do GitHub, voltei para o Git Bash na intenção de terminar todo o processo de linkagem. Então:
    - $ **git remote add origin <link.git>** // Fiz o "insert", fazendo a conexão entre o repositório local com o GitHub Web. Após fazer o comando, o GitHub Web não apareceu o meu repositório, ainda estava faltando uma linha de código para terminar todo o processo. Na qual era:
    - $ **git push -u origin main** // Comando para levar os commits que estão no repositório local, para o repositório remoto. Finalizado o processo, fiz a autenticação no GitHub Web, e estava finalizado a linkagem do projeto.
