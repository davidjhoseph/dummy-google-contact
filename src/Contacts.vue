<template>
    <div class="contact">
        <div class=" ml-1 row bold">
            <div class="col-3">Name</div>
            <div class="col-3">Email</div>
            <div class="col-2">Phone Number</div>
            <div class="col-2">Job Title & Company</div>
            <div class="col-2">Labels</div>
        </div>
        <div class="border-bottom my-3">
        </div>
        <div class="ml-1 row my-2 mild">
            <div class="col">
                <label> CONTACTS ({{contacts.length}})</label>

            </div>
        </div>
        <div class=" ml-1 row details" v-for="(user, i) in contacts" :key="i" @mouseover="user.hovered = true" @mouseleave="user.hovered = false">
            <div class="col-3 det">
                <div class="pic mr-5">{{user.firstName.charAt(0)}}</div>{{user.firstName + " " + user.lastName}}
            </div>
            <div class="col-3 det">{{user.email}}</div>
            <div class="col-2 det">{{user.phone}}</div>
            <div class="col-2 det">{{user.job}}</div>
            <div v-if="user.hovered" class="col-2 det">
                <span class="delfr"><i @click="user.isFriend = !user.isFriend" class="material-icons">{{user.isFriend ? 'star' : 'star_outline'}}</i></span>
                <span class="delfr"><i class="ml-4 material-icons" @click="trash(user)">delete_outline</i></span>
            </div>
            <div class="col-2 det" v-else-if="!user.hovered && user.isFriend">
                <span class="delfr"><i class="material-icons">star</i></span>
            </div>
        </div>
    </div>
</template>
<script>
import data from './data';
import searchMixin from './searchBar';
export default {
    mixins: [searchMixin],
    data () {
        return {
        }
    },
    computed: {
        contacts () {
            // return this.searchContacts(this.$store.getters.undeleted);
            let udc = this.$store.getters.undeleted;
            let searchedContacts = this.searchContacts(udc);

            return searchedContacts;
        },
    },
    methods: {
        trash(user) {
            if(confirm('Are you sure you want to delete ' + user.firstName + " " + user.lastName + '?')) {
                user.isDeleted = true
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .contact{
        overflow-y: auto;
        overflow-x: hidden;
        width:100%;
        height:90vh;
      color:  #616161;
      .bold{
          font-weight:bold;
      }
      .mild{
          font-size: 14px;
          font-weight: 500;
      }
      .details{
        &:hover{
        background-color: lightgray;
        }
        .det{
            display: flex;
            flex-direction: row;
            align-items: center;
            height:60px;
            .delfr{
                cursor: pointer;
            }
            .pic{
            width:40px;
            height:40px;
            border-radius: 50%;
            background-color: purple;
            color: #ffffff;
            display:flex;
            align-items: center;
            justify-content: center;
            font-size:30px;
            font-weight: 500;
            }
        }
      }
      
        
    }
</style>