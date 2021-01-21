var textarea = document.querySelector("textarea"); //"coleta" o objeto textarea do arquivo "keycode.html"
textarea.addEventListener("keydown", function(event){ //cria um EventListener para o objeto
    if(event.keyCode == 113){ //reconhece a tecla "F2" como a escolhida
        replaceSelection(textarea, "Khasekhemwy"); //chama a função replaceSelection e mostra o output no textarea do dado armazenado
        event.preventDefault(); 
    }
});
function replaceSelection(field,word){ //aqui é onde a mágica acontece
    var from = field.selectionStart, to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word + field.value.slice(to);

    field.selectionStart = field.selectionEnd = from + word.length;
}