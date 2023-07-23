<template>
<div id="app">
  <div class="container">
  <b-navbar toggleable="lg" type="dark" variant="success" class="fixed-top mb-5">
    <b-navbar-brand href="/">Company Logo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="b-nav-item" to="/">Home</router-link>
      </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"> Shop
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">0</span>
            </router-link>
          </li>
        </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</div>
</template>

<script>


</script>

