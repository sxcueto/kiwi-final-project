import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  overflow-wrap: break-word;
  width: 650px;
  line-height: 24px;
  margin-bottom: 20px;
  
`;

const Container = styled.div`
  display: flex;
  justify-content: center; // centers horizontally
  align-items: center; // centers vertically
  height: 50vh; // full viewport height
`;

function About() {
  return (
    <Container>
      <StyledParagraph>
        Journaling app where you can create, edit, and delete entries you've
        written. Created by Stephanie Cueto
      </StyledParagraph>
    </Container>
  );
}

export default About;
