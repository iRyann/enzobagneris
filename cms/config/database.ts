export default ({ env }: { env: (key: string, fallback?: unknown) => unknown }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: Number(env('DATABASE_PORT', 5432)),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD'),
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 2, max: 10 },
    acquireConnectionTimeout: 60_000,
  },
});
