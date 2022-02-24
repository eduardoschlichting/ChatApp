<template>
  <section id="app">
    <header>
      <h1 class="hidden">Welcome to the Chat App!</h1>
      <h2>Chat App with Vue CLI, Express and Socket.io</h2>
    </header>

    <h3>Dynamic Content Below:</h3>
    <router-view></router-view> <!-- Empty container where all the stuff will go -->
    <h3>Dynamic Content Above ^</h3>
  </section>
</template>

<style lang="scss">
  .hidden { display: none; }

  header {
    text-align: center;
    background-color: blue;
    padding: 1em 0.8em;
    color: white;    
  }

  header h2 {
    font-size: 2em;
    margin-bottom: 0.8em;
  }

</style>
