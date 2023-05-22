import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import Arms from "../gallery/3-hands.jpg"


export default function About() {
    return(
        <>
        <main>
        <Container className="about-container">
            <Row className="text-centered">
                <Col sm={12} md={6} lg={4}>
                <img />
                </Col>

                <Col >
            <h1>How can You As a Beginner Makeup-Artist Determine your Client's ?</h1>
            <br />
            <Parallax speed={10}
                        scale={[1, 1]}
                          easing="easeInQuad">
                        <img src={Arms} alt="wheel"/>
            </Parallax>
            <br />

            <br />
            <p>Determining your Client's skin’s undertone can be done in 5 minutes. You can make this determination using any one of the tests that is provided below.

But if you’re still stuck, visit your medical aesthetician or consult with a beauty expert at a beauty counter like Ulta or Clinique. They can help you identify your undertone and may even be able to swatch different product shades until you find your ideal match.</p>
            <h2>Check Client's Vein Colors</h2>
            <p>If you can see your veins, you may be able to use their color to identify your undertone.

For example, if your veins look greenish, then you may have warm undertones. People with blue or purplish-looking veins usually have cooler undertones.

If you have neutral undertones, then your veins may appear colorless or match the color of your skin.</p>

            <br />
            <h2>Assess their jewelry</h2>
            <p>
            Many people are more attracted to silver or gold jewelry because of how it looks against their skin.

If your client likes the traditional yellow gold looks on their skin, they are more likely to have warm or olive undertones. Silver, platinum, and rose gold tend to flatter cooler undertones.

Also your client may have neutral undertones if they tend to look good in both silver and gold and based of their choice more or so on the outfit than your skin color.
            </p>
            <br />
            <h2>What this means for your Client's foundation?</h2>
            <p>
            Once you know your undertones, you can move on to choosing the right foundation for your skin. But given the number of foundation lines and types, it may still take some trial and error.

Every brand of foundation is going to be slightly different, so your ideal shade may vary across different lines.

If the option is available, head to your local beauty store and see if an associate can help you swatch different shades. If you already have a match in one brand, they may be able to recommend or identify the best match in another product line.

 
            </p>
            <br />
            <ul>
                <li>Cool undertone <p>A cool undertone foundation will appear slightly pink in the bottle. Avoid yellowish foundations, as these tend to make cool skin tones look sallower</p></li>
                <li>Neutral undertone<p>People with neutral undertones tend to look better in foundations that are neither overly yellow nor pink. Instead, look for a combination of both — a peach foundation can work well for neutral tones.</p></li>
                <li>Warm undertone<p>Warm undertones tend to look better with a slightly yellow foundation.</p></li>
                <li>Olive undertone<p>If you have an olive undertone, it’s usually a mistake to go for a warm (yellow) foundation. Instead, look for one with a slight golden color.</p></li>
            </ul>
                </Col>

            </Row>
        </Container>
        </main>
        </>
    )
}