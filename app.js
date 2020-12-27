new Vue({
    el: "#app",
    data: {
        userHeal: 100,
        monsterHeal: 100,
        isGameOn: false,
        logs:[]
    },
    methods: {
        startGame: function () {
            this.isGameOn = true
        },
        attack: function () {
            var point = Math.ceil(Math.random() * 10);
            this.monsterHeal -= point;
            this.addLog({turn:"U", text:"Oyuncu Atağı (" + point+ ")"});
            this.monsterAttack();

        },
        specialAttack: function () {
            var point = Math.ceil(Math.random() * 25);
            this.monsterHeal -= point;
            this.addLog({turn:"U", text:"Oyuncu Özel Atak (" + point+ ")"});
            this.monsterAttack();
        },
        healUp: function () {
            var point = Math.ceil(Math.random() * 25);
            this.userHeal += point;
            this.addLog({turn:"U", text:"Oyuncu Can Yenileme (" + point+ ")"});
            this.monsterAttack();
        },
        giveUp: function () {
            this.userHeal = 0;
            this.addLog({turn:"U", text:"Oyuncu Pes Etti (" + point+ ")"});

        },
        monsterAttack: function () {
            var point = Math.ceil(Math.random() * 15);
            this.userHeal -= point;
            this.addLog({turn:"M", text:"Canavar Atağı (" + point+ ")"});

        },
        addLog:function(value){
                this.logs.push(value)
        }

    },
    watch: {
        userHeal:  function (value) {
            if (value <= 0) {
                this.userHeal = 0
                if(confirm("Oyunu Kaybettin? Tekrar  denemek istiyor musun")){
                    this.userHeal=100;
                    this.monsterHeal=100;
                    this.logs=[];
                }
            }
            else if (value >= 100) {
                this.userHeal = 100;
            }
        },
        monsterHeal: function (value) {
            if (value <= 0) {
                this.monsterHeal = 0
                if(confirm("Oyunu Kazandın? Tekrar  denemek istiyor musun")){
                    this.userHeal=100;
                    this.monsterHeal=100;
                    this.logs=[];
                }
            }
         

        }
    }

})