<template>
    <div>
        <section class="section container">
            <div class="columns">
                <form class="column is-three-fifths" style="display: block;">
                    <div class="field has-addons">
                        <div class="control">
                            <div class="dropdown is-active">
                                <div class="dropdown-trigger">
                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>FILTER</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <!--<div class="dropdown-content">
                                        <a href="#" class="dropdown-item">
                                            Dropdown item
                                        </a>
                                        <a class="dropdown-item">
                                            Other dropdown item
                                        </a>
                                        <a href="#" class="dropdown-item is-active">
                                            Active dropdown item
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            Other dropdown item
                                        </a>
                                        <hr class="dropdown-divider">
                                        <a href="#" class="dropdown-item">
                                            With a divider
                                        </a>
                                    </div>-->
                                </div>
                            </div>
                        </div>
                        <div class="control is-expanded">
                            <!--<i class="fas fa-search"></i>-->
                            <input class="input" type="text" placeholder="">
                        </div>
                    </div>
                </form>
                <div class="column">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <button class="button">
                                <i class="fas fa-search"></i> <p class="is-uppercase ml-2">Label</p><span class="tag is-link is-rounded">6</span>
                            </button>
                        </div>
                        <div class="control">
                            <button class="button">
                                <i class="fas fa-search"></i> <p class="is-uppercase ml-2">Milestones</p><span class="tag is-link is-rounded">6</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="control">
                        <button class="button is-success">
                            <p class="is-uppercase ml-2">New Issues</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section container">
            <div class="panel">
                <div class="tabs panel-heading">
                    <ul>
                        <li :class="{ 'is-active': activeTab === 'open' }" class="is-capitalized" @click="activeTab = 'open'">
                            <a>0pen</a>
                        </li>
                        <li :class="{ 'is-active': activeTab === 'close' }" class="is-capitalized" @click="activeTab = 'close'">
                            <a>Closed</a>
                        </li>
                    </ul>
                </div>
                <div v-if="activeTab === 'open'">
                    <a class="panel-block is-active">
                        <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        bulma
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        marksheet
                    </a>
                    <!-- Afficher le contenu ici -->
                </div>
                <div v-if="activeTab === 'close'">
                    <!-- Afficher le contenu ici -->
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        minireset.css
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        jgthms.github.io
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'open',
      tabs: [
        { name: 'open' },
        { name: 'close' }
      ]
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
    }
  }
}
</script>
<style scoped>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    @import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
    .panel-heading {
    border-radius: 0px 0px 0 0;
    padding: 0.5em 1em;
    }
    .tabs ul {
    border-bottom-style: none;
    }
    .tabs a {
        border-bottom-style: none;
    }
    .section {
    padding: 1rem 3rem;
    }
    .panel{
    box-shadow: none;
    border: 1px solid #ccc;
    }
    .tabs:not(:last-child){
     margin-bottom: 0rem;
    }
</style>
