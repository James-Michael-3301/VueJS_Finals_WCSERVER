<template>
  <div class="about">
    <!-- Hero Banner -->
    <div class="jumbotron bg-primary text-white p-5 rounded shadow-sm mb-4">
      <h1 class="display-4 font-weight-bold">About This Project</h1>
      <p class="lead">FIN-LAB-1: Comprehensive Routing and Navigation Activity in Vue.js</p>
      <hr class="my-4 bg-white opacity-25">
      <p>Demonstrating mastery of Vue components, programmatic routing, state management, and automated production deployment.</p>
    </div>

    <div class="row">
      <!-- Student Bio Card -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm h-100 border-0">
          <div class="card-header bg-light font-weight-bold">
            <i class="fas fa-user-graduate mr-2 text-primary"></i>Student Profile
          </div>
          <div class="card-body">
            <h5 class="card-title font-weight-bold">Student Developer</h5>
            <p class="card-text text-muted">Web Systems and Technologies Specialization</p>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item d-flex justify-content-between px-0">
                <span class="text-muted">Activity:</span>
                <strong>FIN-LAB-1 Routing & Navigation</strong>
              </li>
              <li class="list-group-item d-flex justify-content-between px-0">
                <span class="text-muted">Module:</span>
                <strong>Vue.js Router Architecture</strong>
              </li>
              <li class="list-group-item d-flex justify-content-between px-0">
                <span class="text-muted">Framework:</span>
                <strong>Vue.js 2.x / 3.x SPA</strong>
              </li>
              <li class="list-group-item d-flex justify-content-between px-0">
                <span class="text-muted">Hosting:</span>
                <span class="badge badge-success">Production Cloud Ready</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tech Stack & Competencies -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm h-100 border-0">
          <div class="card-header bg-light font-weight-bold">
            <i class="fas fa-code mr-2 text-primary"></i>Core Competencies
          </div>
          <div class="card-body">
            <div class="mb-3">
              <h6 class="font-weight-bold mb-1">Vue Router &amp; Navigation Guards</h6>
              <p class="small text-muted mb-0">Declarative client-side routing using &lt;router-link&gt; and dynamic &lt;router-view&gt; viewports.</p>
            </div>
            <div class="mb-3">
              <h6 class="font-weight-bold mb-1">Bootswatch Theme Integration</h6>
              <p class="small text-muted mb-0">Clean responsive typography and components styled with the Cerulean theme.</p>
            </div>
            <div class="mb-3">
              <h6 class="font-weight-bold mb-1">Single Page App Cloud Hosting</h6>
              <p class="small text-muted mb-0">Production compilation with minification and server rewrite configurations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  padding-bottom: 20px;
}
</style>
