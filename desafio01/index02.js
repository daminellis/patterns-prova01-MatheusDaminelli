class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance;
      }
      this.configuracoes = {};
      Config.instance = this;
    }
  
    definirConfig(chave, valor) {
      this.configuracoes[chave] = valor;
    }
  
    obterConfig(chave) {
      return this.configuracoes[chave];
    }
  }
  
  const c1 = new Config();
  c1.definirConfig("idioma", "pt-BR");
  
  const c2 = new Config();
  console.log(c2.obterConfig("idioma"));
  console.log(c1 === c2); 