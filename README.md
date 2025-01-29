# @hsuite/users-types

A comprehensive TypeScript library providing type definitions and interfaces for user management in the HSuite ecosystem.

## Overview

The `@hsuite/users-types` library provides a robust set of TypeScript types, interfaces, and models for handling user-related data structures. It is designed to ensure type safety and consistency across applications using the HSuite platform.

## Installation

```bash
npm install @hsuite/users-types
```

## Dependencies

### Peer Dependencies
- @nestjs/common: ^10.4.2
- @nestjs/core: ^10.4.2

### Dependencies
- @hsuite/nestjs-swagger: 2.0.0
- @hsuite/auth-types: 2.0.0

### Development Dependencies
- @compodoc/compodoc: ^1.1.23

## Features

- Type-safe user entity definitions
- Mongoose schema decorators for database integration
- Swagger/OpenAPI documentation support
- Integration with HSuite authentication system
- Two-factor authentication type support

## Usage

### Importing Types

```typescript
import { User, IUser } from '@hsuite/users-types';
```

### User Model

The library provides a `User.Safe` class that implements the `IAuth.ICredentials.IUser.IEntity` interface. This class represents a safe version of the User entity with public properties:

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| email | string | Yes | User's email address (unique, validated) |
| username | string | Yes | Unique username for the user account |
| created_at | number | Yes | Unix timestamp of user account creation |
| updated_at | number | Yes | Unix timestamp of last user account update |
| confirmed | boolean | Yes | Indicates if user has confirmed their account |
| type | IAuth.ICredentials.IUser.IType | Yes | Type of user account |
| role | 'user' \| 'admin' \| 'owner' | Yes | User's role in the system |
| tags | Array<Auth.Credentials.User.Tags> | No | Tags for categorizing users |
| banned | boolean | No | Indicates if user is banned |
| twoFactorAuth | Auth.TwoFactor.Auth | Yes | Two-factor authentication configuration |

### Example

```typescript
const user: User.Safe = {
  email: "user@example.com",
  username: "johndoe",
  created_at: 1634567890,
  updated_at: 1634567890,
  confirmed: true,
  type: "standard",
  role: "user",
  tags: ["premium", "beta"],
  banned: false,
  twoFactorAuth: {
    // Two-factor authentication configuration
  }
};
```

## Documentation

Generate detailed documentation using:

```bash
npm run compodoc
```

View documentation coverage:

```bash
npm run compodoc:coverage
```

## Type Definitions

The library is organized into two main namespaces:

### IUser Namespace
Contains interfaces and type definitions for user-related data structures.

### User Namespace
Contains concrete implementations and models, including the `User.Safe` class for public user data representation.

## Database Integration

The library uses `@nestjs/mongoose` decorators for MongoDB schema definition:

- `@Prop()` decorators for property definitions
- Built-in validation (e.g., email validation)
- Support for unique constraints
- Type safety with Mongoose schemas

## API Documentation

The library includes Swagger/OpenAPI decorators (`@ApiProperty`) for automatic API documentation generation, making it compatible with NestJS Swagger integration.

## Version
Current Version: 2.0.0

## License

This package is part of the HbarSuite ecosystem and is covered by its license terms.

---

<p align="center">
  Built with ❤️ by the HbarSuite Team<br>
  Copyright © 2024 HbarSuite. All rights reserved.
</p>