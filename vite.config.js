import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lfrancoepifani.github.io/FunDit.github.io/', // Cambia '/mi-proyecto/' a la URL base que deseas
  plugins: [react()],
});
