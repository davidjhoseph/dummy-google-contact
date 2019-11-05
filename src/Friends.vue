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
                <label> FRIENDS ({{friends.length}})</label>
            </div>
        </div>
        <div v-if="friends.length>0">
            <div class=" ml-1 row details" v-for="(friend, i) in friends" :key="i">
                <div class="col-3 det">
                    <div class="pic mr-5">{{friend.firstName.charAt(0)}}</div>{{friend.firstName + " " + friend.lastName}}</div>
                <div class="col-3 det">{{friend.email}}</div>
                <div class="col-2 det">{{friend.phone}}</div>
                <div class="col-2 det">{{friend.job}}</div>
               <div v-if="friend.hovered" class="col-2 det">
                <span class="delfr"><i @click="friend.isFriend = !friend.isFriend" class="material-icons">{{friend.isFriend ? 'star' : 'star_outline'}}</i></span>
                <span class="delfr"><i class="ml-4 material-icons" @click="trash(friend)">delete_outline</i></span>
            </div>
            <div class="col-2 det" v-else-if="!friend.hovered && friend.isFriend">
                <span class="delfr"><i class="material-icons">star</i></span>
            </div>
            </div>
        </div >
        <div class="row" v-else>
            <div class="col text-center">
                NO FRIENDS YET YOU LONELY BISH!
            </div>
        </div>
    </div>
</template>
<script>
import data from './data'
import searchMixin from './searchBar';
export default {
    mixins:[searchMixin],
    data () {
        return {
        }
    },
    computed: {
        friends (){
            let friends = this.$store.getters.friends
            return this.searchContacts(friends);
        }
    }
}
</script>
<style lang="scss" scoped>
    .contact{
      width:95%;
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