<template>
    <div class="sidemenu-item">
        <i class="material-icons spec1 text-center">{{icon}}</i>
        <div class='spec2'>{{name}}</div>
        <div class="spec3">{{numLength}}</div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        numLength: {
            type: Number,
        },
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.sidemenu-item{
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 50px 50px 0;
    font-weight: 500;
    color: #616161;
    cursor: pointer;

    &:hover{
        background-color: #f1f3f4;
    }
    

    .spec1{
        flex: 1;
    }
    .spec2{
        flex: 3;
    }
    .spec3{
        flex: 1;
    }
}
</style>