function clean(){
  document.getElementById('formulario').reset()
}

function closed(){
  const menuToggle = document.getElementById('navbarSupportedContent')
  const bsCollapse = new bootstrap.Collapse(menuToggle)
  bsCollapse.toggle()
}