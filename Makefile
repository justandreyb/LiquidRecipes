.PHONY: build war image tasks
.ONESHELL:
SHELL = /bin/bash
.SHELLFLAGS = -e

PWD=$(shell pwd)
HELPER_IMAGE="local/gradle-node"

build: create ## Run gradle build inside container
	@docker run --rm -u gradle \
		-v gradle-cache:/home/gradle/.gradle \
		-v $(PWD):/home/gradle/project \
		-w /home/gradle/project \
		$(HELPER_IMAGE) gradle build

war: build ## Create war file
	@docker run --rm -u gradle \
		-v gradle-cache:/home/gradle/.gradle \
		-v $(PWD):/home/gradle/project \
		-w /home/gradle/project \
		$(HELPER_IMAGE) gradle war

create: ## create helper image
	@docker volume create --name gradle-cache
	@docker build -t $(HELPER_IMAGE) image

cleanup: ## delete cache-volume and local image
	@docker volume rm gradle-cache
	@docker rmi $(HELPER_IMAGE)

tasks: ## pass task into container
	@docker run --rm -u gradle \
		-v gradle-cache:/home/gradle/.gradle \
		-v $(PWD):/home/gradle/project \
		-w /home/gradle/project \
		$(HELPER_IMAGE) gradle tasks
