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
                <label> DELETED CONTACTS ({{deleted.length}})</label>
            </div>
        </div>
        <div v-if="deleted.length>0">
            <div class=" ml-1 row details" v-for="(enemy, i) in deleted" :key="i">
                <div class="col-3 det">
                   <div class="pic mr-5">{{enemy.firstName.charAt(0)}}</div>{{enemy.firstName + " " + enemy.lastName}}</div>
                <div class="col-3 det">{{enemy.email}}</div>
                <div class="col-2 det">{{enemy.phone}}</div>
                <div class="col-2 det">{{enemy.job}}</div>
                <div v-if="enemy.hovered" class="col-2 det">
                    <span class="delfr"><i @click="enemy.isFriend = !enemy.isFriend" class="material-icons">{{enemy.isFriend ? 'star' : 'star_outline'}}</i></span>
                    <span class="delfr"><i class="ml-4 material-icons">delete</i></span>
                </div>
                <div class="col-2 det" v-else-if="!enemy.hovered && enemy.isFriend">
                    <span class="delfr"><i class="material-icons">star</i></span>
                </div>
            </div>
        </div >
        <div class="row" v-else>
            <div class="col text-center">
                NO DELETED CONTACTS YET!
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
        deleted (){
             let udc = this.$store.getters.deleted;
            let searchedContacts = this.searchContacts(udc);

            return searchedContacts;
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