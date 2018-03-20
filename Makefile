
.PHONY: dev
dev:
	docker-compose up -d --build
	-docker exec -it website /bin/sh
	docker-compose down

.PHONY: serve
serve:
	npm run develop
