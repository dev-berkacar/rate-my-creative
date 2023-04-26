import { Text } from "@nextui-org/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Grid from "@mui/material/Grid";

function PrivacyPolicy() {
  return (
    <>
      <Grid container className="image">
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
        >
          <Grid
            xs={4}
            direction="column"
            style={{
              justifyItems: "center",
              padding: 24,
              backgroundColor: "White",
              borderRadius: 12,
              overflow: "scroll",
              height: "60%",
              width: 600,
              overflowX: "hidden",
              overflowY: "visible",
            }}
          >
            <Text
              size={30}
              css={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                paddingBottom: 24,
              }}
            >
              Privacy Policy
            </Text>
            <Text size={20}>
              At "Rate My Creative," we understand the importance of protecting
              your personal information. Our privacy policy outlines the types
              of information we collect, how we use it, and your rights with
              respect to your personal information. Information We Collect:
              Personal information, such as your name and contact details, may
              be collected when you register for an account with us or contact
              us for support. Information about your use of our services,
              including the designs you upload for analysis and the results of
              our analysis, will be collected and stored. Use of Information: We
              will use your personal information to provide and improve our
              services, as well as to communicate with you about your account
              and any issues you may have with our services. We will use the
              information about your designs and the results of our analysis to
              improve and develop our AI algorithms and services. Sharing of
              Information: We will not share your personal information with
              third parties without your consent, except as required by law or
              to protect the rights, property, or safety of "Rate My Creative,"
              our users, or the public. All designs uploaded to our platform
              will remain confidential and will not be shared with the public or
              any third parties without your consent. Security: We take the
              security of your personal information and designs seriously and
              have implemented measures to protect it from unauthorized access,
              use, or disclosure. However, please note that no method of
              electronic storage or transmission is completely secure.
              Effectiveness of Design Analysis: Please note that the AI-based
              analysis provided by "Rate My Creative" is an estimation of the
              potential effectiveness of a design based on previous designs. It
              is not a guarantee of effectiveness in the real world. Changes to
              the Policy: We reserve the right to modify this privacy policy at
              any time. If we make any changes, we will notify you by revising
              the date at the top of this policy and, in some cases, we may
              provide you with additional notice (such as adding a statement to
              our homepage or sending you an email notification). Your Rights:
              You have the right to access, correct, update, and request
              deletion of your personal information. You can also object to the
              processing of your personal information, ask us to restrict the
              processing of your information, or request portability of your
              information. To exercise any of these rights, please contact us at
              info@ratemycreative.com. If you have any questions about our
              privacy policy or the way we handle your personal information,
              please contact us at info@ratemycreative.com.
            </Text>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ display: "flex" }} xs={12}>
        <Footer />
      </Grid>
    </>
  );
}

export default PrivacyPolicy;
