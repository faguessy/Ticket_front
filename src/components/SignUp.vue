<template>
    <div>
        <section class="section container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <label class="label has-text-left">Username or Email</label>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email">
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <label class="label has-text-left">Password</label>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <div class="is-pulled-right">
                        <button class="button is-success">Connexion</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    @import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
</style>
