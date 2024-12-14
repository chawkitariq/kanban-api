# Kanban Api

API backend for the [Kanban Web](https://github.com/chawkitariq/kanban-web) Project. The API is built to integrate seamlessly with the **Kanban Web** app, enabling full project management functionality.

## Requirements

- [Docker](https://docs.docker.com/engine/install/): Install Docker and Docker Compose.

## Usage

### Developement


```bash
# start application
docker compose -f docker-compose.dev.yml up
```

```bash
# stop application
docker compose -f docker-compose.dev.yml down
```

### Production

```bash
# start application
docker compose up
```

```bash
# stop application
docker compose down
```