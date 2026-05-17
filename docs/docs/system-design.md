# System Design Document

## System Architecture

- **Description:** The system will follow a client-server architecture using the MERN stack.(depends still evaluating)
- **Components:**
  - Frontend: React.js
  - Backend: Node.js with Express.js
  - Database: MongoDB
  - Hosting: Dunia

## Database Design

- **ER Diagram:** [].
- **Schema Definitions:**
  - Users: { userID, name, email, password, role (student/supervisor) }
  - LogbookEntries: { entryID, userID, date, description, timeSpent }
  - Comments: { commentID, entryID, userID, comment, timestamp }

## UI/UX Design

- **Wireframes:** [ogin, dashboard, logbook entry, supervisor review]
- **User Interface Design Specifications:**
  - Use a responsive design for compatibility with desktop and mobile browsers.
  - Follow accessibility guidelines to ensure usability for all users.

## Technical Specifications

- **Frontend:** React.js for building the user interface.
- **Backend:** Node.js with Express.js for handling API requests and business logic.
- **Database:** MongoDB for storing user data, logbook entries, and comments.
- **Hosting:** [Your chosen hosting service] for deploying the application.
