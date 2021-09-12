

let Conta = function (num, tipo, saldo, titular){
    this.num = num;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let Abigael = new Conta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte');
let Ramon = new Conta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell');
let Jarret = new Conta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente');
let Ansel = new Conta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley');
let Jacki = new Conta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer');
let Jobi = new Conta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus');
let Thomasin = new Conta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour');
let Lonnie = new Conta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden');
let Alonso = new Conta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan'); 
let Bendite = new Conta(2138105881, "Conta Poupança", 33196, "Bendite Huggett");

let listaObjetos = [Abigael, Ramon, Jarret, Ansel, Jacki, Jobi, Thomasin, Lonnie, Alonso, Bendite];

let banco = {
    clientes: listaObjetos, 
        consultarCliente: function (titular) {
       
            for ( i in this.clientes) {
              if (this.clientes[i].titular === titular) {
                return this.clientes[i];
            }
        }
             return `cliente ${titular} nao existe`;
   
         },

          deposito : function (titular, saldo) {
                 for (i in this.clientes){
                         if (this.clientes[i].titular === titular){
                       this.clientes[i].saldo += saldo
                        return `Deposito realizado, seu novo saldo é: ${this.clientes[i].saldo}`;
                     }
                 } return `cliente ${titular} nao existe`
            },

             saque : function (titular, saque) {
                     for ( i in this.clientes){
                          if (this.clientes[i].titular === titular){
             
                             if ((this.clientes[i].saldo - saque)< 0){
                               return `Fundos insuficientes`
                                 } else {
                                     this.clientes[i].saldo-= saque
                                     return `Extração feita com sucesso, seu novo saldo é: ${this.clientes[i].saldo} `;
                                     }
                                }
                            }
                        }    
}; 

console.log(banco.consultarCliente("Jacki Shurmer"));
console.log(banco.deposito("Jacki Shurmer", 18789));
console.log(banco.saque("Jacki Shurmer", 18789));