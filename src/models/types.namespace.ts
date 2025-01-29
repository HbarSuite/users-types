import { Auth, IAuth } from "@hsuite/auth-types"
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { Prop } from "@nestjs/mongoose"
import isEmail from "validator/lib/isEmail"

export namespace User {
    /**
     * Represents a safe version of the User entity with public properties.
     * @implements {IAuth.ICredentials.IUser.IEntity}
     * @description
     * This class defines the public properties of a user that are safe to expose.
     * It implements the IAuth.ICredentials.IUser.IEntity interface to ensure type safety.
     * @example
     * const safeUser = new UserSafe();
     * safeUser.email = "user@example.com";
     * safeUser.username = "johndoe";
     * @compodoc
     * @category Entities
     * @subcategory User
     */
    export class Safe implements IAuth.ICredentials.IUser.IEntity {
        /**
         * The user's email address.
         * @type {string}
         * @description Email address used for user identification and communication
         * @example "user@example.com"
         */
        @Prop({
            unique: true,
            required: true,
            type: String,
            validate: [isEmail, 'invalid email']
        })
        @ApiProperty({
            type: String,
            description: 'Email address used for user identification',
            required: true,
            example: 'user@example.com'
        })
        email: string

        /**
         * The user's username.
         * @type {string}
         * @description Unique username for the user account
         * @example "johndoe"
         */
        @Prop({
            required: true,
            type: String,
        })
        @ApiProperty({
            type: String,
            description: 'Unique username for the user account',
            required: true,
            example: 'johndoe'
        })
        username: string

        /**
         * The timestamp when the user was created.
         * @type {number}
         * @description Unix timestamp of user account creation
         * @example 1634567890
         */
        @Prop({
            required: true,
            type: String
        })
        @ApiProperty({
            type: String,
            description: 'Unix timestamp of user account creation',
            required: true,
            example: 1634567890
        })
        created_at: number

        /**
         * The timestamp when the user was last updated.
         * @type {number}
         * @description Unix timestamp of last user account update
         * @example 1634567890
         */
        @Prop({
            required: true,
            type: String
        })
        @ApiProperty({
            type: String,
            description: 'Unix timestamp of last user account update',
            required: true,
            example: 1634567890
        })
        updated_at: number

        /**
         * Indicates whether the user's account is confirmed.
         * @type {boolean}
         * @description Boolean flag indicating if user has confirmed their account
         * @example true
         */
        @Prop({
            required: true,
            type: Boolean
        })
        @ApiProperty({
            type: Boolean,
            description: 'Boolean flag indicating if user has confirmed their account',
            required: true,
            example: true
        })
        confirmed: boolean

        /**
         * The type of user account.
         * @type {IAuth.ICredentials.IUser.IType}
         * @description Defines the type of user account
         * @example "standard"
         */
        @Prop({
            required: true,
            type: String
        })
        @ApiProperty({
            type: String,
            description: 'Type of user account',
            required: true,
            example: 'standard'
        })
        type: IAuth.ICredentials.IUser.IType

        /**
         * The role of the user.
         * @type {'user' | 'admin' | 'owner'}
         * @description User's role in the system determining their permissions
         * @example "user"
         */
        @Prop({
            required: true,
            type: String
        })
        @ApiProperty({
            type: String,
            description: "User's role in the system",
            required: true,
            example: 'user'
        })
        role: 'user' | 'admin' | 'owner'

        /**
         * An array of tags associated with the user.
         * @type {Array<Auth.Credentials.User.Tags>}
         * @description Tags for categorizing and grouping users
         * @example ["premium", "beta"]
         */
        @Prop({
            required: false,
            type: () => Auth.Credentials.User.Tags,
            array: true
        })
        @ApiProperty({
            isArray: true,
            type: () => Auth.Credentials.User.Tags,
            description: 'Tags for categorizing users',
            required: false,
            example: ['premium', 'beta']
        })
        tags: Array<Auth.Credentials.User.Tags>

        /**
         * Indicates whether the user is banned.
         * @type {boolean}
         * @description Boolean flag indicating if user is banned
         * @example false
         */
        @Prop({
            required: false,
            type: Boolean
        })
        @ApiProperty({
            type: Boolean,
            description: 'Boolean flag indicating if user is banned',
            required: true,
            example: false
        })
        banned: boolean

        /**
         * The two-factor authentication settings for the user.
         * @type {Auth.TwoFactor.Auth}
         * @description Two-factor authentication configuration
         */
        @Prop({
            required: true,
            type: () => Auth.TwoFactor.Auth
        })
        @ApiProperty({
            type: () => Auth.TwoFactor.Auth,
            description: 'Two-factor authentication configuration',
            required: true
        })
        twoFactorAuth: Auth.TwoFactor.Auth
    }
}