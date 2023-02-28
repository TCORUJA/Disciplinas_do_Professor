function buscar(){
    var matricula = document.getElementById('matricula').value;
    var validacoes = document.getElementById('validacoes');
    var disciplinas = document.getElementById('disciplinas');
    var nomeTopo = document.getElementById('nomeTopo');

    var matricula0001 = document.getElementsByClassName('tut0001');
    var matricula0002 = document.getElementsByClassName('tut0002');
    var i;
    
    validacoes.classList.add('displayNone');
    disciplinas.classList.remove('displayNone');

    if(matricula == "tut0001"){
        nomeTopo.innerHTML = "Disciplinas do Tutor (tut0001)";
        for (i=0; i< matricula0001.length; i++)
            matricula0001[i].classList.remove('displayNone');
    }
    else if(matricula == "tut0002"){
        nomeTopo.innerHTML = "Disciplinas do Tutor (tut0002)";
        for (i=0; i< matricula0002.length; i++)
            matricula0002[i].classList.remove('displayNone');
    }
    else{
        window.alert("Matrícula não encontrada!\nPor favor, verifique se a matrícula inserida está correta.")
    }
}