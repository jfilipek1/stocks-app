var instasearchApp = new Vue({
	
	el: '#app-instasearch',
	
	data: { 
		authorNameSearchString: "",
		photoFeed: null
	},
	
	mounted() {
		axios
			.get('https://raw.githubusercontent.com/open-football-apis/stocks-wig20/master/wig20.json')
			.then(response => {
				this.photoFeed = response.data;
			})
			.catch(error => console.log(error))
	},
	
	 computed: {
        
        filteredPhotoFeed: function () {
			
            var photos = this.photoFeed;
            var authorNameSearchString = this.authorNameSearchString;

            if(!authorNameSearchString){
                return photos;
            }

            searchString = authorNameSearchString.trim().toLowerCase();

            photos = photos.filter(function(item){
                if(item.name.toLowerCase().indexOf(authorNameSearchString) !== -1){
                    return item;
                }
            })

            return photos;
        }
	 }
	
});
