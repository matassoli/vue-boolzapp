var app = new Vue({
  el: "#root",
  data: {
    newMsg: "",
    search: "",
    searchName: [],
    emoji: ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😴", "😙", "😭"],
    contactActive: 0,
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_6',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],


  },
  methods: {
    // funzione per mandare messaggi
    addMsg: function() {
      if (this.newMsg !== "") {
        this.contacts[this.contactActive].messages.push({
          date: dayjs().format('DD/MM/YY HH.mm.ss'),
          message: this.newMsg,
          status: 'sent'
        });
        this.newMsg = '';
        setTimeout(this.receivedMsg, 1000);
      }
    },
    // funzione per ricevere messaggi
    receivedMsg: function() {
      this.contacts[this.contactActive].messages.push({
        date: dayjs().format('DD/MM/YY HH.mm.ss'),
        message: "Ok",
        status: 'received'
      });
    },
    emojiMsg: function(e) {
      this.newMsg += this.emoji[e];
    },
  },
  // filtro barra ricerca
  computed: {
    searchFilter: function() {
      return this.contacts.filter(e => {
        if (this.search == "") {
          return this.contacts;
        }
        return e.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
});

// Campanella notifiche
var button = document.querySelectorAll("button")[0];
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    document.getElementById("notification__bell").classList.remove('fa-bell');
    document.getElementById("notification__bell").classList.add('fa-bell-slash');

  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    document.getElementById("notification__bell").classList.remove('fa-bell-slash');
    document.getElementById("notification__bell").classList.add('fa-bell');
  }
}, false);
