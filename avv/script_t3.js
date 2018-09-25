document.addEventListener('DOMContentLoaded', function() {
	let db = new DB('https://aula-10-a1ec0.firebaseio.com/')
	let params = extract()
	let url = '/' + params['topico3'] + '/courses/' + params['course']

	db.download(url, function(data) {
		replace('body', {
			'nome': data['nome'],
  })
})


	 /* url =  '/topico3/courses/materiai' */