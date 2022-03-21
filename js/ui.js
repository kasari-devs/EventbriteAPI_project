class UI {
    constructor () {
        this.init();
    }
    // method when the app starts
    init () {
        this.printCategories ();
    }
    printCategories () {
        const categories = eventbrite.getCategoriesAPI()
            .then(categories => {
                const categoriesList = categories.categories.categories;
                const categorySelect = document.querySelector('#category');

                // insert categories into the select drop-down
                categoriesList.forEach(element => {
                    // create the options
                    const option = document.createElement('option');
                    option.value = element.id;
                    option.appendChild(document.createTextNode(element.name));
                    categorySelect.appendChild(option);
                });
                
            })
            .catch(error => console.log(error));
    }

    // displayes a message
    printMessage ( message, className) {
        const div = document.createElement('div');
        div.className = className;

       // add the text
       div.appendChild(document.createTextNode(message));
       
       // insert into the HTML
       const searchDiv = document.querySelector('#search-events');
       searchDiv.appendChild(div);

       // remove the alert after 2s
        setTimeout(() => {
           this.removeMessage(); 
        }, 2000);
    }

    // remove the message
    removeMessage () {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
}
