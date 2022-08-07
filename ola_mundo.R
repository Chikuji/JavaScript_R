printa_vezes <- function(lista, quantidade){
    mensagem <- paste(lista, quantidade)
    rep(mensagem, quantidade)
}

do.call(printa_vezes, input)