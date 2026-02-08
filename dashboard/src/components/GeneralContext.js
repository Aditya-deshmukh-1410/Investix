import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (stock, mode) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [orderMode, setOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (stock, mode = "BUY") => {
    console.log("Opening window:", stock, mode);
    setSelectedStock(stock);
    setOrderMode(mode);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock(null);
    setOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && selectedStock && (
        <BuyActionWindow
          stock={selectedStock}
          mode={orderMode}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
