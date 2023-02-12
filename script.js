const button = document.querySelector('button');
const modal = document.querySelector('dialog');
const timeout = 1000;
const under_development = { value: true };

const local_Storage = () => {
    if (!localStorage.getItem('under_development')) {
        localStorage.setItem('under_development', JSON.stringify(under_development));
        const jsonData = localStorage.getItem('under_development');
        const { value } = JSON.parse(jsonData);
        return value; 
    }
    return false;
}

if (local_Storage()) {
    modal.showModal();
    
    setTimeout(() => {
        modal.close();
    }, timeout * 4);
    
}


const devTitle = '< Full-Stack />'.toUpperCase();
const devtitleAlt = '< Caio Alves />'.toUpperCase();
let trigger = false;

setInterval( () => {
    document.title = trigger ? devTitle : devtitleAlt;
    trigger = !trigger
}, 4000)

    
    

 



