import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <>
      <h2 className="page-title" data-testid="about-element">
        Who is The GrapeVine?
      </h2>
      <Card className="about">
        <p>
          The purpose of The GrapeVine is to bring people together on a
          dedicated social space where people can share their love of Australian
          wine and learn a tip or two along the way. This benefits the community
          of wine consumers at all levels to then be able to try recommended
          wines by those who have shared and contributed within the community.
        </p>

        <p>
          We aim to share a number of new wines each week for people to try and
          share their experience and tips with others in a safe and friendly
          online space.
        </p>
      </Card>
    </>
  );
};

export default About;
