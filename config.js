const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010816280";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_31_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoRFZ1Sks5V0Y1bkt5dTFXcmd3dUtIN21tVXRGcHoxVkpmL3oxVVBaTWxvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuMTVBRDlMblFsR1JKRVVfN1c0ODNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2MTRjMjg5LTg3N2EtNDM5MC1hZTg5LTFhMWNkZTk1NDkxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxNDEsXG4gICAgICAyNTAsXG4gICAgICAyMzcsXG4gICAgICAyMjUsXG4gICAgICA4NixcbiAgICAgIDY4LFxuICAgICAgMjQ1LFxuICAgICAgMTg0LFxuICAgICAgMTE1LFxuICAgICAgMTgwLFxuICAgICAgNTQsXG4gICAgICAzNCxcbiAgICAgIDEzMixcbiAgICAgIDY1LFxuICAgICAgMjQsXG4gICAgICAxNDEsXG4gICAgICA1LFxuICAgICAgMTcwLFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTk0LFxuICAgICAgMjUsXG4gICAgICA2MixcbiAgICAgIDE4LFxuICAgICAgMTI2LFxuICAgICAgMTYwLFxuICAgICAgMTIsXG4gICAgICA1MCxcbiAgICAgIDI4LFxuICAgICAgMjE4LFxuICAgICAgMTg2LFxuICAgICAgMTkxLFxuICAgICAgOSxcbiAgICAgIDIyMCxcbiAgICAgIDM4LFxuICAgICAgMTQxLFxuICAgICAgMjI4LFxuICAgICAgMjIyLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5RTk42QUhMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwODE2MjgwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY1MjY5NTEwNjM3ODM6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNKemxvUXVkaWpzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoV1czSXVmcXp2SVdDRnNDZDk5NzhQZUR5ajY3aTkveGZEU0hZMWIxY3hvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhlODJ0MXNFcVc1MEtUa0pseDhBeGg0VHFSMTNqdGpXT1c4WUJoRGZydE90WGExMUVNcGVCRENjbk9KZnB2WGQ3dGt5NVdxc01xUzNTZG5zUERXUkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJYSmJSOUxHd2VqN0cyaGQ1NzV4a2xZSDZpaE1VdUU2Qlg0bUVKaitxMDlBRjJnMXo0NlczYStGVmRsMVBFOEVGcWlCZlBQRHRvQzEzWE4yWGdJOGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA4MTYyODA6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgxNTIyNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBMGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEwYi5qc29uIjogIntcImtleURhdGFcIjpcIjlMbVFpUG8rSVk3alBlNXNYRnlXZEtmK0xrYThyTTZ4bjFLbE81TVdxNkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkwMDIyODY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4MTMzNzM3MDEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
