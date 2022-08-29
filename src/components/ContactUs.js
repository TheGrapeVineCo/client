import Card from "react-bootstrap/Card";

const ContactUs = () => {
  return (
    <>
      <h2 className="page-title">We'd love to hear from you!</h2>
      <Card className="about">
        <p>
          We strive to make a safe community where you feel safe and comfortable
          to participate while learning a thing or two along the way. If you
          feel these standards are not being upheld, we want to know.
        </p>

        <p>
          Alternatively, if you have any suggestions or feedback we're open to
          hearing from you in order to foster an environment that's engaging and
          fun!
        </p>

        <p>
          You can get in touch{" "}
          <a href="mailto:hi@thegrapevine.com?Subject=Feedback">here</a>. Please
          leave your name and details for getting in touch and we will do our
          best to respond within 48hrs.
        </p>
      </Card>
    </>
  );
};

export default ContactUs;
