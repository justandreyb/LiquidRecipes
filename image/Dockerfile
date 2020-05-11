FROM gradle:6.4.0-jdk8

# Install node 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
	apt update && apt install -y nodejs

CMD ["gradle"]
