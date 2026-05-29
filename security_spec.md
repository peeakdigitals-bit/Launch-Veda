# Security Test-Driven Development Specification

This document defines the strict data invariants, security boundaries, and attack simulation vectors ("Dirty Dozen") for the LaunchVeda Firestore database setup.

## 1. Data Invariants

1. **Leads Shape Integrity**: A lead document stored in `/leads/{leadId}` must contain exactly seven fields (`name`, `phone`, `email`, `type`, `budget`, `message`, `createdAt`). No more, no less.
2. **Temporal Integrity**: `createdAt` must strictly be set using the standard server-side Firestore `FieldValue.serverTimestamp()` (`request.time`).
3. **Identifier Safety**: All document path IDs (like `leadId`) must be strictly formatted alpha-numeric strings up to 128 characters to protect against ID Poisoning and buffer injection.
4. **No Public Reads/Leaks**: Client applications cannot query or list entries within the `/leads` collection. Reads are strictly locked down to administrators.

---

## 2. The "Dirty Dozen" Threat Vectors / Test Payloads

These representing the 12 primary vector patterns we expect our rules architecture to securely block:

1. **The Poisoned ID Attacker**: Submitting a lead document with a malicious 1KB long ID string containing system-command injection characters.
   - *Expected Result*: `PERMISSION_DENIED`
2. **The Shadow Field Injector**: Attempting to set an unwhitelisted state or credential field on submit (e.g. `{ isApproved: true, name: "..." }`).
   - *Expected Result*: `PERMISSION_DENIED`
3. **The Empty Shape Submitter**: Trying to submit a document that leaves out one of the required values (e.g., missing `phone` field).
   - *Expected Result*: `PERMISSION_DENIED`
4. **The Client-Time Spoofing Attack**: Specifying an arbitrary historic or future date for the `createdAt` timestamp field instead of the true server temporal clock.
   - *Expected Result*: `PERMISSION_DENIED`
5. **The Massive String Payload**: Submitting a `name` or `message` that exceeds secure allocation limits (e.g., a 10MB string) to drive Resource Exhaustion.
   - *Expected Result*: `PERMISSION_DENIED`
6. **The Email Spoofing Attack**: Sending invalid, fake, or corrupted email formatting that bypasses simple client validation.
   - *Expected Result*: `PERMISSION_DENIED`
7. **The Phone Overflow Attack**: Entering a phone number containing letters or exceeding 25 characters.
   - *Expected Result*: `PERMISSION_DENIED`
8. **The Unauthorized Public Reader**: Trying to scan, list, or download the global contacts folder.
   - *Expected Result*: `PERMISSION_DENIED`
9. **The Lead Eraser**: A public user trying to delete lead feedback documents.
   - *Expected Result*: `PERMISSION_DENIED`
10. **The Malicious Modifier**: Trying to alter or overwrite an existing submittal record.
    - *Expected Result*: `PERMISSION_DENIED`
11. **The Choice Field Injection**: Setting an unsupported category in the `type` field (e.g., "HackerLab6000").
    - *Expected Result*: `PERMISSION_DENIED`
12. **The Anonymous Reader**: Attempting to pull details from `/leads/{leadId}` directly as an unauthenticated external actor.
    - *Expected Result*: `PERMISSION_DENIED`

---

## 3. Abstract Test Runner Blueprint

```typescript
// firestore.rules.test.ts (For verification)
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing';

// All Dirty Dozen scenarios fail due to strict validation triggers!
```
