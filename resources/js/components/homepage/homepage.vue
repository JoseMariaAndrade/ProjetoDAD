<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-4">{{ title }}</h1>
            <p class="lead">Number of Wallets on our Platform: {{ number_wallets }}</p>
            <hr class="my-4">
            <div v-if="clickedButton && formSubmitted && not_logged === false">
                <button @click="clickLogin" class="btn btn-primary" href="#/register" role="button">Login Now!</button>
            </div>
            <div>
                <button v-if="not_logged === false && clickedButton === false && formSubmitted === false"
                        @click="clickRegister" class="btn btn-primary" href="#/register" role="button">Register Now</button>
                <button v-if="not_logged === false && clickedButton === false && formSubmitted === false"
                        @click="clickLogin" class="btn btn-primary" href="#/register" role="button">Already an User?</button>
            </div>
            <register-user v-if="clickedButton && formSubmitted === false" v-on:cancel-registration="cancelRegistration" v-on:form-submitted="formSubmittion"></register-user>
            <login v-if="not_logged === true" v-on:cancel-login="not_logged = false"></login>
        </div>
    </div>
</template>

<script>
    import Login from '../auth/login.vue';

    export default{
        components: {Login},
        data: function() {
            return{
                title: 'Homepage',
                clickedButton: false,
                formSubmitted: false,
                not_logged: this.$store.state.logged_in,
            }
        },
        methods: {
            cancelRegistration: function(){
                this.clickedButton = false;
            },
            clickRegister: function(){
                this.clickedButton = true;
                this.$store.commit('resetErrorLogged');
            },
            clickLogin: function(){
                this.not_logged = true;
                this.formSubmitted = false;
                this.clickedButton = false;
                this.$store.commit('resetErrorLogged');
            },
            formSubmittion: function(){
                this.formSubmitted = true;
            }
        },
        computed:{
            number_wallets: function(){
                return this.$store.state.number_wallets;
            }
        }
    }
</script>

<style scoped>

</style>
