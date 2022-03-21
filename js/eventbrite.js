class EventBrite  {
    constructor (){
        this.auth_token = 'DN2ZSTX52WBEQJNVO6EC';
        this.orderby = 'date';
    }
    async queryAPI (eventName, category) {
        const eventResponse = await fetch (`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}
        &sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);

        // wait for the response and return as json
        const events = await eventResponse.json();
        return {
            events
        }
    }
    // get categories from API
    async getCategoriesAPI () {
        const categoriesResponse = await fetch 
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // holds for the response return as JSON
        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}
