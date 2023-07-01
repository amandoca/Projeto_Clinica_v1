import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'cadastrar-dependente',
  templateUrl: './cadastrar-dependente.page.html',
  styleUrls: ['./cadastrar-dependente.page.scss'],
})
export class CadastrarDependentePage implements OnInit {

  nome: string = '';
  datanasc = '';
  parentesco: string = '';
  genero: string = '';
  cep: string | undefined;
  endereco: any | undefined;
  numero: string = '';
  complemento: string = '';
  bairro: string | undefined;
  cidade: string | undefined;
  estado: string | undefined;
  
  profissionais = [];


  constructor(private nav: NavController) { }

  limparFormulario = () => {
    this.endereco = ''
    this.bairro = ''
    this.cidade = ''
    this.estado = ''
  }

  preencherFormulario = (obj: any) => {
    this.endereco = obj.logradouro
    this.bairro = obj.bairro
    this.cidade = obj.localidade
    this.estado = obj.uf
  }

  async callAPI() {
    this.limparFormulario()

    const cep = this.cep
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (this.cep?.length == 8) {
      const dados = await fetch(url)
      const prom = dados.text()

      prom.then((x: any) => {
        let obj = JSON.parse(x)
        this.preencherFormulario(obj)
      })
    } else {
      this.endereco = 'CEP incorreto'
    }
  }

  ngOnInit() {
    const aux: any = localStorage.getItem('profissionais');
    this.profissionais = aux ? JSON.parse(aux) : [];
  }

  save(){
    const nome = this.nome;
    const cpf_cnpj = this.cpf_cnpj;
    const datanasc = this.datanasc;
    const parentesco = this.parentesco;
    const genero = this.genero;
    const cep = this.cep;
    const endereco = this.endereco;
    const numero = this.numero;
    const complemento = this.complemento;
    const bairro = this.bairro;
    const cidade = this.cidade;
    const estado = this.estado;
    const obj:any = {nome,cpf_cnpj, datanasc, parentesco, genero, cep, endereco, numero, complemento, bairro, cidade, estado}
    const data = JSON.stringify(this.profissionais.concat(obj))
    localStorage.setItem('profissionais', data)
    this.nav.navigateBack('dependentes')
  }
  back(){
    this.nav.navigateBack('home');
  }

  isValid:boolean = false;
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  pureResult: any;
  maskedId: any;
  cpf_cnpj = '';
  val: any;
  v: any;


  format(valString: { toString: () => any; }) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if(parts[0].length <= 11){
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }else{
      this.maskedId = this.cnpj(parts[0]);
      return this.maskedId;
    }
};

unFormat(val: string) {
    if (!val) {
      return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
};

 cpf_mask(v: string) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}

 cnpj(v: string) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/, '$1.$2'); //Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca um hífen depois do bloco de quatro dígitos
    return v;
}


 validateCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito 
    var add = 0;
    for (var i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito 
    add = 0;
    for (var i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}
}
