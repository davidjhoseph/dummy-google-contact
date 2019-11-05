import LandingPage from './LandingPage'
import Contacts from './Contacts'
import Friends from './Friends'
import CreateContact from './CreateContact'
import Deleted from './Deleted'

export default [
    {path:'/', component: LandingPage, name: 'main', children:[
        {path: '', component: Contacts, name: 'main' },
        {path: '/create', component: CreateContact, name: 'createcontact' },
        {path: '/friends', component: Friends, name: 'friends' },
        {path: '/deleted', component: Deleted, name: 'deleted' }
    ]},
]