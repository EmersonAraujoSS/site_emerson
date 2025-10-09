# Site Emerson Araújo

Site pessoal profissional desenvolvido com HTML5, CSS3 e JavaScript vanilla, otimizado para SEO e performance.

## 🚀 Deploy no GitHub Pages

### Pré-requisitos
- Node.js instalado
- Conta no GitHub

### Passos para Deploy

1. **Preparar o projeto**
   ```bash
   npm install
   npm run build
   ```

2. **Criar repositório no GitHub**
   - Crie um novo repositório público no GitHub
   - Nome sugerido: `emersonaraujo.github.io` (para usar como site principal)

3. **Fazer upload dos arquivos**
   - Faça upload de todos os arquivos da pasta `dist/` para o repositório
   - Ou use Git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

4. **Configurar GitHub Pages**
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Salve as configurações

5. **Configurar domínio personalizado (opcional)**
   - Em Settings > Pages > Custom domain
   - Digite seu domínio personalizado

### 📊 Configurações para Google Search e Ads

#### Google Search Console
1. Acesse [Google Search Console](https://search.google.com/search-console/)
2. Adicione sua propriedade (URL do site)
3. Substitua `VERIFICATION_CODE` no HTML pela meta tag de verificação
4. Envie o sitemap: `https://seudominio.com/sitemap.xml`

#### Google Analytics
1. Crie uma conta no [Google Analytics](https://analytics.google.com/)
2. Substitua `GA_MEASUREMENT_ID` no HTML pelo seu ID de medição
3. Configure objetivos e conversões

#### Google Ads
1. Crie uma conta no [Google Ads](https://ads.google.com/)
2. Configure campanhas de pesquisa
3. Use as palavras-chave otimizadas no site
4. Configure conversões baseadas no formulário de contato

## 🛠️ Estrutura do Projeto

```
dist/
├── index.html          # Página principal otimizada
├── css/style.css       # Estilos minificados
├── js/app.js          # JavaScript otimizado
├── sitemap.xml        # Mapa do site para SEO
├── robots.txt         # Instruções para crawlers
├── favicon.ico        # Ícone do site
├── icon.svg           # Ícone vetorial
├── icon.png           # Ícone PNG
└── img/               # Imagens otimizadas
```

## 📈 Recursos SEO Implementados

- ✅ Meta tags otimizadas
- ✅ Schema markup (JSON-LD)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Open Graph e Twitter Cards
- ✅ Google Analytics configurado
- ✅ Google Search Console preparado
- ✅ Performance otimizada
- ✅ Responsivo e mobile-friendly

## 📞 Contato

- WhatsApp: +55 92 99397-5056
- Email: contato@emersonaraujo.com

---

**Desenvolvido por Emerson Araújo** - Especialista em Desenvolvimento Web