const discord = require ('discord.js')
const db = require ('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message ,args) => {
  let yarak = new discord.MessageEmbed()
const eroş = yarak
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`
__**Guard Plus+ Yardım Menüsü**__
:cark: **Genel Koruma**
**Rol koruma** ``&`` **Kanal koruma** ``&``  **Bot koruma**
:cark: **Kanal koruma** sistemini incelemek için \`/kanal-koruma\`
:cark: **Bot koruma** sistemini incelemek için \`/anti-raid\`
:cark: **Üye koruma(kicklimit/banlimit)** sistemini incelemek için \`/uye-koruma\`
:cark: **Spam koruma** sistemini incelemek için \`/spam-koruma\`
:cark: **Diğer koruma** sistemini incelemek için \`/diger-koruma\`
:tac: **Rol izin koruma** sistemini incelemek için \`/izin-koruma\`
:uyar: **Anti guard** sistemini incelemek için \`/anti-guard\``)
.addField(`__**Guard Plus+ Diğer Yardım Menüsü**__`,`:dn: Botu davet etme komutu \`/davet\``)
.addField(`:baglant: **Guard Plus+ Linkler**`,`:yan: [Bot Davet Linki](https://discord.gg/fGXvJGvh) | [Oy Ver](https://discord.gg/fGXvJGvh) | [Destek Sunucusu](https://discord.gg/fGXvJGvh) | [Sponsor Firma](https://discord.gg/fGXvJGvh)`)
  return message.channel.send(eroş)
  
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım'
}