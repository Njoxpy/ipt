# Requirements Document

## Introduction

This document outlines the functional and non-functional requirements for the Digital Logbook System for IPT.

## Functional Requirements

1. **User Authentication**
   - Users can register and log in.
   - Password recovery functionality.
2. **Logbook Entry**
   - Students can create, edit, and delete logbook entries.
   - Entries include date, description of activities, and time spent.
3. **Supervisor Feedback**
   - Supervisors can review student entries.
   - Supervisors can leave comments and approve entries.
4. **Reporting**
   - Generate basic reports on student progress and activities.

## Non-Functional Requirements

- **Performance:** The system should handle up to 500 concurrent users(bado!!!!!1).
- **Security:** Data should be encrypted in transit and at rest.
- **Usability:** The system should be user-friendly and accessible on desktop and mobile browsers.
- **Accessibilitybility:** The System should be user friendly to be accessible by all types of people inclduing people with disability.

## Use Cases

1. **User Registration**

   - **Actor:** Student
   - **Scenario:** A student registers for a new account.
   - **Steps:**
     1. Navigate to the registration page.
     2. Fill in the registration form with name(registration number), email, and password.
     3. Submit the form.
     4. Receive a confirmation email and activate the account.

    - On registration I will instead use sims for enabling user to login with SIMS account.Integrating with SIMS.

2. **Create Logbook Entry**
   - **Actor:** Student
   - **Scenario:** A student creates a new logbook entry.
   - **Steps:**
     1. Log in to the system.
     2. Navigate to the logbook entry page.
     3. Fill in the entry details (date, description, time spent).
     4. Submit the entry.
