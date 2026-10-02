<template>
  <div class="blog">
    <div class="jumbotron bg-light p-4 rounded mb-4 shadow-sm border">
      <h1 class="display-5 font-weight-bold text-primary">{{ title }}</h1>
      <p class="lead">Insights, tutorials, and development updates for modern Vue 3 & Node v24 developers.</p>
    </div>

    <div class="row">
      <div class="col-md-6 mb-4" v-for="post in posts" :key="post.id">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <span class="badge badge-info mb-2">{{ post.category }}</span>
            <h5 class="card-title font-weight-bold">{{ post.title }}</h5>
            <p class="card-text text-muted">{{ post.summary }}</p>
          </div>
          <div class="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center text-muted small">
            <span><i class="far fa-calendar-alt mr-1"></i> {{ post.date }}</span>
            <span><i class="far fa-clock mr-1"></i> {{ post.readTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data () {
    return {
      title: 'Blog',
      posts: [
        {
          id: 1,
          category: 'Vue Router 4',
          title: 'Understanding Vue 3 Single Page Application Routing',
          summary: 'How createWebHistory() intercepts URL transitions natively on modern browsers without triggering server reloads.',
          date: 'Sep 24, 2026',
          readTime: '4 min read'
        },
        {
          id: 2,
          category: 'Node v24 Engine',
          title: 'Why Vite Replaced Legacy Webpack 3',
          summary: 'Eliminating the "No such module: http_parser" failure by adopting native ES modules with zero legacy Node bindings.',
          date: 'Sep 20, 2026',
          readTime: '5 min read'
        },
        {
          id: 3,
          category: 'Deployment',
          title: 'Configuring Cloud SPA Fallbacks for Production',
          summary: 'Solving the 404 page refresh error in Vercel and Netlify by rewriting all incoming requests to index.html.',
          date: 'Sep 15, 2026',
          readTime: '5 min read'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blog {
  padding-bottom: 20px;
}
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
}
</style>
