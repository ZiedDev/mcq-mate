import '../css/modal.css'
const animationTime = 200

function createModal(title, contents, submitButtonBehavior, cancelButtonBehavior, defaultBehavior = () => { }) {
    const modalContainer = document.createElement('div')
    const modal = document.createElement('div')
    const backdrop = document.createElement('div')
    const modalButtonsContainer = document.createElement('div')
    const modalTitle = document.createElement('h1')
    modalTitle.textContent = title

    modalContainer.appendChild(modal)
    modalContainer.appendChild(backdrop)
    modal.appendChild(modalTitle)

    for (let i = 0; i < contents.length; i++) {
        const modalContent = document.createElement('h2')
        modalContent.innerHTML = typeof (contents[i]) == 'string' ? contents[i] : contents[i][0]

        if (typeof (contents[i][1]) == 'function') {
            contents[i][1]()
        }

        modal.appendChild(modalContent)
    }

    modalContainer.classList.add('modal-container')
    modalContainer.id = 'modal-container'
    modal.classList.add('modal')
    backdrop.classList.add('backdrop')

    backdrop.addEventListener('click', () => {
        modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`
        backdrop.style.animation = `fadeOut forwards ${animationTime}ms`
        let timeout = setTimeout(() => {
            defaultBehavior()
            modalContainer.parentNode.removeChild(modalContainer)
        }, animationTime);
    })

    document.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            if (modalContainer.parentNode == null) {
                return
            }

            modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`
            backdrop.style.animation = `fadeOut forwards ${animationTime}ms`
            let timeout = setTimeout(() => {
                defaultBehavior()
                modalContainer.parentNode.removeChild(modalContainer)
            }, animationTime);
        }

    })

    modalButtonsContainer.classList.add('modal-buttons-container')
    modal.appendChild(modalButtonsContainer)

    if (submitButtonBehavior != undefined) {
        const submitButton = document.createElement('button')
        submitButton.textContent = submitButtonBehavior[0]

        submitButton.addEventListener('click', () => {
            modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`
            backdrop.style.animation = `fadeOut forwards ${animationTime}ms`
            let timeout = setTimeout(() => {
                submitButtonBehavior[1]()
                modalContainer.parentNode.removeChild(modalContainer)
            }, animationTime);
        })

        modalButtonsContainer.appendChild(submitButton)
    }

    if (cancelButtonBehavior != undefined) {
        const cancelButton = document.createElement('button')
        cancelButton.textContent = cancelButtonBehavior[0]

        cancelButton.addEventListener('click', () => {
            modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`
            backdrop.style.animation = `fadeOut forwards ${animationTime}ms`
            let timeout = setTimeout(() => {
                cancelButtonBehavior[1]()
                modalContainer.parentNode.removeChild(modalContainer)
            }, animationTime);
        })

        modalButtonsContainer.appendChild(cancelButton)
    }

    document.body.appendChild(modalContainer)

    return modalContainer
}

export default createModal 