<template>
    <div>
        <!-- <h1>Hello Peoples</h1> -->
        <top-bar></top-bar>
        <div class="bottom">
            <div class="left">
                <side-bar></side-bar>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import TopBar from './Topbar';
    import Sidebar from './Sidebar';
     import Contacts from './Contacts'
    export default {
    components: {
        topBar: TopBar,
        sideBar: Sidebar,
        contacts: Contacts
    }
    }
</script>
<style lang="scss" scoped>
    .bottom{
        display: flex;
        flex-direction: row;
        .left{
            width:20%;
        }
        .right{
            width: 80%;
        }
    }
</style>