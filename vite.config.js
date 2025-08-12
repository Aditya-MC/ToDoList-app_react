import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ToDoList-app_react/', // repo name exactly as it is on GitHub
})
