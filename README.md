## Run it

```shell
# Install, or, if you hit errors, make sure you're up to date.
go get github.com/ethereumproject/homerun/...

cd $GOPATH/src/github.com/ethereumproject/homerun
go build -o homerun main.go && mv homerun $GOPATH/bin/

git clone https://github.com/ETCDEVTeam/sidekick-poc.git

# Replace all my personal hardcoded paths.
# You want to replace '/Users/ia/dev/sidekick/poc' with your current 'sidekick-poc' WD.
# I would type you up a nice sed example but I can't figure out backslashes on this damn japanese keyboard.

cd sidekick-poc
homerun -dir . -excludedirs=".git,sidekick.d"

```
