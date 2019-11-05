<template>
    <div class="topbar">
        <div class="side">
            <div class="toggler mr-4">
                <div class="tog"></div>
                <div class="tog mt-1"></div>
                <div class="tog mt-1"></div>
            </div>
            <router-link
            :to="{name :'main'}"
            >
                <div class="googleImg mr-2">
                    <img src="./assets/icon-google.png">
                </div>
            </router-link>
            <router-link
            :to="{name :'main'}"
            tag="div"
            >
                <h4 style="cursor:pointer">Contacts</h4>
            </router-link>
        </div>
        <div class="fr">
            <div class="searchbar">
                <div class="icon">
                    <i class="material-icons text-center">search</i>
                </div>
                <input v-model="searchitems" class="search" type="text" placeholder="Search">
            </div>
            <div class="last">
                <i class="material-icons mr-4"> help_outline </i>
                <i class="material-icons mr-5"> settings </i>
                <div class="pic ml-5">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import searchitem from './searchBar'
export default {
    computed: {
        searchitems: {
            get(){
                return this.$store.state.search;
            },
            set(value){
                this.$store.state.search = value;
            }
        }
    },
}
</script>
<style scoped lang="scss">
.topbar{
    display:flex;
    flex-direction: row;
    align-items: center;
    // justify-content: space-between;
    padding: 20px;
    color: #616161;

    i{
        font-size: 25px;
    }
    .side{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 20%;
    }
    .toggler{
        .tog{
            width:25px;
            height:3px;
            background-color: gray;
        }
    }
    .googleImg{
        cursor: pointer;
        img{
        width:50px;
        }
    }
    .contacts{
       text-decoration: none;
        h4{
            color:#5f6368;
        }
    }
    .fr{
        width:80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .searchbar{
            width:60%;
            height: 60px;
            background-color: #f1f3f4;;
            border-radius: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            &:focus{
                box-shadow: 3px 3px 2px 1px black;
                border-radius: 8px 8px 0 0;

            }
            .icon{
                width:8%;
                height:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                i{
                    font-size: 30px;
                    padding:7px;
                    border-radius: 50%;
                    cursor:pointer;
                    &:hover{
                    background-color: lightgray;

                    }

                }
            }
            .search{
                width:90%;
                height:100%;
                border:none;
                background: transparent;
                &:focus{
                    outline:none;
                    background: transparent;
                }
            }
        }
        .last{
            display: flex;
            flex-direction: row;
            align-items: center
        }
        .pic{
            width:50px;
            height:50px;
            border-radius: 50%;
            background-color: gray;
            // For now
            margin-left:10px;
        }
    }
}
</style>