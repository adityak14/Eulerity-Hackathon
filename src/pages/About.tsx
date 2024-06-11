import React from 'react';
import styled from 'styled-components';

// Styling for the About Page.
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d1e7ff;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2em;
  margin: 20px 0;
  color: #333;
`;

const Subheading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #004f9e;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #0077b5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 22px
`;

// About page component.
const About: React.FC = () => {
  return (
    <AboutContainer>
      <Heading>About Me</Heading>
      <Subheading>Aditya Kaushik Jonnavittula</Subheading>
      <Paragraph>Email: aditya.dev1412@gmail.com</Paragraph>
      <Paragraph>
        LinkedIn: <Link href="https://www.linkedin.com/in/adityak14/" target="_blank">linkedin.com/in/adityak14/</Link>
      </Paragraph>
      <Paragraph>
        GitHub: <Link href="https://github.com/adityak14" target="_blank">github.com/adityak14</Link>
      </Paragraph>
      <Heading>Education</Heading>
      <Paragraph>Master's in Computer Science, Rutgers University, New Brunswick</Paragraph>
      <Paragraph>Bachelor's in Computer Engineering, University of Mumbai, India</Paragraph>
      <Heading>Technical Skills</Heading>
      <List>
        <ListItem>Python</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>Flask</ListItem>
        <ListItem>Django</ListItem>
        <ListItem>SQL</ListItem>
        <ListItem>HTML/CSS</ListItem>
        <ListItem>Java</ListItem>
        <ListItem>Docker</ListItem>
        <ListItem>Git</ListItem>
      </List>
    </AboutContainer>
  );
};

export default About;
