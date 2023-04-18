<script>
    {
  // Obtém o link da página atual
  const currentUrl = window.location.href;
    
    
  // Obtém o elemento <a> do link da página atual
  const homeLink = document.getElementById('home-link');
    
    
  // Se o link da página atual for igual ao link do item de menu "Home"
  if (currentUrl === homeLink.href) 
    // Adiciona a classe "active" ao item do menu "Home"
    homeLink.parentNode.classList.add('active');
    

    // Desabilita o link do item do menu "Home"
    homeLink.removeAttribute('href');
    homeLink.style.cursor = 'default';
    }
</script>
  
