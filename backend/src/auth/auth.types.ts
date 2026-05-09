import type { Request } from 'express';

export type JwtPayload = {
  sub: string;
  email: string;
  name: string;
};

export type AuthenticatedUser = {
  id: string;
  email: string;
  name: string;
};

export type AuthenticatedRequest = Request & {
  user: AuthenticatedUser;
};
