const btns = document.querySelectorAll('#book-list .delete')
console.log(btns)

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const li = e.target.parentElement
    console.log(li)
    li.parentElement.removeChild(li)
  })
})
