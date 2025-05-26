// packages/prisma/types.ts
// Centralized Prisma types wrapper to fix Vite SSR CommonJS module issues
// This module re-exports all Prisma types using both default import and named imports

import pkg from '@prisma/client';

// Try to import enums directly as named imports as backup
export {
  RecipientRole,
  DocumentStatus,
  DocumentDistributionMethod,
  DocumentSigningOrder,
  TeamMemberRole,
  FieldType,
  ReadStatus,
  SendStatus,
  SigningStatus,
  TeamMemberInviteStatus,
  TemplateType,
  SubscriptionStatus,
  WebhookTriggerEvents,
  DocumentVisibility,
  DocumentSource,
  DocumentDataType,
  PrismaClient,
  Prisma
} from '@prisma/client';

// Extract all the commonly used types and enums from the default export (fallback)
const {
  // Document related enums
  DocumentDataType: DocumentDataTypeDefault,
  DocumentDistributionMethod: DocumentDistributionMethodDefault,
  DocumentSigningOrder: DocumentSigningOrderDefault,
  DocumentStatus: DocumentStatusDefault,
  DocumentVisibility: DocumentVisibilityDefault,
  DocumentSource: DocumentSourceDefault,
  
  // Field related enums
  FieldType: FieldTypeDefault,
  
  // Recipient related enums
  ReadStatus: ReadStatusDefault,
  RecipientRole: RecipientRoleDefault,
  
  // Status enums
  SendStatus: SendStatusDefault,
  SigningStatus: SigningStatusDefault,
  
  // Team related enums
  TeamMemberRole: TeamMemberRoleDefault,
  TeamMemberInviteStatus: TeamMemberInviteStatusDefault,
  
  // Template related enums
  TemplateType: TemplateTypeDefault,
  
  // Webhook related enums
  WebhookTriggerEvents: WebhookTriggerEventsDefault,
  
  // Subscription related enums
  SubscriptionStatus: SubscriptionStatusDefault,
  
  // Core Prisma exports
  PrismaClient: PrismaClientDefault,
  Prisma: PrismaDefault,
} = pkg;

// Re-export all types from Prisma Client for type-only imports
export type {
  Document,
  DocumentData,
  DocumentMeta,
  Field,
  Recipient,
  Signature,
  Team,
  TeamEmail,
  TeamEmailVerification,
  TeamGlobalSettings,
  TeamMember,
  TeamMemberInvite,
  Template,
  TemplateDirectLink,
  TemplateMeta,
  User,
  UserSecurityAuditLog,
  ApiToken,
  PasswordResetToken,
  Session,
  VerificationToken,
  Webhook,
  WebhookCall,
  Subscription,
  // Add any other types you need
} from '@prisma/client';

// Also provide a default export for the full package if needed
export default pkg;
