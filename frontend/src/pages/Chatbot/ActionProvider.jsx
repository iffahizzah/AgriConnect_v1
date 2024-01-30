class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleAgricultureList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Agriculture:",
      {
        widget: "agricultureLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleZeroHungerList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on SDG 2: Zero Hunger:",
      {
        widget: "zeroHungerLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleConsumpList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on SDG 12: Responsible Consumption and Production:",
      {
        widget: "consumpLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
