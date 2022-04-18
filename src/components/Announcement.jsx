import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #121212;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container> Get 50% discount 🤑 on first order!</Container>;
};

export default Announcement;
