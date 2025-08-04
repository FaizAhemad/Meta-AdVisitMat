export const APP_STRINGS = {
  common: {
    appName: 'Meta-AdVisitMat',
    copyright: 'Copyright ©',
    welcome: 'Welcome to Your App',
    homeDescription: 'This is your home page. Start building your app from here!',
  },
  navigation: {
    home: 'HOME',
    about: 'ABOUT',
    contact: 'CONTACT',
  },
  footer: {
    allRightsReserved: 'All rights reserved',
  },
  header: {
    menu: 'Menu',
  },
  attributes: {
    color: {
      inherit: 'inherit',
    },
    component: {
      main: 'main',
      div: 'div',
      footer: 'footer',
    },
    variant: {
      h4: 'h4',
      h6: 'h6',
      body1: 'body1',
      body2: 'body2',
    },
    root: {
      home: '/',
    },
  },
} as const;

// Define a type for nested objects
type NestedStrings = {
  [K in keyof typeof APP_STRINGS]: {
    [P in keyof (typeof APP_STRINGS)[K]]: string;
  };
};

// Export the type for type safety
export type AppStrings = NestedStrings;
