import styled from "styled-components";
import { useState } from "react";

const OuterCard = styled.div`
  && {
    display: flex;
    justify-content: space-around;
  }
`;
const IndividualCards = styled.div`
  && {
    border: ${(props) => (props.isActive ? "5px" : "1px")} solid black;
    width: 500px;
    height: 500px;
    margin: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.bg};
  }
`;
const StyledButton = styled.button`
  && {
    background-color: white;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
  }
`;
const IndividualButtons = styled.div`
  && {
    width: 500px;
    height: 500px;
    margin: 4px;
  }
`;

const Card = (props) => {
  const { packs } = props;
  const [activePlan, setActivePlan] = useState(0);

  return (
    <>
      <OuterCard>
        {packs.map((pack, index) => {
          const { id, bgColor, planName, description, price, months } = pack;
          return (
            <IndividualCards
              key={id}
              bg={bgColor}
              isActive={index === activePlan}
              onClick={() => setActivePlan(index)}
            >
              <h2>
                <u>{planName}</u>
              </h2>
              <h4>{description}</h4>
              <div>
                <h4>Price: {`Rs ${price}`}</h4>
                <h5>{`${months} months`}</h5>
              </div>
              <div>
                <ul>
                  {pack.features.map((feature) => {
                    return <li key={feature.id}>{feature.desc}</li>;
                  })}
                </ul>
              </div>
            </IndividualCards>
          );
        })}
      </OuterCard>
      <OuterCard>
        {props.packs.map((pack, index) => {
          return (
            <IndividualButtons key={`${pack.id}-${index}`}>
              {index === activePlan && <StyledButton>Proceed</StyledButton>}
            </IndividualButtons>
          );
        })}
      </OuterCard>
    </>
  );
};

export default Card;
