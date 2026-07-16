const inp = document.getElementById("inp")
const all = document.querySelector(".all")
const btn = document.querySelector(".btn")
const alertclear = document.querySelector(".alertclear")
const alertclear2 = document.querySelector(".alertclear2")
const btn2 = document.querySelector(".btn2")

let h;
let colorr;
let flag = true;
btn.addEventListener("click", () => {
    let valinp = inp.value

    if (valinp == "") {
        alert("لطفاً مقداری وارد کنید!")
    } else {
        let arc = document.createElement("article")


        arc.innerHTML = ` 
            <h5>${valinp}</h5>
            <span class="action-btn delete" onclick="remove(event)" title="حذف">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </span>
            <span class="action-btn edit" onclick="edit(event)" title="ویرایش">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </span>

            <span class="active" onclick="active(event)"><img src="img/icons8-circle-48.png" alt="active" title="active"></span>

            <span class="star" onclick="star(event)"><img src="img/icons8-star-48.png" alt=""></span>
        `
        all.appendChild(arc)




        window.arc = arc
        arc.setAttribute("data-status", "off")

        setTimeout(() => {
            alertclear2.style.left = "20px"

            setTimeout(() => {
                alertclear2.style.left = "-100%"
            }, 1500);
        }, 400);
    }

    inp.value = null
    inp.focus()
})

function remove(e) {
    let a = e.target

    let clone = e.target.parentElement.innerHTML
    console.log(clone);



    if (confirm("آیا از حذف این کار مطمئن هستید؟")) {
        a.parentElement.style.opacity = "0.2"
        setTimeout(() => {
            a.parentElement.remove()
            alertclear.style.right = "20px"
            setTimeout(() => {
                alertclear.style.right = "-100%"
            }, 1500);
        }, 700);

    } else {
        a.parentElement.style.opacity = "1"
    }
}

function edit(e) {
    btn2.style.display = "flex"
    h = e.target.parentElement.children[0]
    let have = document.querySelector(".bg")
    if (have) {
        have.classList.remove("bg")
    }

    colorr = e.target.parentElement

    colorr.classList.toggle("bg")
    // console.log(colorr);

}

btn2.addEventListener("click", () => {
    let valinp2 = inp.value

    if (valinp2 == "") {
        alert("لطفاً متن جدید را وارد کنید!")
        return
    } else {
        h.innerHTML = valinp2
        inp.value = null
        inp.focus()
        btn2.style.display = "none"
        colorr.classList.remove("bg")
    }
})


function star(e) {

    let fi = e.target.parentElement.parentElement

    if (fi.dataset.status == "off") {
        e.target.src = "img/icons8-star-64.png"
        fi.setAttribute("data-status", "on")
        all.prepend(fi)

    } else {
        e.target.src = "img/icons8-star-48.png"
        fi.setAttribute("data-status", "off")
        all.appendChild(fi)
    }


}


function active(e) {

    let add = e.target.parentElement.parentElement


    if (e.target.getAttribute("data-status") == "off") {
        e.target.src = "img/icons8-circle-48.png"
        add.style.background = "rgba(255, 255, 255, 0.03)"
        add.style.opacity = "1"
        add.classList.remove("line")
        e.target.setAttribute("data-status", "on")
    } else {
        e.target.src = "img/icons8-tick-48.png"
        add.style.background = "rgba(146, 226, 26, 0.32)"
        add.style.opacity = "0.8"
        add.classList.add("line")
        e.target.setAttribute("data-status", "off")

    }



}





