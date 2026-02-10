/**
 * Data Provider - Simplified local-only data access layer
 * 
 * This module provides unified data access for the "full local" simulator.
 */

import sqlServer, { sqlServerEntities, sqlServerAuth } from './SQLServerRepository';

// In local-only mode, we are always "offline" relative to any cloud
let connectionInitialized = false;

/**
 * Check if running in offline mode (always true for local sim)
 */
export const isOffline = () => true;

/**
 * Set offline mode (no-op, always true)
 */
export const useOfflineMode = async (offline) => {
  if (!connectionInitialized) {
    await sqlServer.initConnection();
    connectionInitialized = true;
  }
};

/**
 * Unified data provider
 */
export const dataProvider = {
  entities: sqlServerEntities,
  auth: sqlServerAuth,
  
  // App logs mock
  appLogs: {
    logUserInApp: async (pageName) => {
      console.log(`[Local Log] User navigated to: ${pageName}`);
      return { success: true };
    },
    trackEvent: async (name, data) => {
      console.log(`[Local Log] Event tracked: ${name}`, data);
      return { success: true };
    }
  },

  // AI mock
  ai: {
    generateText: async (prompt) => {
      console.log('[Local AI] Text generation requested:', prompt);
      return "This is a local AI response (mocked).";
    },
    generateImage: async (prompt) => {
      console.log('[Local AI] Image generation requested:', prompt);
      return { url: 'https://via.placeholder.com/512?text=Local+AI+Image' };
    }
  },

  // Storage mock
  storage: {
    upload: async (file) => {
      console.log('[Local Storage] File upload requested:', file.name);
      return { url: URL.createObjectURL(file) };
    },
    getDownloadUrl: async (path) => {
      return path;
    }
  },

  // Cloud Functions mock
  functions: {
    invoke: async (name, data) => {
      console.log(`[Local Function] Invoke: ${name}`, data);
      return { success: true, message: 'Local function invoked' };
    }
  },

  integrations: {
    Core: {
      InvokeLLM: async (data) => {
        console.log('[Local Integrations] InvokeLLM:', data);
        // Return a mock scenario based on the prompt
        return {
          name: "Generated Scenario",
          description: "Mock description for: " + (data.prompt?.substring(0, 50) || "Request") + "...",
          difficulty: "medium",
          faultConfig: { reactor: { type: "SENSOR_DRIFT", probability: 0.5 } },
          trainingObjectives: ["Analyze mock data", "Handle simulated failure"]
        };
      }
    }
  },
  
  // Analytics
  analytics: {
    track: (event) => {
      const localEvents = JSON.parse(localStorage.getItem('localAnalytics') || '[]');
      localEvents.push({ ...event, timestamp: new Date().toISOString() });
      localStorage.setItem('localAnalytics', JSON.stringify(localEvents));
      console.log('Local analytics event tracked:', event);
    }
  },
  
  // Agents mock
  agents: {
    createConversation: async ({ agent_name, metadata }) => {
      console.log(`[Local Agents] Created conversation with agent: ${agent_name}`, metadata);
      return { id: 'local-conv-' + Date.now(), messages: [] };
    },
    subscribeToConversation: (conversationId, callback) => {
      console.log(`[Local Agents] Subscribed to conversation: ${conversationId}`);
      // Simple mock: Send an empty list of messages immediately
      setTimeout(() => callback({ messages: [] }), 100);
      return () => console.log(`[Local Agents] Unsubscribed from: ${conversationId}`);
    },
    addMessage: async (conversation, { role, content }) => {
      console.log(`[Local Agents] Added message to ${conversation.id}:`, { role, content });
      return { 
        success: true, 
        message: { role, content, timestamp: new Date().toISOString() } 
      };
    }
  },

  // Mode utilities
  isOffline,
  useOfflineMode,
  autoDetectMode: () => true,
  syncOfflineData: async () => {
    console.log('No data to sync in local-only mode');
  }
};

export default dataProvider;
