const button = document.getElementById("botao")
const posts = []
button.onclick = function(){
    const titulo = document.getElementById("titulo-post").value
    const autor = document.getElementById("autor-post").value
    const conteudo = document.getElementById("conteudo-post").value
    const postagem = document.getElementById("localDosPosts")
    
    const post = {
        titulo,
        autor,
        conteudo,
    }

    const postDiv = `<p>titulo: ${post.titulo} autor: ${post.autor} conteudo: ${post.conteudo}</p>`
    posts.push(postDiv)
    
    postagem.innerHTML += posts


    if (titulo === ""){
        alert("Postagem em branco!")
    }
    
    
}

console.log(posts)

