# Full Stack Development Project

This is a full-stack application built with Python (FastAPI), React, and PostgreSQL.

## Project Structure

```
.
├── backend/           # Python FastAPI backend
├── frontend/         # React frontend
├── docker/           # Docker configuration files
└── docs/            # Project documentation
```

## Prerequisites

- Python 3.9+
- Node.js 16+
- PostgreSQL 13+
- Docker and Docker Compose (optional)

## Getting Started

### Backend Setup

1. Create and activate virtual environment:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run migrations:
   ```bash
   alembic upgrade head
   ```

5. Start the development server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Setup (Optional)

1. Build and start containers:
   ```bash
   docker-compose up --build
   ```

## Development

### Code Style

- Backend: Black and Flake8
- Frontend: ESLint and Prettier

### Testing

- Backend tests:
  ```bash
  pytest
  ```

- Frontend tests:
  ```bash
  npm test
  ```

### Git Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

3. Push to remote:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 