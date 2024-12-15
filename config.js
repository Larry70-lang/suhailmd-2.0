const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160724127";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_45_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaERranQ2bVlROUFxYit4cUI1YXJmVU05TEprRm1weWVZRmxMUnVSYnpNWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid0RxV0VCRnJRVENoM25hTW9neURCZ1wiLFxuICBcInBob25lSWRcIjogXCIyOGIxMWQxZS1hNjAwLTRjMzQtYmU5Zi03NjRmYzlmODVjNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICA5NSxcbiAgICAgIDIyMixcbiAgICAgIDI0NCxcbiAgICAgIDEyOSxcbiAgICAgIDE0NSxcbiAgICAgIDE3NCxcbiAgICAgIDE2MyxcbiAgICAgIDI3LFxuICAgICAgMTQ0LFxuICAgICAgMTg5LFxuICAgICAgMTMxLFxuICAgICAgMjM0LFxuICAgICAgMTI5LFxuICAgICAgMTA1LFxuICAgICAgMTg2LFxuICAgICAgMTk2LFxuICAgICAgMTgwLFxuICAgICAgMTQ0LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyMzAsXG4gICAgICA3LFxuICAgICAgMjIyLFxuICAgICAgMTI4LFxuICAgICAgMTkzLFxuICAgICAgMTk4LFxuICAgICAgMTE4LFxuICAgICAgNDQsXG4gICAgICAxNzQsXG4gICAgICAxNyxcbiAgICAgIDE3OSxcbiAgICAgIDI0NixcbiAgICAgIDIwMSxcbiAgICAgIDE5NyxcbiAgICAgIDEyMyxcbiAgICAgIDIwNixcbiAgICAgIDYwLFxuICAgICAgMTk0LFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk2SEw1SlY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYwNzI0MTI3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDcnVpc2UgVHZcIixcbiAgICBcImxpZFwiOiBcIjczOTUxMjMzNDU4MzQwOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDNpKy9BQ0VKL1UvYm9HR0VjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzN3dBdndkZ2o1Z1VML09aUGV6elFYRFhUNlUzQnB3YTJ6T1ZSQmhyWkNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdSb1hTamVPMnc2ODJZVE50aENLZ1RCQjFqWk1vTC9VSnN3YUVKdGJHNlI2VnpkRjJlM2R1WGg0d1JiVjNjKytaZnd3NGpHbkttOWU2Q3Z0Sml4cUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZvOGdqNXRRYjhRcEdlamhKZmlZdFRoRHlXVHgyOUkxVm85S0xKTERIMFlSRUs2MUZjSTNsa0c3RlMzK2Y4OEx5SnNOREFoeXdKUzVhMGRRODl5WWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjA3MjQxMjc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDMwNjMzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1HWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUdaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUVpYTENVV3hWWFY3WkxVYVY3UEtpZ1NsaHZSQkZKVGdGS1hseGRMWDJ2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzM3Nzk4MzcsXCJjdXJyZW50SW5kZXhcIjoxNyxcImRldmljZUluZGV4ZXNcIjpbMCw1LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzQ3MTg2NDc4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Cruise TV",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
