<template>
    <div class="create">
        <div class="fill">
            <div class="row">
                <div class="col text-center">
                    <h5>Create New Contact</h5>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="row justify-content-between mt-5 align-items-center">
                        <div class="col-2">
                            <div class="pic"></div>
                        </div>
                        <div class="col-5">
                            <div class="write">
                                <input v-model.lazy="firstName" type="text">
                                <label class="form-label"> <span class="form-content">First Name</span></label>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="write">
                                <input v-model.lazy="lastName" type="text">
                                <label class="form-label"> <span class="form-content">Last Name</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 justify-content-between align-items-center">
                        <div class="col-2 text-center">
                            <i class="material-icons">domain</i>
                        </div>
                        <div class="col-5">
                            <div class="write">
                                <input v-model.lazy="company" type="text">
                                <label class="form-label"> <span class="form-content">Company</span></label>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="write">
                                <input v-model.lazy="job" type="text">
                                <label class="form-label"><span class="form-content">Job</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 align-items-center">
                            <div class="col-2 text-center">
                            <i class="material-icons">email</i>
                            </div>
                            <div class="col-10">
                                <div class="write">
                                    <input v-model.lazy="email" type="email">
                                    <label class="form-label"><span class="form-content">Email</span></label>
                                </div>
                            </div>
                    </div>
                     <div class="row mt-4 align-items-center">
                            <div class="col-2 text-center">
                            <i class="material-icons">phone</i>
                            </div>
                            <div class="col-10">
                                <div class="write">
                                    <input v-model.lazy="phone" type="tel">
                                    <label class="form-label"><span class="form-content">Phone</span></label>
                                </div>
                            </div>
                    </div>
                    <div class="row mt-4 align-items-center">
                            <div class="col-2 text-center">
                            <i class="material-icons">note</i>
                            </div>
                            <div class="col-10">
                                <div class="write">
                                    <input v-model.lazy="notes" type="text">
                                    <label class="form-label"><span class="form-content">Notes</span></label>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-2" style="border-bottom: 1px solid lightgray"></div>
           <div class="row justify-content-between">
               <div class="col-3 text-center">
               <span>Show more</span>
               </div>
               <div class="col-4">
                   <div class="row">
                       <div class="col-6"><span>Cancel</span></div>
                       <div class="col-6"><span @click="submit">Save</span></div>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .create{
       .fill{
        border: 1px solid lightgray;
        padding:30px 10px 20px;
        width:50%;
        .form-label{
            position: absolute;
            bottom:0px;
            left:0px;
            border-bottom: 1px solid lightgray;
            width:100%;
            height:100%;
            pointer-events: none;
            // transition: all 3s;
            padding:0;
            margin:0;
            overflow:hidden;
            .form-content{
                position:absolute;
                bottom:5px;
                transition: all 0.3s ease;
                color: black
            }
            
        }
        .form-label::after{
            content:'';
             position: absolute;
            bottom:0px;
            left:0px;
            border-bottom: 3px solid #1a73e8;
            transform:translateX(-100%);
            width:100%;
            height:100%;
            pointer-events: none;
            transition: all 0.3s ease;
            padding:0;
            margin:0;
        }
        .write input:focus + .form-label::after{
            transform: translateX(0);

        }
        .write input:focus + .form-label .form-content{
            transform: translateY(-100%);
            font-size: 14px;
            color: #1a73e8;

        }
        .write{
            padding:10px 0;
            position:relative;
            height:80px;
            width:95%;
            // border-bottom:1px solid lightgray;
            // background-color: red;
        }
        span{
            padding:5px 5px 7px 5px;
            font-weight: 600;
            color: #1a73e8;
            cursor: pointer;
            &:hover{
                background-color:  #e8f0fe;
                text-decoration: none;
            }
        }
         .pic{
            width:50px;
            height:50px;
            border-radius: 50%;
            background-color: gray;
            margin:auto;
            // For now
        }
       
        input{
            border:none;
            width:100%;
            height: 100%;
            padding-top:20px;
            &:focus{
                outline: none;
            }
        }
       }
    }
</style>
<script>
export default {
    data () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            notes: "",
            job: "",
            company: "",
            isFriend: false,
            isDeleted: false,
            hovered: false
        }
    },
    methods: {
        submit() {
            this.$store.commit('createContact', {
                firstName: this.firstName,
                lastName: this. lastName,
                email:this.email,
                phone: this.phone,
                notes: this.notes,
                job: this.job,
                company: this.company,
                isFriend: false,
                isDeleted: false,
                hovered: false
            });
            this.$router.push({name: 'main'});
        }
    },
}
</script>