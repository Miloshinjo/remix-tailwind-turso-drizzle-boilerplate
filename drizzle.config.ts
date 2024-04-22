import type { Config } from 'drizzle-kit';
import { env } from '~/.server/env';

export default {
  schema: './app/.server/db/schema.ts',
  out: './app/.server/db/migrations',
  driver: 'turso',
  dbCredentials: {
    url: env.tursoDbUrl as string,
    authToken: env.tursoDbAuthToken as string,
  },
} satisfies Config;
