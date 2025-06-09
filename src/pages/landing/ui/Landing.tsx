import {
  Footer,
  Header,
  KeyProblems,
  TeamSection,
  CertificationSteps,
  AboutUs,
  Hero,
  Form,
  DocumentSection,
} from '@/widgets';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <KeyProblems />
      <CertificationSteps />
      <DocumentSection />
      <AboutUs />
      <TeamSection />
      <Form />
      <Footer />
    </div>
  );
};

export { Landing };
