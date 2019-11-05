<template>
<div class="sidebar">
    <router-link
    :to= "{name:'createcontact'}"
    tag="h6"
    >
        <div class="create">
            <h6>Create Contact</h6>
        </div>
    </router-link>

    <router-link
        :to="{name: 'main'}"
        exact
        active-class="active"
        tag="div"
    >
        <side-menu name="Contacts" :numLength="contacts.length" icon="person_outline"></side-menu>
    </router-link>

    <side-menu name="Frequently contacted" icon="restore"></side-menu>
    <side-menu name="Duplicates" icon="filter_none"></side-menu>

    <div class="border-bottom bord my-2"></div>

    <side-menu name="Labels" :icon="labelClicked ? 'keyboard_arrow_down' : 'keyboard_arrow_right'" @click.native="labelClicked= !labelClicked"></side-menu>
    <div v-if="labelClicked">
        <router-link
            :to="{name:'friends'}"
            exact
            tag="div"
            active-class="active"
        >
            <side-menu name="Friends" :numLength="friends.length" icon="face"></side-menu>
        </router-link>
        <side-menu name="Create Label"  icon="add"></side-menu>
    </div>

    <div class="border-bottom bord my-2"></div>
    <side-menu name="Import" icon="backup"></side-menu>
    <side-menu name="Export" icon="cloud_download"></side-menu>
    <side-menu name="Print" icon="print"></side-menu>
    <div class="border-bottom bord my-2"></div>
    <router-link
        :to="{name:'deleted'}"
        exact
        tag="div"
        active-class="active"
    >
        <side-menu name="Deleted contacts" icon="delete_outline" :numLength="deleted.length"></side-menu>
    </router-link>
</div>
</template>
<script>
    import menuIcons from './SideBarMenu'
    export default {
        data () {
            return {
                labelClicked: true
            }
        },
        computed: {
            contacts() {
                return this.$store.getters.undeleted
            },
            friends() {
                return this.$store.getters.friends
            },
            deleted() {
                return this.$store.getters.deleted
            }
        },
        components: {
            sideMenu: menuIcons
        }
    }
</script>
<style lang="scss" scoped>
.sidebar{
    .active{
        .sidemenu-item{
            color:#1a73e8 !important;
            background-color: #e8f0fe !important; 
            border-radius: 0 50px 50px 0;
        }
    }
    .bord{
        width:90%;
    }
    .create{
        width:200px;
        height:60px;
        border-radius:100px;
        margin-left:10px;
        display:flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        box-shadow:0 4px 8px 3px rgba(60,64,67,0.149);
        cursor: pointer;
        margin: 10px 0 30px 10px;
        &:hover{
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302);
        }
        h6{
            margin:auto;
        }
    }
}
</style>