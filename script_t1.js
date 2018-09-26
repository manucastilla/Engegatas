document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://aula-10-a1ec0.firebaseio.com/')

	let params = extract()

	let url = '/' + params['topico'] + '/courses'

	let url2 = '/'+ params['topico'] + '/courses/' + params['projeto'] 

	console.log(url)
	console.log(url2)

	db.download(url2,function(data){
		console.log(data)
			replace('body', {
				'curs': data['goals'],
				'nome': data['nome'],

			})
			console.log(data['nome'])
	
	})
/*
    db.download(url, function(data) {
    	replace('body', {
    		'courses': data,
    	})
    })*/
/*
	db.download(url, function(data) {
		for(key in data){
			let nome = document.querySelector('.nome')
    		nome.innerHTML = tpNome.generate({'nome': data[key]['nome']})
    	}
    	*/
    	//let courses = document.querySelector('.goals')
    	//courses.innerHTML = tpCourses.generate({'goals': data['goals']})




		//for(key in data){

			/*replace('body', {
				'nome': data[key]['nome'],
				}
			)*/
			//console.log(data[key]['nome'])
		//} 
  	//})
})
