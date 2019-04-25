var socket = io();

//on son par escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor');
})
socket.on('disconnect', function() {
    console.log('perdimos conexion al servidor');
})

//emits son pa enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'gabriel',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('resp server', resp);
})

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor', mensaje);
})