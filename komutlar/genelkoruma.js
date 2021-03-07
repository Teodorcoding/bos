const discord = require ('discord.js')
const db = require ('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message ,args) => {
  let yarak = new discord.MessageEmbed()
const eroş = yarak
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`
__**Guard Plus+ Genel Kourma**__
:cark: **Rol koruma** sistemini incelemek için \`/rol-koruma\`
:cark: **Kanal koruma** sistemini incelemek için \`/kanal-koruma\`
:cark: **Bot koruma** sistemini incelemek için \`/anti-raid\``)
.addField(`__**Bot Davet**__`,`:dn: Botu davet etme komutu \`/davet\``)
.addField(`:baglant: **Guard Plus+ Linkler**`,`:yan: [Bot Davet Linki](https://discord.gg/fGXvJGvh) | [Oy Ver](https://discord.gg/fGXvJGvh) | [Destek Sunucusu](https://discord.gg/fGXvJGvh) | [Sponsor Firma](https://discord.gg/fGXvJGvh)`)
.setFooter(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
  return message.channel.send(eroş)
  
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'genelkoruma'
}