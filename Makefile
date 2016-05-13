NAME = docker-ng
NODE_MODULES_DIR = node_modules
PORT_LIVERELOAD = 49152
PORT = 4200
NODE_BUILDER = iegik/docker-node:latest

ifdef USE_DOCKER
	DOCKER_NPM = docker run -it --rm \
        -v $(CURDIR):/usr/src/app \
        -w /usr/src/app \
        $(NODE_BUILDER)

	DOCKER_APP = docker run -d \
        -v $(CURDIR):/usr/src/app \
        -w /usr/src/app \
        -p $(PORT):4200 \
        -p $(PORT_LIVERELOAD):49152 \
        --name $(NAME) \
        $(NODE_BUILDER)

	DOCKER_RUN = docker exec -it \
		$(NAME)

endif

help:
	@echo "Usage:\n\n" \
		"init		- Initialize Angular2 application.\n" \
		"dep		- Install /update dependencies.\n" \
		"build		- Build project.\n" \
		"run:*		- Run anything.\n" \
		"ng:*		- Run Angular2 task.\n" \
		"clean		- Clean project.\n" \
		"\n"\
	"Enviroment variables:\n\n" \
		"USE_DOCKER = $(USE_DOCKER)\n" \
		"NAME = $(NAME)\n" \
		"NODE_MODULES_DIR = $(NODE_MODULES_DIR)\n" \
		"PORT_LIVERELOAD = $(PORT_LIVERELOAD)\n" \
		"PORT = $(PORT)\n" \
		"NODE_BUILDER = $(NODE_BUILDER)\n" \

.PHONY: dep build clean

angular-cli:
	@$(DOCKER_NPM) \
		npm install angular-cli --unsafe-perm

$(NODE_MODULES_DIR): package.json
	@$(DOCKER_NPM) \
		npm install --unsafe-perm

typings: typings.json
	@$(DOCKER_NPM) \
		node node_modules/typings/dist/bin.js install

dep: $(NODE_MODULES_DIR) typings

init: angular-cli
	@$(DOCKER_NPM) \
		node node_modules/angular-cli/bin/ng init

build: dep
	@$(DOCKER_APP) \
		node node_modules/angular-cli/bin/ng serve

run\:%:
	@$(DOCKER_RUN) \
		$(subst run:,,$@)

ng\:%:
	@$(DOCKER_RUN) \
		node node_modules/angular-cli/bin/ng $(subst ng:,,$@)

clean:
	@docker rm -f $(NAME)

clear:
	@rm -rf $(NODE_MODULES_DIR) tmp npm-debug.log

