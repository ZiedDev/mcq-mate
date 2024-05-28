import '../css/modal.css'

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
        modalContainer.parentNode.removeChild(modalContainer)
        defaultBehavior()
    })

    document.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            if (modalContainer.parentNode == null) {
                return
            }

            modalContainer.parentNode.removeChild(modalContainer)
            defaultBehavior()
        }

    })

    modalButtonsContainer.classList.add('modal-buttons-container')
    modal.appendChild(modalButtonsContainer)

    if (submitButtonBehavior != undefined) {
        const submitButton = document.createElement('button')
        submitButton.textContent = submitButtonBehavior[0]

        submitButton.addEventListener('click', () => {
            submitButtonBehavior[1]()
            modalContainer.parentNode.removeChild(modalContainer)
        })

        modalButtonsContainer.appendChild(submitButton)
    }

    if (cancelButtonBehavior != undefined) {
        const cancelButton = document.createElement('button')
        cancelButton.textContent = cancelButtonBehavior[0]

        cancelButton.addEventListener('click', () => {
            cancelButtonBehavior[1]()
            modalContainer.parentNode.removeChild(modalContainer)
        })

        modalButtonsContainer.appendChild(cancelButton)
    }

    document.body.appendChild(modalContainer)

    return modalContainer
}

export default createModal 