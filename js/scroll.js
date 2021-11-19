function handleScroll() {
  document.getElementById("banner__p").style.left = `${document.scrollingElement.scrollTop - document.scrollingElement.scrollTop * 1.2 }`
  console.log(document.scrollingElement.scrollTop);
}
 
window.addEventListener('scroll', handleScroll);