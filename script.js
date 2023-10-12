function clean(){
  document.getElementById('formulario').reset()
}

function closed(){
  if(screen.width <= 991.98){
    const menuToggle = document.getElementById('navbarSupportedContent')
    const bsCollapse = new bootstrap.Collapse(menuToggle)
    bsCollapse.toggle()
  }
}