module.exports = {   
    gw:{
        winners:"Winner(s)",
         prize:"Prize",
         "ends":"Ends",
         "button":"Enter",
         "gwCreated":"Giveaway Created Successfully.",
         userEnteredGiveaway:"You Entered the giveaway!",
         userLeftGiveaway:"Your Enterance removed!",
         presenceReqRequired:"This Giveaway have **Presence Requirement**.",
         roleReqRequired:"This Giveaway have **Role** Requirement.",
         requirementAdded:"**Requirement** added to the giveaway",
         chanceToWin:"Your Win Rate:",
         notfound:"This Giveaway not found.",
         giveawayDeletedSuccessfully:"**Giveaway** deleted was Successfully.",
     events:{
         endedButNoneEntrans:"Giveaway canceled because nobody entered the giveaway.",
         ended:"Winner(s): {{winners}}",
         congrulations:"🎉 Congrulations!",
         mustHave:"Must have this",
         req:"Requirements",
         reroll:"Reroll The Giveaway"
     }   
    },
    help:{
         title:"Help Menu",
         description:"Welcome! I haven't been getting an update for a long time, Say Hello to My New Version!",
         newsDescription:"A lot will change with the New Version, newer systems better performance and more!!",
         versions:"Version List",
         globalVersion:"Global Version",
         betaVersion:"Beta Version",
         menuTitle:"Help Menu",
         gwLabel:"Giveaway Commands",
         gwDescription:"Shows All Giveaway Commands."
    },
    commands:{
        noPermission:"> :x: You not have permission(s) to use this command.",
        language:{
            embedTitle:"Language Menu"
        },
        stats:{
          /*Data Titles*/
            globalData: "Global Data",
            greesyData:"Greesy Data(s)",
            pingData: "Ping Informations",
            versionData: "Version Data",
          /*Message Titles*/
            serverSize:"Server size",
            usersSize:"Users size",
            databaseStatus:"Database Status",
            greesyVersion:"Greesy Global Version",
            totalGiveaways:"Total Created Giveaways",
            wsPing:"WebSocket Ping",
            databasePing:"Database Ping",
            nodejs:"NodeJS",
            discordjs:"Discord.JS"

        },
        invite:{
            embedTitle:"Your Invite(s) count",
            description:"> 🌱 {{user}} has **{{invite_count}}** Invites!\n\n**Invite Codes**;\n> {{invite_codes}}",
        top:{
            boardMessage:"{{user}} • **{{count}}**"
        }
        }
    },
    events:{
        invite:{
            joinMessage:"{{user}} Joined The Server! Invited By {{inviter}}. \n Inviter currently have **{{total_invite_count}}** Invites"
        }
    }
 }
