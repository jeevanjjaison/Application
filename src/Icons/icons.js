export const Edit = ({ fill }) => {
    return (
        <svg viewBox="64 64 896 896" class="" data-icon="edit" width="1.5em" height="1.5em" fill="green" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
    )
}

export const Delete = ({ fill }) => {
    return (
        <svg viewBox="64 64 896 896" class="" data-icon="delete" width="1.5em" height="1.5em" fill="red" aria-hidden="true"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg>
    )
}

export const Archive = () => {
    return (
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5575 17.5017C12.4152 17.6598 12.2126 17.75 12 17.75C11.7874 17.75 11.5848 17.6598 11.4425 17.5017L8.44254 14.1684C8.16544 13.8605 8.1904 13.3863 8.49828 13.1092C8.80617 12.8321 9.28038 12.8571 9.55748 13.1649L11.25 15.0455L11.25 7.00002H4C3.84905 7.00005 3.6452 7.00008 3.5 6.99805V13C3.5 16.7713 3.5 18.6569 4.67157 19.8284C5.84315 21 7.72876 21 11.5 21H12.5C16.2712 21 18.1569 21 19.3284 19.8284C20.5 18.6569 20.5 16.7713 20.5 13V6.99805C20.3548 7.00008 20.1509 7.00005 20 7.00002H12.75L12.75 15.0455L14.4425 13.1649C14.7196 12.8571 15.1938 12.8321 15.5017 13.1092C15.8096 13.3863 15.8346 13.8605 15.5575 14.1684L12.5575 17.5017Z" fill="#1C274C" />
            <g opacity="0.5">
                <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" fill="#1C274C" />
            </g>
        </svg>
    )
}

export const Ascend = () => {
    return (
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> <path d="M4 7H20M6.99994 12H16.9999M10.9999 17H12.9999" stroke="#06fe30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
        </svg>
    )
}

export const Descend = () => {
    return (
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> <path d="M4 7H20M6.99994 12H16.9999M10.9999 17H12.9999" stroke="#f50505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
        </svg>
    )
}

export const Close = () => {

    return (
        <svg viewBox="64 64 896 896" class="" data-icon="close" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
    )
}

export const Unarchive = () => {

    return (
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" fill="#1C274C" />
            <path d="M20.0689 8.49993C20.2101 8.49999 20.3551 8.50005 20.5 8.49805V12.9999C20.5 16.7711 20.5 18.6568 19.3284 19.8283C18.183 20.9737 16.3552 20.9993 12.75 20.9999L12.75 13.9543L14.4425 15.8349C14.7196 16.1428 15.1938 16.1678 15.5017 15.8907C15.8096 15.6136 15.8346 15.1394 15.5575 14.8315L12.5575 11.4982C12.4152 11.3401 12.2126 11.2499 12 11.2499C11.7874 11.2499 11.5848 11.3401 11.4425 11.4982L8.44254 14.8315C8.16544 15.1394 8.1904 15.6136 8.49828 15.8907C8.80617 16.1678 9.28038 16.1428 9.55748 15.8349L11.25 13.9543L11.25 20.9999C7.64485 20.9993 5.81697 20.9737 4.67157 19.8283C3.5 18.6568 3.5 16.7711 3.5 12.9999V8.49805C3.64488 8.50005 3.78999 8.49999 3.93114 8.49993H20.0689Z" fill="#1C274C" />
        </svg>
    )
}


