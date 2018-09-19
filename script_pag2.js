document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://aula-10-a1ec0.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpNome = new TP('template-nome')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'

  db.download(url, function(data) {
    let name = document.querySelector('.name')
    name.innerHTML = tpName.generate({'name': data['name']})

    let nome = document.querySelector('.nome')
    nome.innerHTML = tpNome.generate({'nome': data['nome']})

})
})
