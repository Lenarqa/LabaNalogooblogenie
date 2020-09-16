var tl = gsap.timeline();
let items = document.getElementById('container');
for (let i = 0; i < items.children.length; i++) {
    if(i % 2 == 0){
        tl.fromTo(items.children[i], 0.65, {opacity:0, x: -1000}, {opacity:1, x: 0, ease:'Power2.easeInOut'});
    }else{
        tl.fromTo(items.children[i], 0.65, {opacity:0, x: 1000}, {opacity:1, x: 0, ease:'Power2.easeInOut'});
    }
}