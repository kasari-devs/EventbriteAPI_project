// instanciate both classes
const eventbrite = new EventBrite ();
const ui = new UI ();


// listners fo the submit button
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // get value from the form
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    //console.log(eventName + ':' + category);

    if (eventName !== '') {
        // query eventbrite API
        eventbrite.queryAPI(eventName, category)
            .then(events => {
                console.log(events);
            })
    } else {
        console.log('fail');

        // print a message
        ui.printMessage('add an event or city', 'alert alert-danger mt-4');
    }
})
