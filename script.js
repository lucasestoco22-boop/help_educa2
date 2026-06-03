 // ================= MATRÍCULA =================

    const botaoMatricula = document.querySelector(".form-matricula button");

    botaoMatricula.addEventListener("click", function(){

      alert("Matrícula enviada com sucesso!");

    });

    // ================= LOGIN =================

    const botaoLogin = document.querySelector(".login-box button");

    botaoLogin.addEventListener("click", function(){

      const email = document.querySelector('.login-box input[type="email"]').value;

      const senha = document.querySelector('.login-box input[type="password"]').value;

      if(email === "" || senha === ""){

        alert("Preencha todos os campos!");

      } else {

        alert("Login realizado com sucesso!");

      }

    });

    // ================= PDF =================

    const botaoPdf = document.querySelector("#btnPdf");

    botaoPdf.addEventListener("click", function(){

      alert("PDF enviado com sucesso!");

    });

    // ================= CURSOS =================

    const botoesCurso = document.querySelectorAll(".btn-curso");

    botoesCurso.forEach(function(botao){

      botao.addEventListener("click", function(event){

        event.preventDefault();

        alert("Página do curso em desenvolvimento!");

      });

    });

    // ================= HEADER =================

    window.addEventListener("scroll", function(){

      const header = document.querySelector(".top-header");

      if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        header.style.background = "#ffffff";

      } else {

        header.style.boxShadow = "none";
        header.style.background = "#f5f5f5";

      }

    });
