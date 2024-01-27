const partners = [
    {
        title: 'HAFELE',
        country: 'Германия',
        text: `Ведущий международный производитель 
        мебельной и дверной фурнитуры. Компания поставляет продукцию 
        производителям мебели и кухонь, а также сотрудничает с 
        архитекторами и проектировщиками.`,
    },
    {
        title: 'BOYARD',
        country: 'Россия',
        text: `Компания предоставляет различным 
        сегментам рынка полный спектр лицевой и функциональной 
        фурнитуры под единым брендом. Все, что нужно для любой 
        мебели, предлагает BOYARD.`,
    },
    {
        title: 'HETTICH',
        country: 'Германия',
        text: `Немецкая компания, всемирно известный 
        производитель высококачественной фурнитуры и комплектующих 
        для мебели. Современное производство, качественное 
        оборудование и строгий контроль качества всего 
        производственного цикла: начиная от закупки сырья и заканчивая 
        выпуском готовой продукции, позволяют создавать первоклассную 
        фурнитуру для мебели.`,
    },
    {
        title: 'BLUM',
        country: 'Австрия',
        text: `Компания Blum уже более 65 лет является 
        производителем высококачественной мебельной фурнитуры, 
        известной во многих странах мира. Главными преимуществами 
        всех изделий бренда являются долговечность, износостойкость, 
        широкий ассортимент.`,
    },
    {
        title: 'НЬЮ-ТОН',
        country: 'Россия',
        text: `Разнообразие ассортимента и 
        индивидуальный подход к каждому клиенту являются визитной 
        карточкой компании. `,
    },
    {
        title: 'УРАЛСЕРВИС',
        country: 'Россия',
        text: `Компания делает все возможное для 
        формирования максимально комфортных условий сотрудничества, 
        так как она нацелена на взаимовыгодные и долгосрочные партнерские 
        отношения. С квалифицированной помощью специалистов 
        вы сможете найти именно то, что вам нужно.`,
    },
    {
        title: 'Строительный двор',
        country: 'Чебоксары',
        text: `Современная, стремительно 
        развивающаяся компания, целью которой является снабжение 
        множества мебельных, а также строительных организаций 
        необходимыми материалами.
        Начав свою деятельность с 2002 года, компания совершила 
        немалый путь от скромного склада до предприятия федерального 
        масштаба, занимающего высокие позиции в регионах Поволжья.`,
    },
    {
        title: 'TITUS',
        country: 'Словения',
        text: `Глобальный игрок в мире разработки и 
        производствафурнитуры для мебели, широкий ассортимент 
        предоставляемых продуктов.`,
    },
]


const links = document.querySelectorAll(".modal-link-open")
const modals = document.querySelectorAll(".modal")
const modalCopy = document.querySelector(".modal-copy")

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        const modal = document.getElementById("modal-" + link.getAttribute("data-modal"))
        if (modal !== null && modal.getAttribute("id") === "modal-partners") {
            const body = document.querySelector('.modal-partners__body')
            const {title, text, country} = partners.find((item) => (
                item.title.toLowerCase().trim() === link.getAttribute("data-partners").toLowerCase().trim()
            ))
            body.innerHTML = `
                <h2 class="modal-partners__title">
                    ${title}
                </h2>
                <span class="modal-partners__country">(${country})</span>
                <p class="modal-partners__text">
                    ${text}
                </p>
            `
        }
        if (modal !== null && modal.getAttribute("id") === "modal-archive") {
            const image = link.querySelector('img')
            const modalImage = modal.querySelector('.modal-archive__image img')
            
            modalImage.setAttribute("src", image.getAttribute("src"))
        }
        removeClassModalArray(links, "open")
        modal.classList.add("open")
        body.classList.add("modal-open")
    })
})
modals.forEach((modal) => {
    const modalContent = modal.querySelector('.modal__content')
    const modalCloseButtons = modal.querySelectorAll('.modal-close-button')
    const close = modal.querySelector(".modal__close")

    close.addEventListener("click", () => {
        modal.classList.remove("open")
        body.classList.remove("modal-open")
    })
    
    // Закрыть при клике на кнопку закрытия
    if (modalCloseButtons) {
        modalCloseButtons.forEach((button) => {
            button.addEventListener('click', () => {
                modal.classList.remove("open")
                body.classList.remove("modal-open")
            })
        })
    }
    modalContent.addEventListener('mousedown', (e) => {
        // Остановка всплытие события, чтобы избежать мгновенного закрытия модального окна
        e.stopPropagation();
    });
    document.addEventListener('mousedown', (e) => handleClickOutside(modalContent, e));
})

const handleClickOutside = (el, event) => {
    // Если клик произошел вне модального контента, то закрыть модальное окно
    if (!el.contains(event.target)) {
        el.closest(".modal").classList.remove("open");
        body.classList.remove("modal-open")
    }
};

// Закрыть все модальные окна, если открывают другое
function removeClassModalArray(arr, className) {
    arr.forEach((el) => {
        const modal = document.getElementById("modal-" + el.getAttribute("data-modal"))
        modal.classList.remove(className);
    });
}