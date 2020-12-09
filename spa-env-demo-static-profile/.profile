ls -lR
cat nginx/conf/nginx.conf
sed -i "s|\"##ENV_CONFIG##\"|$ENVIRONMENT_CONFIG|" public/index.html