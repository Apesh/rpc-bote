const rpc = require("discord-rpc");

//Yarattığınız app'in client idsi
const ClientId = '499899605584969738';

rpc.register(ClientId);

const ana = new rpc.Client({ transport: 'ipc' });



//Ana kısım
ana.on('ready', () => {
  console.log("Custom RPC: Connected");
  ana.setActivity({
    details: 'https://discord.gg/YWnqDxH',//Ana yazı
    state: 'Destan Her Daim',//Ana yazı altındaki yazı
    largeImageKey: 'j5kkh26m',//Large fotoğraf
    largeImageText: ': Destek Sunucusu : https://discord.gg/YWnqDxH',//İmleç ile üstüne gelindiğinde çıkacak olan yazı
    smallImageKey: 'anime-girl-waving',//Small fotoğraf
    smallImageText: ': Destek Sunucusu : https://discord.gg/YWnqDxH'//İmleç ile üstüne gelindiğinde çıkacak olan yazı
  });
});


ana.login(ClientId).catch(console.error);

