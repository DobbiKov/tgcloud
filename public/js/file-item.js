class FileItem extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.render();

        window.showFileListContext = this.showContext.bind(this);
    }
  
    disconnectedCallback() {
        
    }

    static get observedAttributes() {
        return ['id',
        'iconClass',
        'userId',
        'createdBy',
        'fileName',
        'createdAt',
        'fileSize',];
    }

    showContext(id) {

    }

    render() {
        const id = this.getAttribute('id');
        const iconClass = this.getAttribute('iconClass');
        const userId = Number(this.getAttribute('userId'));
        const createdBy = Number(this.getAttribute('createdBy'));
        const fileName = this.getAttribute('fileName');
        const createdAt = this.getAttribute('createdAt');
        const fileSize = Number(this.getAttribute('fileSize'));

        this.innerHTML = `
            <li id="file-${id}" class="file-item">
                <span class="file-icon-span ${iconClass}"></span>
                ${userId !== createdBy ? '<small class="shared">&#128169;</small>' : ''}
                <a href="#/file/${id}">${fileName}</a>
                <div class="file-date">${formatDate(createdAt, true)}</div>
                <div class="file-size">
                    ${formatSizeUnits(fileSize)}
                    <button class="icon-btn" disabled>share</button>
                </div>
            </li>
        `;

        const menuItems = [
            {
                title:'Delete',
                tip: '',
                icon: './img/delete.svg',
                onclick: function() {
                    console.log('Item 1 clicked');
                }
            },
        ];

        document.getElementById(`file-${id}`).addEventListener('contextmenu', (e) => {
            e.preventDefault();

            new contextualMenu({
                items: menuItems,
            });
        });
    }
}

customElements.define("file-item", FileItem);