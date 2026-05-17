export default ({ env }: { env: (key: string, fallback?: unknown) => unknown }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
