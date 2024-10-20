import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CustomTabBarHeader } from '@/components/navigation/CustomTabBarHeader'; // Import your custom tab bar header

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <>
      <CustomTabBarHeader />
      <Tabs
        screenOptions={{
          tabBarStyle: { display: 'none' }, 
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
          }}
        />
      </Tabs>
    </>
  );
}
