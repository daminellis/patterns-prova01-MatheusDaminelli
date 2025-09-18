class FabricaUI {
    criarBotao() {
      throw new Error("Método deve ser implementado");
    }
    
    criarJanela() {
      throw new Error("Método deve ser implementado");
    }
  }
  
  class FabricaUIClara extends FabricaUI {
    criarBotao() {
      return new BotaoClaro();
    }
    
    criarJanela() {
      return new JanelaClara();
    }
  }
  
  class FabricaUIEscura extends FabricaUI {
    criarBotao() {
      return new BotaoEscuro();
    }
    
    criarJanela() {
      return new JanelaEscura();
    }
  }
  
  class BotaoClaro {
    renderizar() {
      return "Botão branco criado";
    }
  }
  
  class BotaoEscuro {
    renderizar() {
      return "Botão preto criado";
    }
  }
  
  class JanelaClara {
    renderizar() {
      return "Janela clara aberta";
    }
  }
  
  class JanelaEscura {
    renderizar() {
      return "Janela escura aberta";
    }
  }
  
  const tema = "dark";
  let fabrica;
  
  if (tema === "light") {
    fabrica = new FabricaUIClara();
  } else {
    fabrica = new FabricaUIEscura();
  }
  
  const botao = fabrica.criarBotao();
  const janelaUI = fabrica.criarJanela();
  
  console.log(botao.renderizar());
  console.log(janelaUI.renderizar());