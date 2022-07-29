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
            <IndividualCards key={pack.id} bg={pack.bgColor}></IndividualCards>
          );
        })}
      </OuterCard>
    </>
  );
};

export default Card;
