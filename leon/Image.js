const _0x50382d=_0x39b1;(function(_0x371643,_0x3b010d){const _0x2f08fc=_0x39b1,_0x1a61be=_0x371643();while(!![]){try{const _0x174f5e=-parseInt(_0x2f08fc(0xcd))/0x1+-parseInt(_0x2f08fc(0xd2))/0x2*(-parseInt(_0x2f08fc(0xe2))/0x3)+-parseInt(_0x2f08fc(0xda))/0x4*(parseInt(_0x2f08fc(0xde))/0x5)+-parseInt(_0x2f08fc(0xe8))/0x6+-parseInt(_0x2f08fc(0xf5))/0x7*(parseInt(_0x2f08fc(0xd0))/0x8)+parseInt(_0x2f08fc(0xee))/0x9+parseInt(_0x2f08fc(0xdf))/0xa;if(_0x174f5e===_0x3b010d)break;else _0x1a61be['push'](_0x1a61be['shift']());}catch(_0x3a97ee){_0x1a61be['push'](_0x1a61be['shift']());}}}(_0x3a4f,0x49ffc));const {MessageType,Presence,Mimetype,MessageOptions}=require(_0x50382d(0xe5)),Base=require('./Base'),Message=require(_0x50382d(0xd7)),ReplyMessage=require('./ReplyMessage');function _0x3a4f(){const _0x60f774=['split','data','14tYsmEK','sendAudio','message','sendMessage','low','fromMe','downloadAndSaveMediaMessage','key','url','image','unread','sendVideoAsGif','mimetype','reply_message','width','sendRecording','png','client','deleteMessage','messageTimestamp','522838PZpchK','sendAudioAsVoice','sendUnread','1960736UTswPd','download','14RnNoMF','mediaKey','jid','gif','imageMessage','./Message','text','sendOffline','28xJDmgq','recording','mp4Audio','sendTyping','204515fDxZQt','15331050wiLDym','updatePresence','sendVideoAsViewonce','1191ejPhNz','contextInfo','quotedMessage','@adiwajshing/baileys','object','audio','44628uFpzkr','timestamp','unavailable','video','_patch','caption','665973GIGOra','chatRead','height','sendVideo','hasOwnProperty'];_0x3a4f=function(){return _0x60f774;};return _0x3a4f();}class Image extends Base{constructor(_0x2ac89f,_0x53cb49){const _0x8044a0=_0x50382d;super(_0x2ac89f);if(_0x53cb49)this[_0x8044a0(0xec)](_0x53cb49);}[_0x50382d(0xec)](_0x3e4a69){const _0x5090e9=_0x50382d;return this['id']=_0x3e4a69[_0x5090e9(0xfc)]['id']===undefined?undefined:_0x3e4a69[_0x5090e9(0xfc)]['id'],this[_0x5090e9(0xd4)]=_0x3e4a69[_0x5090e9(0xfc)]['remoteJid'],this[_0x5090e9(0xfa)]=_0x3e4a69['key'][_0x5090e9(0xfa)],this[_0x5090e9(0xed)]=_0x3e4a69[_0x5090e9(0xf7)]['imageMessage'][_0x5090e9(0xed)]===null?_0x3e4a69[_0x5090e9(0xf7)][_0x5090e9(0xd6)][_0x5090e9(0xed)]:'',this[_0x5090e9(0xc1)]=_0x3e4a69[_0x5090e9(0xf7)][_0x5090e9(0xd6)][_0x5090e9(0xc1)],this[_0x5090e9(0xe9)]=typeof _0x3e4a69[_0x5090e9(0xcc)]===_0x5090e9(0xe6)?_0x3e4a69[_0x5090e9(0xcc)][_0x5090e9(0xf9)]:_0x3e4a69[_0x5090e9(0xcc)],this[_0x5090e9(0xc5)]=_0x3e4a69[_0x5090e9(0xf7)][_0x5090e9(0xd6)][_0x5090e9(0xc5)],this['height']=_0x3e4a69[_0x5090e9(0xf7)]['imageMessage'][_0x5090e9(0xf0)],this[_0x5090e9(0xc7)]=_0x3e4a69[_0x5090e9(0xf7)][_0x5090e9(0xd6)][_0x5090e9(0xc7)],this['mediaKey']=_0x3e4a69['message'][_0x5090e9(0xd6)][_0x5090e9(0xd3)],this['data']=_0x3e4a69,_0x3e4a69['message'][_0x5090e9(0xd6)][_0x5090e9(0xf2)](_0x5090e9(0xe3))&&_0x3e4a69[_0x5090e9(0xf7)][_0x5090e9(0xe3)][_0x5090e9(0xe4)]?this[_0x5090e9(0xc6)]=new ReplyMessage(this[_0x5090e9(0xca)],_0x3e4a69[_0x5090e9(0xf7)]['imageMessage']['contextInfo']):this[_0x5090e9(0xc6)]=![],super['_patch'](_0x3e4a69);}async['delete'](){const _0x343ff6=_0x50382d;return await this['client'][_0x343ff6(0xcb)](this[_0x343ff6(0xd4)],{'id':this['id'],'remoteJid':this[_0x343ff6(0xd4)],'fromMe':!![]});}async['sendReply'](_0x51599e){const _0x4a2b7e=_0x50382d;var _0x37b73b=await this[_0x4a2b7e(0xca)][_0x4a2b7e(0xf8)](this[_0x4a2b7e(0xd4)],_0x51599e,MessageType[_0x4a2b7e(0xd8)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':this[_0x4a2b7e(0xf4)]});return new Message(this[_0x4a2b7e(0xca)],_0x37b73b);}async[_0x50382d(0xf8)](_0x1f7b6a,_0x17efb3,_0x359465){const _0x3569e7=_0x50382d;return await this[_0x3569e7(0xca)][_0x3569e7(0xf8)](this[_0x3569e7(0xd4)],_0x1f7b6a,_0x17efb3,_0x359465);}async['sendImage'](_0x3c01c2,_0x45761c){const _0x5efe18=_0x50382d;return await this[_0x5efe18(0xca)]['sendMessage'](this['jid'],_0x3c01c2,MessageType[_0x5efe18(0xc2)],{'mimetype':Mimetype[_0x5efe18(0xc9)],'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'caption':_0x45761c,'quoted':this[_0x5efe18(0xf4)]});}async['sendImageAsViewonce'](_0x427125,_0x5825a5){const _0x2fe917=_0x50382d;return await this[_0x2fe917(0xca)]['sendMessage'](this[_0x2fe917(0xd4)],_0x427125,MessageType[_0x2fe917(0xc2)],{'mimetype':Mimetype[_0x2fe917(0xc9)],'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'caption':_0x5825a5,'readViewOnce':!![],'quoted':this[_0x2fe917(0xf4)]});}async[_0x50382d(0xf1)](_0x4e4185,_0x3f02ea){const _0x40ec32=_0x50382d;return await this[_0x40ec32(0xca)][_0x40ec32(0xf8)](this[_0x40ec32(0xd4)],_0x4e4185,MessageType[_0x40ec32(0xeb)],{'mimetype':Mimetype['mp4'],'caption':_0x3f02ea,'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':this[_0x40ec32(0xf4)]});}async[_0x50382d(0xe1)](_0x918f2a,_0x14c074){const _0x101646=_0x50382d;return await this[_0x101646(0xca)][_0x101646(0xf8)](this[_0x101646(0xd4)],_0x918f2a,MessageType['video'],{'mimetype':Mimetype['mp4'],'caption':_0x14c074,'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'readViewOnce':!![],'quoted':this['data']});}async[_0x50382d(0xc4)](_0x25bc2c,_0x2ae4ab){const _0x5198da=_0x50382d;return await this[_0x5198da(0xca)]['sendMessage'](this[_0x5198da(0xd4)],_0x25bc2c,MessageType[_0x5198da(0xeb)],{'mimetype':Mimetype[_0x5198da(0xd5)],'caption':_0x2ae4ab,'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':this[_0x5198da(0xf4)]});}async[_0x50382d(0xf6)](_0x272846){const _0x109fae=_0x50382d;return await this[_0x109fae(0xca)][_0x109fae(0xf8)](this['jid'],_0x272846,MessageType[_0x109fae(0xe7)],{'mimetype':Mimetype[_0x109fae(0xdc)]});}async[_0x50382d(0xce)](_0x3f7f6a){const _0x483a63=_0x50382d;return await this[_0x483a63(0xca)][_0x483a63(0xf8)](this['jid'],_0x3f7f6a,MessageType[_0x483a63(0xe7)],{'mimetype':Mimetype['mp4Audio'],'ptt':!![]});}async[_0x50382d(0xcf)](){const _0xfcb872=_0x50382d;return await this[_0xfcb872(0xca)][_0xfcb872(0xef)](this[_0xfcb872(0xd4)],_0xfcb872(0xc3));}async[_0x50382d(0xdd)](){const _0x245405=_0x50382d;return await this[_0x245405(0xca)][_0x245405(0xe0)](this['jid'],Presence['composing']);}async[_0x50382d(0xc8)](){const _0x33e754=_0x50382d;return await this['client'][_0x33e754(0xe0)](this['jid'],Presence[_0x33e754(0xdb)]);}async['sendOnline'](){const _0x268474=_0x50382d;return await this[_0x268474(0xca)][_0x268474(0xe0)](this['jid'],Presence['available']);}async[_0x50382d(0xd9)](){const _0x43dea8=_0x50382d;return await this['client'][_0x43dea8(0xe0)](this['jid'],Presence[_0x43dea8(0xea)]);}async['sendRead'](){const _0x44f702=_0x50382d;return await this['client'][_0x44f702(0xef)](this[_0x44f702(0xd4)]);}async[_0x50382d(0xd1)](_0x161f29=this['id']){const _0x15c98a=_0x50382d;return await this[_0x15c98a(0xca)][_0x15c98a(0xfb)](this[_0x15c98a(0xf4)],_0x161f29),this['id']+'.'+this[_0x15c98a(0xc5)][_0x15c98a(0xf3)]('/')[0x1];}}function _0x39b1(_0x173bf2,_0x24b839){const _0x3a4fde=_0x3a4f();return _0x39b1=function(_0x39b18d,_0x162169){_0x39b18d=_0x39b18d-0xc1;let _0x201336=_0x3a4fde[_0x39b18d];return _0x201336;},_0x39b1(_0x173bf2,_0x24b839);};module['exports']=Image;
