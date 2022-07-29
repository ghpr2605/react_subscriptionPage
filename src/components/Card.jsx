import styled from "styled-components";

const OuterCard = styled.div`
  && {
    display: flex;
    justify-content: space-around;
  }
`;
const IndividualCards = styled.div`
  && {
    border: ${(props) => (props.isActive ? "5px" : "1px")} solid grey;
    width: 500px;
    height: 500px;
    margin: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.bg};
  }
`;

const Card = (props) => {
  const { packs } = props;

  return (
    <>
      <OuterCard>
        {packs.map((pack) => {
          return (
            <IndividualCards key={pack.id} bg={pack.bgColor}>
              <h2>{pack.planName}</h2>
              <h4>{pack.description}</h4>
              <div>
                <h4>Price: {`Rs ${pack.price}`}</h4>
                <h5>{`${pack.months} months`}</h5>
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
    </>
  );
};

export default Card;
