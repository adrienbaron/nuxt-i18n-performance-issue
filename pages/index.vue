<script>
  import BasicListItem from "../components/BasicListItem";
  export default {
    components: {BasicListItem},
    data () {
      return {
        itemCount: 0
      }
    },
    methods: {
      toggle () {
        if (!this.itemCount) {
          this.itemCount = 5000
        } else {
          this.itemCount = 0
        }
      }
    }
  }
</script>

<template>
  <section class="container">
    <div>
      <p class="links">
        <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      </p>
      <h1 class="title">
        {{ $t('HELLO') }}
      </h1>
      <p>
        To try the issue, open Chrome dev tools, then go to the performance tab.<br/>
        Click on record then toggle the list to create items and stop recording.<br/>
        You'll notice that getMetaInfo was triggered by the creation of BasicListItems.<br/>
        This should probably not happen as they do not have meta info (see the issue for more details).<br/><br/>
      </p>
      <button @click="toggle">Toggle List Content</button>
      <ul>
        <BasicListItem v-for="i in itemCount" :key="i" text="Hello There"/>
      </ul>
    </div>
  </section>
</template>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
