import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/Happy.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Christian</ThemedText>
      </ThemedView>
      <ThemedText>This is my profile. Welcome!</ThemedText>

      {/* About Me Section */}
      <Collapsible title="About Me">
        <ThemedText>
          I am a passionate software developer with experience in mobile and web application
          development. I love learning new technologies and applying them in real-world projects.
        </ThemedText>
      </Collapsible>

      {/* Skills Section */}
      <Collapsible title="Finished Goals">
        <ThemedText>
          - React & React Native{'\n'}
          - JavaScript & TypeScript{'\n'}
          - Node.js, Express, and MongoDB{'\n'}
          - UI/UX Design and Frontend Development
        </ThemedText>
      </Collapsible>

      {/* <Collapsible title="Projects">
        <ThemedText>
          Check out some of my projects below:{'\n'}
          <ThemedText type="defaultSemiBold">1. Project A</ThemedText> - A mobile app that helps users track their fitness progress.{'\n'}
          <ThemedText type="defaultSemiBold">2. Project B</ThemedText> - A full-stack web app for managing personal finances.
        </ThemedText>
        <ExternalLink href="https://myportfolio.com/projects">
          <ThemedText type="link">See More Projects</ThemedText>
        </ExternalLink>
      </Collapsible> */}

      {/* Experience Section */}
      <Collapsible title="Ongoing Goals">
        <ThemedText>
          - Software Developer at XYZ Corp (2022 - Present){'\n'}
          - Frontend Developer at ABC Tech (2020 - 2022)
        </ThemedText>
      </Collapsible>

      {/* Contact Section */}
      <Collapsible title="Analytics">
        <ThemedText>
          Feel free to get in touch with me via email at{' '}
          <ThemedText type="defaultSemiBold">christian.jay@example.com</ThemedText>.
        </ThemedText>
        <ExternalLink href="https://linkedin.com/in/christianjay">
          <ThemedText type="link">LinkedIn Profile</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Custom Section for Animations */}
      {/* <Collapsible title="Animations">
        <ThemedText>
          Explore some animations I’ve worked on using{' '}
          <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 150, // Adjust size for the avatar
    height: 150,
    borderRadius: 75, // Circular avatar
    alignSelf: 'center',
    marginBottom: -75,
    marginTop: 30 // Positioning
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the title below the avatar
    marginTop: 20, // Space from the avatar image
  },
});
