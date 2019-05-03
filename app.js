var app = document.getElementsByClassName('maintitle')[0];

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('')
    .pauseFor(5000)
    .typeString("u mom gay")
    .pauseFor(500)
    .deleteAll()
    .pauseFor(1000)
    .typeString(";)")
    .pauseFor(500)
    .start()