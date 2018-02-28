export class Main {
    constructor(){
        console.log('Main loaded')
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle : document.querySelector('article'),
            body : document.querySelector('body'),
            eMain : document.querySelector('main'),
            aImports: document.querySelectorAll('link[rel="import"]'),
            oImports: {}
        }
        this.vista.aBtnsMenu.forEach(element => {
            element.addEventListener('click',this.menuItems.bind(this),false)
        });
      
        this.vista.aImports.forEach(elem=>{
            this.vista.oImports[elem.title]=elem.import
        })
        this._cargarTemplate('home')
    }
    menuItems(oEv){
        this._cargarTemplate(oEv.target.title)
        oEv.preventDefault()
    }
    _cargarTemplate(id){
        console.log(this.vista.oImports)
        console.log(id)
        const IMPORT = this.vista.oImports[id]
        console.log(IMPORT)
        const ELEM = IMPORT.querySelector(`[title=${id}]`)
        this.vista.eMain.innerHTML = ELEM.innerHTML
    }
}

document.querySelector("#botonMenu").addEventListener("click", desplegarMenu, false)

function desplegarMenu() {
    document.querySelector("#menu_movil").classList.toggle("oculto")
    /* if(document.querySelector("#menu_movil").classList !== null && document.querySelector("#menu_movil").classList.contains("oculto")){
        document.querySelector("#menu_movil").classList.remove("oculto")
    }
    else {
        document.querySelector("#menu_movil").classList.add("oculto")
    } */
    /* document.querySelector(".a").style.visibility = visible;
    console.log(document.querySelector(".a").style) */
}


function ocultarMostrar(){
    document.getElementById("autores").style.visibility="collapse"
}