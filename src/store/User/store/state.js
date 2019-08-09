let localuser = localStorage.getItem('userEstante');
let user;

if (localuser) {
    user = JSON.parse(localStorage.getItem('userEstante'))
} else {
    user = false
}

export default {
    user
}