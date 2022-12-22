

// Extra small devices (portrait phones, less than 576px)
//@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
//@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
//@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)

//@media (max-width: 1199.98px) { ... }


let navBtn = document.querySelector(" .main-header .nav .offcanvas-btn");
let offcanvas = document.querySelector(".offcanvas");
let navIcons = document.querySelector(".main-header .nav ul");


  function offcanvasstyle(){
    let ul = document.createElement("ul")
    offcanvas.append(ul)

    for(let rr of navIcons.children){
        offcanvas.querySelector("ul").insertAdjacentHTML("beforeend" , `<li>${rr.textContent}</li>`)
    }

    offcanvas.insertAdjacentHTML("afterbegin" , '<button class = disaple><div>__</div></button>')
   
  }

offcanvasstyle()


    let disapleBtn = document.querySelector('.disaple')

    navBtn.addEventListener("click" , function(){
        offcanvas.classList.remove("disapled")
    })

    disapleBtn.addEventListener("click" , function(){
        offcanvas.classList.add("disapled")

    })


    let qq = document.querySelector(".main-header .nav .logo ")
 
    qq.addEventListener("click" , function(){
        window.scrollTo(0,0)
    })
 