import { createAuthClient } from 'better-auth/react';
import { adminClient } from 'better-auth/client/plugins'; // Core admin client plugin
import { passkeyClient } from '@better-auth/passkey/client'; // New client passkey package path

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  plugins: [passkeyClient(), adminClient()],
});