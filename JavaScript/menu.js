//Para moverse en el menu
function scrollToSelection(serviceId){
    const service = document.getElementById(serviceId);
    if(service){
        service.scrollIntoView({behvior: 'smooth'});
    }
}