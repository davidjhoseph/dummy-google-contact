export default {
    // computed: {
    //     searchTerm:{
    //         get(){
    //             return this.$store.state.search;
    //         },
    //         set(value){
    //             this.$store.state.search = value
    //         }

    //     }
    // },
    methods: {
        searchContacts(contacts){
            let search = this.$store.state.search.toLowerCase()
            if(search === ""){
                return contacts;
            }else {
                let result = [];
                contacts.forEach(contact => {
                   if((contact.firstName.toLowerCase().indexOf(search) !== -1) || (contact.lastName.toLowerCase().indexOf(search) !== -1)) {
                       result.push(contact);
                   }
                });
                return result;
            }
        }
    }
}