import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { Card } from "../src/ships/Card/Card.controller";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div className="section">
        <h2>Active Account</h2>
        <AccountData drizzle={drizzle} drizzleState={drizzleState} accountIndex={0} units="ether" precision={3} />
      </div>

      <div className="section">
        <h2>Deepee</h2>
        <p>
          Return of the <b>name</b> value:&nbsp;
        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Deepee" method="name" />
        </p>
        <p>
          Return of the <b>getTotalPoolBalance</b> value &nbsp;
        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Deepee" method="getTotalPoolBalance" />
        </p>
        <p>
          Return of the <b>symbol</b> value:&nbsp;
        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Deepee" method="symbol" />
        </p>
        <p>
          Return of the <b>participants</b> function:&nbsp;
        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Deepee" method="getParticipants" />
        </p>

        <p>
          add participant
        <ContractForm drizzle={drizzle} contract="Deepee" method="addParticipants"/>
        </p>
       
        <p>
          deposit
        <ContractForm drizzle={drizzle} contract="Deepee" method="deposit"/>
        </p>
        <p>
          withdraw
        <ContractForm drizzle={drizzle} contract="Deepee" method="withdraw"/>
        </p>
      </div>
    </div>
  );
};
