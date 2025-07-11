import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Run both server and browser tests
    include: ['test/**/*.test.js'],
    environment: 'node', // Default environment for server tests
    
    // Browser configuration for browser-specific tests
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    
    // Configure different environments for different test patterns
    workspace: [
     
      // Browser tests  
      {
        test: {
          include: ['test/browser/**/*.test.js'],
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        }
      }
    ]
  },
});