import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./about.html","./team.html","./shop.html","./cart.html","./product1.html","./checkout.html","./faq.html","./blog.html","./contact.html",]
    }
  }
})