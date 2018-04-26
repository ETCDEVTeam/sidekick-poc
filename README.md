## Run it

```shell
go get github.com/ethereumproject/homerun/...
cd $GOPATH/src/github.com/ethereumproject/homerun
go build -o homerun main.go && mv homerun $GOPATH/bin/

git clone https://github.com/ETCDEVTeam/sidekick-poc.git
cd sidekick-poc
homerun -dir . --excludedirs=".git,sidekick.d"

```
