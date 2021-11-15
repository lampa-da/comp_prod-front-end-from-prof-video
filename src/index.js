const {companies, productMap} = require('./data')
const render = require('./render')
// console.log(productMap)
// console.log(companies)
const companyList = document.querySelector('#company-list')

let curr = window.location.hash.slice(1)*1

const _render = ()=>{
  render({companies, productMap, companyList, curr})
}

_render()
window.addEventListener('hashchange', ()=>{
  curr = window.location.hash.slice(1)*1
  _render()
})