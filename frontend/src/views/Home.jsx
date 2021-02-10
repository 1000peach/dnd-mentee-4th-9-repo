import React from 'react';
import Footer from '../components/Footer/Footer';
import Section, {SECTION} from '../components/Section';
import TestMain from '../components/TestMain';

function Home() {
  return (
    <>
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <Footer />
    </>
  );
}

export default Home;
