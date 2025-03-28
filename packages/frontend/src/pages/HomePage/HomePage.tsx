import {
    Container,
    Heading,
    SubHeading,
    Paragraph,
    FeatureList,
    StartExploringLink,
} from "./HomePage.styles";
import { useNotificationParams } from "@/hooks";
import { pagesData } from "@/pages/ExhibitsPage";

export default function HomePage() {
    useNotificationParams();

    return (
        <Container>
            <Heading>Welcome to TimeVoyager</Heading>
            <SubHeading>Your Virtual 3D Museum Experience</SubHeading>
            <Paragraph>
                Discover history like never before with TimeVoyager – a 3D
                museum app that allows you to explore ancient artifacts,
                historical objects, and cultural treasures from various eras.
                Step into the past and experience history in a truly immersive
                and interactive way.
            </Paragraph>

            <FeatureList>
                <li>
                    <strong>Virtual museum tours</strong> – Explore rare
                    historical objects in 3D from the comfort of your home.
                </li>
                <li>
                    <strong>Interactive 3D models</strong> – Rotate, zoom in,
                    and discover the intricate details of artifacts from
                    different cultures.
                </li>
                <li>
                    <strong>Rich educational content</strong> – Learn about the
                    fascinating stories and histories behind each object in our
                    virtual collection.
                </li>
            </FeatureList>

            <Paragraph>
                Join TimeVoyager today and start your journey through time!
            </Paragraph>

            <StartExploringLink
                $padding={"15px 30px"}
                to={`exhibits/${pagesData[0].category}`}
            >
                Start Exploring
            </StartExploringLink>
        </Container>
    );
}
