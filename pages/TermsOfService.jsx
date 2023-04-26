import { Text } from "@nextui-org/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useMediaQuery } from "react-responsive";
import Grid from "@mui/material/Grid";

function TermsOfService() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
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
              "Rate My Creative" Terms and Conditions
            </Text>
            <Text size={20}>
              By using the "Rate My Creative" website and services, you agree to
              be bound by these terms and conditions. If you do not agree to
              these terms and conditions, you should not use our website or
              services. Use of Services: You may use our services only for
              lawful purposes and in accordance with these terms and conditions.
              You will not use our services in any way that is prohibited by law
              or regulation. You will not use our services to upload or transmit
              any material that is illegal, harmful, threatening, abusive,
              harassing, defamatory, vulgar, obscene, libelous, invasive of
              another's privacy, or racially, ethnically, or otherwise
              offensive. You will not use our services to upload or transmit any
              material that you do not have the right to transmit under any law
              or under a contractual or fiduciary relationship. You will not use
              our services to upload or transmit any material that infringes any
              patent, trademark, trade secret, copyright, or other proprietary
              rights of any party. Account and Security: You are responsible for
              maintaining the confidentiality of your account and password and
              for restricting access to your computer. You will be responsible
              for all activities that occur under your account or password. You
              will notify us immediately of any unauthorized use of your account
              or any other security breach. Intellectual Property: The content
              and technology on our website and services, including but not
              limited to text, graphics, logos, icons, images, and software, are
              protected by copyright, trademark, and other intellectual property
              laws. You may not reproduce, copy, or redistribute the material on
              our website or services without our prior written consent. We
              reserve the right to take legal action against any unauthorized
              use of our intellectual property. Disclaimer: Our website and
              services are provided on an "as is" and "as available" basis. We
              make no representations or warranties of any kind, express or
              implied, as to the operation of our website or services, or the
              information, content, materials, or products included on our
              website or services. We will not be liable for any damages of any
              kind arising from the use of our website or services, including
              but not limited to direct, indirect, incidental, punitive, and
              consequential damages. Indemnification: You will indemnify and
              hold us harmless from and against any and all claims, damages,
              costs, and expenses, including reasonable attorneys' fees, arising
              from or related to your use of our website or services. Use of
              Designs and Score: Any use of designs based on the score provided
              by "Rate My Creative" is the sole responsibility of the advertiser
              or ad placer and "Rate My Creative" shall have no liability or
              responsibility for such use. Changes to Terms and Conditions: We
              reserve the right to modify these terms and conditions at any
              time. If we make any changes, we will notify you by revising the
              date at the top of these terms and conditions. Governing Law:
              These terms and conditions and your use of our website and
              services will be governed by and construed in accordance with the
              laws of the State of Wyoming, without giving effect to any
              principles of conflicts of law. Contact Us: If you have any
              questions or concerns about these terms and conditions, please
              contact us at info@ratemycreative.com By using our website and
              services, you acknowledge that you have read, understood, and
              agree to be bound by these terms and conditions
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

export default TermsOfService;
