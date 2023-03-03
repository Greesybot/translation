module.exports = {   
    gw:{
        "winners":"Kazanan(lar)",
         "prize":"Ödül",
         "ends":"Bitiş",
         "button":"Katıl!",
         "gwCreated":"Çekiliş Başarıyla Oluşturuldu.",
         userEnteredGiveaway:"Çekilişe Katıldın!",
         userLeftGiveaway:"Çekilişe Katılım hakkın silindi.!",
         presenceReqRequired:"Bu Çekiliş **Durum** Şartı Gerektiriyor.",
         roleReqRequired:"Bu Çekiliş **Rol** Şartı Gerektiriyor.",
         requirementAdded:"**Şart** Başarıyla eklendi.",
         chanceToWin:"Kazanma Şansın:",
         notfound:"Böyle bir Çekiliş bulunamadı.",
         giveawayDeletedSuccessfully:"**Çekiliş** başarıyla silindi.",
     events:{
         endedButNoneEntrans:"Yeterli katılım olmadığı için Çekiliş iptal edildi.",
         ended:"Kazanan(lar): {{winners}}",
         congrulations:"🎉 Tebrikler!",
         mustHave:"Sahip olmak",
         req:"Gereksinimler",
         reroll:"Çekilişi Tekrarla"
     }
    },
    help:{
         title:"Yardım Menüsü",
         description:"Merhaba! Uzun zamandır bir güncelleme almıyordum, Benim Yeni Versiyonuma Merhaba Deyin!",
         newsDescription:"Yeni Versiyon ile Çok şey değişecek, daha yeni sistemler daha iyi performans ve daha fazlası!!",
         versions:"Versiyon Listesi",
         globalVersion:"Global Versiyon",
         betaVersion:"Beta Versiyon",
         menuTitle:"Yardım Menüsü",
         gwLabel:"Çekiliş Komutları",
         gwDescription:"Tüm Çekiliş kokutlarını gösterir."
    },
      commands:{
        noPermission:"> :x: Bu Komutu kullanmak için gerekli yetki(leri)niz yoktur.",  
        language:{
            embedTitle:"Dil Menüsü"
        },
         stats:{
          /*Data Titles*/
            globalData: "Global Veri",
            greesyData:"Greesy Verileri",
            pingData: "Gecikme Bilgileri",
            versionData: "Versiyon Verileri",
          /*Message Titles*/
            serverSize:"Sunucu sayı",
            usersSize:"Kullanıcı sayı",
            databaseStatus:"Veritabanı Durumu",
            greesyVersion:"Greesy Global Versiyonu",
            totalGiveaways:"Toplam Başlatılmış Çekiliş sayısı",
            wsPing:"WebSocket Gecikmesi",
            databasePing:"Database Gecimesi",
            nodejs:"NodeJS",
            discordjs:"Discord.JS"

        },
       
        invite:{
            embedTitle:"Senin Davet Sayın",
            description:"> 🌱 Sen **{{invite_count}}** Davete Sahipsin.\n\n**Davet Kodları**;\n> {{invite_codes}}",
        top:{
            boardMessage:"{{user}} • **{{count}}**"
        }
     
           }
      },
      events:{
        invite:{
            joinMessage:"{{user}} Sunucuya Katıldı! Onu davet eden {{inviter}}. \n Davet Eden **{{total_invite_count}}** Davete Sahip Oldu."
        }
      }

 }
